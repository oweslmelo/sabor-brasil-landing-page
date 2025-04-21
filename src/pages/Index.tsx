
import { useState } from 'react';
import { ChefHat, Coffee, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-brasil-sand">
      {/* Header/Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brasil-pattern opacity-10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-brasil-forest mb-6">
              Discover the Sweet & Spicy
              <span className="text-brasil-sunset block">
                Flavors of Brazil
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Master authentic Brazilian recipes in your own kitchen with our beautifully crafted eBook
            </p>
          </div>

          {/* Book Mockup */}
          <div className="relative max-w-md mx-auto mb-12 transform transition-transform duration-500 hover:scale-105"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
              alt="Brazilian Food"
              className="rounded-lg shadow-2xl"
            />
            <div className={`absolute inset-0 bg-gradient-to-r from-brasil-green/20 to-brasil-yellow/20 rounded-lg transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              className="bg-brasil-sunset hover:bg-brasil-sunset/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Start Cooking Brazilian Today! 🇧🇷
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-brasil-sand to-white">
              <ChefHat className="w-12 h-12 mx-auto mb-4 text-brasil-forest" />
              <h3 className="text-xl font-bold mb-2">Easy to Follow Recipes</h3>
              <p>Simple steps with accessible ingredients</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-brasil-sand to-white">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-brasil-forest" />
              <h3 className="text-xl font-bold mb-2">Authentic Flavors</h3>
              <p>Traditional recipes adapted for your kitchen</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-brasil-sand to-white">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-brasil-forest" />
              <h3 className="text-xl font-bold mb-2">Brazilian Culture</h3>
              <p>Stories behind each delicious dish</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-brasil-pattern py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center font-bold mb-12 text-brasil-forest">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto bg-gradient-to-r from-brasil-green/10 to-brasil-yellow/10 p-8 rounded-lg shadow-lg">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-brasil-forest">
              Special Launch Offer
            </h2>
            <div className="text-6xl font-bold mb-4">
              <span className="text-brasil-sunset">£6.99</span>
            </div>
            <p className="text-red-600 mb-6">Limited Time Only!</p>
            <Button className="bg-brasil-sunset hover:bg-brasil-sunset/90 text-white px-8 py-6 text-lg rounded-full shadow-lg">
              Get Your Copy Now!
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-brasil-sand py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center font-bold mb-12 text-brasil-forest">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-brasil-forest">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-brasil-green to-brasil-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Start Your Brazilian Culinary Journey Today!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Limited time offer - Get your copy now and master Brazilian cuisine!
          </p>
          <Button className="bg-brasil-yellow hover:bg-brasil-yellow/90 text-brasil-blue px-8 py-6 text-lg rounded-full shadow-lg">
            Download Now 🇧🇷
          </Button>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "London, UK",
    text: "I never knew Brazilian cuisine could be so accessible! The recipes are easy to follow and absolutely delicious.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "James Wilson",
    location: "Manchester, UK",
    text: "The Pão de Queijo recipe alone is worth the price. My family can't get enough of these cheese breads!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Emily Parker",
    location: "Edinburgh, UK",
    text: "Beautiful photos, clear instructions, and authentic flavors. This eBook exceeded my expectations!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces",
  },
];

const faqs = [
  {
    question: "Is this book digital or physical?",
    answer: "This is a digital eBook (PDF format) that you can read on any device - your computer, tablet, or smartphone.",
  },
  {
    question: "Are the recipes suitable for beginners?",
    answer: "Yes! All recipes come with clear, step-by-step instructions and helpful tips for cooks of all skill levels.",
  },
  {
    question: "Do I need special ingredients?",
    answer: "We've carefully adapted the recipes to use ingredients commonly available in UK supermarkets while maintaining authentic flavors.",
  },
  {
    question: "How many recipes are included?",
    answer: "The eBook contains 30 traditional Brazilian recipes, including main dishes, sides, desserts, and drinks.",
  },
];

export default Index;
