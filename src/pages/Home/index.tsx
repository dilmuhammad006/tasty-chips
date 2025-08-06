import { Background, LaysS, NextIcon2, Persons, Zigzag } from "../../assets";
import { Button } from "../../components";
import "./home.scss";
import Lays from "../../assets/icons/main/image 770.svg";

const Home = () => {
  return (
    <div className="home">
      <Background />
      <div className="container">
        <p className="title">Testy Chips</p>
        <div className="main-wrapper">
          <div className="person-wrapper">
            <div className="person fc">
              <Persons />
              <p>5K+ Review</p>
            </div>
            <Button text="See all item"></Button>
          </div>
          <div className="lays fc">
            <img src={Lays} alt="" />
            <LaysS />
          </div>
          <div className="zigzag">
            <Zigzag />
          </div>
          <div className="degree">
            <span>Low</span>
            <span>Medium</span>
            <span>Best</span>
          </div>
          <div className="explore fc">
            <div className="next fc scale">
              <NextIcon2 />
            </div>
            <span>Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
