'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, Users, Award, Search, Download, Brain } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container-max flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Focus Study Well</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#subjects" className="text-gray-600 hover:text-indigo-600 transition">Subjects</a>
          </div>
          <Link href="/auth/login" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container-max py-20 md:py-32">
        <motion.div className="text-center" variants={fadeInUp} initial="initial" animate="animate">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Master Biotechnology & Microbiology
          </h1>
          <p className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4 font-semibold italic">
            विद्याधनं सर्वधनप्रधानम्।
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            "The Wealth of Knowledge is the Supreme Wealth."
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn with simplified notes, colorful diagrams, interactive quizzes, and downloadable PDFs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subjects" className="btn-primary text-lg">
              Start Learning
            </Link>
            <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all inline-flex items-center gap-2">
              <Search className="w-5 h-5" />
              Browse Topics
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container-max py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Why Choose Focus Study Well?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: 'Simplified Content', description: 'Complex concepts explained simply' },
            { icon: Brain, title: 'AI Assistant', description: 'Get instant help with your doubts' },
            { icon: Download, title: 'Downloadable PDFs', description: 'Offline study materials' },
            { icon: Zap, title: 'Interactive Quizzes', description: 'Practice and assess yourself' },
            { icon: Users, title: 'Personalized Learning', description: 'Learn at your own pace' },
            { icon: Award, title: 'Track Progress', description: 'Earn achievements and badges' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container-max py-12 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Focus Study Well. Built with ❤️ for students everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
