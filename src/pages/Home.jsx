import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Crosshair, Shield, Cpu, Signal, Map, Zap, Target, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 tech-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-orange-500">
                  [AUTONOMOUS AERIAL SYSTEMS]
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
              >
                PRECISION
                <br />
                <span className="text-zinc-600">FROM ABOVE</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg"
              >
                Enterprise-grade drone solutions for industrial inspection, mapping, and data acquisition. Built for reliability.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions">
                  <Button 
                    data-testid="hero-solutions-btn"
                    className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                  >
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    data-testid="hero-contact-btn"
                    variant="outline"
                    className="border border-zinc-700 text-white hover:bg-zinc-800 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                  >
                    Request Quote
                  </Button>
                </Link>
              </motion.div>

              {/* Tech Stats */}
              <motion.div 
                variants={fadeInUp}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {[
                  { value: '99.9%', label: 'Uptime' },
                  { value: '500+', label: 'Deployments' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden corner-brackets">
                <img
                  src="https://images.unsplash.com/photo-1585240027282-07853a0b05d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                  alt="Advanced drone system"
                  className="w-full h-full object-cover img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Technical Overlay */}
                <div className="absolute top-4 left-4 data-overlay text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Crosshair className="h-3 w-3" />
                    <span>SYS.ACTIVE</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 data-overlay text-right text-zinc-500">
                  <span>LAT: 37.7749°N</span>
                  <br />
                  <span>LON: 122.4194°W</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-12 border-y border-zinc-800 overflow-hidden bg-zinc-950">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                {['ENERGY CO', 'INFRASTRUCTURE INC', 'CONSTRUCT GLOBAL', 'POWER SYSTEMS', 'AERO DYNAMICS', 'TECH INDUSTRIES'].map((company) => (
                  <span 
                    key={company} 
                    className="font-mono text-sm text-zinc-600 uppercase tracking-widest"
                  >
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Our Mission]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Engineering the future of autonomous flight for industrial excellence.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              [Solutions]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              What We Deliver
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Industrial Inspection',
                description: 'Comprehensive inspection services for energy, infrastructure, and manufacturing facilities.',
                image: 'https://images.unsplash.com/photo-1758797849151-1725021be42a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
              },
              {
                icon: Map,
                title: 'Mapping & Surveying',
                description: 'High-precision aerial mapping and 3D modeling for construction and land surveying.',
                image: 'https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
              },
              {
                icon: Cpu,
                title: 'Custom Integration',
                description: 'Tailored drone systems and software solutions designed for your specific requirements.',
                image: 'https://images.unsplash.com/photo-1580786573431-f283d8bbacec?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  to="/solutions" 
                  data-testid={`service-card-${index}`}
                  className="block bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all card-hover"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <service.icon className="h-6 w-6 text-orange-500 mb-4" />
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="font-mono text-xs uppercase tracking-wider text-orange-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="relative py-24 md:py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769629918424-28594e8dcff8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
            alt="Technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-zinc-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Technology]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Military-Grade
                <br />
                <span className="text-zinc-500">Reliability</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
                Our systems are built to operate in the most demanding environments. Redundant flight controls, advanced sensor fusion, and real-time telemetry ensure mission success.
              </p>
              <Link to="/technology">
                <Button 
                  data-testid="tech-cta-btn"
                  className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                >
                  Explore Technology <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, label: 'Precision Navigation', value: '±2cm' },
                { icon: Signal, label: 'Communication Range', value: '50km' },
                { icon: Zap, label: 'Flight Duration', value: '90min' },
                { icon: Shield, label: 'Safety Rating', value: 'IP67' },
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-black/50 backdrop-blur-sm border border-zinc-800 p-6"
                >
                  <item.icon className="h-6 w-6 text-orange-500 mb-4" />
                  <p className="font-mono text-2xl font-bold text-white mb-1">{item.value}</p>
                  <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
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
              [Industries]
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
              Built for Every Sector
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Energy', icon: Zap },
              { name: 'Construction', icon: Target },
              { name: 'Infrastructure', icon: Map },
              { name: 'Manufacturing', icon: Cpu },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  to="/industries"
                  data-testid={`industry-${industry.name.toLowerCase()}`}
                  className="block bg-zinc-900 border border-zinc-800 p-8 text-center hover:border-zinc-700 transition-all card-hover"
                >
                  <industry.icon className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-mono text-sm uppercase tracking-wider text-white">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
              [Ready to Deploy?]
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-white mb-8">
              Let's Build the Future
              <br />
              <span className="text-zinc-600">Together</span>
            </h2>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10">
              Contact our team to discuss your requirements and discover how Skyclean Solutions can transform your operations.
            </p>
            <Link to="/contact">
              <Button 
                data-testid="cta-contact-btn"
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-10 py-5 font-mono text-sm uppercase tracking-wider"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
