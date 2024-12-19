// src/Components/Game/Emergente.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TwitterShareButton, TelegramShareButton, RedditShareButton, XIcon, TelegramIcon, RedditIcon } from 'react-share';
import useSound from 'use-sound';

/* Ventana emergente - Assets */
import emergente_SFX_01 from "../../assets/sounds/effects/ventanaFinal_seffect_01.wav";
import boton_SFX_01 from "../../assets/sounds/effects/boton_seffect_01.wav";

/* Hook personalizado para traducciones */
import { useTranslation } from './CustomHooks';

/* Duración de bloqueo temporal de botones (en milisegundos) */
const BLOCKING_TIME = 10000; // 10 segundos










const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 999;
`;

const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(249, 249, 249, 0.95);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 5%;
    max-width: 400px;
    width: 90%;
    text-align: center;
    z-index: 1000;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        padding: 30px;
        width: 80%;
    }

    @media (min-width: 1024px) {
        width: 70%;
        max-width: 500px;
    }
`;

const ConfirmContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(34, 34, 34, 0.90);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 5%;
    max-width: 300px;
    width: 90%;
    text-align: center;
    z-index: 1100;
    user-select: none;

    @media (min-width: 768px) {
        padding: 20px;
        width: 80%;
    }
`;

const PopupContent = styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(16px, 3vw, 18px);
    color: #333;
`;

const PopupButton = styled.button`
    margin: 10px auto;
    padding: 12px 24px;
    font-size: clamp(14px, 3vw, 16px);
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: #6c63ff;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 250px;

    &:hover {
        background-color: #564fc4;
    }

    &:disabled {
        background-color: #a3a3a3;
        cursor: not-allowed;
    }
    
    @media (min-width: 768px) {
        width: auto;
    }
`;

const RewardButton = styled(PopupButton)`
    background-color: #00aaff;

    &:hover {
        background-color: #0088cc;
    }
`;

const Countdown = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: bold;
    color: #ff6347;
    z-index: 2000;
`;

const PopupTitle = styled.h2`
    font-size: clamp(40px, 5vw, 36px);
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
`;

const CoinCost = styled.p`
    font-size: 20px;
    color: #444;
    margin-top: 10px;
`;

const ConfirmMessage = styled.p`
    font-size: clamp(14px, 3vw, 18px);
    margin-bottom: 14px;
    color: #ffffff;
`;

const ConfirmButton = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    font-size: clamp(12px, 2.5vw, 14px);
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background-color: ${props => (props.$primary ? '#6c63ff' : '#ddd')};
    color: ${props => (props.$primary ? '#ffffff' : '#333')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => (props.$primary ? '#564fc4' : '#ccc')};
    }
`;

const ShareContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`;

const ShareText = styled.p`
    margin-top: 10px;
    font-size: clamp(12px, 2.5vw, 14px);
    color: #333;
