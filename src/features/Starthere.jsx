import { ArrowBigDown, ArrowRight, BookOpen, Brain, GraduationCap, Star, Target, Trophy, Users } from "lucide-react";

export default function Starthere() {
    const steps = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Learn Kana",
            subtitle: "Foundation phase",
            description: "Master Hiragana and Katakana first. Without them, you can't read or progress in Japanese.",
            links: [
                {
                    label: "Learn Hiragana",
                    url: "https://freejapaneselessons.com/japanese-alphabet-hiragana/"
                },
                {
                    label: "Learn Katakana",
                    url: "https://freejapaneselessons.com/katakana/"
                },
            ],
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Set Clear Goals",
            subtitle: "Strategy Phase",
            description: "Define your 'why': anime comprehension, JLPT certification, business communication, or conversational fluency.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Immerse Early",
            subtitle: "Exposure Phase",
            description: "Surround yourself with Japanese audio, anime, podcasts, music. Start before you feel ready. Check out this immersion tool for more!",
            links: [
                {
                    label: "Check out KOTONAMI for immersion",
                    url: "https://kotonami.vercel.app"
                }
            ]
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Core Grammar and Vocabulary",
            subtitle: "Building Phase",
            description: "Focus on N5/N4 grammar patterns and the 1,000 most frequent words. This is your foundation for real communication.",
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Think in Japanese",
            subtitle: "Fluency Phase",
            description: "Break the translation habit. Train your brain to process and respond directly in Japanese.",
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Test & Refine",
            subtitle: "Mastery Phase",
            description: "Take JLPT practice tests, shadow native speakers, and continuously identify and strengthen weak points.",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-t font-noto from-orange-950 via-black to-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-30 left-96 w-72 h-72 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-96 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-96 right-20 w-96 h-96 bg-orange-500/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-40 right-96 w-72 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full border border-orange-400/30 mb-6">
                        <Star className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-300 text-sm font-medium">Your Path to Japanese Fluency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-500">
                        Master Japanese with KIBAN
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Follow this proven 6-step system used by thousands of successful Japanese learners
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {steps.map((step) => {
                        return (
                            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-orange-500 rounded-2xl p-6 transition-all duration-500 cursor-pointer">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                                        <p className="text-orange-300 text-sm">{step.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4 tracking-wide">{step.description}</p>
{step.links && (
  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
    {step.links.map((link, idx) => (
      <a 
        key={idx}
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1"
      >
        <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border border-orange-400/30 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-yellow-500/30 hover:border-orange-400/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium">
          {link.label}
          <ArrowRight className="w-4 h-4" />
        </button>
      </a>
    ))}
  </div>
)}
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
                            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                                Join thousands who've transformed their Japanese from zero to fluency using this proven system.
                                No more wasted time with ineffective websites
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="/start/N5">
                                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border border-orange-400/30 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-yellow-500/30 hover:border-orange-400/50 justify-center transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
                                        Click Here for JLPT N5
                                    </button>
                                </a>
                                <p className="text-sm text-gray-400">
                                    Consider giving it a star on Github! 
                                    <span className="text-orange-400 hover:text-orange-100"><a href="https://github.com/Sigmabond01/Kiban" target="_blank">  Click here </a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}