import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Map, Cpu, Eye, BarChart3, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const solutions = [
  {
    id: 'inspection',
    icon: Shield,
    title: 'Industrial Inspection',
    subtitle: 'Comprehensive Asset Monitoring',
    description: 'Deploy autonomous inspection systems that capture high-resolution imagery and thermal data across your infrastructure. Our drones identify defects, corrosion, and anomalies before they become critical failures.',
    features: [
      'Visual and thermal imaging',
      'Automated defect detection',
      'Real-time data streaming',
      '3D asset modeling',
      'Predictive maintenance insights',
      'Compliance documentation',
    ],
    image: 'https://images.unsplash.com/photo-1758797849151-1725021be42a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stats: { value: '85%', label: 'Cost Reduction' },
  },
  {
    id: 'mapping',
    icon: Map,
    title: 'Mapping & Surveying',
    subtitle: 'Precision Geospatial Data',
    description: 'Generate accurate topographic maps, orthomosaics, and 3D terrain models with centimeter-level precision. Perfect for construction planning, volume calculations, and progress monitoring.',
    features: [
      'Photogrammetry processing',
      'LiDAR integration',
      'Volume calculations',
      'Progress tracking',
      'GIS integration',
      'Survey-grade accuracy',
    ],
    image: 'https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stats: { value: '10x', label: 'Faster Surveys' },
  },
  {
    id: 'integration',
    icon: Cpu,
    title: 'Custom Integration',
    subtitle: 'Tailored Solutions',
    description: 'Work with our engineering team to design bespoke drone systems that integrate seamlessly with your existing workflows. From specialized payloads to custom software, we build what you need.',
    features: [
      'Custom payload development',
      'API integrations',
      'Fleet management systems',
      'Specialized sensors',
      'Edge computing solutions',
      'Training & support',
    ],
    image: 'https://images.unsplash.com/photo-1580786573431-f283d8bbacec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stats: { value: '100%', label: 'Customizable' },
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Data Analytics',
    subtitle: 'Actionable Intelligence',
    description: 'Transform raw aerial data into actionable insights with our AI-powered analytics platform. Automated reporting, trend analysis, and predictive modeling help you make informed decisions.',
    features: [
      'AI-powered analysis',
      'Automated reporting',
      'Trend identification',
      'Anomaly detection',
      'Historical comparisons',
      'Custom dashboards',
    ],
    image: 'https://images.unsplash.com/photo-1659353587228-5dbbebb5d98f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stats: { value: '60%', label: 'Faster Decisions' },
  },
];

const Solutions = () => {
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
              [Solutions]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              INDUSTRIAL
              <br />
              <span className="text-zinc-600">EXCELLENCE</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              End-to-end drone solutions designed for the most demanding industrial applications. From inspection to analytics, we deliver precision at scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24 md:space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden corner-brackets">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-6 left-6 bg-orange-500 px-6 py-4">
                      <p className="font-mono text-2xl font-bold text-white">{solution.stats.value}</p>
                      <p className="font-mono text-xs text-orange-100 uppercase tracking-wider">{solution.stats.label}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                      {solution.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                    {solution.title}
                  </h2>
                  
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button 
                      data-testid={`solution-cta-${solution.id}`}
                      className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Our Process]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We analyze your requirements and define project scope.' },
              { step: '02', title: 'Planning', description: 'Custom solution design with timeline and deliverables.' },
              { step: '03', title: 'Deployment', description: 'Professional execution with real-time monitoring.' },
              { step: '04', title: 'Analysis', description: 'Data processing and actionable insights delivery.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-zinc-900 border border-zinc-800 p-8 h-full">
                  <span className="font-mono text-4xl font-black text-zinc-800 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-zinc-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-100 block mb-6">
              [Start Your Project]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ready to Transform
              <br />
              Your Operations?
            </h2>
            <Link to="/contact">
              <Button 
                data-testid="solutions-cta-btn"
                className="bg-black text-white hover:bg-zinc-900 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
              >
                Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
