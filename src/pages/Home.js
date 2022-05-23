import HeroSection from "../component/HeroSection";
import ImproveSkills from "../component/ImproveSkills";
import QuoteSection from "../component/QuoteSection";
import ChiefSection from "../component/ChiefSection";

export default function Home(){
    return(
        <div>
          <HeroSection />
          <ImproveSkills />
          <QuoteSection /> 
          <ChiefSection />
        </div>
    )
}