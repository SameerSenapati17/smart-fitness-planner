### 🏋️ AI Workout Generator

An intelligent full-stack application that generates personalized workout plans using **Google's Gemini AI**, based on user details like age, gender, weight, height, fitness level, and goal.

## 🚀 Features

- ✅ Generate customized workout plans using AI
- ⚛️ React-based frontend with clean form inputs
- 🌐 Express.js backend with Gemini API integration
- 🔐 Secure API key management using environment variables
- 🔁 Handles loading states and error messages gracefully

---

## 📷 Preview

><img width="1434" height="862" alt="image" src="https://github.com/user-attachments/assets/4c750ea4-d746-4ce2-a2a6-18cc9c61545c" />

> <img width="1436" height="891" alt="image" src="https://github.com/user-attachments/assets/e9170b62-0851-4611-92eb-1739ade85f74" />


---

## 📁 Project Structure

```

ai-workout-generator/
│
├── backend/
│   ├── routes/
│   │   └── chatbot.js          # API call to Google Generative AI
│   ├── app.js                  # Express server setup
│   └── .env                    # Environment variables (API Key)
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Form.jsx
│   │   └── WorkoutPlan.jsx
│   └── index.html
│
└── README.md

```

---

## 🔧 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React.js               |
| Backend   | Node.js, Express.js    |
| AI Model  | Google Gemini API      |
| Styling   | Plain CSS / Tailwind   |
| Hosting   | Local / Vercel / Render|

---

## 🛠️ Getting Started

### ⚙️ Prerequisites

- Node.js & npm installed
- A [Google Generative AI](https://makersuite.google.com/app) API key
- Git (for version control)

---

### 🖥️ Backend Setup

1. Navigate to the `backend/` directory:
```

cd backend

```

2. Install dependencies:
```

npm install

```

3. Create a `.env` file in the `backend` folder with your Gemini API key:
```

GOOGLE\_API\_KEY=your\_google\_api\_key\_here

```

4. Run the server:
```

node app.js

```

The backend will run on:  
📡 `http://localhost:3000/api/chatbot`

---

### 🌐 Frontend Setup

1. Navigate to the `frontend/` directory:
```

cd frontend

```

2. Install dependencies:
```

npm install

```

3. Start the frontend (Vite or CRA):
```

npm run dev

```

The frontend will run on:  
🎨 `http://localhost:5173`

---

## 🧪 Example Usage

Fill out the form with details like:

- Name: `Sameer Senapati`
- Age: `25`
- Gender: `Male`
- Fitness Level: `Beginner`
- Goal: `Weight Loss`

Click **"Get Workout Plan"** and wait for the AI to generate a complete plan tailored to your input.

---

## 🔐 Environment Variables

| Variable Name     | Description                             |
|-------------------|-----------------------------------------|
| `GOOGLE_API_KEY`  | Your Google Gemini (Generative AI) key  |

---

## 🌍 Deployment Tips

You can deploy the project using:

- **Frontend**: [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/)
- **Backend**: [Render](https://render.com), [Railway](https://railway.app/), or [Heroku](https://heroku.com)

Ensure to add your environment variables (API key) securely in deployment settings.

## 👨‍💻 Contributing

Pull requests and forks are welcome!

```

git clone [https://github.com/yourusername/ai-workout-generator.git](https://github.com/yourusername/ai-workout-generator.git)

```

Make your changes, then submit a PR. 🙌

---

## 📜 License

MIT License

Copyright (c) 2025 Sameer
---

## 🙏 Acknowledgements

- [Google Generative AI](https://ai.google.dev/)
- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- All fitness enthusiasts and open-source contributors!

---

> Created with ❤️ by Sameer Senapati



