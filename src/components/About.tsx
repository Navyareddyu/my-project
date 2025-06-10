import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cake is crafted with passion and attention to detail, using only the finest ingredients.'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'Three generations of baking expertise passed down through our family recipes and techniques.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by culinary institutes and featured in top food magazines for our innovative designs.'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'We bake fresh daily and never compromise on quality, ensuring every bite is perfect.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="text-primary-500 font-semibold text-lg">About Navify Bakery</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mt-2 mb-6">
                Crafting Sweet Memories Since 2008
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                At Navify Bakery, we believe every celebration deserves a centerpiece as unique as the moment itself. 
                Our master bakers combine traditional techniques with modern artistry to create customized cakes that 
                not only look stunning but taste absolutely divine.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                From intimate birthday parties to grand wedding celebrations, we work closely with you to bring your 
                vision to life. Every cake tells a story, and we're honored to be part of yours.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Baker decorating a custom cake"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">Master Certified</h4>
                  <p className="text-sm text-neutral-600">Professional Cake Artist</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                <feature.icon className="text-primary-500 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;