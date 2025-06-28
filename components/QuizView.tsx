
import React, { useState, useEffect, useCallback } from 'react';
import { generateQuizQuestion } from '../services/geminiService';
import { QuizQuestion, QuizOptionKey } from '../types';
import Loader from './Loader';

interface QuizViewProps {
    onWordSave: (word: string) => void;
}

const Word: React.FC<{ children: string, onWordSave: (word: string) => void }> = ({ children, onWordSave }) => {
    return (
        <span 
            onClick={() => onWordSave(children.replace(/[^a-zA-Z]/g, '').toLowerCase())}
            className="cursor-pointer hover:bg-yellow-200 transition-colors rounded"
        >
            {children}
        </span>
    );
}

const QuizView: React.FC<QuizViewProps> = ({ onWordSave }) => {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<QuizOptionKey | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const fetchQuestion = useCallback(async () => {
    setLoading(true);
    setError(null);
    setQuestion(null);
    setSelectedAnswer(null);
    setIsAnswered(false);
    try {
      const q = await generateQuizQuestion();
      setQuestion(q);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerSelect = (option: QuizOptionKey) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
  };

  const getOptionClasses = (option: QuizOptionKey) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-gray-100';
    }
    const isCorrect = question?.answer === option;
    const isSelected = selectedAnswer === option;

    if (isCorrect) {
      return 'bg-green-100 border-green-500 text-green-800';
    }
    if (isSelected && !isCorrect) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-white opacity-70';
  };
  
  const renderTextWithSaveableWords = (text: string) => {
      return text.split(/(\s+|____)/).map((part, index) => {
          if (part.match(/^[a-zA-Z]+$/)) {
              return <Word key={index} onWordSave={onWordSave}>{part}</Word>;
          }
          return part;
      });
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">AI 명사 어휘 트레이너</h2>
        <p className="text-gray-600 mb-6">AI가 생성한 토익 Part 5 명사 문제를 풀어보세요.</p>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[450px] flex flex-col">
          {loading && <div className="flex-grow flex items-center justify-center"><Loader message="AI가 문제를 생성 중입니다..." /></div>}
          {error && (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-8 text-red-600">
              <p className="font-semibold">오류 발생!</p>
              <p className="mb-4">{error}</p>
              <button onClick={fetchQuestion} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                다시 시도
              </button>
            </div>
          )}
          {question && !loading && (
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="mb-6">
                <p className="text-gray-500 font-medium mb-2">Question</p>
                <p className="text-xl font-serif text-gray-800 leading-relaxed">
                  {renderTextWithSaveableWords(question.question)}
                </p>
              </div>

              <div className="space-y-3">
                {(Object.keys(question.options) as QuizOptionKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-4 ${getOptionClasses(key)}`}
                  >
                    <span className="font-bold text-lg">{key}</span>
                    <span className="text-md">{question.options[key]}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-auto pt-6">
              {isAnswered && (
                <div className="bg-gray-50 p-4 rounded-lg animate-fade-in">
                  <h3 className="font-bold text-gray-800 mb-2">해설</h3>
                  <p className="text-gray-600">
                    {renderTextWithSaveableWords(question.explanation)}
                  </p>
                </div>
              )}

              {isAnswered && (
                <button
                  onClick={fetchQuestion}
                  className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  다음 문제
                </button>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;

// Add this to index.html's head style tag or a css file if you have one
// @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
// .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
