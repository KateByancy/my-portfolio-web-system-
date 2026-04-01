import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/constants";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto mb-24 pt-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase border-b-2 border-[#001F3F] dark:border-blue-400 w-fit text-[#001F3F] dark:text-blue-400 pb-1">My Education</h3>
          {EDUCATION.map((edu, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow border-[#001F3F]/5 bg-white dark:bg-slate-900 dark:border-slate-800">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-100">{edu.title}</CardTitle>
                <p className="text-xs text-[#001F3F] dark:text-blue-400 font-medium">{edu.school} | {edu.year}</p>
              </CardHeader>
            </Card>
          ))}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {SKILLS.map(skill => (
              <div key={skill.id} className="border border-[#001F3F]/10 dark:border-blue-900/30 p-4 rounded-md text-center bg-[#001F3F]/5 dark:bg-blue-900/10 hover:bg-[#001F3F] dark:hover:bg-blue-600 hover:text-white transition-colors group">
                <span className="text-[10px] font-bold text-[#001F3F] dark:text-blue-400 group-hover:text-white/80">{skill.id}</span>
                <p className="text-xs font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase border-b-2 border-[#001F3F] dark:border-blue-400 w-fit text-[#001F3F] dark:text-blue-400 pb-1">My Experience</h3>
          {EXPERIENCE.map((exp, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow border-[#001F3F]/5 bg-white dark:bg-slate-900 dark:border-slate-800">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-100">{exp.role}</CardTitle>
                <p className="text-xs text-[#001F3F] dark:text-blue-400 font-medium">{exp.company} | {exp.year}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}