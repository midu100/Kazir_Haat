import React from 'react'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import TopSellingSection from '../components/TopSellingSection'
import PromoBannerOne from '../components/PromoBannerOne'
import SpiceSection from '../components/SpiceSection'
import OilGheeSection from '../components/OilGheeSection'
import PromoBannerTwo from '../components/PromoBannerTwo'
import RiceLentilSection from '../components/RiceLentilSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TestimonialSection from '../components/TestimonialSection'
import VideoSection from '../components/VideoSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <TopSellingSection />
      <PromoBannerOne />
      <SpiceSection />
      <OilGheeSection />
      <PromoBannerTwo />
      <RiceLentilSection />
      <WhyChooseUs />
      <TestimonialSection />
      <VideoSection />
    </div>
  )
}

export default Home