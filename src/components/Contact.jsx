import React from 'react';
import { Send, Check } from 'lucide-react';

export const Contact = ({ darkMode, formData, setFormData, formStatus, handleSubmit }) => {
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's work together!
          </p>
        </div>
        <div className="glass-card rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-6 py-4 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} border-2 ${borderClass} focus:border-purple-600 focus:outline-none transition-all`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-6 py-4 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} border-2 ${borderClass} focus:border-purple-600 focus:outline-none transition-all`}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className={`w-full px-6 py-4 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} border-2 ${borderClass} focus:border-purple-600 focus:outline-none transition-all resize-none`}
                placeholder="Ask me Your Queries here..."
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sent'}
              className={`w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 ${formStatus === 'sent' ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {formStatus === 'sent' ? (
                <>
                  <Check size={20} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
