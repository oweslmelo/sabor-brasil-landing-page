import { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-brasil-blue to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover the Sweet & Spicy
                <span className="text-brasil-yellow block mt-2">
                  Flavors of Brazil
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Master 30+ authentic Brazilian recipes in your kitchen with our beautifully crafted eBook. From Feijoada to Brigadeiros, start your culinary journey today!
              </p>
              <Button 
                className="bg-brasil-yellow hover:bg-brasil-yellow/90 text-brasil-blue text-lg px-8 py-6 rounded-full shadow-lg animate-pulse"
              >
                Get Your Copy Now! 🇧🇷
              </Button>
            </div>
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500"
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                <img
                  src="/lovable-uploads/e5641db9-dedd-4a87-92d8-70792d93f44f.png"
                  alt="Brazilian Cuisine eBook Mockup"
                  className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brasil-green/20 to-brasil-yellow/20 rounded-lg" />
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brasil-yellow rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-brasil-blue/90 to-brasil-forest/90 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">
            Why Brazilian Cuisine is Taking Over UK Kitchens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-brasil-yellow">30+</h3>
              <p className="text-gray-300">Authentic Recipes</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-brasil-yellow">15 min</h3>
              <p className="text-gray-300">Average Prep Time</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-brasil-yellow">4.9/5</h3>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-b from-brasil-blue/20 to-brasil-forest/20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-center mb-12">
            What Our Home Chefs Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-brasil-yellow">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-gradient-to-r from-brasil-forest/30 to-brasil-blue/30 p-8 rounded-lg border border-white/10 backdrop-blur">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Special Launch Offer
            </h2>
            <div className="text-6xl font-bold mb-4">
              <span className="text-brasil-yellow">£6.99</span>
            </div>
            <p className="text-brasil-sunset mb-6">Limited Time Only!</p>
            <Button className="bg-brasil-yellow hover:bg-brasil-yellow/90 text-brasil-blue px-8 py-6 text-lg rounded-full shadow-lg">
              Download Now 🇧🇷
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gradient-to-b from-brasil-blue/10 to-black">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-center mb-12 text-brasil-yellow">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-lg border border-white/10">
                  <AccordionTrigger className="text-brasil-yellow px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-brasil-green to-brasil-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Start Your Brazilian Culinary Journey Today!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Limited time offer - Master Brazilian cuisine from your kitchen!
          </p>
          <Button className="bg-brasil-yellow hover:bg-brasil-yellow/90 text-brasil-blue px-8 py-6 text-lg rounded-full shadow-lg">
            Get Your Copy Now 🇧🇷
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
