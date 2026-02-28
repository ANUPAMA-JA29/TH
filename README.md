<p align="center">
  <img src="" alt="Project Banner" width="100%">
</p>

# ScamGuard AI 🎯

## Basic Details

### Team Name: TechDivas

### Team Members
- Member 1: N Fadeela - GEC Palakkad
- Member 2: Anupama J A - GEC Palakkad

### Hosted Project Link
[Insert Link Here]

### Project Description
ScamGuard AI is a real-time fraud intelligence platform that identifies scam patterns in SMS and voice calls. It uses "Explainable AI" to not just flag threats, but to teach users about the psychological manipulation tactics (vishing/smishing) being used against them in real-time.

### The Problem statement
Digital fraud is skyrocketing, and scammers are using increasingly sophisticated social engineering. Most people don't recognize "Artificial Urgency" or "Authority Impersonation" until it's too late. Current filters are often "black boxes" that don't provide the user with the reasoning behind a warning.

### The Solution
We built a privacy-first, local-inference tool. By using the browser's built-in Web Speech and Audio APIs, we analyze text and audio for specific weighted keywords (Financial, Urgency, Threat, Reward) without sending private data to expensive third-party Cloud AI services. This ensures zero-cost, high-speed, and private analysis.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- **Languages used:** JavaScript (ES6+), HTML5, CSS3
- **Frameworks used:** Express.js (Node.js)
- **Libraries used:** Chart.js (Real-time Analytics), Multer (File Handling)
- **APIs used:** Web Speech API (Speech Recognition), Web Audio API (Audio Processing)
- **Tools used:** VS Code, Git

---

## Features

- **Turbo Audio Analysis:** Processes call recordings at 1.5x speed using a silent Web Audio bridge, saving users 40% of wait time without audible noise.
- **Explainable AI (XAI) Panel:** Categorizes scams into "Tactics" (e.g., Fear Induction, Financial Pressure) to improve user digital literacy.
- **Live Mic Detection:** Real-time "listening" mode for immediate analysis of ongoing phone conversations or live speech.
- **Risk Trend Dashboard:** A visual timeline tracking the history of scans to help users identify if they are being targeted by a persistent campaign.
- **Instant Report Generator:** Creates a downloadable text-based incident report for use as evidence with banks or law enforcement.

---

## Implementation

### For Software:

#### Installation
```bash
# Clone the repository
git clone [your-repo-link]

# Install dependencies
npm install
