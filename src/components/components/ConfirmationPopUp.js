import React from "react";
import "../styles/components/confirmation-popup.css";

const ConfirmationPopUp = (props) => {
  const { fnCancel = () => {}, fnCallback = () => {}, msg, title } = props;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p className="popup-title">{title}</p>
        <p className="popup-msg">{msg}</p>
        <div className="button-container">
          <button className="btn-cancel" onClick={fnCancel}>
            Cancelar
          </button>
          <button
            className="btn-accept"
            onClick={() => {
              fnCallback();
              fnCancel();
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
