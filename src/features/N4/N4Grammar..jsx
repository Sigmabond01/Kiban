import React, { useEffect, useState } from 'react';
import { Search, ChevronDown, ChevronRight, Play, FileText, Youtube } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const API_URL = 'https://kiban-backend.onrender.com/api/lessons';

const initialLessons = [
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
]


const N4Grammar = () => {
  const [expandedSection, setExpandedSection] = useState(false);
  const documentUrl = 'https://archive.org/details/MinnaNoNihongoIITrans/Minna%20No%20Nihongo%20II%20-Trans/mode/2up';
  const [problems, setProblems] = useState([]);
  const { token, isAuthenticated } = useAuth();

  useEffect(() => {
    const loadProgress = async () => {
      const lessonsWithStatus = initialLessons.map(l => ({...l, status: 'incomplete '}));
      if(isAuthenticated && token) {
        try {
          const config = { headers: { 'x-auth-token': token } };
          const response = await axios.get(`${API_URL}/N4/Grammar`, config);
          const savedProgress = response.data;
          const mergedLessons = lessonsWithStatus.map(lesson => {
            const savedLesson = savedProgress.find(p => p.lessonId === lesson.id);
            return savedLesson ? { ...lesson, status: savedLesson.status }: lesson;
          });
          setProblems(mergedLessons);
        } catch (error) {
          console.error("Error fetching N4 grammar progress: ", error);
          setProblems(lessonsWithStatus);
        }
      } else {
        setProblems(lessonsWithStatus);
      }
    };
    loadProgress();
  }, [isAuthenticated, token]);

  const toggleProblemStatus = async (id) => {
    if(!isAuthenticated) {
      alert("please log in to save your progress!");
      return;
    }
    const lessonToUpdate = problems.find(p => p.id === id);
    if(!lessonToUpdate) return;
    const newStatus = lessonToUpdate.status === 'complete' ? 'incomplete' : 'complete';
    try {
      const config = { headers: { 'x-auth-token': token } };
      await axios.post(`${API_URL}/update`, {
        lessonId: id,
        level: 'N4',
        type: 'Grammar',
        status: newStatus
      }, config);
      setProblems(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    } catch (error) {
      console.error("Failed to update lesson status: ", error);
      alert("Could not save progress. Please try again!");
    }
  };

  const completedProblems = problems.filter(p => p.status === 'complete').length;
  const progressPercentage = problems.length > 0 ? (completedProblems / problems.length) * 100 : 0;

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
              Part 2: Grammar
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

export default N4Grammar;