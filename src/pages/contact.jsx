import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIndustryChange = (value) => {
    setFormData({ ...formData, industry: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      await axios.post(`${API}/newsletter`, { email: newsletterEmail });
      toast.success('Successfully subscribed to our newsletter!');
      setNewsletterEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.span 
              variants={fadeInUp}
              className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6"
            >
              [Contact]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              LET'S BUILD
              <br />
              <span className="text-zinc-600">TOGETHER</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Ready to transform your operations with autonomous aerial systems? Our team is here to help you get started.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Email</h3>
                    <p className="text-zinc-400">clementvictor235@icloud.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Phone</h3>
                    <p className="text-zinc-400">+49 152 0732 1320</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Headquarters</h3>
                    <p className="text-zinc-400">Gotenstraße 16</p>
                    <p className="text-zinc-400">10829 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Hours</h3>
                    <p className="text-zinc-400">Monday - Friday: 9AM - 6PM CET</p>
                    <p className="text-zinc-400">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-2">
                      Response Within 24 Hours
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Our team reviews every inquiry and commits to responding within one business day. For urgent matters, please call our direct line.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Request a Quote
                </h3>
                <p className="text-zinc-500 text-sm mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="contact-name"
                        className="rounded-none border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-600 focus:ring-orange-500 focus:border-orange-500 h-12"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="contact-email"
                        className="rounded-none border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-600 focus:ring-orange-500 focus:border-orange-500 h-12"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        data-testid="contact-company"
                        className="rounded-none border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-600 focus:ring-orange-500 focus:border-orange-500 h-12"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        data-testid="contact-phone"
                        className="rounded-none border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-600 focus:ring-orange-500 focus:border-orange-500 h-12"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="industry" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                      Industry
                    </Label>
                    <Select onValueChange={handleIndustryChange} value={formData.industry}>
                      <SelectTrigger data-testid="contact-industry" className="rounded-none border-zinc-700 bg-zinc-800 text-white focus:ring-orange-500 focus:border-orange-500 h-12">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        <SelectItem value="energy">Energy & Utilities</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      data-testid="contact-message"
                      className="rounded-none border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-600 focus:ring-orange-500 focus:border-orange-500 min-h-[150px]"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit"
                    className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-100 block mb-6">
                [Stay Updated]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Industry Insights
                <br />
                <span className="text-orange-200">& Updates</span>
              </h2>
              <p className="text-lg text-orange-100 leading-relaxed">
                Subscribe to receive the latest news on autonomous aerial systems, industry trends, and Skyclean product updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  data-testid="newsletter-email"
                  className="flex-1 rounded-none border-white/30 bg-white/10 text-white placeholder:text-orange-100 focus:ring-white focus:border-white h-14"
                  placeholder="Enter your email address"
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  data-testid="newsletter-submit"
                  className="bg-black text-white hover:bg-zinc-900 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider disabled:opacity-50"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-sm text-orange-100 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Locations Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Global Offices]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              Find Us Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Berlin', country: 'Germany', address: 'Gotenstraße 16, 10829', type: 'HQ' },
              { city: 'London', country: 'United Kingdom', address: '45 Tech Square, EC2A 1NT', type: 'EMEA' },
              { city: 'Singapore', country: 'Singapore', address: '78 Marina Bay, 018956', type: 'APAC' },
              { city: 'Dubai', country: 'UAE', address: 'Business Bay, Tower 3', type: 'MENA' },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-6"
              >
                <span className="font-mono text-xs text-orange-500 uppercase tracking-wider block mb-4">
                  {office.type}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {office.city}
                </h3>
                <p className="text-zinc-400 text-sm mb-3">{office.country}</p>
                <p className="text-zinc-600 text-sm">{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
