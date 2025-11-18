export default function About() {
  const expertise = [
    "MERN Stack Development",
    "REST API Development",
    "Database Design",
    "Web Application Development",
    "Authentication Systems",
    "Frontend Development"
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">ABOUT ME</span>
          </h2>
          <div className="w-24 h-1 bg-[#8EFF00] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Professional Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#EFECE3] mb-4">
                Software Engineering
                <span className="text-[#8EFF00] block">Undergraduate</span>
              </h3>
              
              <p className="text-[#EFECE3]/80 text-lg leading-relaxed mb-6">
                Motivated Software Engineering undergraduate at SLIIT with a proven track record in hackathons 
                and real-world projects. Passionate about developing innovative software solutions that address 
                real-world needs, from disaster management platforms to fitness management systems.
              </p>
              
              <p className="text-[#EFECE3]/80 text-lg leading-relaxed">
                Awarded 1st Runners Up in SLIIT Codefest 2025 and reached 3rd round in Tech Triathlon. 
                Excel in team-based projects, combining technical expertise with user-centered design to 
                deliver reliable, scalable solutions using modern web technologies.
              </p>
            </div>

            {/* Core Expertise */}
            <div>
              <h4 className="text-xl font-semibold text-[#8EFF00] mb-4">CORE EXPERTISE</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-black border border-[#8EFF00]/30 rounded-lg text-center text-sm font-medium text-[#EFECE3] hover:border-[#8EFF00] hover:bg-[#8EFF00]/5 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">1+</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Years Studying</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">6+</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">10+</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Skills Learned</div>
              </div>
            </div>
          </div>

            {/* Education & Achievements */}
            <div className="p-6 bg-black border border-[#EFECE3]/20 rounded-lg">
              <h4 className="text-xl font-semibold text-[#8EFF00] mb-4">EDUCATION</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-[#EFECE3] font-medium">BSc (Hons) in Information Technology</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Sri Lanka Institute of Information Technology (SLIIT) • <span className="text-white font-bold">Oct 2023 – Present</span></p>
                  <p className="text-[#EFECE3]/80 text-sm">Specializing in Software Engineering</p>
                  <p className="text-[#EFECE3]/90 text-xs mt-1">Relevant Coursework: OOP, Web Technologies, DBMS, Networking, Data Structures & Algorithms</p>
                </div>
                <div className="pt-3 border-t border-[#EFECE3]/10">
                  <h5 className="text-[#EFECE3] font-medium">GCE Advanced Level</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Mahanama College (Colombo) • <span className="text-white font-bold">2022</span></p>
                </div>
                <div className="pt-3 border-t border-[#EFECE3]/10">
                  <h5 className="text-[#EFECE3] font-medium">GCE Ordinary Level</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Mahanama College (Colombo) • <span className="text-white font-bold">2019</span></p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 bg-black border border-[#EFECE3]/20 rounded-lg">
              <h4 className="text-xl font-semibold text-[#8EFF00] mb-4">ACHIEVEMENTS</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8EFF00] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <h5 className="text-[#EFECE3] font-medium">1st Runners Up – SLIIT Codefest 2025</h5>
                    <p className="text-[#EFECE3]/70 text-sm">Revivenation Competition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8EFF00] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <h5 className="text-[#EFECE3] font-medium">3rd Round – Tech Triathlon</h5>
                    <p className="text-[#EFECE3]/70 text-sm">Organized by Rootcode</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
