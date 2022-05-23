 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection(){
    return(
        <div className="section quote">
        <p className="quote-text"> <FontAwesomeIcon icon={faQuoteLeft}/>Makanan adalah obat paling mujarab untuk penyakit patah hati</p>
        <p className="quote-auther">-Jenny Thalia Faurine</p>   
            </div>
    )
}