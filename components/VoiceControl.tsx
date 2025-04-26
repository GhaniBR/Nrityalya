
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
        setFeedback('Listening...');
      };

      recognition.onend = () => {
        setIsListening(false);
        setFeedback('Click to start listening');
      };

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        setFeedback(`Command: ${command}`);
        
        
        // Navigation commands
        const routes: { [key: string]: string } = {
          home: '/',
          about: '/about',
          contact: '/contact',
          basics: '/basic',
          gallery: '/gallery',
          videos: '/videos',
          mudras: '/mudras_bhedas',
          adavus: '/adavus',
          //gesture: '/gesture'
        };

        if (command.includes('ai camera')) {
          navigate('/gesture');
          setFeedback('Opening AI camera gestures page');
          return;
        }
        // Check for camera and mode commands
        if (command.includes('start camera') || command.includes('open camera')) {
          window.dispatchEvent(new CustomEvent('startCamera'));
          setFeedback('Opening camera');
          return;
        } else if (command.includes('stop camera') || command.includes('close camera')) {
          window.dispatchEvent(new CustomEvent('stopCamera'));
          setFeedback('Closing camera');
          return;
        } else if (command.includes('switch to body') || command.includes('body mode')) {
          window.dispatchEvent(new CustomEvent('switchMode', { detail: 'body' }));
          setFeedback('Switching to body detection mode');
          return;
        } else if (command.includes('switch to hands') || command.includes('hand mode')) {
          window.dispatchEvent(new CustomEvent('switchMode', { detail: 'hands' }));
          setFeedback('Switching to hand detection mode');
          return;
        }

        // Check for navigation commands
        for (const [key, path] of Object.entries(routes)) {
          if (command.includes(key)) {
            navigate(path);
            setFeedback(`Navigating to ${key}`);
            return;
          }
        }

        // Fallback for unrecognized commands
        setFeedback('Command not recognized. Try again.');
      };

      recognition.onerror = (event: any) => {
        console.error('Voice recognition error:', event.error);
        setFeedback(`Error: ${event.error}`);
        setIsListening(false);
      };

      setRecognition(recognition);
    } else {
      setFeedback('Voice recognition not supported in this browser');
    }
  }, [navigate]);

  const toggleListening = () => {
    if (!recognition) {
      setFeedback('Speech recognition not supported');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2">
      <div className={`bg-white/90 p-2 rounded-lg text-sm ${feedback ? 'visible' : 'invisible'}`}>
        {feedback}
      </div>
      <button
        onClick={toggleListening}
        className={`p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isListening ? 'bg-red-500 scale-110' : 'bg-orange-500 hover:scale-105'
        } text-white`}
        title={isListening ? 'Stop voice control' : 'Start voice control'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      </button>
    </div>
  );
};

export default VoiceControl;
