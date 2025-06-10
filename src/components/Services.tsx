import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, Sparkles, Calendar, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Cakes',
      description: 'Elegant multi-tier wedding cakes that make your special day unforgettable.',
      features: ['Custom designs', 'Multiple flavors', 'Fresh flowers', 'Delivery included'],
      price: 'Starting at $299',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Gift,
      title: 'Birthday Cakes',
      description: 'Fun and creative birthday cakes for all ages, from kids to adults.',
      features: ['Character themes', 'Photo printing', 'Custom messages', 'Party decorations'],
      price: 'Starting at $89',
      image: 'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional cakes for corporate celebrations and business milestones.',
      features: ['Logo integration', 'Large quantities', 'Professional delivery', 'Setup service'],
      price: 'Starting at $199',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Special Occasions',
      description: 'Custom cakes for graduations, anniversaries, and other celebrations.',
      features: ['Themed designs', 'Personalization', 'Size options', 'Flavor variety'],
      price: 'Starting at $129',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Holiday Cakes',
      description: 'Seasonal and holiday-themed cakes for festive celebrations.',
      features: ['Seasonal flavors', 'Holiday decorations', 'Traditional designs', 'Gift packaging'],
      price: 'Starting at $99',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Star,
      title: 'Premium Collection',
      description: 'Luxury cakes with premium ingredients and intricate artistic designs.',
      features: ['Gold leaf details', 'Premium ingredients', 'Artistic designs', 'White glove service'],
      price: 'Starting at $499',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mt-2 mb-6">
            Custom Cakes for Every Occasion
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we create personalized cakes that perfectly 
            capture the essence of your special moments.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <service.icon className="text-primary-500" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-500">{service.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h3>
          <p className="text-xl mb-8 opacity-90">
            We love creating unique, one-of-a-kind cakes. Let's discuss your vision and bring it to life!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-500 font-semibold py-3 px-8 rounded-full hover:bg-neutral-50 transition-colors duration-300"
          >
            Request Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;