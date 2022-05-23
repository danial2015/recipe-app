import QuoteSection from "../component/QuoteSection";
import CreatorCard from "../component/CreatorCard";
import AboutContent from "../component/AboutContent";

export default function About(){
    return(
        <div className="about">
            <AboutContent/>
            <div className="about-quotes"> 
                <QuoteSection/>
                <h2 className="title-about">OUR TEAM</h2>
                <CreatorCard/>
                <br>
                </br>
            </div> 
        </div>
    );
}