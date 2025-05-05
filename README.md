# Calibre-Cops 🔐

Calibre-Cops is a web application and Chrome extension designed to enhance personal cybersecurity by proactively detecting data breaches, identifying phishing threats, and ensuring safe browsing. Built to help everyday users stay protected from common online attacks, Calibre-Cops delivers real-time alerts and threat analysis without compromising usability.

## 🚨 Problem It Solves

Cyber threats like phishing, credential leaks, and malicious websites continue to grow, putting user data at risk. Calibre-Cops provides a proactive security layer to help users:

- Detect if their email or password has been compromised in known data breaches.
- Identify phishing emails and malicious URLs before they can cause harm.
- Browse safely with real-time website safety checks using a Chrome extension.

## 🔑 Features

### ✅ Breach Detection
- Scans user credentials against leaked databases from the dark web.
- Instantly alerts users if a breach is detected.
- Encourages prompt password changes to prevent misuse.

### 🛡️ Phishing and Malware Protection
- Analyzes suspicious emails and links for signs of phishing attacks.
- Flags potentially harmful URLs before users click them.
- Protects personal, financial, and login information.

### 🌐 Safe Browsing Extension
- Chrome extension scans the current browser tab's URL.
- Warns users if the site is known to host phishing or malware content.
- Works silently in the background to provide real-time protection.

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Browser Extension:** Chrome Extension APIs
- **Other:** REST APIs, third-party breach check APIs

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or accessible remotely
- Chrome browser (for extension installation)

### Installation

```bash
# Clone the repo
git clone https://github.com/akshatp17/CalibreCops.git
cd CalibreCops

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the app (Dev)

```bash
# Backend
cd server
nodemon index.js

# Frontend
cd client
npm run dev
```

