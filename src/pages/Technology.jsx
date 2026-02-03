import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Signal, Eye, Lock, Zap, Target, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const technologies = [
  {
    icon: Shield,
    title: 'Redundant Flight Systems',
    description: 'Triple-redundant flight controllers, dual GPS receivers, and backup power systems ensure mission completion even under component failure.',
    stats: '99.99% Reliability',
  },
  {
    icon: Eye,
    title: 'Advanced Sensor Fusion',
    description: 'Proprietary algorithms combine data from LiDAR, radar, cameras, and IMUs for centimeter-accurate positioning in any environment.',
    stats: '±2cm Accuracy',
  },
  {
    icon: Signal,
    title: 'Secure Communications',
    description: 'AES-256 encrypted data links with frequency hopping and mesh networking capabilities for jam-resistant operations.',
    stats: '50km Range',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Onboard AI processors enable real-time object detection, anomaly identification, and autonomous decision-making.',
    stats: '40 TOPS',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Hardware security modules, secure boot, and encrypted storage protect against unauthorized access and data breaches.',
    stats: 'FIPS 140-2',
  },
  {
    icon: Target,
    title: 'Precision Navigation',
    description: 'RTK-GPS combined with visual-inertial odometry enables precise navigation in GPS-denied environments.',
    stats: 'Indoor/Outdoor',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management' },
  { name: 'DO-178C', desc: 'Airborne Software' },
  { name: 'MIL-STD-810G', desc: 'Environmental Testing' },
  { name: 'IP67', desc: 'Ingress Protection' },
];

const Technology = () => {
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
              [Technology]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              BUILT FOR
              <br />
              <span className="text-zinc-600">RELIABILITY</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Every Skyclean system incorporates military-grade technology designed for the most demanding operational environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Engineering Excellence]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Designed to Perform
                <br />
                When It Matters
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Our engineering team brings together decades of aerospace, defense, and robotics experience. Every component is selected, tested, and validated to ensure consistent performance across thousands of flight hours.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '50,000+', label: 'Flight Hours' },
                  { value: '0', label: 'Critical Failures' },
                  { value: '99.99%', label: 'Uptime' },
                  { value: '-40°C to +55°C', label: 'Operating Range' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-zinc-900 border border-zinc-800 p-4">
                    <p className="font-mono text-xl font-bold text-white">{stat.value}</p>
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
              className="relative"
            >
              <div className="aspect-square overflow-hidden corner-brackets">
                <img
                  src="https://images.unsplash.com/photo-1580786573431-f283d8bbacec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Drone technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-mono text-xs text-orange-500 uppercase tracking-wider">
                    {tech.stats}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-24 md:py-32 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-100 block mb-6">
                [Safety & Compliance]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Meeting the Highest
                <br />
                <span className="text-orange-200">Standards</span>
              </h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                Our systems are designed, tested, and certified to meet the most stringent international standards. From aerospace-grade software development to military environmental testing, we leave nothing to chance.
              </p>

              <div className="space-y-4">
                {[
                  'FAA Part 107 compliant operations',
                  'Remote ID equipped for regulatory compliance',
                  'Geofencing and no-fly zone awareness',
                  'Automated return-to-home on signal loss',
                  'Real-time flight logging and auditing',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-orange-100">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-orange-200 mb-6">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6"
                  >
                    <p className="font-mono text-lg font-bold text-white mb-1">{cert.name}</p>
                    <p className="font-mono text-xs text-orange-100 uppercase tracking-wider">{cert.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-black/20 border border-white/10">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-white mb-2">
                      Defense-Ready Systems
                    </h4>
                    <p className="text-sm text-orange-100 leading-relaxed">
                      Our platforms meet NDAA compliance requirements and are manufactured with security-screened components for government and defense applications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Innovation]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              Continuous Advancement
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'R&D Investment',
                value: '$25M+',
                description: 'Annual investment in research and development for next-generation systems.',
              },
              {
                title: 'Patents',
                value: '45+',
                description: 'Proprietary technologies protected by international patents.',
              },
              {
                title: 'Engineering Team',
                value: '120+',
                description: 'Dedicated engineers from aerospace, AI, and robotics backgrounds.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8 text-center"
              >
                <p className="font-mono text-4xl md:text-5xl font-black text-orange-500 mb-2">
                  {item.value}
                </p>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              [Technical Consultation]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Discuss Your
              <br />
              Technical Requirements
            </h2>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10">
              Our engineering team is ready to help you evaluate how Skyclean technology can address your specific operational challenges.
            </p>
            <Link to="/contact">
              <Button 
                data-testid="tech-consultation-cta"
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
              >
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
