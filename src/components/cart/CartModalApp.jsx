import "./CartModalApp.css";
import CartApp from "./CartApp";

const CartModalApp = ({ onClose }) => {
  return (
    <div className={`modal-overlay`} onClick={onClose}>
      <div className={`modal-content`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="modal-body">
          <CartApp />
        </div>
      </div>
    </div>
  );
};

export default CartModalApp;
