'use client';

import React from 'react';

// Import JSON data
import photographer from '@/data/photographer.json';
import gallery from '@/data/gallery.json';
import services from '@/data/services.json';
import pricing from '@/data/pricing.json';
import equipment from '@/data/equipment.json';
import testimonials from '@/data/testimonials.json';
import blog from '@/data/blog.json';
import faq from '@/data/faq.json';
import social from '@/data/social.json';

// Import Sections
import Hero from '@/app/sections/Hero';
import AboutSection from '@/app/sections/AboutSection';
import StatsSection from '@/app/sections/StatsSection';
import BrandsSection from '@/app/sections/BrandsSection';
import ShowreelSection from '@/app/sections/ShowreelSection';
import PhotographyShowcase from '@/app/sections/PhotographyShowcase';
import VideographyShowcase from '@/app/sections/VideographyShowcase';
import EquipmentSection from '@/app/sections/EquipmentSection';
import ServicesSection from '@/app/sections/ServicesSection';
import WorkflowSection from '@/app/sections/WorkflowSection';
import PricingSection from '@/app/sections/PricingSection';
import TestimonialsSection from '@/app/sections/TestimonialsSection';
import AwardsSection from '@/app/sections/AwardsSection';
import InstagramFeed from '@/app/sections/InstagramFeed';
import YouTubeSection from '@/app/sections/YouTubeSection';
import FAQSection from '@/app/sections/FAQSection';
import BlogSection from '@/app/sections/BlogSection';
import ContactSection from '@/app/sections/ContactSection';

export default function HomePage() {
  // Parse and adapt services categories
  const formattedServices = (services as Array<{ id: number; name: string; category: string; description: string; features: string[]; startingPrice: number; icon: string; image: string; }>).map((s) => ({
    ...s,
    category: s.category as 'photography' | 'videography'
  }));

  // Adapt YouTube videos list
  const formattedVideos = (social.youtube.videos as Array<{ id: string; youtubeId: string; title: string; views: string; thumbnail: string; }>).map((v) => ({
    ...v,
    category: "Cinematography",
    description: "A showcase of cinematic storytelling and visual direction."
  }));

  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* 1. Hero Section */}
      <Hero
        name={photographer.name}
        title={photographer.title}
        tagline={photographer.tagline}
        heroImage={photographer.heroImage}
      />

      {/* 2. About Section */}
      <AboutSection
        bio={photographer.bio}
        mission={photographer.mission}
        vision={photographer.vision}
        values={photographer.values}
        whyChooseMe={photographer.whyChooseMe}
        image={photographer.image}
      />

      {/* 3. Stats Section */}
      <StatsSection stats={photographer.stats} />

      {/* 4. Brands Marquee */}
      <BrandsSection brands={photographer.brands} />

      {/* 5. Showreel Section */}
      <ShowreelSection videos={social.youtube.videos} />

      {/* 6. Photography Showcase */}
      <PhotographyShowcase
        categories={gallery.categories}
        beforeAfter={gallery.beforeAfter}
        limit={9} // Only show top 9 images on Home page
      />

      {/* 7. Videography Showcase */}
      <VideographyShowcase videos={formattedVideos} />

      {/* 8. Equipment Section */}
      <EquipmentSection equipment={equipment} />

      {/* 9. Services Section */}
      <ServicesSection services={formattedServices} limit={3} />

      {/* 10. Workflow Timeline */}
      <WorkflowSection />

      {/* 11. Pricing Packages */}
      <PricingSection pricing={pricing} />

      {/* 12. Testimonials Carousel */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 13. Awards Grid */}
      <AwardsSection awards={photographer.awards} />

      {/* 14. Instagram Feed Mockup */}
      <InstagramFeed
        handle={social.instagram.handle}
        followers={social.instagram.followers}
        posts={social.instagram.posts}
      />

      {/* 15. YouTube Feed */}
      <YouTubeSection
        channel={social.youtube.channel}
        subscribers={social.youtube.subscribers}
        totalViews={social.youtube.totalViews}
        videos={social.youtube.videos}
      />

      {/* 16. FAQ Accordion */}
      <FAQSection faq={faq} limit={10} />

      {/* 17. Blog Section */}
      <BlogSection posts={blog} limit={3} />

      {/* 18. Contact Form & Details */}
      <ContactSection contact={social.contact} />
    </div>
  );
}
