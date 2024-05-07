import React, { FC, ReactNode, KeyboardEvent } from 'react';
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
    titleClose: string;
    children?: ReactNode;
    customModal?: string;
    customContainerInformations?: string;
    customTitle?: string;
    customBtnClose?: string;
    customIconClose?: string;
    showCloseIcon?: boolean;
  }

  /**
 * Modal React component.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Indicates if the modal is open.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {ReactNode} props.children - The child elements to display in the modal.
 * @param {string} [props.customStyles] - Custom styles for the modal.
 * @returns {JSX.Element} - The modal component.
 */
  const Modal: FC<ModalProps> = ({
    isOpen,
    closeModal,
    title,
    titleClose,
    children,
    customModal,
    customContainerInformations,
    customTitle,
    customBtnClose,
    customIconClose,
    showCloseIcon = true,
}) => {


    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const handleIconKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            closeModal();
        }

    }

    if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);

        setTimeout(() => {
            const dialogElement = document.querySelector('[role="dialog"]');
            if (dialogElement) {
                const focusableElements = dialogElement.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusableElement = focusableElements[focusableElements.length - 1];
                const lastFocusableElement = focusableElements[0];
                firstFocusableElement.focus();

                // Handle tab key event to maintain focus within the modal
                const handleKeyDownTab = (event) => {
                    if (event.key === 'Tab') {
                        if (event.shiftKey) {
                            if (document.activeElement === firstFocusableElement) {
                                event.preventDefault();
                                lastFocusableElement.focus();
                            }
                        } else {
                            if (document.activeElement === lastFocusableElement) {
                                event.preventDefault();
                                firstFocusableElement.focus();
                            }
                        }
                    }
                };
                dialogElement.addEventListener('keydown', handleKeyDownTab);
            }
        }, 100);

        return (
            <dialog
                open={isOpen}
                className={`${styles.modal} ${customModal}`}
                onClick={(e) => e.stopPropagation({ closeModal })}
                aria-modal="true"
                tabIndex="-1"
                role="dialog"
            >
                <div className={`${styles.containerInformations} ${customContainerInformations}`}>
                    <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>

                    {children}

                    <button
                        id="btnClose"
                        className={`${styles.btnClose} ${customBtnClose}`}
                        onClick={closeModal}
                        aria-label="Close Modal"
                        tabIndex="2"
                    >
                        {titleClose}
                    </button>
                    {showCloseIcon && (
                        <img
                            id="closeIcon"
                            className={`${styles.picture} ${customIconClose}`}
                            src={closeIcon}
                            alt="Close"
                            onClick={closeModal}
                            onKeyDown={handleIconKeyDown}
                            aria-label="Close Modal"
                            tabIndex="1"
                        />
                    )}
                </div>

            </dialog>
        );

    }
    else {
        // Remove event listener for key down event when modal is closed
        window.removeEventListener('keydown', handleKeyDown);
        return null;
    }
};


export default Modal;