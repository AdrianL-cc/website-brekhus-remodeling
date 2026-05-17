import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Images
import heroImg from './assets/images/hero_kitchen_16x9_1778979648654.png';
import bathImg from './assets/images/luxury_bathroom_4x3_1778979664335.png';
import showerImg from './assets/images/custom_shower_4x3_1778979678659.png';
import livingImg from './assets/images/open_living_16x9_1778979695959.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="text-2xl tracking-widest uppercase font-sans font-light">
          Brekhus <span className="font-semibold">Remodeling</span>
        </div>
        
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-[0.1em] font-medium">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-white/10 pb-6 px-6 flex flex-col space-y-4 text-sm uppercase tracking-widest">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4 text-accent text-xs uppercase tracking-[0.2em] font-medium">
            <span className="w-12 h-px bg-accent"></span>
            <span>Denver, Colorado</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl serif leading-[1.1] font-light">
            Crafting Spaces of<br />
            <span className="italic text-accent">Enduring</span> Beauty
          </h1>
          
          <p className="text-lg text-brand-text/70 max-w-md leading-relaxed">
            High-end residential remodeling specializing in bespoke kitchens, luxury bathrooms, and custom shower installations.
          </p>
          
          <a href="#contact" className="inline-flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowRight className="w-6 h-6 text-brand-text group-hover:text-accent transition-colors" />
            </div>
            <span className="mt-4 text-xs uppercase tracking-[0.15em] font-semibold">Start a Project</span>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[60vh] md:h-[80vh] w-full"
        >
          <img 
            src={heroImg} 
            alt="Luxury Kitchen Remodel" 
            className="w-full h-full object-cover rounded-t-[100px] md:rounded-t-[200px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 right-8 writing-vertical-rl transform rotate-180 text-xs uppercase tracking-[0.2em] font-semibold px-4 py-8 bg-brand-bg/90 backdrop-blur">
            Est. 2004
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Bespoke Kitchens", desc: "Chef-inspired kitchens tailored to your culinary lifestyle, blending functionality with exquisite design.", img: livingImg },
    { title: "Luxury Bathrooms", desc: "Spa-like retreats featuring soaking tubs, floating vanities, and premium fixtures.", img: bathImg },
    { title: "Custom Showers", desc: "Architectural shower installations with custom tile work, frameless glass, and precision plumbing.", img: showerImg },
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface-light text-brand-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl serif font-light">
            Our <span className="italic text-accent">Expertise</span>
          </h2>
          <p className="mt-6 md:mt-0 max-w-sm text-sm opacity-70 leading-relaxed uppercase tracking-widest">
            Uncompromising quality in every detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[3/4] mb-8">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 border-t border-white/20">
                <div className="text-xs text-accent uppercase tracking-[0.2em] mb-2 font-semibold">0{idx + 1}</div>
                <h3 className="text-2xl serif mb-4">{service.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const facebooksPosts = [
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Femilee.ovens%2Fposts%2Fpfbid0Ju3edhtiJ5KXfcvMacGgpKe7Tvb4y2LX6xzcs3JNwiMBZMTEhs9LLuc6DrTyHpb8l&show_text=true&width=450" width="100%" height="220" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fremmersaurus%2Fposts%2Fpfbid027W74zhhQXsaz9wfALCFQotKxwuWLvkJ8VbCn714DKFHDG1UEvubJwViWasMtMgWTl&show_text=true&width=450" width="100%" height="260" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0crunbA4ewYZ11pHqVPQ1AY6CxktMbx2n2iTvXupBorpG19PfzniT2xsagNqBiE2ml%26id%3D61578922958395&show_text=true&width=450" width="100%" height="220" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandrew.thompson.727382%2Fposts%2Fpfbid02EZCxR8aG3QcVk27iBWTbrvBu4joW5ruMTVnSCLST9e5WwjAc84tmSUfDK6vKkiURl&show_text=true&width=450" width="100%" height="220" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbarbye.greenberg%2Fposts%2Fpfbid0of81bFiNDLiNJB1Y6Yknizcm5NhwdVZwQMEiQ4yAwSNjuhhRPNeABrphFg3kCi5al&show_text=true&width=450" width="100%" height="240" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl serif font-light text-center mb-20">
          Client <span className="italic text-accent">Stories</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facebooksPosts.map((iframeHtml, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-surface-lighter p-6 md:p-8 border border-white/10 shadow-sm flex justify-center items-center h-[300px]"
              dangerouslySetInnerHTML={{ __html: iframeHtml }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-[800px] h-[800px] border border-white rounded-full absolute -top-[400px] -right-[400px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl serif font-light mb-8">
            Let's discuss your <br/>
            <span className="italic text-accent">vision</span>
          </h2>
          <p className="text-sm uppercase tracking-widest opacity-70 mb-12">We are ready to bring your dream space to life.</p>
          
          <div className="space-y-8 uppercase tracking-widest text-xs font-semibold">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <a href="tel:303-555-0199" className="hover:text-accent transition-colors">(303) 555-0199</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <a href="mailto:info@brekhusremodeling.com" className="hover:text-accent transition-colors">info@brekhusremodeling.com</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <span>Denver, CO Area</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-8 bg-brand-surface-lighter p-8 md:p-12 border border-white/10 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col mb-4">
            <label className="text-xs uppercase tracking-widest font-semibold mb-3">Name</label>
            <input type="text" className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
          </div>
          
          <div className="flex flex-col mb-4">
            <label className="text-xs uppercase tracking-widest font-semibold mb-3">Email</label>
            <input type="email" className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
          </div>
          
          <div className="flex flex-col mb-8">
            <label className="text-xs uppercase tracking-widest font-semibold mb-3">Project Details</label>
            <textarea rows={4} className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your kitchen, bath, or shower project..."></textarea>
          </div>
          
          <button type="submit" className="w-full bg-brand-text text-black uppercase tracking-widest text-xs font-semibold py-4 hover:bg-accent transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-surface-dim text-brand-text py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest space-y-4 md:space-y-0">
        <div className="font-semibold">
          Brekhus Remodeling &copy; {new Date().getFullYear()}
        </div>
        <div className="flex space-x-8 opacity-70">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">Facebook</a>
          <a href="#" className="hover:text-accent transition-colors">Houzz</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
