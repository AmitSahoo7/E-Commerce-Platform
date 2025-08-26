import React from "react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
import Carousel_3 from "./Carousel_3";
import Vdo from "./Vdo";

import "../components/Cards.css";
import image1 from "../assets/sofa.jpg";
import image2 from "../assets/bed.jpg";
import image3 from "../assets/comforters.jpg";
import image4 from "../assets/dining.jpg";
import image5 from "../assets/plates.jpg";

export default function Cards() {
  return (
    <div className="container_card">
      {/* Card 1 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image1} alt="Sofa" className="image" />
          <div className="overlay">
            <h1>new & designed with purpose</h1>
            <button className="btn">SHOP SOFAS & SECTIONALS</button>
          </div>
        </div>
      </Link>

      <Carousel />
      <Carousel_3 />
      <Vdo />

      {/* Card 2 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image2} alt="Bedroom" className="image" />
          <div className="overlay">
            <h1>
              &#9733;&#9733;&#9733;&#9733;&#9733;
              <br />
              &#x275D; literally the bed of our dreams &#x275E;
            </h1>
            <button className="btn">SHOP BEDROOM FURNITURE</button>
          </div>
        </div>
      </Link>

      {/* Card 3 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image3} alt="Comforters" className="image" />
          <div className="comfort">
            <h1>our new cozy comforters</h1>
            <button className="btn">ALL BEDDING SHIPS FREE</button>
          </div>
        </div>
      </Link>

      <Carousel />
      <Carousel_3 />

      {/* Card 4 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image4} alt="Dining" className="image" />
          <div className="overlay" id="dining">
            <h1>that effortless look</h1>
            <button className="btn">SHOP DINING FURNITURE</button>
          </div>
        </div>
      </Link>

      {/* Card 5 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image5} alt="Plates" className="image" />
          <div className="overlay" id="plates">
            <h1>
              It all started with whiteware. Serving everyday special since
              1962.
            </h1>
            <button className="btn">SHOP 35+ COLLECTIONS</button>
          </div>
        </div>
      </Link>

      <Carousel />
      <Carousel_3 />

      {/* Repeated Card 4 */}
      <Link to="/addprod" className="image-card-link">
        <div className="image-card">
          <img src={image4} alt="Dining" className="image" />
          <div className="overlay" id="dining">
            <h1>that effortless look</h1>
            <button className="btn">SHOP DINING FURNITURE</button>
          </div>
        </div>
      </Link>
    </div>
  );
}