import { BookOpen, Target, Users, GraduationCap } from "lucide-react";
import BubbleChamberLogo from "../../components/Logo";


function AboutSection() {
  return (
    <div className="min-h-screen w-full bg-no-repeat bg-fixed bg-[url('/src/assets/background1.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">KIBAN isn't just a platform—it's your gateway to mastery.</h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Kiban (基盤): Foundation. The solid ground beneath your Japanese journey. Transform your fascination into fluency, your study sessions into breakthroughs.
                 Whether your goal is acing the JLPT, understanding your favorite anime, or speaking with confidence—start here.
                 Strategic. Effective. Essential.
              </p>
            </div>

            <div className="text-center mb-20 max-w-4xl mx-auto text-slate-200">
              <h2 className="text-3xl font-bold text-white mb-6">Why KIBAN Exists</h2>
              <p className="text-lg">
                Most Japanese learning apps are designed to keep you busy, not fluent. KIBAN is designed for results.
                We cut through the industry's bloat and focus on what moves the needle. 
                Whether your goal is understanding anime or landing that Tokyo job—we weaponize your study time
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-12">JLPT Levels</h2>
              <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {[
                  { level: "N5", desc: "Basic", color: "from-green-400 to-green-600" },
                  { level: "N4", desc: "Elementary", color: "from-blue-400 to-blue-600" },
                  { level: "N3", desc: "Intermediate", color: "from-yellow-400 to-yellow-600" },
                  { level: "N2", desc: "Upper-Intermediate", color: "from-orange-400 to-orange-600" },
                  { level: "N1", desc: "Advanced", color: "from-red-400 to-red-600" }
                ].map((item, index) => (
                  <Card key={item.level} className="bg-white/10 backdrop-blur-xl border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <span className="text-white font-bold text-xl">{item.level}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.desc}</h3>
                      <p className="text-slate-300 text-sm">
                        {index === 0 ? "The ability to understand some basic Japanese." :
                         index === 1 ? "The ability to understand basic Japanese." :
                         index === 2 ? "The ability to understand Japanese used in everyday situations to a certain degree." :
                         index === 3 ? "The ability to understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree." :
                         index === 4 ? "The ability to understand Japanese used in a variety of circumstances." : ""}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 mt-8 max-w-2xl mx-auto">
                <p className="text-slate-200">
                  The JLPT consists of 5 levels, starting from N5 (basic) up to N1 (native-level).
                  Each level builds upon the previous level, ensuring a solid foundation in Japanese language skills.
                </p>
                <div className="mt-4">
                  <b className="text-orange-400">NOTE</b>
                  <span className="text-white font-extrabold">: Learn Hiragana and Katakana before getting started with the Courses</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Zero to Fluent Roadmap",
                  desc: "No random lessons. Every path is designed to take you from zero to test-ready—fast."
                },
                {
                  icon: Target,
                  title: "Precision Targeting",
                  desc: "Each level cuts out the noise. Learn only what matters for YOUR JLPT tier."
                },
                {
                  icon: Users,
                  title: "Retention First",
                  desc: "We don’t teach for dopamine hits. We teach to make it stick."
                },
                {
                  icon: GraduationCap,
                  title: "Progress You Can Feel",
                  desc: "No more guessing if you’re improving. You’ll know. You’ll see it."
                }
              ].map(({ icon: Icon, title, desc }, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    {Icon && <Icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />}
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-slate-300">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <a target="_blank" href="https://freejapaneselessons.com/japanese-alphabet-hiragana/">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
                <button className="px-10 py-4 bottom-24 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 text-lg font-light transition-all duration-300">
                  📚 Learn Hiragana First
                </button>
                </div>
                </a>
                <a target="_blank" href="https://freejapaneselessons.com/katakana/">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
                    <button className="px-10 py-4 bg-white/10 bottom-24 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 text-lg font-light transition-all duration-300">
                      📚 Learn Katakana next
                    </button>
                </div>
                </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
              <a href="/About/N5">
                <button className="px-10 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 text-lg font-semibold transition-all duration-300 shadow-xl">
                  🚀 Start JLPT N5 Now
                </button>
              </a>
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
