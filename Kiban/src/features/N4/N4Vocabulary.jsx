import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Youtube } from 'lucide-react';

const N4Vocabulary = () => {
  const [expandedSection, setExpandedSection] = useState(true);
  
  const documentUrl = 'https://archive.org/details/MinnaNoNihongoIITrans/Minna%20No%20Nihongo%20II%20-Trans/mode/2up';
  
  const [problems, setProblems] = useState([
    { id: 1, name: 'Vocabulary 1', status: 'incomplete', youtubeUrl: 'https://youtu.be/1hTBL59rack?si=9A4Dn6b8U-1zL7yO' },
    { id: 2, name: 'Vocabulary 2', status: 'incomplete', youtubeUrl: 'https://youtu.be/9Ux_O4xq6yk?si=dR2cwKHTrP3zDwE7' },
    { id: 3, name: 'Vocabulary 3', status: 'incomplete', youtubeUrl: 'https://youtu.be/62dGe7T9emE?si=bAIkY-N5JvHGhotf' },
    { id: 4, name: 'Vocabulary 4', status: 'incomplete', youtubeUrl: 'https://youtu.be/pQXMFsFOA8M?si=3SvPAhMWETiKbCUM' },
    { id: 5, name: 'Vocabulary 5', status: 'incomplete', youtubeUrl: 'https://youtu.be/8BYKgP4VOk4?si=JvPvoXIGU5AtVlz-' },
    { id: 6, name: 'Vocabulary 6', status: 'incomplete', youtubeUrl: 'https://youtu.be/PY69BlGlOp4?si=vhIKSxg56tasKWDW' },
    { id: 7, name: 'Vocabulary 7', status: 'incomplete', youtubeUrl: 'https://youtu.be/DB4ANcw1Pc4?si=F7V6GAsnRxWRiRD7' },
    { id: 8, name: 'Vocabulary 8', status: 'incomplete', youtubeUrl: 'https://youtu.be/bYPcgA7DS6c?si=X2v7ISosACGpCK5F' },
    { id: 9, name: 'Vocabulary 9', status: 'incomplete', youtubeUrl: 'https://youtu.be/ddYTP9FQBKA?si=HcWr-qEBSwHvwUHY' },
    { id: 10, name: 'Vocabulary 10', status: 'incomplete', youtubeUrl: 'https://youtu.be/s7DoNo3dbrE?si=t3eJbRqH6zx1Hqhd' },
    { id: 11, name: 'Vocabulary 11', status: 'incomplete', youtubeUrl: 'https://youtu.be/aoXfuwwHIeE?si=eYzMG-yGZtHriYRG' },
    { id: 12, name: 'Vocabulary 12', status: 'incomplete', youtubeUrl: 'https://youtu.be/pQ7hwMrPA8U?si=G_DH3KgB08IGQLDR' },
    { id: 13, name: 'Vocabulary 13', status: 'incomplete', youtubeUrl: 'https://youtu.be/_lbatkTmzBg?si=0184mkPYkcjg8zM8' },
    { id: 14, name: 'Vocabulary 14', status: 'incomplete', youtubeUrl: 'https://youtu.be/L7TgnzRcbiw?si=XQ-kS2fSjV512Llp' },
    { id: 15, name: 'Vocabulary 15', status: 'incomplete', youtubeUrl: 'https://youtu.be/sdzXz5xGeMc?si=V92b34VD3KQFaAf1' },
    { id: 16, name: 'Vocabulary 16', status: 'incomplete', youtubeUrl: 'https://youtu.be/chKGz3CMmXs?si=DShR-fITnWyh7vd0' },
    { id: 17, name: 'Vocabulary 17', status: 'incomplete', youtubeUrl: 'https://youtu.be/ndhfIcWvrKs?si=81mD0FUzd6LECZO7' },
    { id: 18, name: 'Vocabulary 18', status: 'incomplete', youtubeUrl: 'https://youtu.be/-svkOTzBQBw?si=cBvx9r_xmjjVI4O6' },
    { id: 19, name: 'Vocabulary 19', status: 'incomplete', youtubeUrl: 'https://youtu.be/FCXTpv6B91k?si=axHx4GHDUbJ91dT1' },
    { id: 20, name: 'Vocabulary 20', status: 'incomplete', youtubeUrl: 'https://youtu.be/LE63ErHkaOY?si=MQesSGPxrS_yUOZF' },
    { id: 21, name: 'Vocabulary 21', status: 'incomplete', youtubeUrl: 'https://youtu.be/heRro8EYoAI?si=0DXe1WVWClzmWcei' },
    { id: 22, name: 'Vocabulary 22', status: 'incomplete', youtubeUrl: 'https://youtu.be/6bvunzqH898?si=oggbxeVwotskS1gg' },
    { id: 23, name: 'Vocabulary 23', status: 'incomplete', youtubeUrl: 'https://youtu.be/bjZwDp7_frI?si=H8BhOVN21sh1hayQ' },
    { id: 24, name: 'Vocabulary 24', status: 'incomplete', youtubeUrl: 'https://youtu.be/qYV1okKHOpI?si=NhYIZQ_n6qBPrwo-' },
    { id: 25, name: 'Vocabulary 25', status: 'incomplete', youtubeUrl: 'https://youtu.be/XCTFEUL-abo?si=_gSL54T6972l1APF' }
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
                  <a 
                    href={documentUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-110 transition-transform"
                  >
                    <FileText className="w-4 h-4 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  </a>
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

export default N4Vocabulary;