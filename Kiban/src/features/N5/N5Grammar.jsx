import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Play, FileText, Youtube } from 'lucide-react';

const N5Grammar = () => {
  const [expandedSection, setExpandedSection] = useState(true);
  
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
  const totalGrammarLessons = 25;
  const grammarProgressPercentage = totalGrammarLessons > 0 ? Math.round((completedProblems / totalGrammarLessons) * 100) : 0;

  return (
    <div className="bg-transparent rounded-lg">
      <div className="p-6">
        <button
          onClick={() => setExpandedSection(!expandedSection)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center space-x-3">
            {expandedSection ? (
              <ChevronDown className="w-5 h-5 text-white" />
            ) : (
              <ChevronRight className="w-5 h-5 text-white" />
            )}
            <h2 className="text-xl text-bold font-noto text-white">Part 2: Grammar</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-48 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${grammarProgressPercentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-white">{completedProblems} / {totalGrammarLessons}</span>
          </div>
        </button>

        {expandedSection && (
          <div className="mt-6">
            <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-700 text-sm font-medium font-noto text-gray-400 mb-4">
              <div className="col-span-1">Status</div>
              <div className="col-span-3">Lesson</div>
              <div className="col-span-1">Document</div>
              <div className="col-span-1">Youtube</div>
            </div>

            {problems.map((problem) => (
              <div key={problem.id} className="grid grid-cols-6 gap-4 py-4 border-b border-gray-700 last:border-b-0 items-center">
                <div className="col-span-1">
                  <button
                    onClick={() => toggleProblemStatus(problem.id)}
                    className="w-5 h-5 border-2 border-gray-600 rounded flex items-center justify-center hover:border-orange-500 transition-colors"
                  >
                    {problem.status === 'complete' && (
                      <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    )}
                  </button>
                </div>
                <div className="col-span-3">
                  <span className={`${problem.status === 'complete' ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {problem.name}
                  </span>
                </div>
                <div className="col-span-1">
                  <FileText className="w-4 h-4 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                </div>
                <div className="col-span-1">
                  <a 
                    href={problem.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-110 transition-transform"
                  >
                    <Youtube className="w-4 h-4 text-red-500 hover:text-red-400 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default N5Grammar;