import "./BestOffer.css"
import m01 from "../../img/mail-01.svg";
import l4 from "../../img/line-4.svg"

function BestOffer() {
  return (
    <div className="CTA">
      <p className="best-offer">
        <span className="text-wrapper">best</span>{" "}
        <span className="span"> offer</span>
      </p>
      <img className="line" src={l4} />
      <div className="frame">
        <div className="div">
          <p className="p">
            Contact this tutor for
            <br /> personalized offer
          </p>
          <p className="everything-has-been">
            Everything has been proven, don't wait long to get your best
            offer,contact us
            <br /> via the form below to get special price.
          </p>
        </div>
        <div className="frame-2">
          <div className="frame-3">
            <img className="mail" src={m01} />
            <div className="text-wrapper-2">Type Your Mesage Here</div>
          </div>
          <button className="button">
            <div className="text-wrapper-3">Send</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestOffer;
