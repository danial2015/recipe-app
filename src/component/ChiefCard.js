import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function CheifCard ({chief}) {
    return (
        <div className="chief-card">
                <img src={chief.img} alt=""/>
            <div className="chief-card-info">
                <h1 className="cheif-card-name">{chief.name}</h1>
                <p className="chief-recipe-count">Resep : <b>{chief.recipeCount}</b></p>
                <p className="chief-cuisine">Masakan : <b>{chief.causine}</b></p>
                <p className="cheif-icons">
                <a href="https://web.facebook.com/fatima" className="facebook social">
                <FontAwesomeIcon icon={faFacebook}  />
            </a>
            <a href="https://twitter.com/fatima" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/faizil.aqsa09/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                </p>
            </div>
        </div>
    )
}