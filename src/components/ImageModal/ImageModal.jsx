import style from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, selectedImage }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style["modal-container"]}
      overlayClassName={style["modal-overlay"]}
      bodyOpenClassName={style["body-modal-is-open"]}
    >
      {selectedImage && (
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </ReactModal>
  );
};

export default ImageModal;
