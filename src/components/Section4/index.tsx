import Button from "../Button";
import "./section4.scss";
import Lays from "../../assets/images/image 769.svg";
const Section4 = () => {
  return (
    <div className="section4">
      <img src={Lays} alt="" />
      <div className="container">
        <div className="card">
          <span>world class awesome Chips</span>
        </div>
        <div className="card">
          <h2>Overview</h2>
          <span className="span">
            The blossoms so much that she put them in her hair. Her husband,
            Louis XVI, put one in his buttonhole, inspiring a brief vogue in
            which the French.
          </span>
          <Button text="Learn More" color="#B1464A" borderColor="#B1464A" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
