"use client"

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@fluidpixls.com",
    link: "mailto:contact@fluidpixls.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 70009 07019",
    link: "tel:+917000907019"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Bhopal, India",
    link: "https://maps.google.com"
  }
];

const ContactForm: React.FC = () => {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Add this effect to handle external message updates
  useEffect(() => {
    const handleMessageUpdate = () => {
      if (messageRef.current && messageRef.current.value) {
        // Optionally add any validation or formatting here
      }
    };

    // Listen for value changes
    if (messageRef.current) {
      messageRef.current.addEventListener('change', handleMessageUpdate);
    }

    return () => {
      if (messageRef.current) {
        messageRef.current.removeEventListener('change', handleMessageUpdate);
      }
    };
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(formRef.current!);

    formData.append("access_key", "c39c60a8-bc19-41e3-b176-bbd29ab7acc4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      formRef.current?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="pb-20 bg-gradient-to-b from-white to-slate-50 bg-cover bg-center" 
      style={{ backgroundImage: "url('/portfolio/blur2.png')" }}>
      <div className="container mx-auto px-4" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in <span className="text-red-500">Touch</span></h2>
          <p className="text-xl text-muted-foreground">
            Let&apos;s discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-white/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="bg-transparent border border-gray/30 rounded-lg p-2 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-transparent border border-gray/30 rounded-lg p-2 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="bg-transparent border border-gray/30 rounded-lg p-2 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      ref={messageRef}
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      className="bg-transparent border border-gray-100 rounded-lg p-2 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Form
                  </Button>
                </form>
                <span className="mt-4 block text-center">{result}</span>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Let&apos;s create something amazing together
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind? We&apos;d love to hear about it. Get in touch with us and let&apos;s create something extraordinary.
              </p>
            </div>

            <div className="grid gap-6 mt-8">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:backdrop-blur-xl transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
    
  )
} 
export default ContactForm;