import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./genericModal.module.scss";

const GenericModal = ({ children, isOpen, toggle }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "0px";

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={toggle}
      contentLabel="Monty Modal"
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick={false}
    >
      {/* Modal Content Here */}
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <div className={styles.close} onClick={toggle}>
              <img src="/assets/cross.svg" alt="close" />
            </div>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default GenericModal;
