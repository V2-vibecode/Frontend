import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Shield, Users, Globe, Award, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  {
    icon: Shield,
    title: 'Reliability First',
    description: 'Every system we build is designed for mission-critical operations where failure is not an option.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'We obsess over the details because in our industry, centimeters and milliseconds matter.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We work alongside our clients to understand their challenges and deliver tailored solutions.',
  },
  {
    icon: Zap,
    title: 'Continuous Innovation',
    description: 'We invest heavily in R&D to stay at the forefront of autonomous systems technology.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Skyclean Solutions established in Berlin' },
  { year: '2019', title: 'First Product', description: 'SC-1000 Surveyor launched for enterprise' },
  { year: '2020', title: 'Global Expansion', description: 'Operations expanded to 15 countries' },
  { year: '2021', title: 'Series B', description: '$50M funding to accelerate R&D' },
  { year: '2022', title: 'Defense Contract', description: 'Selected for government programs' },
  { year: '2023', title: '500+ Clients', description: 'Milestone of 500 enterprise deployments' },
  { year: '2024', title: 'AI Platform', description: 'Launch of autonomous analytics suite' },
  { year: '2025', title: 'Industry Leader', description: 'Recognized as top industrial drone provider' },
];

const leadership = [
  {
    name: 'Victor',
    role: 'CEO & Co-Founder',
    background: 'Drone Technology Expert',
  },
  {
    name: 'Clement',
    role: 'Design Engineer',
    background: 'Software engineering',
  },
  
];

const About = () => {
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
              [About Us]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              ENGINEERING
              <br />
              <span className="text-zinc-600">EXCELLENCE</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Skyclean Solutions is redefining industrial operations through autonomous aerial systems. Our mission is to make the world's critical infrastructure safer, more efficient, and better maintained.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Our Mission]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Making Critical
                <br />
                Infrastructure Safer
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Every day, millions of workers put themselves at risk to inspect and maintain the infrastructure that powers our world. Our autonomous systems reduce that risk while delivering superior data quality and operational efficiency.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                We believe that the combination of advanced robotics, AI, and human expertise can transform how industries operate—making them safer, more sustainable, and more productive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden corner-brackets">
                <img
                  src="https://images.unsplash.com/photo-1659353587228-5dbbebb5d98f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Skyclean team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Our Values]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-100 block mb-4">
              [Our Journey]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              Building the Future
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-black/20 border border-white/20 p-6"
              >
                <span className="font-mono text-2xl font-bold text-white block mb-2">
                  {milestone.year}
                </span>
                <h3 className="font-heading font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-orange-100">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Leadership]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8"
              >
                <div className="w-16 h-16 bg-zinc-800 mb-6 flex items-center justify-center">
                  <span className="font-mono text-xl font-bold text-zinc-500">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {leader.name}
                </h3>
                <p className="font-mono text-xs text-orange-500 uppercase tracking-wider mb-3">
                  {leader.role}
                </p>
                <p className="text-sm text-zinc-500">
                  {leader.background}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Global Presence]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Operating
                <br />
                Worldwide
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                From our headquarters in Berlin, we serve clients across 35 countries with regional offices in London, Singapore, and Dubai. Our global network ensures rapid deployment and local support wherever you operate.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, value: '35', label: 'Countries' },
                  { icon: Users, value: '350+', label: 'Employees' },
                  { icon: Award, value: '45+', label: 'Patents' },
                  { icon: Shield, value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-zinc-900 border border-zinc-800 p-6">
                    <stat.icon className="h-6 w-6 text-orange-500 mb-3" />
                    <p className="font-mono text-2xl font-bold text-white">{stat.value}</p>
                    <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 p-8 md:p-12"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-8">
                Regional Offices
              </h3>
              <div className="space-y-6">
                {[
                  { city: 'Berlin', country: 'DE', role: 'Global Headquarters' },
                  { city: 'London', country: 'UK', role: 'EMEA Operations' },
                  { city: 'Singapore', country: 'SG', role: 'APAC Operations' },
                  { city: 'Dubai', country: 'UAE', role: 'Middle East Hub' },
                ].map((office) => (
                  <div key={office.city} className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div>
                      <p className="font-heading font-bold text-white">{office.city}</p>
                      <p className="text-sm text-zinc-600">{office.role}</p>
                    </div>
                    <span className="font-mono text-xs text-orange-500 uppercase">{office.country}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
              [Join Us]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Ready to Work
              <br />
              With Us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  data-testid="about-contact-cta"
                  className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button 
                  data-testid="about-solutions-cta"
                  variant="outline"
                  className="border border-zinc-700 text-white hover:bg-zinc-800 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
