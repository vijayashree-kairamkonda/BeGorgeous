import { NavBarBrands } from "../components/NavBarBrands";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <main>
          <div className="home-container">
            <img
              className="image-card"
              src="https://muau.ch/media/wysiwyg/MUAU-Schmuck-Damenschmuck1.jpg"
              alt="random"
            />
            <div className="img-overlay-text">
              Find it..
              <br />
              Love it..
              <br />
              Buy it!!
              <br />
              <NavLink to="/productListing">Click Here to buy</NavLink>
              <br />
              <div></div>
            </div>
          </div>
          <NavBarBrands />
        </main>
        
      </div>
    </>
  );
};
