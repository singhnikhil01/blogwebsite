import Hero from "./components/home/hero/Hero";
import About from './components/home/about/about';
import SkillSection from "./components/home/skills/skills";
import ServicesSection from './components/home/service/services'
import ExprienceSection from './components/home/exprience/Exprience'
import EducationTimeline from "./components/home/education/educationSection";
import Navbar from "./components/home/navbar/Navbar";
import Projects from "./components/home/project/ProjectSection";
import ContactSection from './components/home/contact/contactForm'
import FooterSection from './components/footer/Footer'
// import BlogSection from './components/home/blogs/blogSection';
import GallerySection from './components/home/gallery/gallerySection';
export default function Home() {
  return (
    
     <main className=" max-w-[100%] overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
       <Navbar />
       <Hero />
       <About/>
      <SkillSection/>
      <ServicesSection/>
      <ExprienceSection/> 
      <EducationTimeline/>
      <Projects/>
      {/* <BlogSection/> */}
      <GallerySection/>
      <ContactSection/>
      <FooterSection />

     </main>
  );
}
