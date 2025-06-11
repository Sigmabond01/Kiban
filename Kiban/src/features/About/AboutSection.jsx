import { BookOpen, Target, Users, GraduationCap, Brain, Trophy, ArrowRight } from "lucide-react";
import BubbleChamberLogo from "../../components/Logo";

function AboutSection() {
  return (
    <div className="min-h-screen w-full bg-no-repeat bg-fixed bg-[url('/src/assets/background1.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>

      <div className="relative z-10">
        <header className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <nav className="ml-auto space-x-8">
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">Home</Link>
              <Link to="/About/N5" className="text-white hover:text-orange-400 transition-colors">JLPT N5</Link>
              <Link to="/About/N4" className="text-white hover:text-orange-400 transition-colors">JLPT N4</Link>
            </nav>
          </div>
        </header>

        <BubbleChamberLogo />

        <section className="px-6 py-16 font-noto">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                KIBAN isn't just a platform—<br />
                <h1 className="mb-10">
                <span className="text-orange-400">it's your foundation</span>
                </h1>
              </h1>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Kiban (基盤): Foundation. The solid ground beneath your Japanese journey. Transform your fascination into fluency, 
                your study sessions into breakthroughs. Whether your goal is acing the JLPT, understanding anime without subtitles, 
                or speaking with confidence—start here.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-400 text-lg font-semibold">
                <span>Strategic. Effective. Essential.</span>
              </div>
            </div>

            {/* Why KIBAN Section */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-20">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Trophy className="w-8 h-8 text-orange-400" />
                  Why KIBAN Exists
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Most Japanese learning apps are designed to keep you busy, not fluent. KIBAN is designed for results. 
                  We cut through the industry's bloat and focus on what moves the needle. Whether your goal is understanding 
                  anime or landing that Tokyo job—<span className="text-orange-400 font-semibold">we weaponize your study time.</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                {
                  icon: BookOpen,
                  title: "Zero to Fluent Roadmap",
                  desc: "No random lessons. Every path is designed to take you from zero to test-ready—fast.",
                  accent: "from-blue-400 to-blue-600"
                },
                {
                  icon: Target,
                  title: "Precision Targeting",
                  desc: "Each level cuts out the noise. Learn only what matters for YOUR JLPT tier.",
                  accent: "from-red-400 to-red-600"
                },
                {
                  icon: Brain,
                  title: "Retention First",
                  desc: "We don't teach for dopamine hits. We teach to make it stick.",
                  accent: "from-purple-400 to-purple-600"
                },
                {
                  icon: GraduationCap,
                  title: "Progress You Can Feel",
                  desc: "No more guessing if you're improving. You'll know. You'll see it.",
                  accent: "from-green-400 to-green-600"
                }
              ].map(({ icon: Icon, title, desc, accent }, idx) => (
                <Card key={idx} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-orange-400/30">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
                    <p className="text-slate-300 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* JLPT Levels Section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">Master Every JLPT Level</h2>
              <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
                From absolute beginner to native-level fluency. Each level builds systematically on the last.
              </p>
              
              <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
                {[
                  { level: "N5", desc: "Basic", color: "from-green-400 to-green-600", detail: "~800 words, basic grammar" },
                  { level: "N4", desc: "Elementary", color: "from-blue-400 to-blue-600", detail: "~1,500 words, practical Japanese" },
                  { level: "N3", desc: "Intermediate", color: "from-yellow-400 to-yellow-600", detail: "~3,750 words, daily situations" },
                  { level: "N2", desc: "Upper-Intermediate", color: "from-orange-400 to-orange-600", detail: "~6,000 words, complex topics" },
                  { level: "N1", desc: "Advanced", color: "from-red-400 to-red-600", detail: "~10,000 words, native-level" }
                ].map((item, index) => (
                  <Card key={item.level} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:scale-105 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-2xl">{item.level}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">{item.desc}</h3>
                      <p className="text-slate-300 text-sm mb-2">{item.detail}</p>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${(index + 1) * 20}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="text-left">
                    <h4 className="text-orange-400 font-bold text-lg mb-2">Before You Begin</h4>
                    <p className="text-white mb-4">
                      Master Hiragana and Katakana first. These are your foundation—without them, everything else crumbles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a target="_blank" href="https://freejapaneselessons.com/japanese-alphabet-hiragana/" className="flex-1">
                        <button className="w-full px-6 py-3 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                          Learn Hiragana
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </a>
                      <a target="_blank" href="https://freejapaneselessons.com/katakana/" className="flex-1">
                        <button className="w-full px-6 py-3 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                          Learn Katakana
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Japanese?</h3>
                <p className="text-white mb-6">
                  Stop wasting time with apps that don't work. Start building real fluency today.
                </p>
                <a href="/About/N5">
                  <button className="px-12 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 text-lg font-bold transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-2 mx-auto">
                    🚀 Start JLPT N5 Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

const Link = ({ to, children, className = "" }) => (
  <a href={to} className={className}>{children}</a>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

export default AboutSection;