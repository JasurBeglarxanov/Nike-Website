import "./homepage.css";
import logo from "./images/brand_logo.svg";
import shoe from "./images/shoe_image.svg";
import flipkat from "./images/flipkart.svg";
import amazon from "./images/amazon.svg";

function HomePage() {
  return (
    <>
      <header>
        <div className="header-container">
          <img src={logo} alt="" />
          <div className="navigation-container">
            <a href="#">MENU</a>
            <a href="#">LOCATION</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </div>
            <button>Login</button>
        </div>
      </header>

      <main>
        <div className="main-container">
          <div className="main-container-col-left">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="buttons">
              <button className="btn1">Shop Now</button>
              <button className="btn2">Category</button>
            </div>
            <div className="links">
              <p>Also Available On</p>
              <img src={flipkat} alt="" />
              <img src={amazon} alt="" />
            </div>
          </div>
          <div className="main-container-col-right">
            <img src={shoe} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
