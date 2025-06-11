# Kiban – Master Japanese the Smarter Way

Kiban (基盤) means "foundation" in Japanese – and that's exactly what this app is.

A sleek, focused platform to help learners master the Japanese language, especially geared toward JLPT preparation. Built using React and TailwindCSS, Kiban offers structured progress tracking, embedded resources, and a scalable curriculum layout.

## 🚀 Features

- 🎯 JLPT N5 & N4 Vocab + Grammar
- 📚 Organized by topic and difficulty
- 🎥 Embedded YouTube lessons for each concept
- ⚡ Clean, mobile-friendly UI using TailwindCSS

## 📁 Project Structure
src/
├── assets/ # Backgrounds, images
├── components/ # Reusable UI elements (Logo, Cards, etc.)
├── pages/
│ ├── LevelN5.jsx # N5 dashboard
│ ├── N5Vocabulary.jsx # N5 Vocab section
│ ├── N5Grammar.jsx # N5 Grammar section
│ ├── N4Vocabulary.jsx # N4 Vocab section
│ └── N4Grammar.jsx # N4 Grammar section
├── App.jsx # Routing and layout
└── main.jsx # Entry point


## 🛠 Tech Stack

- **Frontend**: React
- **Styling**: TailwindCSS
- **State Management**: `useState`, `localStorage` via custom hook
- **Icons**: Lucide React

## 🔧 Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/Sigmabond01/Kiban.git
cd Kiban

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

📦 Deployment
This project can be deployed to Vercel, Netlify, or any static host supporting React.

🧠 Goals
Help students clear JLPT N5/N4 with confidence.

Build a foundation (基盤) for real-world Japanese fluency.

Expandable to include higher levels (N3, N2) and more skills (Kanji writing, Listening practice).

✍️ Author
Sigmabon01 (on X)
Electrical Engineering Student | Full Stack Developer (2nd year UG)
GitHub

🔮 Roadmap
 Add login/auth (Firebase or Clerk)

 Cloud-sync user progress

 Add N3 curriculum

 Add kanji writing practice (Canvas or SVG)

 Analytics dashboard for user progress

 
