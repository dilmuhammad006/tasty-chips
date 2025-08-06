import "./section3.scss";
import Lays1 from "../../assets/images/Rectangle 40172.svg";
import Lays2 from "../../assets/images/Rectangle 40174.svg";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="container">
        <img src={Lays1} alt="" />
        <div className="wrapper">
          <div className="text">
            <p>The Potato</p>
            <hr />
            <p>
              When potato plants bloom, they send up five-lobed flowers that
              spangle fields like fat purple stars. By some accounts, Marie
              Antoinette liked the blossoms so much that she put .
            </p>
          </div>
          <div className="lays">
            <img src={Lays2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
