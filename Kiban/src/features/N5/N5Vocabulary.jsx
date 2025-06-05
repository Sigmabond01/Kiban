import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Youtube } from 'lucide-react';

// N5Vocabulary Component
const N5Vocabulary = () => {
  const [expandedSection, setExpandedSection] = useState(true);
  
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
            <h2 className="text-xl font-noto text-white">Part 1: Vocabulary</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-48 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(completedProblems / 25) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-white">{completedProblems} / 25</span>
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

export default N5Vocabulary;
