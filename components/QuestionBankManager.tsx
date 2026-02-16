
import React, { useState, useRef } from 'react';
import { Question, Option } from '../types';
import ManualQuestionForm from './ManualQuestionForm';

interface Props {
  bank: Question[];
  onAdd: (q: Question) => void;
  onImport: (questions: Question[]) => void;
  onDelete: (id: string) => void;
  onClear: () => void;
}

const QuestionBankManager: React.FC<Props> = ({ bank, onAdd, onImport, onDelete, onClear }) => {
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bank, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "banco_preguntas.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          onImport(json);
          alert(`Se importaron ${json.length} preguntas correctamente.`);
        } else {
          alert("El archivo no tiene el formato correcto (debe ser un array de preguntas).");
        }
      } catch (err) {
        alert("Error al leer el archivo JSON. Asegúrate de que es un archivo válido.");
      }
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Banco de Preguntas</h2>
          <p className="text-slate-500 text-sm">Gestiona tu base de conocimientos local.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".json" 
            className="hidden" 
          />
          <button 
            onClick={handleImportClick}
            className="px-4 py-2 bg-slate-100 text-indigo-600 border border-indigo-100 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Importar JSON
          </button>
          <button 
            onClick={downloadJSON}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Exportar JSON
          </button>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-100"
          >
            {isAdding ? 'Cerrar' : '+ Introducir Manualmente'}
          </button>
        </div>
      </div>

      {isAdding && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <ManualQuestionForm onAdd={(q) => { onAdd(q); setIsAdding(false); }} />
        </div>
      )}

      {bank.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <div className="text-4xl mb-4">📂</div>
          <p className="text-slate-400 font-medium">No hay preguntas en el banco local.</p>
          <p className="text-slate-400 text-sm mt-1">Sube un Word, importa un JSON o introduce una manualmente.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {bank.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded-md border border-indigo-100">
                    {q.type === 'single' ? 'Opción Única' : 'Multiopción'}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs text-slate-400 font-medium">ID: {q.id.slice(0,8)}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-3">{q.questionText}</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {q.options.map(opt => (
                    <div key={opt.id} className={`text-sm p-2 rounded-lg border ${opt.isCorrect ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                      {opt.text} {opt.isCorrect && '✓'}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-amber-600 uppercase mb-1">Pista (Error)</p>
                    <p className="text-xs text-slate-500 italic">{q.hint}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Explicación (Acierto)</p>
                    <p className="text-xs text-slate-500 italic">{q.explanation}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => onDelete(q.id)}
                className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                title="Eliminar pregunta"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          ))}
          
          <button 
            onClick={onClear}
            className="mt-6 text-sm text-rose-400 hover:text-rose-600 font-medium transition-colors text-center w-full"
          >
            Limpiar todo el banco de preguntas
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionBankManager;
