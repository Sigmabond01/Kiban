import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Play, FileText, Youtube } from 'lucide-react';

const N5Grammar = () => {
  const [expandedSection, setExpandedSection] = useState(false);
  const documentUrl = 'https://archive.org/details/MinnaNoNihongoIITrans/Minna%20no%20Nihongo%20I-Trans/mode/2up';

    const [problems, setProblems] = useState([
    { id: 1, name: 'Grammar 1', status: 'incomplete', youtubeUrl: 'https://youtu.be/gi2AeYO-g8E?si=neaQ0uQ8AgbbTr9F' },
    { id: 2, name: 'Grammar 2', status: 'incomplete', youtubeUrl: 'https://youtu.be/9EfbkBkF2ag?si=7oWe4GW3jlolmY9F' },
    { id: 3, name: 'Grammar 3', status: 'incomplete', youtubeUrl: 'https://youtu.be/CVFL1QHVQ0w?si=wZqWA6hAB2qayl4I' },
    { id: 4, name: 'Grammar 4', status: 'incomplete', youtubeUrl: 'https://youtu.be/BQkKnypu8f0?si=_ZXGMPYeVmHOUPI6' },
    { id: 5, name: 'Grammar 5', status: 'incomplete', youtubeUrl: 'https://youtu.be/QPOrt1BQm-g?si=hBX0SftiqhX12MWj' },
    { id: 6, name: 'Grammar 6', status: 'incomplete', youtubeUrl: 'https://youtu.be/Zocvund8ypA?si=rPx-AU1do-8JOkQ2' },
    { id: 7, name: 'Grammar 7', status: 'incomplete', youtubeUrl: 'https://youtu.be/O47kv14SxDk?si=mDarR2XN240w2cFW' },
    { id: 8, name: 'Grammar 8', status: 'incomplete', youtubeUrl: 'https://youtu.be/5HKxjeyBsR8?si=50scY4T6FY8h3HBu' },
    { id: 9, name: 'Grammar 9', status: 'incomplete', youtubeUrl: 'https://youtu.be/sGy7kONKYYY?si=G4Y1crM8eaJqvABy' },
    { id: 10, name: 'Grammar 10', status: 'incomplete', youtubeUrl: 'https://youtu.be/rAccyp4k7hs?si=PXGWLXj1-2r9v8vT' },
    { id: 11, name: 'Grammar 11', status: 'incomplete', youtubeUrl: 'https://youtu.be/eznaZWtbZCU?si=YDjAeR6MWlX3HiRO' },
    { id: 12, name: 'Grammar 12', status: 'incomplete', youtubeUrl: 'https://youtu.be/9Flpshd24iQ?si=IJP2_SF96INyr5WC' },
    { id: 13, name: 'Grammar 13', status: 'incomplete', youtubeUrl: 'https://youtu.be/xb2fX6N8DZE?si=lxaOvBjBHW3vC4et' },
    { id: 14, name: 'Grammar 14', status: 'incomplete', youtubeUrl: 'https://youtu.be/3Du66iGE494?si=9sd22_I3yqf91RBM' },
    { id: 15, name: 'Grammar 15', status: 'incomplete', youtubeUrl: 'https://youtu.be/V4WcIyAnXWc?si=XNMNGeOboOPkHQJT' },
    { id: 16, name: 'Grammar 16', status: 'incomplete', youtubeUrl: 'https://youtu.be/FQN_kcNrkFM?si=A6bJidAMV8fGnwOb' },
    { id: 17, name: 'Grammar 17', status: 'incomplete', youtubeUrl: 'https://youtu.be/1mtwbsaGcqc?si=z_vOPl5bKbGuBkzv' },
    { id: 18, name: 'Grammar 18', status: 'incomplete', youtubeUrl: 'https://youtu.be/d3VDTwG6XVQ?si=zB3UZt66sN96xvtD' },
    { id: 19, name: 'Grammar 19', status: 'incomplete', youtubeUrl: 'https://youtu.be/YKrfN6F2lSM?si=g5qYD0PwnQELHRHH' },
    { id: 20, name: 'Grammar 20', status: 'incomplete', youtubeUrl: 'https://youtu.be/ODMdedcDu-E?si=g-g6DyJx8RPTk7LD' },
    { id: 21, name: 'Grammar 21', status: 'incomplete', youtubeUrl: 'https://youtu.be/PvB2X-bif5w?si=cqPS4cfuikzWy7-0' },
    { id: 22, name: 'Grammar 22', status: 'incomplete', youtubeUrl: 'https://youtu.be/TDGQeL5P-Jo?si=Nn2VIubjIIMuvuhC' },
    { id: 23, name: 'Grammar 23', status: 'incomplete', youtubeUrl: 'https://youtu.be/n--9cPF0ris?si=6mcxVfMlLVzVMx3U' },
    { id: 24, name: 'Grammar 24', status: 'incomplete', youtubeUrl: 'https://youtu.be/h1L3TOXabMg?si=S5ZNINLxtCv9pYik' },
    { id: 25, name: 'Grammar 25', status: 'incomplete', youtubeUrl: 'https://youtu.be/C7vvYM9JVMQ?si=96gvav5FuYpO1VsH' }
  ]);

const toggleProblemStatus = (id) => {
    setProblems(prev => prev.map(problem => 
      problem.id === id 
        ? { ...problem, status: problem.status === 'complete' ? 'incomplete' : 'complete' }
        : problem
    ));
  };

  const completedProblems = problems.filter(p => p.status === 'complete').length;
  const progressPercentage = (completedProblems / 25) * 100;

  return (
    <div className="bg-transparent shadow-lg border border-gray-700/50 backdrop-blur-sm">
      <div>
        <button
          onClick={() => setExpandedSection(!expandedSection)}
          className="flex items-center justify-between w-full group hover:bg-gray-800/20 p-4 rounded-lg transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
              {expandedSection ? (
                <ChevronDown className="w-6 h-6 text-orange-400 transition-transform duration-300" />
              ) : (
                <ChevronRight className="w-6 h-6 text-orange-400 transition-transform duration-300" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-foreground bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Part 2: Grammar
            </h2>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-64 bg-gray-700/50 rounded-full h-3 overflow-hidden border border-gray-600/50">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-700 ease-out shadow-lg" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-foreground">{completedProblems}</span>
              <span className="text-muted-foreground"> / 25</span>
              <div className="text-xs text-muted-foreground">
                {Math.round(progressPercentage)}% complete
              </div>
            </div>
          </div>
        </button>

        {expandedSection && (
          <div className="mt-8 animate-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-700/50 text-sm font-semibold text-muted-foreground mb-6 bg-gray-800/20 rounded-t-lg">
              <div className="col-span-1">Status</div>
              <div className="col-span-7">Lesson</div>
              <div className="col-span-2 text-center">Document</div>
              <div className="col-span-2 text-center">Video</div>
            </div>

            <div className="space-y-2">
              {problems.map((problem, index) => (
                <div 
                  key={problem.id} 
                  className="grid grid-cols-12 gap-4 py-4 px-6 border border-gray-700/30 rounded-lg hover:border-gray-600/50 hover:bg-gray-800/10 transition-all duration-200 items-center group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="col-span-1">
                    <button
                      onClick={() => toggleProblemStatus(problem.id)}
                      className="w-6 h-6 border-2 border-gray-600 rounded-md flex items-center justify-center hover:border-orange-500 hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                      {problem.status === 'complete' && (
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm animate-in zoom-in-75 duration-200"></div>
                      )}
                    </button>
                  </div>
                  <div className="col-span-7">
                    <span className={`text-base font-medium transition-all duration-200 ${
                      problem.status === 'complete' 
                        ? 'text-muted-foreground line-through' 
                        : 'text-foreground group-hover:text-orange-400'
                    }`}>
                      Lesson {problem.id}: {problem.name}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <a 
                      href={documentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group/doc"
                    >
                      <FileText className="w-5 h-5 text-blue-400 group-hover/doc:text-blue-300 transition-colors" />
                    </a>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <a 
                      href={problem.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 group/youtube"
                    >
                      <Youtube className="w-5 h-5 text-red-400 group-hover/youtube:text-red-300 transition-colors" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default N5Grammar;