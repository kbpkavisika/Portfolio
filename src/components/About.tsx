export default function About() {
  const expertise = [
    "Full-Stack Development",
    "React & Next.js",
    "Node.js & Express",
    "Database Design",
    "API Development",
    "Cloud Architecture"
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
                Software Engineer &
                <span className="text-[#8EFF00] block">Problem Solver</span>
              </h3>
              
              <p className="text-[#EFECE3]/80 text-lg leading-relaxed mb-6">
                I'm a passionate software engineer with over 5 years of experience in developing 
                robust, scalable web applications. I specialize in modern JavaScript frameworks 
                and have a strong background in both frontend and backend technologies.
              </p>
              
              <p className="text-[#EFECE3]/80 text-lg leading-relaxed">
                My approach combines technical expertise with user-centered design principles 
                to create solutions that not only work flawlessly but also provide exceptional 
                user experiences.
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
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">5+</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">50+</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8EFF00] mb-2">98%</div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Experience */}
          <div className="space-y-8">
            {/* Education & Certifications */}
            <div className="p-6 bg-black border border-[#EFECE3]/20 rounded-lg">
              <h4 className="text-xl font-semibold text-[#8EFF00] mb-4">EDUCATION</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-[#EFECE3] font-medium">Bachelor of Computer Science</h5>
                  <p className="text-[#EFECE3]/70 text-sm">University of Technology • 2018-2022</p>
                </div>
                <div className="pt-3 border-t border-[#EFECE3]/10">
                  <h6 className="text-[#8EFF00] font-medium mb-2">Certifications</h6>
                  <ul className="text-sm text-[#EFECE3]/80 space-y-1">
                    <li>• AWS Certified Developer</li>
                    <li>• React Professional Certificate</li>
                    <li>• MongoDB Certified Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
