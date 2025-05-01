
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About LearnHub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                LearnHub began with a simple idea: create a platform where people can access high-quality educational content at their own pace, regardless of their background or location.
              </p>
              <p className="text-lg text-gray-700">
                Founded in 2023, we've grown from a small team of passionate educators to a thriving community of learners and instructors from around the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Team working together" 
                className="w-full h-64 object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We believe that education is a fundamental right. Our mission is to break down barriers to quality education and empower individuals to transform their lives through learning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">
                We partner with industry experts to deliver high-quality, up-to-date content across a range of subjects.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
              <p className="text-gray-600">
                We foster a supportive learning environment where everyone feels welcome and valued.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <Check className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                We're committed to constantly improving our platform based on learner feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your learning journey today and become part of our growing community of lifelong learners.
          </p>
          <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
