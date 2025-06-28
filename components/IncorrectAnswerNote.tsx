
import React from 'react';
import { INCORRECT_ANSWER_NOTES } from '../constants';
import { IncorrectAnswer } from '../types';
import { SparklesIcon } from './icons';

const NoteCard: React.FC<{ note: IncorrectAnswer }> = ({ note }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="p-6">
      <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">{note.category}</div>
      <p className="block mt-2 text-lg leading-tight font-semibold text-gray-800">{note.problem}</p>
      <div className="mt-4 space-y-3 text-gray-600">
        <div className="flex items-start space-x-3">
            <span className="text-red-500 font-semibold w-24">오답:</span>
            <p className="flex-1">{note.myAnswer}</p>
        </div>
        <div className="flex items-start space-x-3">
            <span className="text-green-600 font-semibold w-24">정답:</span>
            <p className="flex-1">{note.correctAnswer}</p>
        </div>
        <p className="pt-2">{note.explanation}</p>
        <div className="!mt-5 flex items-center bg-blue-50 border border-blue-200 rounded-lg p-3">
          <SparklesIcon className="h-6 w-6 text-blue-500 mr-3 shrink-0" />
          <p className="text-blue-800 font-semibold">{note.keyPoint}</p>
        </div>
      </div>
    </div>
  </div>
);


const IncorrectAnswerNote: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">토익 오답노트</h2>
        <p className="text-gray-600 mb-6">이전에 틀린 문제 유형을 검토하고 핵심 포인트를 다시 확인해보세요.</p>
        <div className="space-y-6">
          {INCORRECT_ANSWER_NOTES.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncorrectAnswerNote;
