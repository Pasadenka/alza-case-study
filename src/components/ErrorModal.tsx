import IErrorModal from "./IErrorModal";
import './ErrorModal.css';

const ErrorModal = ({show = false, message = '', onClose}: IErrorModal) => {
    return (
        show ? 
        <div className="error-modal">
            <div className="modal-box">
                <div className="head">
                    Nastala chyba
                </div>
                <div className="body">
                    {message}
                </div>
                <div className="foot">
                    <button onClick={() => onClose && onClose()}>Zavřít</button>
                </div>
            </div>
        </div>
        : null
    );
}

export default ErrorModal;
