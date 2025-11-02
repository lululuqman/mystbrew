## 🧪 Mystbrew

**Mix magical potions. Discover hidden recipes. Beware of chaos!** </br>
✨ Live Demo → https://mystbrew.vercel.app/

## 🌙 About the Project

**Mystbrew** is a magical brewing simulator where users mix potions to create mysterious elixirs.
Each combination produces unique names, icons, and effects — powered by **AI-generated text** using Google’s Gemini model.

Built with **FastAPI + React (Vite)**, Mystbrew brings together the logic of backend magic and the beauty of modern UI animation.
Whether you’re an alchemist or a curious soul, Mystbrew invites you to experiment, discover, and maybe… summon something unexpected. 🧙‍♀️

## ⚙️ Tech Stack

**Frontend:** React (Vite) </br>
**Backend:** FastAPI + Google Generative AI (Gemini) </br>

**Hosting:** </br>
Frontend → **Vercel** </br>
Backend → **Render**

## 🧱 Project Structure
```
mystbrew/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── components/
│           ├── CauldronAnimation.jsx
│           ├── CauldronAnimation.css
│           ├── PotionInfoModal.jsx
│           └── PotionInfoModal.css
│
└── README.md
```

## 🧰 Backend Setup (Render)

1. Go to Render.com
   → create a new **Web Service**
2. Connect your GitHub repository
3. Root Directory → /backend
4. Add Environment Variable:
  GOOGLE_API_KEY=your_google_api_key
5. Build Command:
  pip install -r requirements.txt
6. Start Command:
  uvicorn main:app --host 0.0.0.0 --port 8000

## Deploy 🎉

✅ requirements.txt
```
fastapi==0.115.2
uvicorn==0.30.6
google-generativeai==0.8.5
pydantic==2.9.2
python-dotenv==1.0.1
requests==2.32.3
```

## 🌐 Frontend Setup (Vercel)

1. Deploy the /frontend folder to **Vercel**
2. In **Project Settings → Root Directory**, set it to /frontend
3. Add Environment Variable:
  VITE_API_BASE=https://your-render-app.onrender.com
4. Rebuild → Deploy 🚀

## 🧩 Local Development

Backend
```
cd backend
uvicorn main:app --reload
```

Frontend
```
cd frontend
npm install
npm run dev
```

## 🔮 Features
 
• 🧫 Mix 2–3 potions to discover unique recipes </br>
• 🌈 Animated cauldron that changes color dynamically </br>
• 🧠 AI-generated potion name, icon & effects </br>
• 📜 Potion history with clickable info </br>
• 💬 Responsive modal showing potion summary & effects </br>
• 🪄 Works beautifully on both mobile and desktop </br>
