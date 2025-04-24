
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="min-h-screen bg-gradient-to-b from-[#FFF5E6] to-[#FFE0B2] text-[#333]">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#FF6B35]">
                Discover the Sweet & Spicy
                <span className="text-[#FF9F1C] block mt-2">
                  Flavors of Brazil
                </span>
              </h1>
              <p className="text-lg text-[#444] max-w-xl">Transform your kitchen into a little piece of Brazil with the most traditional Brazilian cuisine recipes with our exclusive eBook. From feijoada to brigadeiros, embark now on a journey of unforgettable flavors!</p>
              <Button 
                onClick={() => window.open('https://pay.kiwify.com/CTYr2lR', '_blank')}
                className="text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-green-600 hover:bg-green-500"
              >
                Get your eBook now!
              </Button>
            </div>
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src="/lovable-uploads/e5641db9-dedd-4a87-92d8-70792d93f44f.png" alt="Brazilian Cuisine eBook Mockup" className="rounded-lg shadow-2xl mx-auto max-w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFD166]/20 rounded-lg" />
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#FF9F1C] rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 relative overflow-hidden bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C]">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-white/90 p-8 rounded-lg shadow-xl">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-[#FF6B35]">
              Special Launch Offer
            </h2>
            <div className="text-6xl font-bold mb-4 text-[#00A859]">
              £6.99
            </div>
            <p className="text-[#FF6B35] mb-6">Limited Time Only!</p>
            <Button 
              onClick={() => window.open('https://pay.kiwify.com/CTYr2lR', '_blank')}
              className="text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-green-600 hover:bg-green-500"
            >
              Download Now 🇧🇷
            </Button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFD166] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6 text-white">
            Start Your Brazilian Culinary Journey Today!
          </h2>
          <p className="text-lg mb-8 text-white opacity-90">
            Limited time offer - Master Brazilian cuisine from your kitchen!
          </p>
          <Button 
            onClick={() => window.open('https://pay.kiwify.com/CTYr2lR', '_blank')}
            className="text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-green-600 hover:bg-green-500"
          >
            Get your eBook now!
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#FFA07A] to-[#FF6347] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12 text-white">What makes this eBook so irresistible?
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-[#FFD700]">20+</h3>
              <p className="text-gray-300">Authentic Recipes</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-[#FFD700]">15 min</h3>
              <p className="text-gray-300">Average Prep Time</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-[#FFD700]">4.9/5</h3>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-[#FFF5E6]">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-center mb-12 text-[#FF6B35]">
            What Our Home Chefs Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#FFD166]/20">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-[#FF9F1C]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-[#333]">{testimonial.text}</p>
              </div>)}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-[#FFF5E6]">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-center mb-12 text-[#FF6B35]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md">
                  <AccordionTrigger className="text-[#FF9F1C] px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#333] px-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Footer with Final CTA */}
      <footer className="bg-gradient-to-r from-[#FF6B35] to-[#FFD166] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6 text-white">
            Start Your Brazilian Culinary Journey Today!
          </h2>
          <p className="text-lg mb-8 text-white opacity-90">
            Limited time offer - Master Brazilian cuisine from your kitchen!
          </p>
          <Button 
            onClick={() => window.open('https://pay.kiwify.com/CTYr2lR', '_blank')}
            className="text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-green-600 hover:bg-green-500"
          >
            Get your eBook now!
          </Button>
        </div>
      </footer>
    </div>;
};

const testimonials = [{
  name: "Sarah Thompson",
  location: "London, UK",
  text: "I never knew Brazilian cuisine could be so accessible! The recipes are easy to follow and absolutely delicious.",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces"
}, {
  name: "James Wilson",
  location: "Manchester, UK",
  text: "The Pão de Queijo recipe alone is worth the price. My family can't get enough of these cheese breads!",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces"
}, {
  name: "Emily Parker",
  location: "Edinburgh, UK",
  text: "Beautiful photos, clear instructions, and authentic flavors. This eBook exceeded my expectations!",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces"
}];

const faqs = [{
  question: "Is this book digital or physical?",
  answer: "This is a digital eBook (PDF format) that you can read on any device - your computer, tablet, or smartphone."
}, {
  question: "Are the recipes suitable for beginners?",
  answer: "Yes! All recipes come with clear, step-by-step instructions and helpful tips for cooks of all skill levels."
}, {
  question: "Do I need special ingredients?",
  answer: "We've carefully adapted the recipes to use ingredients commonly available in UK supermarkets while maintaining authentic flavors."
}, {
  question: "How many recipes are included?",
  answer: "The eBook contains 30 traditional Brazilian recipes, including main dishes, sides, desserts, and drinks."
}];

export default Index;
