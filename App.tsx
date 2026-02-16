
import React, { useState, useEffect } from 'react';
import { Question, AppView, Quiz } from './types';
import FileUploader from './components/FileUploader';
import QuizEngine from './components/QuizEngine';
import ResultView from './components/ResultView';
import QuestionBankManager from './components/QuestionBankManager';
import { parseQuizFromText } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [bank, setBank] = useState<Question[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [missedQuestions, setMissedQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // Load initial data and localStorage on mount
  useEffect(() => {
    const loadData = async () => {
      const savedBank = localStorage.getItem('intelliQuiz_bank');
      if (savedBank && savedBank !== '[]') {
        try {
          setBank(JSON.parse(savedBank));
        } catch (e) {
          console.error("Error loading bank", e);
        }
      } else {
        // Carga inicial desde el archivo JSON si no hay nada guardado
        try {
          const response = await fetch('./data/initialBank.json');
          if (response.ok) {
            const initialData = await response.json();
            setBank(initialData);
          }
        } catch (e) {
          console.error("No se pudo cargar el banco inicial predefinido", e);
        }
      }
    };
    loadData();
  }, []);

  // Save bank to localStorage whenever it changes
  useEffect(() => {
    if (bank.length > 0) {
      localStorage.setItem('intelliQuiz_bank', JSON.stringify(bank));
    }
  }, [bank]);

  const handleFileUpload = async (file: File) => {
    setView(AppView.LOADING);
    setError(null);
    try {
      // @ts-ignore
      const mammoth = window.mammoth;
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      
      const parsedQuiz = await parseQuizFromText(result.value);
      
      // Merge unique questions into bank
      const newQuestions = parsedQuiz.questions.filter(
        nq => !bank.some(bq => bq.questionText === nq.questionText)
      );
      
      const updatedBank = [...bank, ...newQuestions];
      setBank(updatedBank);
      
      // Test inmediato con las preguntas del archivo, desordenadas
      const shuffled = [...parsedQuiz.questions].sort(() => 0.5 - Math.random());
      setCurrentQuiz(shuffled);
      setMissedQuestions([]);
      setView(AppView.QUIZ);
    } catch (err) {
      setError("No se pudo procesar el documento. Intenta con otro formato.");
      setView(AppView.HOME);
    }
  };

  const startQuizFromBank = () => {
    if (bank.length === 0) return;
    // Se utiliza TODO el banco de preguntas y se desordena
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    setCurrentQuiz(shuffled);
    setMissedQuestions([]);
    setView(AppView.QUIZ);
  };

  const handleQuizFinish = (finalScore: number, missed: Question[]) => {
    setScore(finalScore);
    setMissedQuestions(missed);
    setView(AppView.RESULTS);
  };

  const addQuestionToBank = (q: Question) => {
    setBank([...bank, q]);
  };

  const importToBank = (questions: Question[]) => {
    const newQuestions = questions.filter(
      nq => !bank.some(bq => bq.questionText === nq.questionText)
    );
    setBank(prev => [...prev, ...newQuestions]);
  };

  const deleteFromBank = (id: string) => {
    setBank(bank.filter(q => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setView(AppView.HOME)}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-100 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="font-bold text-slate-900 hidden sm:block tracking-tight">IntelliBank</h1>
          </div>

          <nav className="flex items-center gap-2">
            <button 
              onClick={() => setView(AppView.HOME)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === AppView.HOME ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setView(AppView.BANK)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === AppView.BANK ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Banco ({bank.length})
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        {view === AppView.HOME && (
          <div className="space-y-12 py-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Practica con Inteligencia Artificial.</h2>
              <p className="text-lg text-slate-600">Entrena con el banco de 83 preguntas precargadas o sube tus propios documentos Word para generar nuevos desafíos.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg></span>
                  Añadir desde Word
                </h3>
                <FileUploader onUpload={handleFileUpload} />
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></span>
                    Banco Local
                  </h3>
                  <p className="text-slate-500 mb-6">Tu banco actual contiene <strong>{bank.length}</strong> preguntas. El test usará todas las preguntas en orden aleatorio.</p>
                </div>
                <button 
                  onClick={startQuizFromBank}
                  disabled={bank.length === 0}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all disabled:bg-slate-200 disabled:text-slate-400 shadow-lg shadow-slate-200"
                >
                  Iniciar Test Completo ({bank.length} preguntas)
                </button>
              </div>
            </div>
            {error && <p className="text-rose-500 text-center font-bold bg-rose-50 p-4 rounded-xl border border-rose-100">{error}</p>}
          </div>
        )}

        {view === AppView.LOADING && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-6 font-bold text-slate-700">Gemini está procesando tus preguntas...</p>
          </div>
        )}

        {view === AppView.QUIZ && (
          <QuizEngine quiz={{title: "Evaluación Activa", questions: currentQuiz}} onFinish={handleQuizFinish} />
        )}

        {view === AppView.RESULTS && (
          <ResultView 
            score={score} 
            total={currentQuiz.length} 
            missedQuestions={missedQuestions}
            onRestart={() => setView(AppView.HOME)} 
          />
        )}

        {view === AppView.BANK && (
          <QuestionBankManager 
            bank={bank} 
            onAdd={addQuestionToBank} 
            onImport={importToBank}
            onDelete={deleteFromBank} 
            onClear={() => setBank([])}
          />
        )}
      </main>
    </div>
  );
};

export default App;
