import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-surfaceHover py-12">
      <div className="container mx-auto max-w-[1600px] px-6 flex items-center justify-between gap-6">
        
        <p className="text-textMuted text-sm">
          &copy; 2026 Muhammad Waleed Wali. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 text-textMuted hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/muhammad-waleed-wali-877152223" target="_blank" rel="noopener noreferrer" className="p-2 text-textMuted hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="#" className="p-2 text-textMuted hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <FiTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
