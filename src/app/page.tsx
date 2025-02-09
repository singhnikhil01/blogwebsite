import Hero from "./components/home/hero/Hero";
import About from './components/home/about/about';
import SkillSection from "./components/home/skills/skills";
import ServicesSection from './components/home/service/services'
import ExprienceSection from './components/home/exprience/Exprience'
import EducationTimeline from "./components/home/education/educationSection";
import Navbar from "./components/home/navbar/Navbar";
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
     </main>
  );
}
