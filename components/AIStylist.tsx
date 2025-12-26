import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your personal TONI&GUY Style Consultant. Tell me about your hair type or what look you are aiming for today.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getStyleAdvice(userText);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-stylist" className="py-24 bg-tg-grey relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black to-transparent opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-500 w-6 h-6" />
            <h3 className="text-yellow-500 uppercase tracking-widest text-sm">AI Powered Consultation</h3>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-6">
            Find Your <br/>Perfect Look
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Not sure what style suits you? Describe your face shape, hair texture, or the occasion, 
            and let our Gemini-powered AI Stylist recommend the perfect cut or color from our collection.
          </p>
          <div className="hidden md:block p-6 border border-gray-800 bg-black/50 backdrop-blur-sm">
            <h4 className="text-white font-bold mb-2">Try asking:</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setQuery("I have a round face and thin hair. What short cut would look edgy?")}>"I have a round face and thin hair. What short cut would look edgy?"</li>
              <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setQuery("What are the trending hair colors for this winter?")}>"What are the trending hair colors for this winter?"</li>
              <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setQuery("How do I maintain platinum blonde hair in Bangalore's weather?")}>"How do I maintain platinum blonde hair in Bangalore's weather?"</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[500px]">
          <div className="bg-black border border-gray-800 h-full flex flex-col rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
              <span className="text-white font-bold tracking-wider text-xs uppercase">Virtual Assistant</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white text-black rounded-tr-none' 
                        : 'bg-gray-800 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-4 rounded-lg rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-gray-900 flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about your style..." 
                className="flex-1 bg-black border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-white text-black p-3 hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;