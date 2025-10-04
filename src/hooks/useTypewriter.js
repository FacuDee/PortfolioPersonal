import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 60) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    // Reiniciar el estado cuando cambie el texto
    setDisplayText('');
    setIsComplete(false);
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const resetAnimation = () => {
    setDisplayText('');
    setIsComplete(false);
  };

  return { displayText, isComplete, resetAnimation };
};