"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: (status: boolean) => void;
    initialMessage?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen, initialMessage }) => {
    // Define answerQuestion here, before state or effect hooks
    const answerQuestion = (question: string): string => {
        question = question.toLowerCase();

        // Standard responses
        if (question.includes('hello') || question.includes('hi') || question.includes('hey')) {
            return "Hey there! How can I help you today? You can ask about stream schedules, merch, sponsorships, or technical setup.";
        } else if (question.includes('schedule') || question.includes('when do you stream')) {
            return "The regular stream schedule is: Monday 8PM-12AM EST (Warzone), Wednesday 8PM-12AM EST (Variety), Friday 9PM-1AM EST (Fridays with viewers). Check the schedule section for more details!";
        } else if (question.includes('merch') || question.includes('store') || question.includes('armory')) {
            return "We've got awesome merch in the Armory! Right now we're featuring the Signature Hoodie, Emote Snapback, and Streamer Mug Bundle. New items drop monthly - check it out!";
        } else if (question.includes('pc') || question.includes('setup') || question.includes('specs')) {
            return "Current setup: Ryzen 9 5900X, RTX 3080 Ti, 32GB DDR4 3600MHz, 2TB NVMe SSD. Full setup breakdown with links in the Resources section of the website!";
        } else if (question.includes('discord') || question.includes('join the community')) {
            return "The Discord server is where the real community hangs out! Get exclusive access, participate in events, and chat with other fans. Click this link to join now: <a href='#' class='text-primary hover:underline'>discord.gg/streamer</a>!";
        } else if (question.includes('sponsor') || question.includes('partner')) {
            return "For sponsorship/brand partnership inquiries, please use the contact form or click the 'Interested in Partnering?' button in the sponsors section. Business inquiries only please!";
        } else if (question.includes('sub') || question.includes('donate') || question.includes('support')) {
            return "The best way to support is by subscribing on Twitch! You also check out our merch store or consider buying me a coffee (link in Discord). Thanks for the support!";
        } else {
            return "I'm sorry, I didn't understand that question. Try asking about the stream schedule, merch store, or my PC setup. For more complex questions, please reach out on Discord!";
        }
    };


    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hey there! I'm StreamerName's AI assistant. Ask me anything about the stream, merch, schedule, or technical questions. How can I help you today?",
            sender: 'bot'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom of messages whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // When the chatbot is opened and an initialMessage is provided
    useEffect(() => {
        if (isOpen && initialMessage) {
            // Check if this specific message is already the last bot message
            const lastBotMessage = messages[messages.length - 1]; // Get the last message
            // Only add if it's a new message AND it's a bot message (to avoid user messages triggering it)
            if (!(lastBotMessage && lastBotMessage.sender === 'bot' && lastBotMessage.text === initialMessage)) {
                setMessages((prev) => [...prev, { text: initialMessage, sender: 'bot' }]);
            }
        }
    }, [isOpen, initialMessage, messages]);


    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        setMessages((prevMessages) => [...prevMessages, { text, sender: 'user' }]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = answerQuestion(text); // answerQuestion is now in scope
            setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        }, 800);
    };

    const handleQuickBtnClick = (question: string) => {
        handleSendMessage(question);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chatbot Toggle Button */}
            <button
                id="chatbot-toggle"
                className="chatbot-toggle bg-accent w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                 <FontAwesomeIcon icon={faRobot} className="text-2xl text-black" />
            </button>

            {/* Chatbot Container */}
            {isOpen && (
                <div id="chatbot-container" className="absolute bottom-20 right-0 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden animate-fade-in-up">
                    <div className="bg-primary p-3 flex justify-between items-center">
                        <h3 className="font-bold">StreamHQ Assistant</h3>
                        <button id="chatbot-close" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
                             <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    <div id="chatbot-messages" className="h-64 p-4 overflow-y-auto space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                <div className={`${msg.sender === 'user' ? 'bg-primary' : 'bg-gray-700'} p-3 rounded-lg max-w-[80%]`} dangerouslySetInnerHTML={{ __html: msg.text }}>
                                    {/* Using dangerouslySetInnerHTML for the Discord link, generally avoid if not trusted source */}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} /> {/* For auto-scrolling */}
                    </div>

                    <div className="p-3 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2 mb-2">
                            <button
                                className="quick-btn bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-sm transition text-left"
                                onClick={() => handleQuickBtnClick("When's the next stream?")}
                            >
                                When's the next stream?
                            </button>
                            <button
                                className="quick-btn bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-sm transition text-left"
                                onClick={() => handleQuickBtnClick("What's your PC setup?")}
                            >
                                What's your PC setup?
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                id="chatbot-input"
                                type="text"
                                placeholder="Type your question..."
                                className="w-full bg-gray-700 border border-gray-600 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                            />
                            <button
                                id="chatbot-send"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                                onClick={() => handleSendMessage(inputValue)}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;