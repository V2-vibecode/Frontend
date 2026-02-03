import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Building2, Mountain, Factory, Droplets, Train, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const industries = [
  {
    id: 'energy',
    icon: Zap,
    title: 'Energy & Utilities',
    subtitle: 'Power Generation & Distribution',
    description: 'Inspect power lines, wind turbines, solar farms, and substations with precision thermal and visual imaging. Reduce outage risks and optimize maintenance schedules.',
    applications: [
      'Transmission line inspection',
      'Wind turbine blade analysis',
      'Solar panel thermography',
      'Substation monitoring',
      'Pipeline surveillance',
    ],
    image: 'https://images.unsplash.com/photo-1769629918424-28594e8dcff8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '70%', label: 'Inspection Time Saved' },
  },
  {
    id: 'construction',
    icon: Building2,
    title: 'Construction',
    subtitle: 'Building & Development',
    description: 'Track project progress with regular aerial surveys, generate accurate volume calculations, and create detailed 3D models for planning and documentation.',
    applications: [
      'Site progress monitoring',
      'Volumetric measurements',
      'As-built documentation',
      'Safety compliance audits',
      'Stakeholder reporting',
    ],
    image: 'https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '10x', label: 'Survey Speed' },
  },
  {
    id: 'infrastructure',
    icon: Mountain,
    title: 'Infrastructure',
    subtitle: 'Civil Engineering',
    description: 'Monitor bridges, dams, roads, and critical infrastructure with comprehensive inspection solutions that identify structural concerns before they become failures.',
    applications: [
      'Bridge deck inspection',
      'Dam monitoring',
      'Highway assessment',
      'Railway inspection',
      'Tunnel surveying',
    ],
    image: 'https://images.unsplash.com/photo-1758797849151-1725021be42a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '85%', label: 'Cost Reduction' },
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    subtitle: 'Industrial Facilities',
    description: 'Inspect large manufacturing facilities, storage tanks, and industrial equipment with minimal operational disruption. Identify maintenance needs proactively.',
    applications: [
      'Tank inspection',
      'Roof condition assessment',
      'Flare stack monitoring',
      'Inventory management',
      'Security surveillance',
    ],
    image: 'https://images.unsplash.com/photo-1580786573431-f283d8bbacec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '90%', label: 'Downtime Reduced' },
  },
  {
    id: 'oil-gas',
    icon: Droplets,
    title: 'Oil & Gas',
    subtitle: 'Upstream & Downstream',
    description: 'Monitor refineries, offshore platforms, and pipeline networks with specialized sensors for leak detection, thermal anomalies, and structural integrity.',
    applications: [
      'Methane leak detection',
      'Flare monitoring',
      'Pipeline right-of-way',
      'Offshore platform inspection',
      'Emergency response',
    ],
    image: 'https://images.unsplash.com/photo-1659353587228-5dbbebb5d98f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '24/7', label: 'Monitoring' },
  },
  {
    id: 'transportation',
    icon: Train,
    title: 'Transportation',
    subtitle: 'Mobility Infrastructure',
    description: 'Survey railways, highways, ports, and airports with precision mapping and inspection services that keep critical transportation networks operational.',
    applications: [
      'Track geometry analysis',
      'Pavement condition',
      'Port logistics mapping',
      'Airport runway inspection',
      'Traffic monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1585240027282-07853a0b05d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    stat: { value: '99.9%', label: 'Accuracy' },
  },
];

const Industries = () => {
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
              [Industries]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              SECTOR
              <br />
              <span className="text-zinc-600">EXPERTISE</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Purpose-built solutions for the world's most demanding industries. Our systems are deployed across energy, construction, infrastructure, and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Stat Badge */}
                    <div className="absolute bottom-4 left-4 bg-orange-500 px-4 py-3">
                      <p className="font-mono text-xl font-bold text-white">{industry.stat.value}</p>
                      <p className="font-mono text-xs text-orange-100 uppercase tracking-wider">{industry.stat.label}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                        {industry.subtitle}
                      </span>
                    </div>
                    
                    <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                      {industry.title}
                    </h2>
                    
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {industry.applications.map((app) => (
                        <div key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <span className="text-sm text-zinc-400">{app}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button 
                        data-testid={`industry-cta-${industry.id}`}
                        className="bg-white text-black hover:bg-zinc-200 rounded-none px-6 py-3 font-mono text-xs uppercase tracking-wider"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-4">
              [Global Impact]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              Trusted Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '35', label: 'Countries' },
              { value: '100M+', label: 'Acres Surveyed' },
              { value: '2M+', label: 'Inspections' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-mono text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
                  {stat.label}
                </p>
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
              [Your Industry]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Don't See Your
              <br />
              <span className="text-orange-200">Industry Listed?</span>
            </h2>
            <p className="text-lg text-orange-100 max-w-xl mx-auto mb-10">
              Our solutions are adaptable to virtually any sector. Contact us to discuss how Skyclean can address your specific industry challenges.
            </p>
            <Link to="/contact">
              <Button 
                data-testid="industries-cta"
                className="bg-black text-white hover:bg-zinc-900 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
              >
                Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