`;

const HamsterLoader = styled.div`
    --dur: 1s;
    position: relative;
    width: 12em;
    height: 12em;
    font-size: 4px;

    .wheel,
    .hamster,
    .hamster div,
    .spoke {
        position: absolute;
    }

    .wheel,
    .spoke {
        border-radius: 50%;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .wheel {
        background: radial-gradient(100% 100% at center, hsla(0,0%,100%,0) 47.8%, hsl(0,0%,100%) 48%);
        z-index: 2;
    }

    .hamster {
        animation: hamster var(--dur) ease-in-out infinite;
        top: 50%;
        left: calc(50% - 3.5em);
        width: 7em;
        height: 3.75em;
        transform: rotate(4deg) translate(-0.8em,1.85em);
        transform-origin: 50% 0;
        z-index: 1;
    }

    .hamster__head {
        animation: hamsterHead var(--dur) ease-in-out infinite;
        background: hsl(30, 90%, 80%); // Color más claro y suave
        border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
        box-shadow: 0 -0.25em 0 hsl(30, 90%, 95%) inset,
            0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
        top: 0;
        left: -2em;
        width: 2.75em;
        height: 2.5em;
        transform-origin: 100% 50%;
    }

    .hamster__ear {
        animation: hamsterEar var(--dur) ease-in-out infinite;
        background: hsl(0, 90%, 90%); // Rosa pálido
        border-radius: 50%;
        box-shadow: -0.25em 0 hsl(30, 90%, 75%) inset;
        top: -0.25em;
        right: -0.25em;
        width: 0.75em;
        height: 0.75em;
        transform-origin: 50% 75%;
    }

    .hamster__eye {
        animation: hamsterEye var(--dur) linear infinite;
        background-color: hsl(0, 0%, 0%);
        border-radius: 50%;
        top: 0.375em;
        left: 1.25em;
        width: 0.5em;
        height: 0.5em;
    }

    .hamster__nose {
        background: hsl(0, 90%, 75%); // Rosa más intenso
        border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
        top: 0.75em;
        left: 0;
        width: 0.2em;
        height: 0.25em;
    }

    .hamster__body {
        animation: hamsterBody var(--dur) ease-in-out infinite;
        background: hsl(30, 90%, 90%); // Color crema suave
        border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
        box-shadow: 0.1em 0.75em 0 hsl(30, 90%, 75%) inset,
            0.15em -0.5em 0 hsl(30, 90%, 95%) inset;
        top: 0.25em;
        left: 2em;
        width: 4.5em;
        height: 3em;
        transform-origin: 17% 50%;
        transform-style: preserve-3d;
    }

    .hamster__limb--fr,
    .hamster__limb--fl {
        clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
        top: 2em;
        left: 0.5em;
        width: 1em;
        height: 1.5em;
        transform-origin: 50% 0;
    }

    .hamster__limb--fr {
        animation: hamsterFRLimb var(--dur) linear infinite;
        background: linear-gradient(hsl(30, 90%, 80%) 80%, hsl(0, 90%, 75%) 80%);
        transform: rotate(15deg) translateZ(-1px);
    }

    .hamster__limb--fl {
        animation: hamsterFLLimb var(--dur) linear infinite;
        background: linear-gradient(hsl(30, 90%, 90%) 80%, hsl(0, 90%, 85%) 80%);
        transform: rotate(15deg);
    }

    .hamster__limb--br,
    .hamster__limb--bl {
        border-radius: 0.75em 0.75em 0 0;
        clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
        top: 1em;
        left: 2.8em;
        width: 1.5em;
        height: 2.5em;
        transform-origin: 50% 30%;
    }

    .hamster__limb--br {
        animation: hamsterBRLimb var(--dur) linear infinite;
        background: linear-gradient(hsl(30, 90%, 80%) 90%, hsl(0, 90%, 75%) 90%);
        transform: rotate(-25deg) translateZ(-1px);
    }

    .hamster__limb--bl {
        animation: hamsterBLLimb var(--dur) linear infinite;
        background: linear-gradient(hsl(30, 90%, 90%) 90%, hsl(0, 90%, 85%) 90%);
        transform: rotate(-25deg);
    }

    .hamster__tail {
        animation: hamsterTail var(--dur) linear infinite;
        background: hsl(0, 90%, 85%); // Rosa claro
        border-radius: 0.25em 50% 50% 0.25em;
        box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
        top: 1.5em;
        right: -0.5em;
        width: 1em;
        height: 0.5em;
        transform: rotate(30deg) translateZ(-1px);
        transform-origin: 0.25em 0.25em;
    }

    .spoke {
        animation: spoke var(--dur) linear infinite;
        background: radial-gradient(100% 100% at center, hsl(0,0%,100%) 4.8%, hsla(0,0%,100%,0) 5%),
            linear-gradient(hsla(0,0%,100%,0) 46.9%, hsl(0,0%,100%) 47% 52.9%, hsla(0,0%,100%,0) 53%) 50% 50% / 99% 99% no-repeat;
    }

    @keyframes hamster {
        from, to {
        transform: rotate(4deg) translate(-0.8em,1.85em);
        }

        50% {
        transform: rotate(0) translate(-0.8em,1.85em);
        }
    }

    @keyframes hamsterHead {
        from, 25%, 50%, 75%, to {
        transform: rotate(0);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(8deg);
        }
    }

    @keyframes hamsterEye {
        from, 90%, to {
        transform: scaleY(1);
        }

        95% {
        transform: scaleY(0);
        }
    }

    @keyframes hamsterEar {
        from, 25%, 50%, 75%, to {
        transform: rotate(0);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(12deg);
        }
    }

    @keyframes hamsterBody {
        from, 25%, 50%, 75%, to {
        transform: rotate(0);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-2deg);
        }
    }

    @keyframes hamsterFRLimb {
        from, 25%, 50%, 75%, to {
        transform: rotate(50deg) translateZ(-1px);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-30deg) translateZ(-1px);
        }
    }

    @keyframes hamsterFLLimb {
        from, 25%, 50%, 75%, to {
        transform: rotate(-30deg);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(50deg);
        }
    }

    @keyframes hamsterBRLimb {
        from, 25%, 50%, 75%, to {
        transform: rotate(-60deg) translateZ(-1px);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(20deg) translateZ(-1px);
        }
    }

    @keyframes hamsterBLLimb {
        from, 25%, 50%, 75%, to {
        transform: rotate(20deg);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(-60deg);
        }
    }

    @keyframes hamsterTail {
        from, 25%, 50%, 75%, to {
        transform: rotate(30deg) translateZ(-1px);
        }

        12.5%, 37.5%, 62.5%, 87.5% {
        transform: rotate(10deg) translateZ(-1px);
        }
    }

    @keyframes spoke {
        from {
        transform: rotate(0);
        }

        to {
        transform: rotate(-1turn);
        }
    }
