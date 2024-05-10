// genericHandleKey.ts
const genericHandleKey = (onAction: () => void, key: string) => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      if (event.key === key) {
        onAction(); // Appeler la fonction de l'action spécifique
      }
    };

    return handleKeyEvent;
  };

  export default genericHandleKey;
