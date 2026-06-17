import HomeCards from "../components/homeCards";
import HomeAI from "../components/homeAI";
import HomeHero from "../components/homeHero";
import HomeStats from "../components/HomeStats";


export default function Home() {
  

  return (
    <>
   
    <div className="bg-[#1E1E2F] min-h-screen flex flex-col items-center p-8">
           <div className="flex w-full max-w-[90%] gap-8 mb-12 items-start">
      <HomeHero />
        <HomeAI />
        </div>
      <HomeCards />
      <HomeStats /> 
      </div>
     </>
  );
}