`;

const MiniPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(34, 34, 34, 0.95);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 300px;
    width: 90%;
    text-align: center;
    z-index: 1200;
    color: #ffffff;
`;

const MiniPopupMessage = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
`;

const MiniPopupButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #6c63ff;
    color: #ffffff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #564fc4;
    }
`;



const Emergente = ({ maxNivel, level, coins, onRestart, onContinue }) => {
    const translate = useTranslation('emergente');

    const [countdown, setCountdown] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(true);
    const [adWatched, setAdWatched] = useState(false);
    const [adLoading, setAdLoading] = useState(false);
    const [showMiniPopup, setShowMiniPopup] = useState(false);

    const [playPopupSound] = useSound(emergente_SFX_01, { volume: 0.15 });
    const [playButtonSound] = useSound(boton_SFX_01, { volume: 0.96 });

    useEffect(() => {
        playPopupSound();
    }, [playPopupSound]);

    useEffect(() => {
        if (countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [countdown]);

    useEffect(() => {
        // Habilitar botones después de un tiempo
        const enableButtonsTimeout = setTimeout(() => {
            setIsButtonsDisabled(false);
        }, BLOCKING_TIME);

        return () => clearTimeout(enableButtonsTimeout);
    }, []);

    const handleButtonClick = (callback) => {
        playButtonSound();
        callback();
    };

    const handleContinue = () => {
        const costoCoins = level * 11;
        if (coins >= costoCoins) {
            setCountdown(3);
            onContinue();
        }
    };

    const handleRestart = () => {
        setShowConfirm(true);
    };

    const confirmRestart = () => {
        onRestart();
        setShowConfirm(false);
        setCountdown(3);
    };

    const cancelRestart = () => {
        setShowConfirm(false);
    };

    const handleCloseMiniPopup = () => {
        setShowMiniPopup(false);
    };

    const shareUrl = 'https://itch.io/profile/volqor';
    const title = `I reached level ${maxNivel} in FlipMAD! Can you beat me? #FlipMAD #FlipMADRanking #FlipMADNextKing`;
    const hashtags = ['Highscore'];

    return (
        <>
            {countdown > 0 && <Countdown>{countdown}</Countdown>}
            <Overlay />
            {showConfirm && (
                <ConfirmContainer>
                    <ConfirmMessage>
                        <span style={{ fontSize: '22px', fontWeight: 'bold' }}>
                            {translate('confirm_dialog_title', 'Any progress will be lost')}
                        </span>
                    </ConfirmMessage>
                    <ConfirmMessage>{translate('confirm_dialog_subtitle', 'Do you want to start a new game?')}</ConfirmMessage>
                    <div>
                        <ConfirmButton onClick={() => handleButtonClick(confirmRestart)} $primary>
                            {translate('confirm_dialog_option_01', 'Yes')}
                        </ConfirmButton>
                        <ConfirmButton onClick={() => handleButtonClick(cancelRestart)}>
                            {translate('confirm_dialog_option_02', 'No')}
                        </ConfirmButton>
                    </div>
                </ConfirmContainer>
            )}
            <PopupContainer>
                <PopupTitle>{translate('title', 'Time is up!')}</PopupTitle>
                <PopupContent>
                    <p>{translate('subtitle', 'Max. level reached:')} {maxNivel}</p>
                    {coins >= level * 11 ? (
                        <CoinCost>...</CoinCost>
                    ) : (
                        <>
                            <p style={{ color: 'red' }}>{translate('no_coins_message', 'Insufficient coins to continue')}</p>
                            {adWatched ? (
                                <RewardButton onClick={() => handleButtonClick(onContinue)}>
                                    {translate('continue_button_01', 'Continue Game')}
                                </RewardButton>
                            ) : (
                                <RewardButton onClick={() => setShowMiniPopup(true)} disabled={isButtonsDisabled || adLoading}>
                                    {isButtonsDisabled ? (
                                        <HamsterLoader>
                                            <div className="wheel"></div>
                                            <div className="hamster">
                                                <div className="hamster__body">
                                                    <div className="hamster__head">
                                                        <div className="hamster__ear"></div>
                                                        <div className="hamster__eye"></div>
                                                        <div className="hamster__nose"></div>
                                                    </div>
                                                    <div className="hamster__limb hamster__limb--fr"></div>
                                                    <div className="hamster__limb hamster__limb--fl"></div>
                                                    <div className="hamster__limb hamster__limb--br"></div>
                                                    <div className="hamster__limb hamster__limb--bl"></div>
                                                    <div className="hamster__tail"></div>
                                                </div>
                                            </div>
                                            <div className="spoke"></div>
                                        </HamsterLoader>
                                    ) : adLoading ? translate('ad_loading', 'Loading...') : translate('pause_message', 'Take a short break to refresh your mind!')}
                                </RewardButton>
                            )}
                        </>
                    )}
                </PopupContent>
                <PopupButton onClick={() => handleButtonClick(handleRestart)} disabled={isButtonsDisabled}>
                    {isButtonsDisabled ? (
                        <HamsterLoader>
                            <div className="wheel"></div>
                            <div className="hamster">
                                <div className="hamster__body">
                                    <div className="hamster__head">
                                        <div className="hamster__ear"></div>
                                        <div className="hamster__eye"></div>
                                        <div className="hamster__nose"></div>
                                    </div>
                                    <div className="hamster__limb hamster__limb--fr"></div>
                                    <div className="hamster__limb hamster__limb--fl"></div>
                                    <div className="hamster__limb hamster__limb--br"></div>
                                    <div className="hamster__limb hamster__limb--bl"></div>
                                    <div className="hamster__tail"></div>
                                    </div>
                                </div>
                                <div className="spoke"></div>
                        </HamsterLoader>
                    ) : translate('newgame_button_01')}
                </PopupButton>
                {coins >= level * 11 && (
                    <PopupButton onClick={() => handleButtonClick(handleContinue)} disabled={isButtonsDisabled}>
                        {isButtonsDisabled ? (
                            <HamsterLoader>
                                <div className="wheel"></div>
                                <div className="hamster">
                                    <div className="hamster__body">
                                        <div className="hamster__head">
                                            <div className="hamster__ear"></div>
                                            <div className="hamster__eye"></div>
                                            <div className="hamster__nose"></div>
                                        </div>
                                        <div className="hamster__limb hamster__limb--fr"></div>
                                        <div className="hamster__limb hamster__limb--fl"></div>
                                        <div className="hamster__limb hamster__limb--br"></div>
                                        <div className="hamster__limb hamster__limb--bl"></div>
                                        <div className="hamster__tail"></div>
                                    </div>
                                </div>
                                <div className="spoke"></div>
                            </HamsterLoader>
                        ) : `${translate('continue_button_01', 'Continue Game')} (${level * 11} Coins)`}
                    </PopupButton>
                )}
                <ShareContainer>
                    <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags}>
                        <XIcon size={32} round />
                    </TwitterShareButton>
                    <TelegramShareButton url={shareUrl} title={title}>
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <RedditShareButton url={shareUrl} title={title}>
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                </ShareContainer>
                <ShareText>{translate('last_info', 'Share your progress')}</ShareText>
            </PopupContainer>
            {showMiniPopup && (
                <MiniPopup>
                    <MiniPopupMessage>
                        {translate('pause_warning', 'Take a break! Your neurons will thank you.')}
                    </MiniPopupMessage>
                    <MiniPopupButton onClick={handleCloseMiniPopup}>OK</MiniPopupButton>
                </MiniPopup>
            )}
        </>
    );
};

export default Emergente;