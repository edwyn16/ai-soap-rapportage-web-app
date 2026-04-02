# AI SOAP Rapportage App (Mobile)

## Overview
This project is a mobile application prototype built as part of the Zorg Advies front-end assignment.

The goal is to design and implement a user-friendly interface for care professionals that integrates with AI-driven workflows.  
This app focuses on the **SOAP-reporting flow**, where a care professional reviews, adjusts, and approves AI-generated reports.

---

## 🎯 Objective
To create an intuitive mobile experience that:
- Reduces administrative workload
- Supports fast, mobile-first usage
- Enables clear interaction with AI-generated content
- Provides a structured approval flow for professional validation

---

## 📱 Core Features

### 1. Client Overview
- View client details
- Access recent reports
- Navigate into report details

### 2. Report Detail View
- Overview of report information
- Quick actions
- Structured SOAP sections

### 3. AI Output View
- AI-generated SOAP report
- Confidence indicators
- Reasoning transparency
- Version history
- Input source reference

### 4. Approval Flow (Key Feature)
- Dedicated approval screen
- Editable SOAP sections
- Feedback input for corrections
- Actions:
  - Save as draft
  - Reject
  - Approve & save

👉 This reflects a real-world validation step where care professionals remain in control over AI output.

---

## 🧠 AI Integration (Simulated)
The app uses mock data to simulate backend AI functionality.

The expected backend capabilities:
- Speech-to-text input
- SOAP report generation
- Confidence scoring
- Clinical reasoning output
- Version tracking

---

## 🏗️ Architecture

### Component Structure
- Modular and reusable components
- Clear separation between:
  - Reporting
  - AI Output
  - Approval

### Routing
- Dynamic routing using Expo Router
- Structured navigation:

### State Management
- Local component state (React hooks)
- Prepared for future backend integration

---

## 🛠️ Tech Stack

- React Native (Expo)
- TypeScript
- Expo Router
- Component-based architecture
- Ionicons (UI icons)

---

## 🚀 Running the Project

```bash
npm install
npx expo start