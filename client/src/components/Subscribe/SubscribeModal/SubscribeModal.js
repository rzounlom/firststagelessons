import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, Loader } from "rsuite";

import "./SubscribeModal.scss";

class SubscribeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overflow: true,
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
    const { overflow, show } = this.state;
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <button className="subscribe-btn" onClick={this.open}>
            Subscribe
          </button>
        </ButtonToolbar>

        <Modal show={show} onHide={this.close} onExited={this.resetRows}>
          <Modal.Header>
            <Modal.Title>
              <div>Subscribe to Our Newsletter</div>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.rows ? (
              <div className="subscribe-container">Subscribe</div>
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

export default SubscribeModal;
