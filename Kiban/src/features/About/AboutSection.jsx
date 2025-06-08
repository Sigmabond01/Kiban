import { BookOpen, Target, Users, GraduationCap } from "lucide-react";
import BubbleChamberLogo from "../../components/Logo";


const JLPT_LEVELS = [
  { 
    level: "N5", 
    desc: "Basic", 
    color: "from-green-400 to-green-600",
    description: "The ability to understand some basic Japanese."
  },
  { 
    level: "N4", 
    desc: "Elementary", 
    color: "from-blue-400 to-blue-600",
    description: "The ability to understand basic Japanese."
  },
  { 
    level: "N3", 
    desc: "Intermediate", 
    color: "from-yellow-400 to-yellow-600",
    description: "The ability to understand Japanese used in everyday situations to a certain degree."
  },
  { 
    level: "N2", 
    desc: "Upper-Intermediate", 
    color: "from-orange-400 to-orange-600",
    description: "The ability to understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree."
  },
  { 
    level: "N1", 
    desc: "Advanced", 
    color: "from-red-400 to-red-600",
    description: "The ability to understand Japanese used in a variety of circumstances."
  }
];

const FEATURE_CARDS = [
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Complete coverage of all JLPT levels with free lessons"
  },
  {
    icon: Target,
    title: "Focused Practice",
    description: "Targeted exercises designed specifically for JLPT success"
  },
  {
    icon: Users,
    title: "Level-Specific Goals",
    description: "Every JLPT level has its own focused path. No overwhelm. Just the exact kanji, grammar, and vocab you need - nothing else."
  },
  {
    icon: GraduationCap,
    title: "Visual Progress Tracking",
    description: "Watch your skills grow with every session. KIBAN shows you exactly where you stand and how close you are to mastery."
  }
];

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/About/N5", label: "JLPT N5" },
  { to: "/About/N4", label: "JLPT N4" }
];

const LEARNING_RESOURCES = [
  {
    href: "https://freejapaneselessons.com/japanese-alphabet-hiragana/",
    label: "Learn Hiragana",
    gradientFrom: "orange-400/20",
    gradientTo: "purple-500/20"
  },
  {
    href: "https://freejapaneselessons.com/katakana/",
    label: "Learn Katakana",
    gradientFrom: "purple-500/20",
    gradientTo: "blue-500/20"
  },
  {
    href: "/About/N5",
    label: "Get started with Level N5",
    gradientFrom: "purple-500/20",
    gradientTo: "blue-500/20"
  }
];

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

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
    <CardContent className="p-6 text-center">
      {Icon && <Icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </CardContent>
  </Card>
);

const JLPTLevelCard = ({ level, desc, color, description }) => (
  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300">
    <CardContent className="p-6 text-center">
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
        <span className="text-white font-bold text-xl">{level}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{desc}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </CardContent>
  </Card>
);

const LearningResourceButton = ({ href, label, gradientFrom, gradientTo }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    <button className="group relative px-12 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 hover:shadow-2xl transition-all duration-500 font-light text-lg tracking-wide">
      <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
      <span className="relative z-10 flex items-center gap-3">
        <span>{label}</span>
        <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </button>
  </a>
);

const Header = () => (
  <header className="w-full px-6 py-4">
    <div className="flex justify-between items-center">
      <nav className="ml-auto space-x-8">
        {NAV_LINKS.map(({ to, label }) => (
          <Link 
            key={to}
            to={to} 
            className="text-white hover:text-orange-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

const AboutSection = () => {
  return (
    <div className="min-h-screen w-full bg-no-repeat bg-fixed bg-[url('/src/assets/background1.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
      
      <div className="relative z-10">
        <Header />
        <BubbleChamberLogo />

        <section className="px-6 py-16 font-noto">
          <div className="max-w-6xl mx-auto">
            {/* What is Kiban section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">What is Kiban?</h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Kiban (基盤) means "foundation" in Japanese. Our platform is designed to build your Japanese language skills 
                from the ground up, providing comprehensive preparation for the Japanese Language Proficiency Test (JLPT). 
                Whether you're a complete beginner or looking to advance your skills, Kiban offers structured learning paths 
                that adapt to your pace.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {FEATURE_CARDS.map((card) => (
                <FeatureCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-12">JLPT Levels</h2>
              
              <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {JLPT_LEVELS.map((levelData) => (
                  <JLPTLevelCard
                    key={levelData.level}
                    level={levelData.level}
                    desc={levelData.desc}
                    color={levelData.color}
                    description={levelData.description}
                  />
                ))}
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mt-8 max-w-2xl mx-auto">
                <p className="text-slate-200">
                  The JLPT consists of 5 levels, starting from N5 (basic) up to N1 (native-level). 
                  Each level builds upon the previous level, ensuring a solid foundation in Japanese language skills.
                </p>
                <div className="mt-4">
                  <b className="text-orange-400">NOTE</b>
                  <span className="text-slate-300">: Learn Hiragana and Katakana before getting started with the Courses</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="flex items-center justify-center gap-8 mt-16 pb-16">
          {LEARNING_RESOURCES.map((resource) => (
            <LearningResourceButton
              key={resource.label}
              href={resource.href}
              label={resource.label}
              gradientFrom={resource.gradientFrom}
              gradientTo={resource.gradientTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;