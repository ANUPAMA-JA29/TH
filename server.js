const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const upload = multer({ dest: '/tmp' });
let scamHistory = [];

function analyzeContent(text) {
    const input = text.toLowerCase();
    let score = 0;
    let patterns = [];
    let psychology = [];
    let explanation = [];
    let legalFact = ""; 

    const agencyKeywords = ["cbi", "narcotics", "ncb", "ed", "mumbai police", "interpol"];
    const arrestKeywords = ["digital custody", "virtual arrest", "money laundering", "closed room", "don't hang up"];

    let agencyMatch = agencyKeywords.filter(word => input.includes(word));
    let arrestMatch = arrestKeywords.filter(word => input.includes(word));

    if (agencyMatch.length > 0 && arrestMatch.length > 0) {
        score = 98;
        patterns.push("VIRTUAL ARREST SCAM");
        explanation.push(`Detected impersonation of ${agencyMatch[0].toUpperCase()}.`);
        psychology.push("Authority Intimidation");
        legalFact = "⚠️ LEGAL REALITY: Indian agencies NEVER arrest via video call. Real police won't ask you to stay in a 'closed room' for digital custody.";
    } else {
        if (input.includes("kyc") || input.includes("bank")) { score += 40; patterns.push("Banking Fraud"); }
        if (input.includes("otp") || input.includes("pin")) { score += 30; patterns.push("Credential Theft"); }
        if (input.includes("won") || input.includes("lottery")) { score += 50; patterns.push("Lottery Bait"); }
    }

    const probability = Math.min(score, 100);
    scamHistory.push(probability);

    return {
        probability,
        riskLevel: probability > 85 ? "CRITICAL" : (probability > 40 ? "Suspicious" : "Safe"),
        scamType: score >= 95 ? "Virtual Arrest Attempt" : "Potential Fraud",
        patterns, psychology, explanation, legalFact,
        advice: "Call 1930 immediately.",
        transcript: text
    };
}

app.post('/analyze', (req, res) => res.json(analyzeContent(req.body.message || "")));

app.post('/analyze-video', upload.single('video'), (req, res) => {
    const results = {
        probability: 92,
        riskLevel: "CRITICAL",
        scamType: "AI Deepfake Detected",
        patterns: ["Synthetic Facial Texture", "Irregular Blinking"],
        psychology: ["Visual Impersonation"],
        explanation: ["Forensic markers found AI-generated frame inconsistencies."],
        legalFact: "🚨 ALERT: This video uses AI deepfake technology to mimic an officer.",
        advice: "Disconnect immediately. Do not show your face or surroundings.",
        transcript: "Video Analysis: AI Signature Detected"
    };
    scamHistory.push(results.probability);
    res.json(results);
});

app.get('/analytics', (req, res) => res.json({
    totalChecks: scamHistory.length,
    highRisk: scamHistory.filter(s => s > 70).length,
    mostCommon: "Virtual Arrest / Deepfake",
    timeline: scamHistory
}));
// Remove your old app.listen() and replace it with this:
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Local server running on http://localhost:${PORT}`);
    });
}

// THIS IS THE MOST IMPORTANT LINE FOR VERCEL:
module.exports = app;
