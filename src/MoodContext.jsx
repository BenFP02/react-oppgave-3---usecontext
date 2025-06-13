import { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("happy");
  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}

export const moodStyles = {
  happy: {
    background: "#FFF8E1",
    color: "#444",
  },
  angry: {
    background: "#FFCDD2",
    color: "#3e0000",
  },
  sleepy: {
    background: "#E0F7FA",
    color: "#004d40",
  },
};
