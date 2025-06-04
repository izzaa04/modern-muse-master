
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexdesigner",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alexdesigner",
      icon: "🐦"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/alexdesigner",
      icon: "📸"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/alexdesigner",
      icon: "🏀"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Talk
          </h1>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about design? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:alex@example.com" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    alex@example.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a 
                    href="tel:+15551234567" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    San Francisco, CA
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect Online
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-medium text-gray-900 group-hover:text-gray-700">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Current Availability
              </h3>
              <p className="text-gray-600 mb-4">
                I'm currently accepting new projects and collaborations. 
                Whether you need design consultation, full project development, 
                or ongoing design support, let's discuss how I can help.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
