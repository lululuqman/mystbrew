import React from "react";
import "./PotionInfoModal.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PotionInfoModal({ potion, onClose }) {
  if (!potion) return null;

  const lines = potion.description?.split("\n").filter((l) => l.trim()) || [];
  const aura = lines[0] || "A mysterious potion with unknown properties.";
  const rawEffects = lines.slice(1, 3);

  // ✨ Extract concise effect keywords
  const extractKeywords = (text) => {
    const keywords = [];

    if (/emotion|mood|calm/i.test(text)) keywords.push("Emotion Regulation");
    if (/focus|clarity|insight|mind/i.test(text)) keywords.push("Mental Clarity");
    if (/creativity|imagination|idea/i.test(text)) keywords.push("Enhanced Creativity");
    if (/energy|vitality|stamina|power/i.test(text)) keywords.push("Energy Boost");
    if (/healing|restore|health|recovery/i.test(text)) keywords.push("Healing");
    if (/defense|protection|shield/i.test(text)) keywords.push("Protection");
    if (/spiritual|soul|aura|divine/i.test(text)) keywords.push("Spiritual Clarity");
    if (/strength|courage|bravery/i.test(text)) keywords.push("Inner Strength");
    if (/shadow|dark|mystery/i.test(text)) keywords.push("Mystic Influence");
    if (/ice|cold|frost/i.test(text)) keywords.push("Frost Resistance");
    if (/light|sun|radiance/i.test(text)) keywords.push("Radiant Energy");
    if (/fire|heat|flame/i.test(text)) keywords.push("Fiery Passion");
    if (/earth|nature|growth/i.test(text)) keywords.push("Grounded Focus");
    if (/water|flow|wave/i.test(text)) keywords.push("Fluid Intuition");

    return keywords;
  };

  const effects = [...new Set(rawEffects.flatMap(extractKeywords))];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-header"
          style={{ borderBottom: `3px solid ${potion.color}` }}
        >
          <h2 className="modal-title">
            {potion.icon} {potion.name}
          </h2>
        </div>

        <div className="modal-content">
          <div className="modal-color" style={{ backgroundColor: potion.color }} />

          {/* 🌌 Aura Description */}
          <div className="modal-summary markdown-body">
            <strong style={{ color: "white" }}>🌌 Aura Description:</strong>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {aura}
            </ReactMarkdown>
          </div>

          {effects.length > 0 && (
            <div className="modal-effects">
              <strong>✨ Main Effects:</strong>
              <div className="effect-tags">
                {effects.map((effect, i) => (
                  <span key={i} className="effect-tag">{effect}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-ingredients">
            <strong>🧩 Ingredients:</strong>
            <p>{potion.ingredients.join(" + ")}</p>
          </div>
        </div>

        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}