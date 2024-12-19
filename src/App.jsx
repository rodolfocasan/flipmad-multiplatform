import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import "./assets/CSS/bootstrap.css";

import { Device } from '@capacitor/device';

import Notifications from "./Components/Home/Notifications";
import SplashVideo from "./Components/Home/SplashVideo";

import Board from "./Components/Game/Board";





const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }

  html[lang="ar"] body {
    font-family: 'IBM Plex Sans Arabic', sans-serif;
  }

  html[lang="hi"] body {
    font-family: 'Tiro Devanagari Hindi', serif;
  }

  html[lang="ja"] body {
    font-family: 'Noto Sans JP', sans-serif;
  }

  html[lang="ko"] body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  html[lang="ru"] body {
    font-family: 'Oswald', sans-serif;
  }

  html[lang="tr"] body {
    font-family: 'Bellefair', serif;
  }
`;



/* Efecto de transición SPLASH/JUEGO */
const GameContainer = styled.div`
    opacity: ${props => props.$isVisible ? '1' : '0'};
    transition: opacity 0.3s ease-out;
    display: ${props => props.$isVisible ? 'block' : 'none'};
`;

export default function Home() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Obtener y establecer el idioma
        const languageCode = await Device.getLanguageCode();
        document.documentElement.lang = languageCode.value.slice(0, 2);
      } catch (error) {
        console.error("Error initializing app:", error);
      }

      // Aquí se inicializa el componente Notifications solo una vez
      setInitialized(true);
    };

    if (!initialized) {
      initializeApp();
    }
  }, [initialized]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    // Pequeño retraso antes de mostrar el juego
    setTimeout(() => setShowGame(true), 50);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      {/* Solicitar acceso a notificaciones (para recordatorios al usuario) */}
      {initialized && <Notifications />}

      {/* Screen Splash */}
      {!isVideoEnded && <SplashVideo onVideoEnd={handleVideoEnd} />}

      {/* Juego */}
      <GameContainer $isVisible={showGame}>
        <div className="container-fluid d-flex justify-content-center mt-5">
          <div className="row">
            <div className="col-md-6">
              <Board />
            </div>
          </div>
        </div>
      </GameContainer>
    </React.Fragment>
  );
}