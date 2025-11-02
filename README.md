# 🧙‍♂️ Mystbrew

**Mystbrew** is a magical potion-mixing web app where users combine mystical ingredients to create unique brews — powered by AI!  
Built with **React (Vite)** + **FastAPI**, and deployed on **Vercel** + **Render**.

🌐 **Live App:** [https://mystbrew.vercel.app/](https://mystbrew.vercel.app/)

---

## ✨ Features

- 🧪 Mix potions and discover unique magical effects  
- ⚗️ Interactive cauldron animation when brewing  
- 📜 View potion details in a clean, summarized modal  
- 💡 AI-generated potion names and effects using **Google Gemini**  
- 📱 Fully responsive layout (works on both web & mobile)

---

## 🗂️ Project Structure
```
mystbrew/
│
├── backend/
│ ├── main.py # FastAPI backend
│ ├── requirements.txt # Dependencies for Render
│ └── .env # GEMINI_API_KEY (not in repo)
│
└── frontend/
├── src/
│ ├── App.jsx
│ ├── components/
│ │ ├── CauldronAnimation.jsx
│ │ ├── PotionCard.jsx
│ │ └── Modal.jsx
│ ├── assets/ # Contains cauldron and potion icons
│ └── App.css
├── .env # VITE_API_URL for API endpoint
├── package.json
└── vite.config.js
```

## ⚙️ Backend Setup (Render)

1. Go to [Render.com](https://render.com) → **Create New Web Service**
2. Connect your GitHub repo  
3. Set **Root Directory** → `backend`
4. Set **Build Command:**
```
pip install -r requirements.txt
```
5. Set **Start Command:**
```
uvicorn main:app --host 0.0.0.0 --port 10000
Add environment variable:
GEMINI_API_KEY=your_google_gemini_key
```
✅ backend/requirements.txt
```
fastapi==0.120.3
uvicorn==0.38.0
langchain==1.0.3
langchain-core==1.0.2
langsmith==0.4.38
langgraph==1.0.2
langgraph-prebuilt==1.0.2
langgraph-sdk==0.2.9
google-generativeai==0.8.5
python-dotenv==1.2.1
pydantic==2.12.3
requests==2.32.5
```

## 💻 Frontend Setup (Vercel)
```
Go to Vercel → New Project
Import the same repo
Set Root Directory → frontend

Add environment variable:
VITE_API_URL=https://<your-backend-name>.onrender.com

Build command:
arduino
Copy code
npm run build

Output directory:
nginx
Copy code
dist
Deploy 🚀
```

## 🧠 Development (Local)
1. Run **backend**
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
2. Run **frontend**
```
cd frontend
npm install
npm run dev
Then visit → http://localhost:5173
```

## 🪄 Example Potions
| Potion Name         | Description                                            | Effects                     |
| ------------------- | ------------------------------------------------------ | --------------------------- |
| 🌫️ **Shadow Mist** | A faintly glowing purple mist that enhances perception | Focus Boost, Calm Mind      |
| 🔥 **Solar Elixir** | A golden liquid radiating warmth and optimism          | Energy Surge, Motivation    |
| 🌊 **Lunar Dew**    | A shimmering blue brew that soothes and clarifies      | Emotional Balance, Serenity |


## 🧑‍💻 Tech Stack
| Category | Tech                                |
| -------- | ----------------------------------- |
| Frontend | React (Vite), Tailwind CSS          |
| Backend  | FastAPI, LangChain, Gemini API      |
| Hosting  | Vercel (frontend), Render (backend) |
