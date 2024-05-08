import React, { PropsWithChildren } from 'react';
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";

interface ModalItem extends PropsWithChildren<{
    isOpen: boolean,
    onClose : () => void,
    title : string,
    titleClose : string,
    customModal? : React.CSSProperties,
    customContainerInformations? : React.CSSProperties,
    customTitle? : React.CSSProperties,
    customBtnClose? : React.CSSProperties,
    customIconClose?: React.CSSProperties,
    showCloseIcon : boolean,
}> {}

const Modal : React.FunctionComponent<ModalItem> =
({
    isOpen,
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
}) => {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleIconKeyDown = (event : React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onClose();
        }
    }

if (isOpen) {
window.addEventListener('keydown', handleKeyDown);


setTimeout(() => {
    const dialogElement = document.querySelector('[role="dialog"]') as HTMLElement;
    if (dialogElement) {
        const focusableElements = dialogElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ;
        const firstFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        const lastFocusableElement = focusableElements[0] as HTMLElement;
        firstFocusableElement.focus();

        // Handle tab key event to maintain focus within the modal
        const handleKeyDownTab = (event : KeyboardEvent) => {
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
                aria-modal="true"
                tabIndex={-1}
                role="dialog"
            >
                <div className={`${styles.containerInformations} ${customContainerInformations}`}>
                    <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>

                    {children}

                    <button
                        id="btnClose"
                        className={`${styles.btnClose} ${customBtnClose}`}
                        onClick={onClose}
                        aria-label="Close Modal"
                        tabIndex={2}
                    >
                        {titleClose}
                    </button>
                    {showCloseIcon && (
                        <img
                            id="closeIcon"
                            className={`${styles.picture} ${customIconClose}`}
                            src={closeIcon}
                            alt="Close"
                            onClick={onClose}
                            onKeyDown={handleIconKeyDown}
                            aria-label="Close Modal"
                            tabIndex={1}
                        />
                    )}
                </div>

            </dialog>
        );
    }else {
            // Remove event listener for key down event when modal is closed
            window.removeEventListener('keydown', handleKeyDown);
            return null;
        }
};


export default Modal;