
import React, { useState, useEffect, useMemo } from 'react';
import { Quiz, Question, Option } from '../types';

interface QuizEngineProps {
  quiz: Quiz;
  onFinish: (score: number, missedQuestions: Question[]) => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ quiz, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState<Question[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];

  // Desordenar las opciones de la pregunta actual cada vez que cambia
  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const handleOptionToggle = (optionId: string) => {
    if (isAnswered) return;

    if (currentQuestion.type === 'single') {
      setSelectedOptions([optionId]);
    } else {
      setSelectedOptions(prev => 
        prev.includes(optionId) 
          ? prev.filter(id => id !== optionId) 
          : [...prev, optionId]
      );
    }
  };

  const validateAnswer = () => {
    if (selectedOptions.length === 0) return;

    const correctIds = currentQuestion.options
      .filter(o => o.isCorrect)
      .map(o => o.id);

    const isAllCorrect = 
      selectedOptions.length === correctIds.length && 
      selectedOptions.every(id => correctIds.includes(id));

    setIsCorrect(isAllCorrect);
    setIsAnswered(true);
    setShowFeedback(true);
    
    if (isAllCorrect) {
      setScore(s => s + 1);
    } else {
      setMissedQuestions(prev => [...prev, currentQuestion]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptions([]);
      setIsAnswered(false);
      setIsCorrect(null);
      setShowFeedback(false);
    } else {
      onFinish(score + (isCorrect ? 1 : 0), missedQuestions);
    }
  };

  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">Pregunta {currentIndex + 1} de {quiz.questions.length}</span>
          <span className="text-sm font-bold text-indigo-600">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-8">
            {currentQuestion.questionText}
          </h3>

          <div className="space-y-4">
            {shuffledOptions.map((option) => {
              const isSelected = selectedOptions.includes(option.id);
              const isCorrectOption = option.isCorrect;
              
              let variantClasses = "border-slate-200 hover:border-indigo-300 bg-white";
              if (isSelected) variantClasses = "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500 ring-offset-2";
              
              if (isAnswered) {
                if (isCorrectOption) variantClasses = "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500 ring-offset-2";
                else if (isSelected && !isCorrectOption) variantClasses = "border-rose-500 bg-rose-50 ring-2 ring-rose-500 ring-offset-2 opacity-80";
                else variantClasses = "border-slate-100 bg-white opacity-40";
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionToggle(option.id)}
                  disabled={isAnswered}
                  className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${variantClasses}`}
                >
                  <div className={`
                    w-6 h-6 rounded-lg flex items-center justify-center transition-colors
                    ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-300'}
                    ${isAnswered && isCorrectOption ? 'bg-emerald-600 text-white' : ''}
                    ${isAnswered && isSelected && !isCorrectOption ? 'bg-rose-600 text-white' : ''}
                  `}>
                    {currentQuestion.type === 'single' ? (
                       <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : ''}`} />
                    ) : (
                      isSelected && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <span className={`text-lg font-medium ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action / Feedback Section */}
        <div className="bg-slate-50 border-t border-slate-100 p-8">
          {!isAnswered ? (
            <button
              onClick={validateAnswer}
              disabled={selectedOptions.length === 0}
              className={`
                w-full py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg
                ${selectedOptions.length > 0 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }
              `}
            >
              Comprobar Respuesta
            </button>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`p-6 rounded-2xl flex gap-4 ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>
                <div className="flex-shrink-0">
                  {isCorrect ? (
                    <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{isCorrect ? '¡Excelente!' : 'Casi lo tienes'}</h4>
                  <p className="text-sm leading-relaxed opacity-90">
                    {isCorrect ? currentQuestion.explanation : currentQuestion.hint}
                  </p>
                </div>
              </div>
              
              <button
                onClick={nextQuestion}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-black transition-all shadow-xl shadow-slate-200"
              >
                {currentIndex + 1 < quiz.questions.length ? 'Siguiente Pregunta' : 'Ver Resultados'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;
