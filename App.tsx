
import React, { useState } from 'react';
import Header from './components/Header';
import IncorrectAnswerNote from './components/IncorrectAnswerNote';
import QuizView from './components/QuizView';
import WordbookView from './components/WordbookView';
import { WordbookEntry } from './types';

type View = 'note' | 'quiz' | 'wordbook';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('quiz');
  const [wordbook, setWordbook] = useState<WordbookEntry[]>([]);

  const addWordToBook = (word: string) => {
    if (!word || word.length < 2) return; // Ignore short or empty words
    
    setWordbook((prev) => {
      const isAlreadyAdded = prev.some(entry => entry.word === word);
      if (isAlreadyAdded) {
        // Optional: show a toast notification "Already in wordbook"
        return prev;
      }
      const newEntry: WordbookEntry = { id: new Date().toISOString(), word };
      return [...prev, newEntry];
    });
  };

  const removeWordFromBook = (id: string) => {
    setWordbook((prev) => prev.filter(entry => entry.id !== id));
  };
  
  const renderView = () => {
    switch(currentView) {
      case 'note':
        return <IncorrectAnswerNote />;
      case 'quiz':
        return <QuizView onWordSave={addWordToBook} />;
      case 'wordbook':
        return <WordbookView wordbook={wordbook} onRemoveWord={removeWordFromBook} />;
      default:
        return <QuizView onWordSave={addWordToBook} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        wordbookCount={wordbook.length}
      />
      <main>
        {renderView()}
      </main>
      <footer className="text-center p-4 text-gray-400 text-xs">
          <p>Powered by Google Gemini API. Designed for educational purposes.</p>
      </footer>
    </div>
  );
};

export default App;
