import { useMood } from "../MoodContext";
import "./MoodAvatar.css";

function MoodAvatar() {
  const { mood } = useMood();

  const moodEmoji = {
    happy: "😄",
    angry: "😠",
    sleepy: "😴",
  };

  return (
    <div className="mood-avatar">
      <span className={`emoji mood-${mood}`}>{moodEmoji[mood] || "❓"}</span>
    </div>
  );
}

export default MoodAvatar;
