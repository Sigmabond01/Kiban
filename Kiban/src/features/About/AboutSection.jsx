import { BookOpen, Target, Users, GraduationCap } from "lucide-react";
import BubbleChamberLogo from "../../components/Logo";

function AboutSection() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="w-full px-6 py-4 bg-transparent relative top-0 left-0 z-50 text-white">
        <div className="flex justify-between items-center">
          <nav className="ml-auto space-x-8">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/About/N5" className="hover:underline">JLPT N5</Link>
              <Link to="/About/N4" className="hover:underline">JLPT N4</Link>
          </nav>
        </div>
      </header>
      <div>
      <BubbleChamberLogo />
      </div>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">What is Kiban?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Kiban (基盤) means "foundation" in Japanese. Our platform is designed to build your Japanese language skills 
              from the ground up, providing comprehensive preparation for the Japanese Language Proficiency Test (JLPT). 
              Whether you're a complete beginner or looking to advance your skills, Kiban offers structured learning paths 
              that adapt to your pace.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Content</h3>
                <p className="text-slate-400">Complete coverage of all JLPT levels with free lessons</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Focused Practice</h3>
                <p className="text-slate-400">Targeted exercises designed specifically for JLPT success</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Level-Specific Goals</h3>
                <p className="text-slate-400">Every JLPT level has its own focused path. No overwhelm. Just the exact kanji, grammar, and vocab you need - nothing else.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visual Progress Tracking</h3>
                <p className="text-slate-400">Watch your skills grow with every session. KIBAN shows you exactly where you stand and how close you are to mastery.</p>
              </CardContent>
            </Card>
          </div>

          {/* JLPT Levels */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-12">JLPT Levels</h2>
            <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                { level: "N5", desc: "Basic", color: "from-green-500 to-green-600" },
                { level: "N4", desc: "Elementary", color: "from-blue-500 to-blue-600" },
                { level: "N3", desc: "Intermediate", color: "from-yellow-500 to-yellow-600" },
                { level: "N2", desc: "Upper-Intermediate", color: "from-orange-500 to-orange-600" },
                { level: "N1", desc: "Advanced", color: "from-red-500 to-red-600" }
              ].map((item, index) => (
                <Card key={item.level} className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-xl">{item.level}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.desc}</h3>
                    <p className="text-slate-400 text-sm">
                      {index === 0 ? "Beginner level" : 
                       index === 4 ? "Native-like proficiency" : 
                       `Level ${5 - index} proficiency`}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-slate-400 mt-8 max-w-2xl mx-auto">
              The JLPT consists of 5 levels, starting from N5 (basic) up to N1 (native-level). 
              Each level builds upon the previous, ensuring a solid foundation in Japanese language skills.
            </p>


          <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Start building your Japanese foundation today with Kiban's comprehensive learning platform.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              Start with N5
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Take Level Test
            </Button>
          </div>
            </div>
        </div>
      </section>
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

const Button = ({ children, size = "md", variant = "primary", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",
    secondary: "bg-white text-orange-600 hover:bg-orange-50",
    outline: "border border-white text-white hover:bg-white hover:text-orange-600"
  };

    return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AboutSection;