import "./section5.scss";
const Section5 = () => {
  return (
    <div className="section5 container">
      <section>
        <div className="text">
          <p>Join our newsletter</p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making.
          </p>
        </div>
        <div className="subscribe">
          <input type="text" placeholder="For latest update send mail" />
          <button type="submit">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Section5;
