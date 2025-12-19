import { createContext, useContext, useState, ReactNode } from "react";

interface QuizContextType {
  isQuizOpen: boolean;
  prefillResidence: string;
  openQuiz: (residence?: string) => void;
  closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [prefillResidence, setPrefillResidence] = useState("");

  const openQuiz = (residence?: string) => {
    setPrefillResidence(residence || "");
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setPrefillResidence("");
  };

  return (
    <QuizContext.Provider value={{ isQuizOpen, prefillResidence, openQuiz, closeQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
