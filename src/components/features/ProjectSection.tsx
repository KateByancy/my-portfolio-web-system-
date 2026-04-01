import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/constants";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section id="project" className="max-w-5xl mx-auto mb-24 pt-20">
      <h2 className="text-2xl font-bold mb-8 text-[#001F3F] dark:text-blue-400 uppercase tracking-wider text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="overflow-hidden group border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-xl transition-all">
            
            {/* Project Image Container */}
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden border-b border-slate-50 dark:border-slate-800">
              
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#001F3F] opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>

            <CardHeader className="p-4 text-center">
              <CardTitle className="text-md font-bold text-slate-800 dark:text-slate-100">
                {project.title}
              </CardTitle>
              <div className="pt-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] px-6 py-1.5 border-2 border-[#001F3F] dark:border-blue-400 text-[#001F3F] dark:text-blue-400 rounded-full font-bold hover:bg-[#001F3F] dark:hover:bg-blue-400 hover:text-white transition-all uppercase tracking-tighter"
                >
                  View Project
                </a>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}