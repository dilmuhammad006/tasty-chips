import "./section2.scss";
import Laysimage1 from "../../assets/images/Rectangle 40169.svg";
import Laysimage2 from "../../assets/images/Rectangle 40170.svg";
import Button from "../Button";
const section2 = () => {
  return (
    <div className="container section2">
      <img src={Laysimage2} alt="" className="image"/>
      <div className="wrapper">
        <div>
          <p>Our product awesome overview</p>
          <div className="button">
            <Button text="Let’s Start" color="#B1464A" borderColor="#B1464A" />
          </div>
        </div>
        <img src={Laysimage1} alt="" />
      </div>
      <div className="wrapper-2">
        <div className=""></div>
        <div className="">
          <p>Let’s grow your health with our product</p>
          <hr />
          <p>
            When potato plants bloom, they send up five-lobed flowers that
            spangle fields like fat purple stars. By some accounts, Marie
            Antoinette liked the blossoms so much that she put them in her hair.
            Her husband, Louis XVI, put one in his buttonhole, inspiring a brief
            vogue in which the French aristocracy swanned around with potato
            plants on their clothes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section2;
