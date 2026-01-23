'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "Hello! 👋 Welcome to Eterna Interiors. How can we help you today?",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Tell me about your services",
    "I want to buy products",
    "Schedule a consultation",
    "Ask about pricing",
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';

      if (message.toLowerCase().includes('service')) {
        botResponse =
          "We offer comprehensive interior design services including residential design, commercial spaces, renovations, and design consultations. Would you like to schedule a free consultation?";
      } else if (message.toLowerCase().includes('product') || message.toLowerCase().includes('buy')) {
        botResponse =
          "Great! You can browse our product catalog on the Products page. We offer luxury furniture, lighting, textiles, and more. All products can be purchased individually or as part of a design project. Need help choosing?";
      } else if (message.toLowerCase().includes('consult') || message.toLowerCase().includes('appointment')) {
        botResponse =
          "I'd be happy to help you schedule a consultation! Please visit our Contact page or call us at (555) 123-4567. Our design consultations are complimentary. What type of project are you working on?";
      } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        botResponse =
          "Our pricing varies based on project scope and requirements. Design consultations start with a free assessment. For products, you can see prices on our Products page. Would you like to discuss a specific project?";
      } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        botResponse =
          "Hello! Nice to connect with you. I'm here to help with any questions about our interior design services or products. What brings you to Eterna Interiors today?";
      } else {
        botResponse =
          "Thank you for your message! For detailed assistance, I recommend: 📧 Emailing us at info@eternainteriors.com, 📞 Calling +254 118 407 660, 📱 WhatsApp +254 118 407 660, or 📅 Scheduling a consultation through our Contact page. How else can I help you?";
      }

      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 right-8 z-50 bg-eterna-maroon text-white rounded-full p-4 shadow-2xl hover:bg-eterna-maroon/90 transition-all backdrop-blur-sm border-2 border-eterna-accent/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-eterna-accent text-eterna-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            1
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-eterna-accent/20"
            style={{ maxHeight: '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-eterna-maroon via-amber-900 to-eterna-black text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-eterna-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-eterna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-eterna-accent">Eterna Interiors</h3>
                    <p className="text-xs text-eterna-accent/80">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-eterna-maroon text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none shadow-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick replies:</p>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="w-full text-left px-4 py-2 bg-white border border-eterna-maroon/30 rounded-lg text-sm text-gray-700 hover:bg-eterna-accent/10 hover:border-eterna-maroon transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputMessage);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-eterna-maroon focus:border-transparent outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="bg-eterna-maroon text-white p-2 rounded-full hover:bg-eterna-maroon/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                For immediate assistance, call +254 118 407 660
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
