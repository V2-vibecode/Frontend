import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Cpu, Battery, Camera, Signal, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const droneProducts = [
  {
    id: 'sc-1000',
    name: 'SC-1000 SURVEYOR',
    category: 'Mapping',
    tagline: 'Precision Mapping Platform',
    description: 'Enterprise-grade mapping drone with integrated RTK GPS and multi-spectral imaging capabilities.',
    image: 'https://images.unsplash.com/photo-1585240027282-07853a0b05d7?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    specs: [
      { label: 'Flight Time', value: '90 min' },
      { label: 'Range', value: '40 km' },
      { label: 'Payload', value: '2.5 kg' },
      { label: 'Accuracy', value: '±2 cm' },
    ],
    features: ['RTK GPS', 'Multi-spectral camera', 'Terrain following', 'Automated missions'],
  },
  {
    id: 'sc-2000',
    name: 'SC-2000 INSPECTOR',
    category: 'Inspection',
    tagline: 'Industrial Inspection System',
    description: 'Purpose-built for close-range industrial inspection with dual visual and thermal imaging.',
    image: 'https://images.unsplash.com/photo-1580786573431-f283d8bbacec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    specs: [
      { label: 'Flight Time', value: '60 min' },
      { label: 'Range', value: '15 km' },
      { label: 'Sensors', value: 'Dual' },
      { label: 'Zoom', value: '40x' },
    ],
    features: ['Thermal imaging', 'Zoom camera', 'Obstacle avoidance', 'GPS-denied flight'],
  },
  {
    id: 'sc-3000',
    name: 'SC-3000 HEAVY',
    category: 'Heavy Lift',
    tagline: 'Heavy Payload Carrier',
    description: 'Heavy-lift platform for specialized payloads including LiDAR, gas sensors, and delivery systems.',
    image: 'https://images.unsplash.com/photo-1659353587228-5dbbebb5d98f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    specs: [
      { label: 'Flight Time', value: '45 min' },
      { label: 'Payload', value: '15 kg' },
      { label: 'Motors', value: '8' },
      { label: 'Rating', value: 'IP67' },
    ],
    features: ['Heavy payload', 'Redundant motors', 'All-weather', 'Custom mounts'],
  },
];

const componentProducts = [
  {
    id: 'payload-thermal',
    name: 'Thermal Imaging Module',
    description: 'High-resolution radiometric thermal camera with temperature measurement.',
    price: 'From $4,500',
    icon: Camera,
  },
  {
    id: 'payload-lidar',
    name: 'LiDAR Sensor Package',
    description: 'Survey-grade LiDAR with integrated IMU for precise point cloud generation.',
    price: 'From $12,000',
    icon: Signal,
  },
  {
    id: 'battery-extended',
    name: 'Extended Battery Pack',
    description: 'High-capacity lithium batteries for extended flight operations.',
    price: 'From $800',
    icon: Battery,
  },
  {
    id: 'ground-station',
    name: 'Ground Control Station',
    description: 'Portable field station with high-gain antenna and mission planning.',
    price: 'From $6,500',
    icon: Cpu,
  },
];

const Products = () => {
  const [selectedDrone, setSelectedDrone] = useState(droneProducts[0]);

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
              [Products]
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8"
            >
              ENGINEERED
              <br />
              <span className="text-zinc-600">FOR MISSION</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Purpose-built drone systems and components designed for industrial reliability. Every product is tested to military specifications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Tabs defaultValue="drones" className="w-full">
            <TabsList className="bg-zinc-900 border border-zinc-800 rounded-none p-1 mb-12">
              <TabsTrigger 
                value="drones" 
                data-testid="tab-drones"
                className="rounded-none font-mono text-xs uppercase tracking-wider data-[state=active]:bg-orange-500 data-[state=active]:text-white text-zinc-400"
              >
                Drone Systems
              </TabsTrigger>
              <TabsTrigger 
                value="components"
                data-testid="tab-components"
                className="rounded-none font-mono text-xs uppercase tracking-wider data-[state=active]:bg-orange-500 data-[state=active]:text-white text-zinc-400"
              >
                Components
              </TabsTrigger>
            </TabsList>

            {/* Drone Systems Tab */}
            <TabsContent value="drones">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Selector */}
                <div className="space-y-4">
                  {droneProducts.map((drone) => (
                    <motion.button
                      key={drone.id}
                      onClick={() => setSelectedDrone(drone)}
                      data-testid={`drone-select-${drone.id}`}
                      className={`w-full text-left p-6 border transition-all ${
                        selectedDrone.id === drone.id
                          ? 'bg-zinc-900 border-orange-500'
                          : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                      }`}
                      whileHover={{ x: selectedDrone.id === drone.id ? 0 : 4 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-xs text-orange-500 uppercase tracking-wider block mb-1">
                            {drone.category}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-white">
                            {drone.name}
                          </h3>
                          <p className="text-sm text-zinc-500 mt-1">{drone.tagline}</p>
                        </div>
                        <ChevronRight className={`h-5 w-5 transition-colors ${
                          selectedDrone.id === drone.id ? 'text-orange-500' : 'text-zinc-700'
                        }`} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Selected Product Details */}
                <motion.div
                  key={selectedDrone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-900 border border-zinc-800"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={selectedDrone.image}
                      alt={selectedDrone.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="font-mono text-xs text-orange-500 uppercase tracking-wider block mb-2">
                      {selectedDrone.category}
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-white mb-4">
                      {selectedDrone.name}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {selectedDrone.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-black border border-zinc-800">
                      {selectedDrone.specs.map((spec) => (
                        <div key={spec.label} className="text-center">
                          <p className="font-mono text-lg font-bold text-white">{spec.value}</p>
                          <p className="font-mono text-xs text-zinc-600 uppercase">{spec.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedDrone.features.map((feature) => (
                        <span 
                          key={feature}
                          className="flex items-center gap-1 px-3 py-1 bg-zinc-800 text-zinc-300 font-mono text-xs"
                        >
                          <Check className="h-3 w-3 text-orange-500" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button 
                        data-testid={`request-quote-${selectedDrone.id}`}
                        className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                      >
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {componentProducts.map((component, index) => (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-all card-hover"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
                        <component.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-mono text-sm font-bold text-orange-500">
                        {component.price}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {component.name}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                      {component.description}
                    </p>
                    <Link to="/contact">
                      <Button 
                        data-testid={`component-inquiry-${component.id}`}
                        variant="outline"
                        className="w-full border border-zinc-700 text-white hover:bg-zinc-800 rounded-none px-6 py-3 font-mono text-xs uppercase tracking-wider"
                      >
                        Inquire <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-500 block mb-6">
                [Custom Solutions]
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                Need Something
                <br />
                <span className="text-zinc-600">Specific?</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Our engineering team can design and build custom drone platforms tailored to your exact specifications. From specialized payloads to unique operational requirements, we deliver solutions that don't exist off-the-shelf.
              </p>
              <Link to="/contact">
                <Button 
                  data-testid="custom-solutions-cta"
                  className="bg-orange-500 text-white hover:bg-orange-600 rounded-none px-8 py-4 font-mono text-sm uppercase tracking-wider"
                >
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
                'Custom Payloads',
                'Fleet Integration',
                'Software Development',
                'Training Programs',
                'Maintenance Contracts',
                'Spare Parts Supply',
              ].map((item, index) => (
                <div 
                  key={item}
                  className="bg-zinc-900 border border-zinc-800 p-6 flex items-center gap-3"
                >
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
