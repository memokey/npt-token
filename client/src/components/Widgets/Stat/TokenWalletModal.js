import React from 'react';
import { Modal } from "react-bootstrap";

function TokenWalletModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          NPT Wallet Action
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="button button-purple button-medium button-block resposive-hide"><i className="material-icons">add_to_queue</i>&nbsp;<span className="responsive-hide">Deposit</span></button>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer> 
    </Modal>
  );
}

export default TokenWalletModal;