
import React from 'react';
import { Question } from '../types';

interface ResultViewProps {
  score: number;
  total: number;
  missedQuestions: Question[];
  onRestart: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ score, total, missedQuestions, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  let title = "¡Buen Intento!";
  let emoji = "👏";
  let color = "text-indigo-600";
  
  if (percentage >= 90) {
    title = "¡Perfecto!";
    emoji = "🏆";
    color = "text-emerald-600";
  } else if (percentage >= 60) {
    title = "¡Muy bien!";
    emoji = "⭐";
    color = "text-amber-600";
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
      <div className="text-center py-12 px-6 bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="text-6xl mb-6">{emoji}</div>
        <h2 className={`text-4xl font-black mb-2 ${color}`}>{title}</h2>
        <p className="text-slate-500 text-lg mb-8">Has completado la evaluación con éxito.</p>
        
        <div className="flex justify-center items-end gap-1 mb-10">
          <span className="text-7xl font-black text-slate-900">{score}</span>
          <span className="text-2xl font-bold text-slate-300 mb-2">/ {total}</span>
        </div>

        <div className="w-full h-4 bg-slate-100 rounded-full mb-10 overflow-hidden max-w-md mx-auto">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${percentage >= 60 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-slate-50 p-6 rounded-2xl">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Porcentaje</p>
            <p className="text-2xl font-black text-slate-800">{percentage}%</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Estatus</p>
            <p className="text-2xl font-black text-slate-800">{percentage >= 60 ? 'Aprobado' : 'Repasar'}</p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="mt-12 w-full max-w-md py-5 bg-indigo-600 text-white rounded-2xl text-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
        >
          Volver al Inicio
        </button>
      </div>

      {missedQuestions.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Preguntas a Repasar</h3>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid gap-4">
            {missedQuestions.map((q, idx) => (
              <div key={q.id || idx} className="bg-white p-6 rounded-2xl border-l-4 border-l-rose-500 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4">{q.questionText}</h4>
                
                <div className="space-y-3 mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Respuesta Correcta:</p>
                  {q.options.filter(o => o.isCorrect).map(o => (
                    <div key={o.id} className="bg-emerald-50 text-emerald-700 p-3 rounded-xl border border-emerald-100 text-sm font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      {o.text}
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Explicación:</p>
                  <p className="text-sm text-slate-700 leading-relaxed italic">{q.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultView;
