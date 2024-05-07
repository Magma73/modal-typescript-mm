[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Vite version](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/)

# @magma/modal-react

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
* PropTypes V15.8.1
* NPM V10.2.3
* NodeJS V20.10.0
* VS Code V1.87.2

## Install
To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save @magma73/modal-react

    $ yarn add @magma73/modal-react


## Usage
### Example
```jsx
import React, { useState } from 'react';
import { Modal } from '@magma73/modal-react';
import '@magma73/modal-react/dist/style.css';

const App = () => {

    const [lastActiveElement, setLastActiveElement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setLastActiveElement(document.activeElement);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };

    return (

    <>

    <button onClick={openModal}>Open modal</button>


    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Employee Created"
        titleClose="Close"
    />

    </>

    )

}


export default App

```

### Step by step

1. Import component and style file

```jsx
import { Modal } from '@magma73/modal-react';
import '@magma73/modal-react/dist/style.css';

```

2. Create open/close state and save the currently active element with useState hook
```jsx
import React, { useState } from 'react';

const App = () => {

    const [lastActiveElement, setLastActiveElement] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  ...

}

```


3. Create functions open/close

```jsx
    const openModal = () => {
        setLastActiveElement(document.activeElement);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false)
        if (lastActiveElement) {
            lastActiveElement.focus();
        }
    };
```

4. Add component in render with props

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Modal Component"
        titleClose="Close"
    />
```

5. Add children to the component

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Modal Component"
        titleClose="Close"
    >
        <p>Hello world !</p>
    </Modal>
```

6. Control modal by changing state

```jsx
    <button onClick={openModal}>Open modal</button>
```

7. Choose to customize styles and modal

You can choose to :
* Display the icon with : `showCloseIcon={false}`
* Delete the style importation ~~``import '@magma73/modal-react/dist/style.css';``~~ and add your own style using : `{styles.yourStyle}`

```jsx
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
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
    </Modal>
```

## Authors
Marine Magnin

## License
ISC © [Marine Magnin](https://github.com/Magma73/)