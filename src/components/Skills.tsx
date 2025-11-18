export default function Skills() {
  const programmingLanguages = [
    { name: "JavaScript", level: "Advanced", years: "2+" },
    { name: "Java", level: "Advanced", years: "2+" },
    { name: "Python", level: "Intermediate", years: "1+" },
    { name: "C", level: "Intermediate", years: "1+" },
    { name: "C++", level: "Intermediate", years: "1+" },
    { name: "PHP", level: "Intermediate", years: "1+" },
    { name: "TypeScript", level: "Intermediate", years: "1+" },
    { name: "R", level: "Beginner", years: "1+" }
  ];

  const webTechnologies = [
    { name: "React.js", level: "Advanced", years: "2+" },
    { name: "Node.js", level: "Advanced", years: "2+" },
    { name: "Express.js", level: "Advanced", years: "2+" },
    { name: "HTML", level: "Advanced", years: "2+" },
    { name: "CSS", level: "Advanced", years: "2+" },
    { name: "SQL", level: "Intermediate", years: "2+" }
  ];

  const databases = [
    { name: "MySQL", level: "Intermediate", years: "2+" },
    { name: "MongoDB", level: "Intermediate", years: "1+" },
    { name: "PostgreSQL", level: "Intermediate", years: "1+" }
  ];

  const toolsPlatforms = [
    { name: "Git/GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Eclipse", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
    { name: "Android Studio", level: "Beginner" },
    { name: "XAMPP", level: "Intermediate" },
    { name: "Apache Tomcat", level: "Intermediate" }
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
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">PL</span>
              Programming Languages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="programming" />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">WT</span>
              Web Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {webTechnologies.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="web" />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">DB</span>
              Databases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {databases.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="database" />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center">
              <span className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold">TP</span>
              Tools & Platforms
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolsPlatforms.map((skill, index) => (
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
