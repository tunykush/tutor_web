import "./PricingTable.css";

import icac2 from "../../img/ic-actions-check-2.svg";
import icac3 from "../../img/ic-actions-check-3.svg";
import icac4 from "../../img/ic-actions-check-4.svg";
import icac5 from "../../img/ic-actions-check-5.svg";
import icac6 from "../../img/ic-actions-check-6.svg";
import icac7 from "../../img/ic-actions-check-7.svg";
import icac from "../../img/ic-actions-check.svg";
import l12 from "../../img/line-1-2.svg";
import l1 from "../../img/line-1.svg";

function PricingTable() {
  return (
    <div className="pricing-table">
      <div className="div">
        <div className="price">
          <div className="price-title">
            <div className="div-2">
              <div className="text-wrapper">C++</div>
            </div>
            <div className="price-2">
              <div className="price-base">
                <div className="text-wrapper-2">$5 / hour</div>
              </div>
              <p className="element-incl-vat">
                <span className="span">$0</span>{" "}
                <span className="text-wrapper-3"> incl. 25% Vat</span>
              </p>
            </div>
          </div>
          <img className="line" src="img/image.svg" />
          <p className="p">
            Once you have selected your desired program, schedule, and
            supporting documentation, we will arrange to have them sent to you
            as soon as possible.
          </p>
          <button className="button">
            <div className="text-wrapper-4">Get started</div>
          </button>
          <div className="features">
            <div className="text-wrapper-5">Features included:</div>
            <div className="div-2">
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac} />
                <div className="text-wrapper-6">Daily offline (9hours/w)</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac3} />
                <div className="text-wrapper-6">Daily homeworks check</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac3} />
                <div className="text-wrapper-6">Daily reviews check</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac3} />
                <div className="text-wrapper-6">Full resourses</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac6} />
                <div className="frame">
                  <div className="text-wrapper-7">Basic subjects dashboard</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">New</div>
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac6} />
                <div className="text-wrapper-6">Email Support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-3">
          <div className="price-title">
            <div className="div-2">
              <div className="frame-2">
                <div className="text-wrapper">
                  Full-Stack Web
                  <br />
                  Programming
                </div>
                <div className="frame-3">
                  <div className="text-wrapper-9">Best</div>
                </div>
              </div>
            </div>
            <div className="price-2">
              <div className="price-base-2">
                <div className="text-wrapper-2">$9 / hour</div>
              </div>
              <p className="element-incl-vat">
                <span className="span">$18 </span>{" "}
                <span className="text-wrapper-3">incl. 18% Vat</span>
              </p>
            </div>
          </div>
          <img className="img" src={l12} />
          <p className="p">
            Lower training costs with in-demand content and trusted credentials
            from us
          </p>
          <button className="button-2">
            <div className="text-wrapper-10">Get started</div>
          </button>
          <div className="features">
            <div className="text-wrapper-5">Basic plan Plus:</div>
            <div className="div-2">
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac2} />
                <div className="text-wrapper-6">Daily offline (15hours/w)</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac2} />
                <div className="text-wrapper-6">Flexible time management</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac2} />
                <div className="text-wrapper-6">Advanced homeworks</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac2} />
                <div className="frame">
                  <div className="text-wrapper-7">Advanced subjects</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">New</div>
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac2} />
                <div className="frame">
                  <div className="text-wrapper-7">Analyze data knowledge</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">New</div>
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac} />
                <p className="text-wrapper-6">Full resourses (up to 5gb)</p>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac} />
                <div className="text-wrapper-6">Daily reviews check</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac} />
                <div className="text-wrapper-6">Email Support</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac} />
                <p className="text-wrapper-6">Extra subjects (up to 3)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price-4">
          <div className="price-title">
            <div className="div-2">
              <div className="frame-2">
                <div className="text-wrapper">Machine Learning</div>
              </div>
            </div>
            <div className="price-2">
              <div className="price-base-3">
                <div className="text-wrapper-2">$7 / hour</div>
              </div>
              <p className="element-incl-vat">
                <span className="span">$18 </span>{" "}
                <span className="text-wrapper-3">incl. 18% Vat</span>
              </p>
            </div>
          </div>
          <img className="img" src={l1} />
          <p className="p">
            Lower training costs with in-demand content and trusted credentials
            from us
          </p>
          <button className="button-2">
            <div className="text-wrapper-10">Get started</div>
          </button>
          <div className="features">
            <div className="text-wrapper-5">Basic plan Plus:</div>
            <div className="div-2">
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac7} />
                <div className="text-wrapper-6">Daily offline (15hours/w)</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac5} />
                <div className="text-wrapper-6">Flexible time management</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac5} />
                <div className="text-wrapper-6">Advanced homeworks</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac5} />
                <div className="frame">
                  <div className="text-wrapper-7">Advanced subjects</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">New</div>
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac5} />
                <div className="frame">
                  <div className="text-wrapper-7">Analyze data knowledge</div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">New</div>
                  </div>
                </div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac5} />
                <p className="text-wrapper-6">Full resourses (up to 5gb)</p>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac4} />
                <div className="text-wrapper-6">Daily reviews check</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac4} />
                <div className="text-wrapper-6">Email Support</div>
              </div>
              <div className="feature-item">
                <img className="icons-actions-ic" src={icac4} />
                <p className="text-wrapper-6">Extra subjects (up to 3)</p>
              </div>
            </div>
          </div>
        </div>
        <img className="vector" src="img/vector-1.svg" />
      </div>
    </div>
  );
}

export default PricingTable;
