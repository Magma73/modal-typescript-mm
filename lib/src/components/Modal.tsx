import { useEffect, useCallback, PropsWithChildren, ReactNode  } from "react";
import { useRef } from "react";
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";

interface ModalItem
  extends PropsWithChildren<{
    onClose: () => void;
    title: string;
    titleClose: string;
    children?:ReactNode;
    customModal?: string;
    customContainerInformations?: string;
    customTitle?: string;
    customBtnClose?: string;
    customIconClose?: string;
    showCloseIcon?: boolean;
  }> {}

const Modal = ({
  onClose,
  title,
  titleClose,
  children,
  customModal,
  customContainerInformations,
  customTitle,
  customBtnClose,
  customIconClose,
  showCloseIcon = true,
} : ModalItem) => {

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLButtonElement>(null);
  const lastFocusableElementRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  if(firstFocusableElementRef && lastFocusableElementRef) {
  const firstFocusableElement = firstFocusableElementRef.current;
  if(firstFocusableElement !==null) {
  firstFocusableElement.focus();
  }
}
}, [onClose]);


const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // if tab key is tapped on the last
    // focus on the first
    // Warning! need to check e.current if a child of lastFocusable

    if (
      document.activeElement === lastFocusableElementRef.current &&
      e.key === "Tab" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      firstFocusableElementRef.current?.focus();
    }
    if (
      document.activeElement === firstFocusableElementRef.current &&
      e.key === "Tab" &&
      e.shiftKey
    ) {
      e.preventDefault();
      lastFocusableElementRef.current?.focus();
    }

    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);


  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onClose();
    }
  };


  return (
    <div
      className={`${styles.modal} ${customModal}`}
      tabIndex={-1}
      ref={modalRef}
      onKeyDown={handleKeyDown}
      data-testid="modal"
    >
      <div
        className={`${styles.containerInformations} ${customContainerInformations}`}
      >
        <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>
        {children}
        <button
          ref={firstFocusableElementRef}
          onClick={onClose}
          className={`${styles.btnClose} ${customBtnClose}`}
          tabIndex={1}
        >
          {titleClose}
        </button>
        {showCloseIcon && (
          <img
          id="closeIcon"
          className={`${styles.picture} ${customIconClose}`}
          src={closeIcon}
          alt="Close"
          aria-label="Close Modal"
          ref={lastFocusableElementRef}
          onClick={onClose}
          onKeyDown={handleEnterKey}
          tabIndex={2}
      />
        )}
      </div>
    </div>
  );
};

export default Modal;
