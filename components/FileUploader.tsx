
import React, { useRef, useState } from 'react';

interface FileUploaderProps {
  onUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndProcess(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndProcess(files[0]);
    }
  };

  const validateAndProcess = (file: File) => {
    if (file.name.endsWith('.docx')) {
      onUpload(file);
    } else {
      alert("Por favor sube un archivo con extensión .docx");
    }
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`
        relative group cursor-pointer border-2 border-dashed rounded-2xl p-12 transition-all duration-300
        ${isDragging 
          ? 'border-indigo-500 bg-indigo-50 scale-[1.02]' 
          : 'border-slate-200 bg-white hover:border-indigo-400 hover:bg-slate-50'
        }
      `}
    >
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        accept=".docx" 
        onChange={handleFileInputChange}
      />
      <div className="flex flex-col items-center">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300
          ${isDragging ? 'bg-indigo-600 text-white scale-110' : 'bg-indigo-50 text-indigo-600 group-hover:scale-110'}
        `}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-slate-800">Haz clic o arrastra tu archivo Word</p>
        <p className="text-sm text-slate-500 mt-2">Soporte exclusivo para archivos .docx</p>
      </div>
    </div>
  );
};

export default FileUploader;
