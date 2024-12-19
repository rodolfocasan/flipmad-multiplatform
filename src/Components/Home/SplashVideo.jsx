// src/Components/Home/SplashVideo.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

/* Splash Screen - Assets */
import initFrame from "../../assets/splash/splash_initFrame.png";
import splashVideo from "../../assets/splash/splash_video.webm";









const SplashContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: ${props => props.$isVisible ? '1' : '0'};
    pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
    transition: opacity 0.5s ease-in-out;
`;

const StyledReactPlayer = styled(ReactPlayer)`
    width: 100% !important;
    height: 100% !important;
    
    & > video {
        object-fit: cover;
    }

    @media (min-width: 1024px) {
        width: auto !important;
        height: 100% !important;
        
        & > video {
            height: 100%;
            background-color: #333333;
        }
    }
`;

const SplashVideo = ({ onVideoEnd }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        const videoDuration = 3000; // Ajusta según la duración real del video

        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onVideoEnd, 500);
        }, videoDuration);

        return () => clearTimeout(timer);
    }, [onVideoEnd]);

    const handleVideoReady = () => {
        setIsVideoReady(true);
    };

    return (
        <SplashContainer $isVisible={isVisible}>
            {!isVideoReady && (
                <img
                    src={initFrame}
                    alt="Splash Placeholder"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}
            <StyledReactPlayer
                url={splashVideo}
                playing
                muted
                loop={false}
                playsinline
                onReady={handleVideoReady}
                width="100%"
                height="100%"
                style={{ display: isVideoReady ? 'block' : 'none' }}
            />
        </SplashContainer>
    );
};

export default SplashVideo;