
import React from 'react';
import { DocumentTextIcon, PencilSquareIcon, BookOpenIcon } from './icons';

type View = 'note' | 'quiz' | 'wordbook';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  wordbookCount: number;
}

const NavButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  badgeCount?: number;
}> = ({ label, icon, isActive, onClick, badgeCount }) => {
  const baseClasses = "relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClasses = "bg-white text-blue-700 shadow-sm";
  const inactiveClasses = "text-gray-500 hover:bg-white/60 hover:text-blue-600";
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {icon}
      <span>{label}</span>
      {badgeCount !== undefined && badgeCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              {badgeCount}
          </span>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, wordbookCount }) => {
  return (
    <header className="bg-gray-100 p-4 sticky top-0 z-10 border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          TOEIC AI Trainer
        </h1>
        <nav className="bg-gray-200 p-1 rounded-lg flex space-x-1">
          <NavButton
            label="오답노트"
            icon={<DocumentTextIcon className="h-5 w-5" />}
            isActive={currentView === 'note'}
            onClick={() => setCurrentView('note')}
          />
          <NavButton
            label="AI 퀴즈"
            icon={<PencilSquareIcon className="h-5 w-5" />}
            isActive={currentView === 'quiz'}
            onClick={() => setCurrentView('quiz')}
          />
          <NavButton
            label="단어장"
            icon={<BookOpenIcon className="h-5 w-5" />}
            isActive={currentView === 'wordbook'}
            onClick={() => setCurrentView('wordbook')}
            badgeCount={wordbookCount}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
