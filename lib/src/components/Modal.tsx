import React, { useEffect, PropsWithChildren, ReactNode  } from "react";
// import {  } from "react";
// import { useRef } from "react";
// import genericHandleKey from "../utils/events";
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";

interface ModalItem
  extends PropsWithChildren<{
    onClose: () => void;
    title: string;
    titleClose: string;
    children?:ReactNode;
    customModal?: React.CSSProperties;
    customContainerInformations?: React.CSSProperties;
    customTitle?: React.CSSProperties;
    customBtnClose?: React.CSSProperties;
    customIconClose?: React.CSSProperties;
    showCloseIcon: boolean;
  }> {}

const Modal: React.FunctionComponent<ModalItem> = ({
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

  // const firstFocusableElementRef = useRef<HTMLButtonElement>(null);
  // const lastFocusableElementRef = useRef<HTMLImageElement>(null);

  // const handleEnterKey = genericHandleKey(onClose, "Enter");


  useEffect(() => {
      console.log("Coucou");
  });
//     maFunction();


// // let maVariable = "coucou";
//     // return () => {
//       // console.log("Le composant est démonté");
//     // };
//   }, []);


  // useEffect(() => {
  //   const handleEscapeKey = genericHandleKey(onClose, "Escape");

    // if (firstFocusableElementRef.current && lastFocusableElementRef.current) {
    //   const handleKeyDownTab = (event: KeyboardEvent) => {
    //     if (event.key === "Tab") {
    //       if (
    //         event.shiftKey &&
    //         document.activeElement === firstFocusableElementRef.current
    //       ) {
    //         // Si l'utilisateur appuie sur Tab en maintenant la touche Shift sur le premier élément focusable,
    //         // le focus est déplacé vers le dernier élément focusable.
    //         event.preventDefault();
    //         lastFocusableElementRef.current?.focus();
    //       } else if (
    //         !event.shiftKey &&
    //         document.activeElement === lastFocusableElementRef.current
    //       ) {
    //         // Si l'utilisateur appuie simplement sur Tab sur le dernier élément focusable,
    //         // le focus est déplacé vers le premier élément focusable.
    //         event.preventDefault();
    //         firstFocusableElementRef.current?.focus();
    //       }
    //     }
    //   };
    //   /*document.addEventListener("keydown", handleKeyDown);*/
    //   document.addEventListener("keydown", handleEscapeKey);
    //   document.addEventListener("keydown", handleKeyDownTab);
    // document.addEventListener("keydown", handleEscapeKey);
    //   return () => {
    //     /*document.removeEventListener("keydown", handleKeyDown);*/
    //     document.removeEventListener("keydown", handleEscapeKey);
    //     document.removeEventListener("keydown", handleKeyDownTab);
    //   };
    // }
  // }, [onClose]);


  // const firstFocusableElementRef = useRef<HTMLButtonElement>(null);
  // const lastFocusableElementRef = useRef<HTMLImageElement>(null);

  // const handleEnterKey = genericHandleKey(onClose, "Enter");

  // useEffect(() => {
  //   /*const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       onClose(); // Appeler la fonction de fermeture interne
  //     }
  //   };*/
  //   const handleEscapeKey = genericHandleKey(onClose, "Escape");

  //   if (firstFocusableElementRef.current && lastFocusableElementRef.current) {
  //     const handleKeyDownTab = (event: KeyboardEvent) => {
  //       if (event.key === "Tab") {
  //         if (
  //           event.shiftKey &&
  //           document.activeElement === firstFocusableElementRef.current
  //         ) {
  //           // Si l'utilisateur appuie sur Tab en maintenant la touche Shift sur le premier élément focusable,
  //           // le focus est déplacé vers le dernier élément focusable.
  //           event.preventDefault();
  //           lastFocusableElementRef.current?.focus();
  //         } else if (
  //           !event.shiftKey &&
  //           document.activeElement === lastFocusableElementRef.current
  //         ) {
  //           // Si l'utilisateur appuie simplement sur Tab sur le dernier élément focusable,
  //           // le focus est déplacé vers le premier élément focusable.
  //           event.preventDefault();
  //           firstFocusableElementRef.current?.focus();
  //         }
  //       }
  //     };
  //     /*document.addEventListener("keydown", handleKeyDown);*/
  //     document.addEventListener("keydown", handleEscapeKey);
  //     document.addEventListener("keydown", handleKeyDownTab);

  //     return () => {
  //       /*document.removeEventListener("keydown", handleKeyDown);*/
  //       document.removeEventListener("keydown", handleEscapeKey);
  //       document.removeEventListener("keydown", handleKeyDownTab);
  //     };
  //   }
  // }, [firstFocusableElementRef, lastFocusableElementRef, onClose]);








  return (
    <div
      className={`${styles.modal} ${customModal}`}
      tabIndex={-1}

    >
      <div
        className={`${styles.containerInformations} ${customContainerInformations}`}
      >
        <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>
        {children}
        <button
          // ref={firstFocusableElementRef}
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
          // ref={lastFocusableElementRef}
          onClick={onClose}
          // onKeyDown={(handleEnterKey as unknown) as React.KeyboardEventHandler<HTMLImageElement>}
          tabIndex={0}
      />
        )}
      </div>
    </div>
  );
};

export default Modal;
