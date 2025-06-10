import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Navify Bakery created the wedding cake of our dreams! The attention to detail was incredible, and it tasted even better than it looked. Our guests are still talking about it months later.',
      occasion: 'Wedding Cake'
    },
    {
      name: 'Michael Chen',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As an event planner, I work with many bakeries, but Navify consistently delivers exceptional quality. Their corporate cakes are always professional and delicious.',
      occasion: 'Corporate Events'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mother',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'My daughter\'s birthday cake was absolutely perfect! They captured her favorite character beautifully, and the cake was moist and flavorful. Highly recommend!',
      occasion: 'Birthday Cake'
    },
    {
      name: 'David Thompson',
      role: 'Anniversary Celebration',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'For our 25th anniversary, Navify created a stunning cake that perfectly represented our journey together. The craftsmanship and flavor were both outstanding.',
      occasion: 'Anniversary Cake'
    },
    {
      name: 'Lisa Park',
      role: 'Graduate',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'My graduation cake was the highlight of the party! The design was creative and the taste was incredible. Thank you for making my special day even more memorable.',
      occasion: 'Graduation Cake'
    },
    {
      name: 'Robert Wilson',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Navify has been our go-to bakery for all company celebrations. Their professionalism, quality, and reliability are unmatched. Always exceeds expectations!',
      occasion: 'Corporate Partnership'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mt-2 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about 
            their experience with Navify Bakery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <Quote className="text-primary-500" size={16} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Occasion Badge */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <span className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.occasion}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Trusted by Thousands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Cakes Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-lg text-neutral-600 mb-8">
            Let us create something special for your next celebration.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Order Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;