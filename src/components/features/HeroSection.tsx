import { Facebook, Github, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-24 pt-32">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Hi, I&apos;m <span className="text-[#001F3F] dark:text-blue-400">Kate Byancy</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          I am a UI/UX Designer based in the Philippines, focusing on creating clean and user-friendly digital experiences.
        </p>
        <button className="bg-[#001F3F] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-900 transition-all shadow-lg active:scale-95">
          View My Work
        </button>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="relative aspect-square w-full max-w-[400px]">
          <div className="absolute inset-2 bg-gradient-to-br from-[#001F3F] to-blue-400 opacity-20 blur-xl animate-pulse rounded-full" />
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border-8 border-white dark:border-slate-800">
            <image> 
              src=&quot;/profile.jpg&quot; 
              alt=&quot;Profile&quot; 
              className=&quot;object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700&quot; 
            </image>
          </div>
        </div>

        {/* --- Social Icons Row --- */}
        <div className="flex gap-6">
          <a href="https://Facebook.com/your-username" target="_blank" rel="noopener noreferrer" 
             className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
            {/* Use Lucide.IconName here */}
            <Facebook size={28} />
          </a>
          <a href="mailto:your-email@gmail.com" 
             className="text-slate-600 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
            <Mail size={28} />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" 
             className="text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">
            <Github size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}