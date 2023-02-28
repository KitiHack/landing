import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { getInitialBlogs } from "@/utils/blog";
import { Inter } from "@next/font/google";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });


function Home() {  

  const blogs = use(getInitialBlogs());

  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog blogs={blogs} />
      <Contact />
    </>
  );
}

export default Home;
