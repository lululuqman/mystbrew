import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CauldronAnimation from "./components/CauldronAnimation";
import PotionInfoModal from "./components/PotionInfoModal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [selectedPotions, setSelectedPotions] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("home");
  const [comboName, setComboName] = useState("");
  const [comboIcon, setComboIcon] = useState("");
  const [history, setHistory] = useState([]);
  const [selectedPotionInfo, setSelectedPotionInfo] = useState(null);

  const potions = [
    { id: 1, name: "Fire Elixir", icon: "🔥", color: "#ff6b6b" },
    { id: 2, name: "Aqua Essence", icon: "💧", color: "#4dcfff" },
    { id: 3, name: "Earth Dust", icon: "🌿", color: "#7bffb0" },
    { id: 4, name: "Shadow Mist", icon: "🌑", color: "#5a3b91" },
    { id: 5, name: "Sunlight Drop", icon: "☀️", color: "#c4b7ff" },
    { id: 6, name: "Frost Crystal", icon: "❄️", color: "#9ff3ff" },
  ];

  const togglePotion = (potion) => {
    setResult("");
    setComboName("");
    if (selectedPotions.includes(potion.name)) {
      setSelectedPotions(selectedPotions.filter((p) => p !== potion.name));
    } else if (selectedPotions.length < 3) {
      setSelectedPotions([...selectedPotions, potion.name]);
    }
  };

  const randomPotionName = () => {
    const nameParts1 = ["Aether", "Lunar", "Ember", "Frost", "Soul", "Phoenix", "Mystic"];
    const nameParts2 = ["Draught", "Brew", "Bloom", "Essence", "Tonic", "Vial", "Elixir"];
    const icons = ["🧪", "✨", "💫", "🌙", "🔥", "❄️", "🍃", "🌸", "☁️"];
    const name =
      nameParts1[Math.floor(Math.random() * nameParts1.length)] +
      " " +
      nameParts2[Math.floor(Math.random() * nameParts2.length)];
    const icon = icons[Math.floor(Math.random() * icons.length)];
    return { name, icon };
  };

  const brewPotion = async () => {
    setLoading(true);
    setResult("");
    setComboName("");
    setComboIcon("");

    try {
      setTimeout(async () => {
        const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/brew`,
  { ingredients: selectedPotions.join(", ") }
);
        const text = response.data.result;
        const { name, icon } = randomPotionName();

        setComboName(name);
        setComboIcon(icon);
        setResult(text);
        setLoading(false);

        // ✅ Save potion info in history (Step 1 integrated)
        const potionData = {
          name,
          icon,
          description: response.data.result,
          ingredients: [...selectedPotions],
          color: selectedPotions[0]?.color || "#ffffff",
        };

        setHistory((prev) => [potionData, ...prev]);
      }, 1500);
    } catch (error) {
      console.error(error);
      setResult("⚠️ The cauldron fizzled... please try again.");
      setLoading(false);
    }
  };

  const reset = () => {
    setSelectedPotions([]);
    setResult("");
    setComboName("");
    setComboIcon("");
  };

  return (
    <div className="app">
      {screen === "home" && (
        <div className="home-screen">
          <h1 className="title">🧪 Mystbrew</h1>
          <p className="subtitle">
            Mix magical potions.  
            Discover hidden recipes.  
            Beware of chaos!
          </p>
          <button className="brew-btn" onClick={() => setScreen("brew")}>
            Start Brewing
          </button>
        </div>
      )}

      {screen === "brew" && (
        <div className="brew-screen">
          <div className="top-bar">
            <button className="home-btn" onClick={() => setScreen("home")}>
              🏠 Home
            </button>
            <h2 className="title">Choose 2–3 Potions</h2>
          </div>

          <div className="potion-grid">
            {potions.map((potion) => (
              <div
                key={potion.id}
                className={`potion-card ${
                  selectedPotions.includes(potion.name) ? "selected" : ""
                }`}
                onClick={() => togglePotion(potion)}
              >
                <div className="potion-icon">{potion.icon}</div>
                <p>{potion.name}</p>
              </div>
            ))}
          </div>

          {selectedPotions.length >= 2 && !loading && !result && (
            <button className="brew-btn" onClick={brewPotion}>
              ✨ Brew Potion
            </button>
          )}

          {loading && <CauldronAnimation colors={selectedPotions.map((p) => p.color)} />}

          {comboName && (
            <div className="combo-name">
              <h2>
                {comboIcon} {comboName}
              </h2>
            </div>
          )}

          {result && (
  <div className="result markdown-body">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {result}
    </ReactMarkdown>
  </div>
)}

          {result && (
            <button className="reset-btn" onClick={reset}>
              🔁 Mix Again
            </button>
          )}

          {/* 🧾 Potion History */}
          {history.length > 0 && (
            <div className="history">
              <h3>📜 Potion History</h3>
              <ul>
                {history.map((item, i) => (
                  <li
                    key={i}
                    className="clickable"
                    onClick={() => setSelectedPotionInfo(item)}
                  >
                    <span className="history-icon">{item.icon}</span>{" "}
                    <strong>{item.name}</strong>
                    <br />
                    <small>{item.ingredients.join(" + ")}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 🧴 Potion Info Modal */}
      {selectedPotionInfo && (
        <PotionInfoModal
          potion={selectedPotionInfo}
          onClose={() => setSelectedPotionInfo(null)}
        />
      )}
    </div>
  );
}

export default App;