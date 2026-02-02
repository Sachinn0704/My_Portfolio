
import React, { useState } from 'react';
import { X, Sparkles, Loader2, FileText } from 'lucide-react';
import { generatePortfolioFromResume } from '../geminiService';

interface ResumeImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataGenerated: (data: any) => void;
}

const ResumeImportModal: React.FC<ResumeImportModalProps> = ({ isOpen, onClose, onDataGenerated }) => {
  const [resumeText, setResumeText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!resumeText.trim()) return;
    setIsGenerating(true);
    setError(null);
    try {
      const data = await generatePortfolioFromResume(resumeText);
      onDataGenerated(data);
      onClose();
    } catch (err) {
      console.error(err);
      setError("Failed to parse resume. Please ensure the text is clear and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <div className="bg-indigo-600 p-10 text-white relative">
          <button onClick={onClose} className="absolute top-8 right-8 p-3 hover:bg-white/20 rounded-full transition-all">
            <X size={24} />
          </button>
          <div className="flex items-center gap-4 mb-3">
            <Sparkles className="text-yellow-300 fill-yellow-300 animate-pulse" size={32} />
            <h2 className="text-3xl font-black tracking-tight">AI Resume Sync</h2>
          </div>
          <p className="text-indigo-100 text-lg font-medium opacity-90">Paste your raw resume text below to instantly update your portfolio details.</p>
        </div>
        
        <div className="p-10">
          <div className="relative mb-6">
             <FileText className="absolute top-4 left-4 text-slate-300" size={20} />
             <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Experience&#10;Python Developer @ TechCorp (2022 - Present)...&#10;&#10;Projects&#10;Blockchain Voting System using OpenCV..."
              className="w-full h-72 pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:outline-none focus:bg-white transition-all resize-none text-slate-700 font-medium"
              disabled={isGenerating}
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold mb-6 border border-red-100 flex items-center gap-2 animate-bounce">
              <X size={16} />
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleGenerate}
              disabled={!resumeText.trim() || isGenerating}
              className="flex-1 bg-indigo-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3 shadow-xl shadow-indigo-200"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Analyzing Sachin's Resume...
                </>
              ) : (
                <>
                  <Sparkles size={24} className="fill-white" />
                  Apply Magic Sync
                </>
              )}
            </button>
            <button
              onClick={onClose}
              disabled={isGenerating}
              className="px-8 py-5 border-2 border-slate-100 text-slate-500 font-bold rounded-[1.5rem] hover:bg-slate-50 transition-all"
            >
              Cancel
            </button>
          </div>
          <p className="mt-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            Powered by Gemini 3 Flash Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeImportModal;
