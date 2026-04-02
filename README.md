# AI SOAP Rapportage App (Mobile)

## 📱 Overview
This project is a mobile application prototype developed as part of the Zorg Advies front-end assignment.

The application focuses on the **SOAP-reporting workflow**, where a care professional reviews, adjusts, and approves AI-generated reports. The goal is to create an intuitive, mobile-first experience that integrates seamlessly with an AI-driven backend.

---

## 🎯 Assignment Scope
This project fulfills the following assignment requirements:

- Native mobile application (React Native - Expo)
- Simulated backend using mock data
- Focus on one AI-driven workflow: **SOAP Rapportage**
- Clear approval flow for care professionals
- User-centered design for non-technical healthcare users

---

## 🔄 Chosen Flow: SOAP Rapportage
The implemented flow simulates the following real-world process:

1. Care professional records or inputs information
2. AI generates a structured SOAP report
3. Professional reviews the AI output
4. Adjustments are made if necessary
5. Report is approved, rejected, or saved as draft

---

## 🧭 User Journey

The app follows a structured navigation flow:

- **Client Overview**
  - View client information
  - Access recent reports

- **Report Detail**
  - View report metadata
  - Access SOAP sections
  - Navigate to AI output

- **AI Output View**
  - Review AI-generated SOAP report
  - View confidence levels
  - Understand reasoning behind output
  - Check version history and input sources

- **Approval Screen (Key Feature)**
  - Edit SOAP sections
  - Provide feedback
  - Choose action:
    - Save as draft
    - Reject
    - Approve & save

---

## ✨ Core Features

- Mobile-first UX tailored for fast-paced healthcare environments
- Structured SOAP report visualization
- Transparent AI output with:
  - Confidence indicators
  - Reasoning insights
  - Version history
- Clear approval workflow ensuring human validation
- Modular and reusable component structure

---

## 🧠 AI Integration (Simulated)

This project uses **mock data** to simulate backend functionality.

Expected backend capabilities include:
- Speech-to-text processing
- AI-generated SOAP reports
- Confidence scoring
- Clinical reasoning output
- Version tracking

Mock data is structured to reflect realistic backend responses and is stored locally within the project.

---

## 🏗️ Architecture

### Component Structure
The application is built using a modular architecture:

- Reusable UI components
- Separation of concerns:
  - Reporting
  - AI Output
  - Approval flow

### Key Components

- **ReportSectionCard**
  - Displays individual SOAP sections in a structured and collapsible format
  - Reused across report detail and approval flows
  - Designed for quick scanning by care professionals

- **SoapOutputSectionCard**
  - Presents AI-generated output clearly separated per SOAP category
  - Supports readability and fast validation of AI suggestions

- **ApprovalFeedbackCard**
  - Captures user feedback during the approval process
  - Ensures the professional remains actively involved in validation

- **OutputActionsCard**
  - Centralizes decision-making actions (approve, reject, edit)
  - Designed to be reusable across future AI-driven features

- **ReportBottomActionBar**
  - Fixed action bar optimized for mobile interaction
  - Ensures key actions remain accessible at all times

### State Management
- Local state using React hooks (`useState`, `useMemo`)
- Prepared for future integration with API/state libraries

### Routing
- Implemented using **Expo Router**
- Dynamic routing based on:
  - `clientId`
  - `reportId`

---

## 📁 Folder Structure (Simplified)
src/
├── app/ # Screens & routing (Expo Router)
├── components/
│ ├── reporting/
│ ├── ai-output/
│ ├── approval/
├── data/ # Mock data (reports, clients, AI output)
├── types/ # TypeScript types


---

## 🎨 Design Decisions

- Designed for **non-technical healthcare professionals**
- Focus on:
  - Speed
  - Clarity
  - Minimal cognitive load
- Large touch targets for mobile usability
- Clear hierarchy between AI output and human actions
- Approval step emphasized as a **critical control moment**

---

## 📈 Scalability

This front-end is designed to scale with the backend:

- Mock data can be replaced with real API endpoints
- Component-based architecture supports feature expansion
- Ready for:
  - Real-time updates
  - Authentication
  - Multi-client environments
  - Additional AI modules (e.g. care plans, wound analysis)

---

## 🛠️ Tech Stack

- React Native (Expo)
- TypeScript
- Expo Router
- Component-based architecture
- Ionicons (UI icons)

---

## 🚀 Running the Project

### Requirements
- Node.js (v18+ recommended)
- npm or yarn
- Expo CLI (installed via `npx`)

### Installation

```bash
npm install

### Start the App
npx expo start
Then:
-- Press i for IOS simulator
-- Or scan QR code using Expo Go on a mobile device

### Known Limitations
- No real backend connection (mock data only)
- No authentication implemented
- No persistant data storage
- AI functionality is simulated

### Submission Notes
This project demonstrates:
- String UI/UX thinking for healthcare professionals
- A complete SOAP-reporting approval flow
- Clear integration concept with an AI backend
- Scalable component architecture
The focus was on delivering a functional, inituitive, and realistic front-end prototype aligned with the Zorg Advies vision of reducing administrative workload in healthcare

---

Author
- Edwyn R. Jones