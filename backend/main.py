from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

# Allow React frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BrewRequest(BaseModel):
    ingredients: str

@app.post("/brew")
async def brew_potion(request: BrewRequest):
    prompt = f"You are a mystical alchemist. Combine {request.ingredients} into a magical potion. Describe its effects, color, and aura."
    model = genai.GenerativeModel("gemini-2.0-flash")
    response = model.generate_content(prompt)
    return {"result": response.text}