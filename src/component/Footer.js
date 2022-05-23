import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <p className="title">Reseepku</p>
        <p>
          Reseepku sebuah website yang bisa membuat kamu menemukan banyak resep
          dari Nusantara hingga Mancanegara, dan tentunya gratis.
        </p>
        <p> &copy; 2022 | All Right Reserved by: Reseepku</p>
      </div>

      <div className="footer-section">
        <p className="title">Kontak Kami</p>
        <p>Email:danialalfayyadh28@gmail.com</p>
        <p>Phone:+62 812-6492-8594</p>
        <p>24353 Batuphat Timur, Kota Lhokseumawe, Aceh.</p>
      </div>

      <div className="footer-section">
        <p className="title">Follow Us</p>
        <div className="footer-section-icons">
          <a
            href="https://www.facebook.com/danial.alfayyadh.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/wargasipil_batuphat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://twitter.com/AlfayyadhDanial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <i className="fab fa-facebook-square"></i>
          </a>

        </div>
      </div>
    </div>
  );
}
