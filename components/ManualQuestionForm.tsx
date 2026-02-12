
import React, { useState } from 'react';
import { Question, Option } from '../types';

interface Props {
  onAdd: (q: Question) => void;
}

const ManualQuestionForm: React.FC<Props> = ({ onAdd }) => {
  const [questionText, setQuestionText] = useState('');
  const [hint, setHint] = useState('');
  const [explanation, setExplanation] = useState('');
  const [type, setType] = useState<'single' | 'multiple'>('single');
  const [options, setOptions] = useState<Option[]>([
    { id: Math.random().toString(36), text: '', isCorrect: true },
    { id: Math.random().toString(36), text: '', isCorrect: false }
  ]);

  const addOption = () => {
    setOptions([...options, { id: Math.random().toString(36), text: '', isCorrect: false }]);
  };

  const updateOption = (id: string, text: string, isCorrect: boolean) => {
    setOptions(options.map(o => {
      if (o.id === id) {
        if (type === 'single' && isCorrect) {
          // If setting one to correct in single type, unset others
          return { ...o, text, isCorrect };
        }
        return { ...o, text, isCorrect };
      }
      return type === 'single' && isCorrect ? { ...o, isCorrect: false } : o;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText || options.some(o => !o.text)) return;
    
    onAdd({
      id: Date.now().toString(),
      questionText,
      hint,
      explanation,
      type,
      options
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-4 sm:col-span-2">
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Texto de la Pregunta</label>
          <textarea 
            required
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none h-24"
            placeholder="¿Cuál es la diferencia entre...?"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700">Tipo de Respuesta</label>
          <select 
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          >
            <option value="single">Opción Única</option>
            <option value="multiple">Opción Múltiple</option>
          </select>
        </div>

        <div className="sm:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-bold text-slate-700">Opciones de Respuesta</label>
            <button type="button" onClick={addOption} className="text-xs font-bold text-indigo-600 hover:text-indigo-800">+ Añadir Opción</button>
          </div>
          {options.map((opt, idx) => (
            <div key={opt.id} className="flex gap-3 items-center bg-white p-3 rounded-xl border border-slate-200">
              <input 
                type={type === 'single' ? 'radio' : 'checkbox'} 
                checked={opt.isCorrect}
                onChange={(e) => updateOption(opt.id, opt.text, e.target.checked)}
                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <input 
                required
                value={opt.text}
                onChange={(e) => updateOption(opt.id, e.target.value, opt.isCorrect)}
                className="flex-1 text-sm outline-none"
                placeholder={`Opción ${idx + 1}`}
              />
              {options.length > 2 && (
                <button type="button" onClick={() => setOptions(options.filter(o => o.id !== opt.id))} className="text-rose-400 hover:text-rose-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-amber-600 uppercase">Pista para errores</label>
          <input 
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 outline-none"
            placeholder="Recuerda que..."
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-emerald-600 uppercase">Explicación para aciertos</label>
          <input 
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 outline-none"
            placeholder="Exacto, porque..."
          />
        </div>
      </div>

      <button 
        type="submit"
        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
      >
        Guardar Pregunta en el Banco
      </button>
    </form>
  );
};

export default ManualQuestionForm;
