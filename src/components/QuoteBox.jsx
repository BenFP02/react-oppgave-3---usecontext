import { useMood } from "../MoodContext";

function QuoteBox() {
  const { mood } = useMood();

  const moodQuotes = {
    happy: "It's a great day to learn React!",
    angry: "Don't talk to me until I've refactored!",
    sleepy: "Just five more minutes...",
  };

  return (
    <div className="quote-box">
      <p>{moodQuotes[mood] || "Hmm... how are you feeling?"}</p>
    </div>
  );
}

export default QuoteBox;
