import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-pencil/5 w-full">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title tack-decoration inline-block bg-paper px-6">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="md:col-span-5 flex flex-col justify-between"
          >
            <div className="postit-card tape-decoration rotate-1 mb-8">
              <h3 className="font-kalam text-2xl font-bold text-pencil mb-4">
                Currently Available For:
              </h3>
              <ul className="space-y-3 font-hand md:text-lg text-pencil/80">
                <li className="flex items-center gap-2">
                  <span className="text-marker-red font-bold">✓</span> Full Time Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-marker-red font-bold">✓</span> Freelance Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-marker-red font-bold">✓</span> Open Source Collabs
                </li>
              </ul>
            </div>

            <div className="wobbly-card bg-white mt-auto">
              <div className="space-y-6">
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="mailto:aayush10738@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-pencil bg-paper-muted rounded-full group-hover:bg-marker-red group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-hand font-bold text-pencil/60 text-sm">Email Me</p>
                    <p className="font-kalam font-bold text-lg text-pencil">aayush10738@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-pencil bg-paper-muted rounded-full group-hover:bg-pen-blue group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-hand font-bold text-pencil/60 text-sm">Location</p>
                    <p className="font-kalam font-bold text-lg text-pencil">Patna, Bihar, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-pencil bg-paper-muted rounded-full group-hover:bg-postit transition-colors">
                    <Phone className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-hand font-bold text-pencil/60 text-sm">Phone</p>
                    <p className="font-kalam font-bold text-lg text-pencil">+91 8603128570</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="md:col-span-7"
          >
            <div className="wobbly-card-alt bg-white h-full relative">
              {/* Formsubmit.co integration */}
              <form 
                action="https://formsubmit.co/aayush10738@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                {/* Formsubmit specific hidden inputs to customize behavior without backend */}
                <input type="hidden" name="_subject" value="New submission from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                
                <p className="font-hand text-xl text-pencil/80 mb-6">
                  Got a question or proposal, or just want to say hello? Go ahead.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-kalam font-bold text-lg text-pencil">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="input-sketchy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-kalam font-bold text-lg text-pencil">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="input-sketchy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-kalam font-bold text-lg text-pencil">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="input-sketchy resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-sketchy w-full flex items-center justify-center gap-2 group"
                >
                  <Send className="h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  Send Message
                </motion.button>
              </form>
              
              {/* Decorative doodles */}
              <div className="absolute -bottom-6 -right-4 text-4xl w-12 h-12 flex items-center justify-center -rotate-12 select-none">
                ✉️
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};