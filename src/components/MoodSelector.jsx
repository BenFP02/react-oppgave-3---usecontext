import { useMood } from "../MoodContext";

function MoodSelector() {
  const { mood, setMood } = useMood();
  const moods = ["happy", "angry", "sleepy"];

  return (
    <div className="mood-selector">
      <h2>Choose your mood:</h2>
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          className={m === mood ? "active" : ""}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;
