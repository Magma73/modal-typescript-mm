[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Typescript version](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Vite version](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/)

# @magma73/modal-react-typescript

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Install](#install)
* [Usage](#usage)
* [Authors](#authors)
* [License](#license)

## Description
The Modal React component provides a flexible and customizable modal window for use in React applications. With support for various configurations and styling options, this component allows developers to easily implement modal dialogs for displaying additional content, notifications, or interactive elements within their applications.

## Technologies

* React V18.2.0
* React-Dom V18.2.0
* TypeScript V5.2.2
* ESLint V8.57.0
* Vite V5.2.0
* NodeJS V20.10.0
* VS Code V1.87.2

## Install
To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save @magma73/modal-react-typescript

    $ yarn add @magma73/modal-react-typescript


## Usage
### Example
```jsx
import React, { useState } from 'react';
import { createPortal } from "react-dom";
import { Modal } from '@magma73/modal-react-typescript';
import '@magma73/modal-react-typescript/dist/style.css';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

    return (

    <>

      <button onClick={openModal}>Ouvrir la modal</button>
      {showModal &&
        createPortal(
          <Modal
            onClose={closeModal}
            title="Le titre de la modale"
            titleClose="Fermer la modale"
          />,
          document.body
        )}

    </>

    )

}


export default App

```

### Step by step

1. Import component and style file

```jsx
import { Modal } from '@magma73/modal-react-typescript';
import '@magma73/modal-react-typescript/dist/style.css';

```

2. Create open/close state and save the currently active element with useState hook
```jsx
import React, { useState } from 'react';
import { createPortal } from "react-dom";

const App = () => {

    const [showModal, setShowModal] = useState(false);

  ...

}

```


3. Create functions open/close

```jsx
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
```

4. Add component in render with props

```jsx
    {showModal &&
        createPortal(
            <Modal
            onClose={closeModal}
            title="Le titre de la modale"
            titleClose="Fermer la modale"
            />,
            document.body
    )}
```

5. Add children to the component

```jsx
    {showModal &&
        createPortal(
            <Modal
                onClose={closeModal}
                title="Le titre de la modale"
                titleClose="Fermer la modale"
            >
                <p>Hello world !</p>
            </Modal>,
            document.body
    )}

```

6. Control modal by changing state

```jsx
    <button onClick={openModal}>Open modal</button>
```

7. Choose to customize styles and modal

You can choose to :
* Display the icon with : `showCloseIcon={false}`
* Delete the style importation ~~``import '@magma73/modal-react-typescript/dist/style.css';``~~ and add your own style using : `{styles.yourStyle}`

```jsx
    {showModal &&
        createPortal(
            <Modal
                onClose={closeModal}
                customModal={styles.modalContent}
                customContainerInformations={styles.containerInformations}
                customTitle={styles.title}
                customBtnClose={styles.btnClose}
                customIconClose={styles.picture}
                title="Your Message Has Been Sent"
                titleClose="Close the message"
                showCloseIcon={false}
            >
                <p>Hello world !</p>
            </Modal>,
            document.body
    )}

```

## Authors
Marine Magnin

## License
ISC © [Marine Magnin](https://github.com/Magma73/)