import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/movqavlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      alert("Failed to send message");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <p className="text-2xl">Thanks for your message!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 rounded bg-gray-700"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            className="w-full p-2 rounded bg-gray-700"
            rows="4"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <a 
          href="mailto:siyajalis@gmail.com"
          className="text-indigo-500 hover:text-indigo-400"
        >
          siyajalis@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;