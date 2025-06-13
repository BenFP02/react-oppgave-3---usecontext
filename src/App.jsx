import "./App.css";
import { MoodProvider, useMood } from "./MoodContext";
import { moodStyles } from "./MoodContext";
import MoodSelector from "./components/MoodSelector.jsx";
import MoodAvatar from "./components/MoodAvatar.jsx";
import QuoteBox from "./components/QuoteBox.jsx";

function InnerApp() {
  const { mood } = useMood();
  const styles = moodStyles[mood] || {};

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: styles.background,
        color: styles.color,
        transition: "all 0.5s ease",
      }}
    >
      <MoodSelector />
      <MoodAvatar />
      <QuoteBox />
    </div>
  );
}

function App() {
  return (
    <MoodProvider>
      <InnerApp />
    </MoodProvider>
  );
}

export default App;
