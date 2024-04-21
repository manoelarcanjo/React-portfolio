import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const TypingAnimation = ({ texts, speed }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        const currentLength = displayText.length;
        const currentText = texts[currentTextIndex];
        
        if (currentLength === currentText.length) {
          setTimeout(() => {
            setDisplayText('');
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }, 1000); // Tempo de espera antes de iniciar a próxima animação
        } else {
          setDisplayText(currentText.substring(0, currentLength + 1));
        }
      }, speed);
  
      return () => clearInterval(typingInterval);
    }, [currentTextIndex, displayText, speed, texts]);
  
    return (
      <span>{displayText}</span>
    );
  };
  

TypingAnimation.propTypes = {
  texts: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default TypingAnimation;
