import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "../../assets";
import "./footer.scss";
const FooterLayout = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="card">
            <div className="logo fc">
              <Logo />
              <span>Potato</span>
            </div>
            <div className="text">
              <p>
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
            </div>
            <div className="icons fc">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <GithubIcon />
            </div>
          </div>
          <div className="card">
            <p>Company</p>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="card">
            <p>Help</p>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Teams & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="card">
            <p>Resources</p>
            <p>Free EBooks</p>
            <p>Deelopment Tutorial</p>
            <p>Hot To-Blog</p>
            <p>YouTube Playlist</p>
          </div>
        </div>
        <hr />
        <p className="copyright">
          © Copyright 2022, All Rights Reserved by Falcon Thought
        </p>
      </div>
      ;
    </footer>
  );
};

export default FooterLayout;
