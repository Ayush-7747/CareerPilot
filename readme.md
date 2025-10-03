Smart Career Advisor MVP
AI-powered career recommendation web app that suggests optimal career paths for users based on their skills, academic performance, and interests. Built with clean UI and a machine learning core using feature extraction and Random Forest, this MVP delivers personalized, explainable career guidance with minimal steps.

🚀 Features
User Input Module: Collects academic grades, skill sets, interest areas, and basic info interactively.

Data Preprocessing: Cleans, standardizes, and formats raw inputs for analysis.

Feature Extraction: Uses TF-IDF text vectorization or word embeddings on skills/interests for simple, effective modeling.

Recommendation Engine: Random Forest model classifies user profiles and predicts best-fit career options with confidence scores.

Output & Explanations: Top 2–3 personalized career recommendations, each with a brief, understandable reason.

Skill Gap Analysis: See which skills you need to qualify for your desired career.

Responsive UI: Card-based layouts, progress steps, loading animations, and results dashboard.

🖥️ Live Demo
Try a live preview:
Smart Career Advisor MVP

📑 Screenshots
Welcome Page	ML Performance Chart
(![Welcome Screenshot](ml_accuracy_chart.png)), vanilla JavaScript

Backend logic: Python (Random Forest, TF-IDF for ML logic — local simulation)

ML Libraries: scikit-learn (RandomForestClassifier, TfidfVectorizer)

Framework suggestion: Flask (simple backend/API) or Django (fully featured backend)

Data: Sample data seeded for MVP; no database required for initial version

🧩 System Architecture
text
graph LR
A[User Input] --> B[Data Preprocessing]
B --> C[Feature Extraction (TF-IDF)]
C --> D[Random Forest Model]
D --> E[Career Recommendations & Explanation]
📦 How to Run Locally
For Frontend-only Prototype
Download or clone the repo:

bash
git clone https://github.com/ayush-7747/smart-career-advisor-mvp.git
cd smart-career-advisor-mvp
Open index.html in your web browser.

For Full Python Backend (Optional Upgrade)
Install Python dependencies:

bash
pip install -r requirements.txt
Start backend server:

bash
python app.py
# Or for Flask: flask run
# Or for Django: python manage.py runserver
Open browser and go to http://localhost:5000 (or as output).

📋 MVP Workflow
User fills out interactive form (grades, skills, interests)

Data is cleaned, standardized, and vectorized (TF-IDF)

Random Forest predicts top career matches

Results displayed: Career recommendations + skill gap + explanations

🎯 Why This MVP?
Collects valuable user feedback quickly

Easy to extend: swap out TF-IDF for CNN/resume parsing later

Lays the foundation for integrating real-time market data

❗ Not (Yet) Included
Real-time job market integration

Advanced NLP (CNN-based) resume parsing

Continuous learning with user feedback

Visual analytics dashboard

Database for persistent storage

🤝 Contributing
Fork repo and clone your fork

Create a new branch:

bash
git checkout -b my-feature
Commit and push changes

Create a pull request

📄 License
MIT License © 2025 Your Name

Questions/Suggestions?
Open an issue or start a discussion.

Created to deliver simple, actionable career guidance. Help us improve!