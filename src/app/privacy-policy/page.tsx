'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </motion.div>

          {/* Shield Hero Section with Background */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-80 rounded-lg overflow-hidden border border-primary/20"
            style={{
              backgroundImage: `url('/assets/shield.png')`,
              backgroundSize: '45%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
              <h2 className="text-4xl font-bold mb-4">Your Data is Secure</h2>
              <p className="text-gray-200 max-w-2xl text-lg">
                We implement industry-standard security measures to protect your information from unauthorized access and misuse.
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed">
              We collect personal information only when you voluntarily submit it through our contact form. This includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-400 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We use your personal information solely to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-400 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Fulfill your requests for services</li>
              <li>Improve our website and services</li>
              <li>Communicate important updates</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Data Protection</h2>
            <p className="text-gray-400 leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data is treated with the utmost confidentiality and is protected through secure transmission protocols.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              This website may use cookies for analytics, performance optimization, and user experience enhancement. These cookies do not store personally identifiable information by default.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us through the form on our website.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please reach out through our contact page.
            </p>
          </motion.section>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-primary/20"
        >
          <Link href="/" className="btn-outline inline-flex items-center justify-center px-6 py-3">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
