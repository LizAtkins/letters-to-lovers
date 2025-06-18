import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xeokzvlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-coquette-text mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-coquette-text-light leading-relaxed">
          Have thoughts about the poems? Want to share your own love story? 
          I'd love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-8">
        <h2 className="text-2xl font-serif font-semibold text-coquette-text mb-6">
          Send a Message
        </h2>
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Thank you for your message! I'll get back to you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Sorry, there was an error sending your message. Please try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-coquette-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-coquette-card-border rounded-lg focus:outline-none focus:ring-2 focus:ring-coquette-primary focus:border-transparent bg-white text-coquette-text disabled:bg-gray-50 disabled:cursor-not-allowed"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-coquette-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-coquette-card-border rounded-lg focus:outline-none focus:ring-2 focus:ring-coquette-primary focus:border-transparent bg-white text-coquette-text disabled:bg-gray-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-coquette-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-coquette-card-border rounded-lg focus:outline-none focus:ring-2 focus:ring-coquette-primary focus:border-transparent bg-white text-coquette-text resize-vertical disabled:bg-gray-50 disabled:cursor-not-allowed"
              placeholder="Share your thoughts, questions, or your own love story..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-coquette-blue hover:bg-coquette-blue/90 text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>

      {/* Additional Information */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-serif font-semibold text-coquette-text mb-4">
            Share Your Story
          </h3>
          <p className="text-coquette-text-light">
            If you have a love story you'd like to share, or if one of these poems 
            resonated with your own experience, I'd love to hear about it!
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-serif font-semibold text-coquette-text mb-4">
            Feedback & Suggestions
          </h3>
          <p className="text-coquette-text-light">
            Have ideas for new categories, themes, or ways to improve the website? 
            Your feedback helps make this space better for everyone who visits.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-serif font-semibold text-coquette-text mb-4">
            Collaboration
          </h3>
          <p className="text-coquette-text-light">
            Interested in collaborating on poetry projects, readings, or other 
            creative endeavors? Let's explore the possibilities together!
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-serif font-semibold text-coquette-text mb-4">
            Just Say Hello
          </h3>
          <p className="text-coquette-text-light">
            Sometimes the best messages are the simple ones. If you just want to 
            say hello or share a moment of connection, that's perfectly welcome too.
          </p>
        </div>
      </section>

      {/* Response Time */}
      <section className="text-center bg-coquette-blue/10 rounded-xl p-8">
        <h3 className="text-lg font-serif font-semibold text-coquette-text mb-2">
          Response Time
        </h3>
        <p className="text-coquette-text-light">
          I typically respond to messages within 24-48 hours. Thank you for your patience 
          and for taking the time to reach out.
        </p>
      </section>
    </div>
  );
};

export default Contact; 