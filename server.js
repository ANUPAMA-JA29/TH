const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serves your index.html

// Set up file uploads for audio
const upload = multer({ dest: 'uploads/' });

// --- DATABASE MOCK (Reset when server restarts) ---
let scamHistory = [];

// --- CORE LOGIC ENGINE ---
function analyzeContent(text) {
    const input = text.toLowerCase();
    let score = 0;
    let patterns = [];
    let psychology = [];
    let explanation = [];

    // 1. Keyword Check
    if (input.includes("kyc") || input.includes("bank") || input.includes("account")) {
        score += 40;
        patterns.push("Banking/Financial Impersonation");
        explanation.push("Detected keywords related to official banking services.");
    }
    if (input.includes("otp") || input.includes("password") || input.includes("pin")) {
        score += 30;
        patterns.push("Credential Harvesting");
        explanation.push("The content asks for sensitive security codes.");
    }
    if (input.includes("won") || input.includes("lottery") || input.includes("crore") || input.includes("gift")) {
        score += 50;
        patterns.push("Lottery/Prize Bait");
        explanation.push("Unrealistic financial rewards are a classic scam tactic.");
    }
    if (input.includes("arrest") || input.includes("police") || input.includes("legal") || input.includes("cbi")) {
        score += 45;
        patterns.push("Authority Threat");
        explanation.push("Uses fear of legal action to manipulate the user.");
    }
    if (input.includes("urgent") || input.includes("immediately") || input.includes("blocked")) {
        score += 20;
        psychology.push("Artificial Urgency");
        explanation.push("Creates pressure to prevent you from verifying the facts.");
    }

    const probability = Math.min(score, 100);
    scamHistory.push(probability); // Add to analytics

    return {
        probability: probability,
        riskLevel: probability > 70 ? "High Risk" : (probability > 40 ? "Suspicious" : "Safe"),
        scamType: probability > 70 ? "Fraudulent Attempt" : (probability > 40 ? "Potential Spam" : "Likely Safe"),
        patterns: patterns.length > 0 ? patterns : ["Normal Conversation"],
        psychology: psychology.length > 0 ? psychology : ["Direct Communication"],
        explanation: explanation.length > 0 ? explanation : ["No major red flags detected, but remain vigilant."],
        advice: probability > 40 ? "Do not share OTPs, click links, or pay fees. Block this number." : "Always verify identity before sharing information.",
        transcript: text
    };
}

// --- API ROUTES ---

// Route 1: Analyze Text
app.post('/analyze', (req, res) => {
    const text = req.body.message || "";
    const result = analyzeContent(text);
    res.json(result);
});

// Route 2: Analyze Audio (File Upload)
app.post('/analyze-audio', upload.single('audio'), (req, res) => {
    // In a real app, you'd use a speech-to-text API like Whisper here.
    // For the hackathon, we simulate a detected transcript from a call.
    const mockTranscript = "Hello, this is the bank. Your KYC has expired. Please share your OTP immediately to avoid account block.";
    const result = analyzeContent(mockTranscript);
    res.json(result);
});

// Route 3: Analytics for the Dashboard
app.get('/analytics', (req, res) => {
    res.json({
        totalChecks: scamHistory.length,
        highRisk: scamHistory.filter(s => s > 70).length,
        mostCommon: "KYC/Bank Scam",
        timeline: scamHistory
    });
});

// --- START THE SERVER ---
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`
    🚀 ScamGuard 2.0 Engine Started!
    ---------------------------------
    URL: http://localhost:${PORT}
    Logic: Heuristic Keyword Analysis
    Status: Active
    ---------------------------------
    `);
});