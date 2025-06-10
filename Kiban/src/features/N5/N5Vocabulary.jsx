import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Youtube } from 'lucide-react';

const N5Vocabulary = () => {
  const [expandedSection, setExpandedSection] = useState(false);
  
  const documentUrl = 'https://archive.org/details/MinnaNoNihongoIITrans/Minna%20no%20Nihongo%20I-Trans/mode/2up';
  
  const [problems, setProblems] = useState([
    { id: 1, name: 'Vocabulary 1', status: 'incomplete', youtubeUrl: 'https://youtu.be/wDpsF90DoeI?si=e9gAY1ja7_UTdBdQ' },
    { id: 2, name: 'Vocabulary 2', status: 'incomplete', youtubeUrl: 'https://youtu.be/Y13YOdclzMA?si=MjKa8-dfbJ5Ztcs0' },
    { id: 3, name: 'Vocabulary 3', status: 'incomplete', youtubeUrl: 'https://youtu.be/ngeRgzef5vs?si=tUEskOMhehucGV3O' },
    { id: 4, name: 'Vocabulary 4', status: 'incomplete', youtubeUrl: 'https://youtu.be/VdqddfTSNC0?si=tAiOL8GlsJoQQicZ' },
    { id: 5, name: 'Vocabulary 5', status: 'incomplete', youtubeUrl: 'https://youtu.be/1asNdTdCme8?si=v_idN93mK5JnbFn5' },
    { id: 6, name: 'Vocabulary 6', status: 'incomplete', youtubeUrl: 'https://youtu.be/79xmA0Qd6q4?si=mf8RZMrPqXtsKM92' },
    { id: 7, name: 'Vocabulary 7', status: 'incomplete', youtubeUrl: 'https://youtu.be/RlqS7KW2p8k?si=wlH5api7IEQDwdS8' },
    { id: 8, name: 'Vocabulary 8', status: 'incomplete', youtubeUrl: 'https://youtu.be/cfla_C4KJMg?si=wjXzVvpmiKCB29gs' },
    { id: 9, name: 'Vocabulary 9', status: 'incomplete', youtubeUrl: 'https://youtu.be/7hsqJiF2p_c?si=ytORrRSWLppjU76h' },
    { id: 10, name: 'Vocabulary 10', status: 'incomplete', youtubeUrl: 'https://youtu.be/xdGCZosnEII?si=loOywpXpewIS0kkB' },
    { id: 11, name: 'Vocabulary 11', status: 'incomplete', youtubeUrl: 'https://youtu.be/JdaoVZ57GbI?si=5ye6f9UfZVdGflQP' },
    { id: 12, name: 'Vocabulary 12', status: 'incomplete', youtubeUrl: 'https://youtu.be/Zx7OT3uLgfo?si=FYRXaGjqAzqh8-ur' },
    { id: 13, name: 'Vocabulary 13', status: 'incomplete', youtubeUrl: 'https://youtu.be/f1TfjQ3GYgA?si=Dg8YirMahQU8PRLD' },
    { id: 14, name: 'Vocabulary 14', status: 'incomplete', youtubeUrl: 'https://youtu.be/Nnbje4djYpg?si=PPgwavoWKOpRrxLP' },
    { id: 15, name: 'Vocabulary 15', status: 'incomplete', youtubeUrl: 'https://youtu.be/CzZJYEam1Oc?si=vlI-f2yDmfKvE-Sl' },
    { id: 16, name: 'Vocabulary 16', status: 'incomplete', youtubeUrl: 'https://youtu.be/jOgxIIqeTH4?si=uy9P6hQH0nffnIks' },
    { id: 17, name: 'Vocabulary 17', status: 'incomplete', youtubeUrl: 'https://youtu.be/FU4WCJupEQ0?si=ggFfaOhb3X7NbXPP' },
    { id: 18, name: 'Vocabulary 18', status: 'incomplete', youtubeUrl: 'https://youtu.be/eR4uzqLmr4I?si=LwyQKKjhztBDwjTE' },
    { id: 19, name: 'Vocabulary 19', status: 'incomplete', youtubeUrl: 'https://youtu.be/YbpUnQeKHAE?si=xVoMhsXBGfl7m_vK' },
    { id: 20, name: 'Vocabulary 20', status: 'incomplete', youtubeUrl: 'https://youtu.be/jYn7fAvXI4c?si=dFY1_QBDCClwEs_6' },
    { id: 21, name: 'Vocabulary 21', status: 'incomplete', youtubeUrl: 'https://youtu.be/SiUwpKKx-Yg?si=x9hjFh01LkDnwCyP' },
    { id: 22, name: 'Vocabulary 22', status: 'incomplete', youtubeUrl: 'https://youtu.be/aRIQL8h-og4?si=T1qKjiWuIYyB3n2w' },
    { id: 23, name: 'Vocabulary 23', status: 'incomplete', youtubeUrl: 'https://youtu.be/tmlqaZY3IPM?si=4by5jsK7_Swla2K4' },
    { id: 24, name: 'Vocabulary 24', status: 'incomplete', youtubeUrl: 'https://youtu.be/o0tlYEkJhg0?si=0xE840r2jqsCLq9B' },
    { id: 25, name: 'Vocabulary 25', status: 'incomplete', youtubeUrl: 'https://youtu.be/UbzpBQbKN7w?si=JLaNZmaVv1df91gj' }
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
          className="flex items-center justify-between w-full group hover:bg-gray-800/20 p-3 sm:p-4 rounded-lg transition-all duration-300"
        >
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
              {expandedSection ? (
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 transition-transform duration-300" />
              ) : (
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 transition-transform duration-300" />
              )}
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-foreground bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Part 1: Vocabulary
            </h2>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="w-24 sm:w-64 bg-gray-700/50 rounded-full h-2 sm:h-3 overflow-hidden border border-gray-600/50">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-700 ease-out shadow-lg" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-right">
              <span className="text-sm sm:text-lg font-bold text-foreground">{completedProblems}</span>
              <span className="text-muted-foreground text-sm sm:text-base"> / 25</span>
              <div className="text-xs text-muted-foreground hidden sm:block">
                {Math.round(progressPercentage)}% complete
              </div>
            </div>
          </div>
        </button>

        {expandedSection && (
          <div className="mt-6 sm:mt-8 animate-in slide-in-from-top-2 duration-300">
            {/* Desktop Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-700/50 text-sm font-semibold text-muted-foreground mb-6 bg-gray-800/20 rounded-t-lg">
              <div className="col-span-1">Status</div>
              <div className="col-span-7">Lesson</div>
              <div className="col-span-2 text-center">Document</div>
              <div className="col-span-2 text-center">Video</div>
            </div>

            <div className="space-y-2">
              {problems.map((problem, index) => (
                <div 
                  key={problem.id} 
                  className="border border-gray-700/30 rounded-lg hover:border-gray-600/50 hover:bg-gray-800/10 transition-all duration-200 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden sm:grid grid-cols-12 gap-4 py-4 px-6 items-center">
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

                  {/* Mobile Layout */}
                  <div className="sm:hidden p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleProblemStatus(problem.id)}
                          className="w-5 h-5 border-2 border-gray-600 rounded-md flex items-center justify-center hover:border-orange-500 transition-all duration-200"
                        >
                          {problem.status === 'complete' && (
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm"></div>
                          )}
                        </button>
                        <span className={`text-sm font-medium transition-all duration-200 ${
                          problem.status === 'complete' 
                            ? 'text-muted-foreground line-through' 
                            : 'text-foreground'
                        }`}>
                          Lesson {problem.id}: {problem.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={documentUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400 rounded-lg transition-all duration-200 text-blue-400 text-sm"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Document
                      </a>
                      <a 
                        href={problem.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400 rounded-lg transition-all duration-200 text-red-400 text-sm"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        Video
                      </a>
                    </div>
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

export default N5Vocabulary;