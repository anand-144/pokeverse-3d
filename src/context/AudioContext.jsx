import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const playSound = (path) => {
    if (!soundEnabled) return;

    const audio = new Audio(path);
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <AudioContext.Provider
      value={{
        soundEnabled,
        setSoundEnabled,
        playSound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);