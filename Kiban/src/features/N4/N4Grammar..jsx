import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Play, FileText, Youtube } from 'lucide-react';

const N4Grammar = () => {
  const [expandedSection, setExpandedSection] = useState(true);
  const documentUrl = 'https://archive.org/details/MinnaNoNihongoIITrans/Minna%20No%20Nihongo%20II%20-Trans/mode/2up';

    const [problems, setProblems] = useState([
    { id: 1, name: 'Grammar 1', status: 'incomplete', youtubeUrl: 'https://youtu.be/Ly3Tn2MkHIQ?si=_mq5_z6AIWSwNjsf' },
    { id: 2, name: 'Grammar 2', status: 'incomplete', youtubeUrl: 'https://youtu.be/Y6XkLTEbmR8?si=fU-MT52qGBY3kCG2' },
    { id: 3, name: 'Grammar 3', status: 'incomplete', youtubeUrl: 'https://youtu.be/pOrBePf-3pM?si=z8YwBalaOtMkXpUN' },
    { id: 4, name: 'Grammar 4', status: 'incomplete', youtubeUrl: 'https://youtu.be/iIVraKWfdE4?si=hK3QAfl2HJoVvRjI' },
    { id: 5, name: 'Grammar 5', status: 'incomplete', youtubeUrl: 'https://youtu.be/vY32ZM1gMpw?si=kMEREqy4DXs5DhRG' },
    { id: 6, name: 'Grammar 6', status: 'incomplete', youtubeUrl: 'https://youtu.be/L7UK0QZTK9A?si=T7PZ1vjU2_UYR0zM' },
    { id: 7, name: 'Grammar 7', status: 'incomplete', youtubeUrl: 'https://youtu.be/uUSw9a44k-g?si=ekxWMxGiRPm_76TF' },
    { id: 8, name: 'Grammar 8', status: 'incomplete', youtubeUrl: 'https://youtu.be/K2sbYid6xAU?si=eQgfRezRz9Ac2OYh' },
    { id: 9, name: 'Grammar 9', status: 'incomplete', youtubeUrl: 'https://youtu.be/Jw4eVCeMBHY?si=oybKd_dAIo8bHKof' },
    { id: 10, name: 'Grammar 10', status: 'incomplete', youtubeUrl: 'https://youtu.be/vRmU4O76wC0?si=wjSscvNuszjjyHVG'},
    { id: 11, name: 'Grammar 11', status: 'incomplete', youtubeUrl: 'https://youtu.be/G1Rx8AAgp0E?si=AMVD1QRrle9ZRJmL'},
    { id: 12, name: 'Grammar 12', status: 'incomplete', youtubeUrl: 'https://youtu.be/8-NTxX55axw?si=W3eEBM4GScdlCmEK' },
    { id: 13, name: 'Grammar 13', status: 'incomplete', youtubeUrl: 'https://youtu.be/g0GN5ZeVoh8?si=oeQQSw3-1sv70_Rz' },
    { id: 14, name: 'Grammar 14', status: 'incomplete', youtubeUrl: 'https://youtu.be/nypF3YqcVlk?si=dCAHru4nGXXcSIy1' },
    { id: 15, name: 'Grammar 15', status: 'incomplete', youtubeUrl: 'https://youtu.be/0jV6UI7aHfI?si=ScSRMTZhXENSQ3H0' },
    { id: 16, name: 'Grammar 16', status: 'incomplete', youtubeUrl: 'https://youtu.be/YipAd3VGLo0?si=YzWTGhR0QleoHOo7' },
    { id: 17, name: 'Grammar 17', status: 'incomplete', youtubeUrl: 'https://youtu.be/L1_bvjIwK-s?si=aw8_efwNlbYE-rBx' },
    { id: 18, name: 'Grammar 18', status: 'incomplete', youtubeUrl: 'https://youtu.be/RDpQyimXcFU?si=c1-tRRz_hTshnDbn' },
    { id: 19, name: 'Grammar 19', status: 'incomplete', youtubeUrl: 'https://youtu.be/AP8lcXvV6yQ?si=TnNxy8yxB99LLlY3' },
    { id: 20, name: 'Grammar 20', status: 'incomplete', youtubeUrl: 'https://youtu.be/nfcF4W63vBE?si=kSFaXvQ1MRgjXvDm' },
    { id: 21, name: 'Grammar 21', status: 'incomplete', youtubeUrl: 'https://youtu.be/UqcFJe7WWj0?si=emdykRc_atRBOyFa' },
    { id: 22, name: 'Grammar 22', status: 'incomplete', youtubeUrl: 'https://youtu.be/LKgfJbtNMqs?si=CLYVVvNOBZDVPQnX' },
    { id: 23, name: 'Grammar 23', status: 'incomplete', youtubeUrl: 'https://youtu.be/bjZwDp7_frI?si=ZNpDlnBbZvzZMQZ2' },
    { id: 24, name: 'Grammar 24', status: 'incomplete', youtubeUrl: 'https://youtu.be/X2S3riEHLk4?si=uLTJTGraoANJY-ki' },
    { id: 25, name: 'Grammar 25', status: 'incomplete', youtubeUrl: 'https://youtu.be/P--C6hOmI9A?si=1k5qOgwQ5qCNdKBK' }
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

export default N4Grammar;