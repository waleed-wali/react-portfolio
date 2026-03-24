import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="Ready to start your next project? Let's discuss how I can help solve your API integration and frontend challenges.">
          Get In Touch
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-textMain mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="mailto:waleedwali03@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-textMuted text-sm">Email me at</p>
                  <p className="text-textMain font-medium group-hover:text-primary transition-colors">waleedwali03@gmail.com</p>
                </div>
              </a>

              <a href="tel:+923321921910" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-textMuted text-sm">Call me at</p>
                  <p className="text-textMain font-medium group-hover:text-primary transition-colors">+92 332 1921910</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/muhammad-waleed-wali-877152223" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <p className="text-textMuted text-sm">Connect on</p>
                  <p className="text-textMain font-medium group-hover:text-primary transition-colors">LinkedIn</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-8 rounded-3xl border border-surfaceHover shadow-xl shadow-black/50"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const message = formData.get('message');
              window.location.href = `mailto:waleedwali03@gmail.com?subject=Contact from ${name}&body=${message}`;
            }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-background border border-surfaceHover rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-background border border-surfaceHover rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background border border-surfaceHover rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
