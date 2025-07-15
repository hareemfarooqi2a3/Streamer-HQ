"use client";

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SocialLinks from '../components/SocialLinks';
import MerchSection from '../components/MerchSection';
import ContentHighlights from '../components/ContentHighlights';
import ScheduleSection from '../components/ScheduleSection';
import AboutSection from '../components/AboutSection';
import SponsorsSection from '../components/SponsorsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { useState, useCallback } from 'react';

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatbotInitialMessage, setChatbotInitialMessage] = useState<string | undefined>(undefined);

  // Helper function to open chatbot with a specific message
  const handleOpenChatbotWithMessage = useCallback((message: string) => {
    setChatbotInitialMessage(message);
    setIsChatbotOpen(true);
  }, []);

  // Handlers for specific button clicks to open the chatbot with a message
  const handlePartnerClick = useCallback(() => {
    handleOpenChatbotWithMessage("For partnership opportunities, please email partnerships@streamerdomain.com with details about your brand and proposal. Include 'Partnership Inquiry' in the subject line. Looking forward to chatting!");
  }, [handleOpenChatbotWithMessage]);

  const handleDiscordClick = useCallback(() => {
    handleOpenChatbotWithMessage("Click this link to join our Discord community: <a href='#' class='text-primary hover:underline'>discord.gg/streamer</a>. Make sure to read the rules and verify when you arrive. See you there!");
  }, [handleOpenChatbotWithMessage]);


  return (
    <>
      <Navbar onDiscordClick={handleDiscordClick} /> {/* Pass the handler to Navbar */}
      <main>
        <HeroSection />
        <SocialLinks />
        <MerchSection />
        <ContentHighlights />
        <ScheduleSection />
        <AboutSection />
        <SponsorsSection onPartnerClick={handlePartnerClick} /> {/* Pass the handler to SponsorsSection */}
        <NewsletterSection />
      </main>
      <Footer />
      <Chatbot
        isOpen={isChatbotOpen}
        setIsOpen={setIsChatbotOpen}
        initialMessage={chatbotInitialMessage}
      />
    </>
  );
}