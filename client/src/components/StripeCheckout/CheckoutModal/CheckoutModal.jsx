import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, Loader } from "rsuite";
import StripeCheckoutButton from "../StripeCheckoutButton/StripeCheckoutButton";

import "./CheckoutModal.scss";

class CheckoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      rows: 0,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.resetRows = this.resetRows.bind(this);
  }
  close() {
    this.setState({ show: false });
  }
  resetRows() {
    this.setState({ rows: 0 });
  }
  open(event) {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({
        rows: 80,
      });
    }, 2000);
  }
  render() {
    const { show } = this.state;
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <button className="pay-btn" onClick={this.open}>
            Pay Online
          </button>
        </ButtonToolbar>

        <Modal show={show} onHide={this.close} onExited={this.resetRows}>
          <Modal.Header>
            <Modal.Title>
              <div>First Stage Guitar Lesson Packages</div>{" "}
              <div className="disclaimer">
                {" "}
                * We recognize that we are in a global pandemic. But the world
                needs more music! So we have temporarily reduced our package
                prices to help out.
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.rows ? (
              <div className="package-container">
                <div className="package-options">
                  <div className="package-option basic">
                    <div className="package-option-description">
                      <h4>Basic Lessons Package</h4>
                      <ul>
                        <li>Price: $65/month</li>
                        <li>
                          <span className="access">
                            Access to two teachers for the price of one!
                          </span>
                        </li>
                        <li>One 45 minute live online session a week</li>
                        <li>Full access to recorded video content</li>
                        <li>
                          <span className="yellow">Text-based feedback</span>
                        </li>
                      </ul>
                    </div>
                    <StripeCheckoutButton price={65.0} name="Basic Package" />
                  </div>
                  <div className="package-option  standard">
                    <div className="package-option-description">
                      <h4>Standard Lessons Package</h4>

                      <ul>
                        <li>Price: $105/month</li>
                        <li>
                          <span className="access">
                            Access to two teachers for the price of one!
                          </span>
                        </li>
                        <li>One live online session a week</li>
                        <li>Full access to recorded video content</li>
                        <li>Text-based feedback</li>
                        <li>
                          <span className="green">
                            One 45 minute face-to-face session a week
                          </span>
                        </li>
                        <li>
                          <span className="green">Video-based feedbackk</span>
                        </li>
                        <li>
                          <span className="green">
                            Full access to First Stage Village online gatherings
                          </span>
                        </li>
                        <li>
                          <span className="red">
                            Free First Stage Guitar Academy T-Shirt
                          </span>
                        </li>
                      </ul>
                    </div>
                    <StripeCheckoutButton
                      price={105.0}
                      name="Standard Package"
                    />
                  </div>
                  <div className="package-option premium">
                    <div className="package-option-description">
                      <h4>Premium Lessons Package</h4>

                      <ul>
                        <li>Price: $155/month</li>
                        <li>
                          <span className="access">
                            Access to two teachers for the price of one!
                          </span>
                        </li>
                        <li>Full access to recorded video content</li>
                        <li>Text-based feedback</li>
                        <li>One 45 minute face-to-face session a week</li>
                        <li>Video-based feedbackk</li>
                        <li>
                          Full access to First Stage Village online gatherings
                        </li>
                        <li>
                          <span className="blue">
                            Up to three 45 minute live online session a week
                          </span>
                        </li>

                        <li>
                          <span className="blue">
                            Access to advanced-level instruction
                          </span>
                        </li>

                        <li>
                          <span className="red">
                            Free First Stage Guitar Academy T-Shirt
                          </span>
                        </li>
                      </ul>
                    </div>
                    <StripeCheckoutButton
                      price={155.0}
                      name="Premium Package"
                    />
                  </div>
                  <div className="package-option other-payment-options">
                    <div className="package-option-description ">
                      <h4>Other Methods of Payment </h4>

                      <ul>
                        <li>
                          <span>Cash App: </span>$FirstStageGuitar
                        </li>
                        <li>
                          <span>Venmo: </span> @Dion-Northern
                        </li>
                        <li>
                          <span>Zelle: </span> firststageguitar@gmail.com
                        </li>
                        <li>
                          <span>PayPal: </span>firststageguitar@gmail.com
                        </li>
                        <li>
                          <span>Note: </span>*Please include "Guitar Lessons" as
                          reason for payment.{" "}
                          <span className="yellow">
                            Call 407-335-9173 for Discounts & Questions
                          </span>
                        </li>
                      </ul>
                      <StripeCheckoutButton
                        price={1.0}
                        name="Standard Package"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Loader />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CheckoutModal;
