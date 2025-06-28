
import React from 'react';
import { WordbookEntry } from '../types';
import { TrashIcon, BookOpenIcon } from './icons';

interface WordbookViewProps {
  wordbook: WordbookEntry[];
  onRemoveWord: (id: string) => void;
}

const WordbookView: React.FC<WordbookViewProps> = ({ wordbook, onRemoveWord }) => {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">나만의 단어장</h2>
        <p className="text-gray-600 mb-6">문제 풀이 중 저장한 단어 목록입니다.</p>
        <div className="bg-white rounded-xl shadow-md">
          {wordbook.length === 0 ? (
            <div className="text-center p-12 text-gray-500">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="font-semibold">단어장이 비어있습니다.</p>
              <p className="text-sm">문제 풀이 화면에서 단어를 클릭하여 단어장에 추가해보세요.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {wordbook.map((entry) => (
                <li key={entry.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <span className="text-lg text-gray-800 capitalize">{entry.word}</span>
                  <button
                    onClick={() => onRemoveWord(entry.id)}
                    className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition-colors"
                    aria-label={`Delete ${entry.word}`}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordbookView;
