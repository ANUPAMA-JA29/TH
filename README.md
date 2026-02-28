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

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

**Tool Used:** Gemini 3 Flash / ChatGPT

**Purpose:**
- **Asynchronous Logic Debugging:** Specifically for handling the `onresult` events in the Web Speech API to ensure transcripts were captured before the analysis function triggered.
- **Media Optimization:** Assistance in configuring the `AudioContext` to allow for 1.5x speed "silent scanning" of uploaded audio files.
- **Data Visualization:** Generating the boilerplate configuration for **Chart.js** to map the risk score history onto a dynamic line graph.
- **CSS Glassmorphism:** Refined the backdrop-filter and transparency layers to ensure a high-tech, modern look for the dashboard.

**Key Prompts Used:**
- "How to route audio to a GainNode with 0 volume so SpeechRecognition can 'hear' it without playing sound through speakers?"
- "Create a weighted keyword matching engine in JavaScript that assigns different scores to categories like 'Urgency' and 'Financial'."
- "Debug a JavaScript error where the probability bar fails to update its background color based on the risk percentage."
- "Set up a Node.js Express route to serve an array of past scam scores for a Chart.js timeline."

**Percentage of AI-generated code:** Approximately 45%

**Human Contributions:**
- **Architecture Design:** Designed the "Edge-First" system where the main computation happens in the browser to protect user privacy.
- **Custom Logic Implementation:** Curated the specific "Scam Keyword" database and defined the heuristic weighting for different fraud types.
- **Integration & Testing:** Manually connected the Microphone, File Upload, and Text Input streams to a unified Result Panel.
- **UI/UX Decisions:** Finalized the user journey from "Message Input" to "Explainable AI Advice" to ensure the tool is educational for non-technical users.

---

## Team Contributions

- N Fadeela: Engineered the core heuristic engine for text analysis, developed the live microphone detection system, and authored the comprehensive technical documentation.
- Anupama J A: Designed the Glassmorphism UI, implemented the high-speed audio/video detection bridge, and led the initial project proposal and deployment.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Made with ❤️ at TinkerHub
