'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Loader2, Sparkles, RefreshCw, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'model', content: 'Hello there! 👋 I’m your friendly AI assistant from STRIVEUP, here to help you with all your digital needs! What’s your name?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input.trim();
    if (!messageToSend || isLoading) return;

    setInput('');
    setShowMenu(false);
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, history: messages }),
      });

      if (!res.ok) throw new Error('Chat request failed');

      const data = await res.json();
      const response = data.response || "I'm sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'model', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ role: 'model', content: 'Hello there! 👋 I’m your friendly AI assistant from STRIVEUP, here to help you with all your digital needs! What’s your name?' }]);
    setShowMenu(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 sm:mb-6 w-[calc(100vw-2rem)] sm:w-[380px] shadow-2xl rounded-[2rem] overflow-hidden"
          >
            <Card className="border-0 h-[500px] sm:h-[600px] max-h-[80vh] flex flex-col bg-background shadow-none rounded-[2rem]">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <Sparkles className="w-6 h-6" />
                  <span>STRIVEUP</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground rounded-full"
                  onClick={handleReset}
                >
                  <RefreshCw className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background" ref={scrollRef}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] text-base leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-none px-5 py-3'
                          : 'text-foreground'
                      }`}
                    >
                      {msg.content}
                      {msg.role === 'model' && (
                        <div className="text-[10px] text-muted-foreground mt-2 opacity-60">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 px-2">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions Menu */}
              <AnimatePresence>
                {showMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-[80px] left-4 right-4 bg-card border border-border shadow-xl rounded-2xl p-2 z-10"
                  >
                    <div className="flex flex-col gap-1">
                      {[
                        "Start a project with us",
                        "Explore Services",
                        "I'm looking for a job"
                      ].map((action) => (
                        <Button
                          key={action}
                          variant="ghost"
                          className="w-full justify-start text-left h-auto py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary"
                          onClick={() => handleSend(action)}
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Area */}
              <div className="p-4 bg-background border-t border-border/40">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2 bg-muted/30 rounded-full px-2 py-1 border border-border/50 focus-within:border-primary/50 transition-colors"
                >
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full text-muted-foreground hover:text-primary transition-colors ${showMenu ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                  
                  <Input
                    placeholder="Enter a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border-0 shadow-none focus-visible:ring-0 bg-transparent px-2 text-base h-12"
                    disabled={isLoading}
                  />
                  
                  <Button 
                    type="submit" 
                    size="icon" 
                    variant="ghost"
                    className="rounded-full text-muted-foreground hover:text-primary"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className={`h-16 w-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 ${
          isOpen 
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground rotate-90' 
            : 'bg-card hover:bg-card/90 text-primary -rotate-0'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative"
            >
              <MessageCircle className="w-8 h-8 fill-current" />
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 fill-current text-primary animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}
