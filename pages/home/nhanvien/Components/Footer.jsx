import React from 'react'

const Footer = (props) => {
    return (
        <div className="footer">
        <div className="footer-content">
          <div className="contact">
            <h2>Contact</h2>
            <div className="contact-vietnam">
              <h4>Viet Nam</h4>
              <div>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span>
                  21st Floor, Handico Tower, Pham Hung St., Nam Tu Liem District
                  Hanoi, Vietnam
                </span>{" "}
              </div>
              <div>
                <i className="far fa-envelope"></i>{" "}
                <span>contact@rikkeisoft.com</span>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>{" "}
                <span>(+84) 24 362 316 85</span>
              </div>
            </div>
            <div className="contact-vietnam">
              <h4>Japan</h4>
              <div>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span>
                  3rd Floor, Fujishima Building, Tamachi 16 Street, 4-13-4 Shiba, Minato-ku, Tokyo, Japan
                </span>{" "}
              </div>
              <div>
                <i className="far fa-envelope"></i>{" "}
                <span>contact@rikkeisoft.com</span>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>{" "}
                <span>(+81) 36 435 075 4</span>
              </div>
            </div>
          </div>

          <div className="icon-footer">
            <img src={props.image} alt="" className="image-footer" />
          </div>
        </div>
      </div>
    )
}

export default Footer
