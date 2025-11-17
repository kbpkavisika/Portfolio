export default function Skills() {
  const frontendTech = [
    { name: "React", level: "Expert", years: "4+" },
    { name: "Next.js", level: "Expert", years: "3+" },
    { name: "TypeScript", level: "Advanced", years: "3+" },
    { name: "JavaScript", level: "Expert", years: "5+" },
    { name: "HTML5/CSS3", level: "Expert", years: "5+" },
    { name: "Tailwind CSS", level: "Advanced", years: "2+" }
  ];

  const backendTech = [
    { name: "Node.js", level: "Expert", years: "4+" },
    { name: "Express.js", level: "Expert", years: "4+" },
    { name: "Python", level: "Intermediate", years: "2+" },
    { name: "PostgreSQL", level: "Advanced", years: "3+" },
    { name: "MongoDB", level: "Advanced", years: "3+" },
    { name: "Redis", level: "Intermediate", years: "2+" }
  ];

  const devTools = [
    { name: "Git/GitHub", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "Vercel", level: "Advanced" },
    { name: "Jest", level: "Advanced" },
    { name: "Webpack", level: "Intermediate" }
  ];

  const SkillCard = ({ skill, category }: { skill: any, category: string }) => (
    <div className="p-4 bg-black border border-[#EFECE3]/20 rounded-lg hover:border-[#8EFF00]/50 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-[#EFECE3] group-hover:text-[#8EFF00] transition-colors">
          {skill.name}
        </h4>
        {skill.years && (
          <span className="text-xs text-[#EFECE3]/60 bg-[#8EFF00]/10 px-2 py-1 rounded">
            {skill.years}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-[#EFECE3]/10 rounded-full h-2">
          <div 
            className="bg-[#8EFF00] h-2 rounded-full transition-all duration-300"
            style={{ 
              width: skill.level === 'Expert' ? '90%' : 
                     skill.level === 'Advanced' ? '75%' : '60%' 
            }}
          ></div>
        </div>
        <span className="text-xs text-[#EFECE3]/70 min-w-[70px]">
          {skill.level}
        </span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">TECHNICAL SKILLS</span>
          </h2>
          <div className="w-24 h-1 bg-[#8EFF00] mx-auto mb-6"></div>
          <p className="text-[#EFECE3]/80 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">FE</span>
              Frontend Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frontendTech.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="frontend" />
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">BE</span>
              Backend Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backendTech.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="backend" />
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">DT</span>
              Development Tools & DevOps
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {devTools.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="tools" />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Competencies */}
        <div className="mt-16 p-8 bg-black border border-[#EFECE3]/20 rounded-lg">
          <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-[#EFECE3] mb-2">Architecture</h4>
              <p className="text-sm text-[#EFECE3]/70">Microservices, REST APIs, GraphQL</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#EFECE3] mb-2">Performance</h4>
              <p className="text-sm text-[#EFECE3]/70">Optimization, Caching, CDN</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#EFECE3] mb-2">Testing</h4>
              <p className="text-sm text-[#EFECE3]/70">Unit, Integration, E2E Testing</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#EFECE3] mb-2">Agile</h4>
              <p className="text-sm text-[#EFECE3]/70">Scrum, Kanban, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
