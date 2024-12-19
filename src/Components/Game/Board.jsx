// src/Components/Game/Board.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useSound from 'use-sound';

import Menu from './Menu';
import Card from './Card';
import Emergente from './Emergente';

/* Hook personalizado para traducciones */
import { useTranslation } from './CustomHooks';





import hintSprt from "../../assets/images/helpers/hand_direction.png";

import parejaError_SFX_01 from "../../assets/sounds/effects/error_seffect_01.wav";
import parejaGood_SFX_01 from "../../assets/sounds/effects/parejaCorrecta_seffect_01.wav";
import parejaGood_SFX_02 from "../../assets/sounds/effects/parejaCorrecta_seffect_02.wav";
import parejaGood_SFX_03 from "../../assets/sounds/effects/parejaCorrecta_seffect_03.wav";
import ganarPartida_SFX_01 from "../../assets/sounds/effects/ganarNivel_seffect_01.wav";

/* Importar tipos de nivel */
import {
    MinimalType01Level, MinimalType02Level, MinimalType03Level, MinimalType04Level,
    MinimalType05Level, MinimalType06Level, MinimalType07Level, MinimalType08Level,

    Type01Level, Type03Level, Type04Level, Type05Level,
    Type06Level, Type07Level, Type08Level, Type09Level, Type10Level,
    Type11Level, Type12Level, Type13Level, Type14Level, Type15Level,
    Type16Level, Type17Level, Type18Level, Type19Level, Type20Level,
    Type21Level, Type22Level, Type23Level, Type24Level, Type25Level,
    Type26Level, Type27Level, Type28Level, Type29Level, Type30Level,
    Type31Level, Type32Level, Type33Level, Type34Level, Type35Level,
    Type36Level, Type37Level, Type38Level, Type39Level, Type40Level,
    Type41Level, Type42Level, Type43Level, Type44Level, Type45Level,
    Type46Level, Type47Level, Type48Level, Type49Level, Type50Level,
    Type51Level, Type52Level, Type53Level, Type54Level, Type55Level,
    Type56Level, Type57Level, Type58Level, Type59Level, Type60Level,
    Type61Level, Type62Level, Type63Level, Type64Level, Type65Level,
    Type66Level, Type67Level,
} from "./LevelsTypes";










const BoardGlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .scroll-container {
        height: 100vh;
        overflow: hidden;
    }
    .scroll-container::-webkit-scrollbar {
        display: none;
    }
    .scroll-container {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .board {
        display: grid;
        grid-template-columns: repeat(4, 100px);
        gap: 10px;
        touch-action: manipulation;
    }
    .card {
        width: 100px;
        height: 150px;
        perspective: 1000px;
        position: relative;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    .card-content {
        user-select: none;
    }
    .card-inner {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }
    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }
    .card-front {
        background-color: #fff;
        transform: rotateY(180deg);
    }
    .card-back {
        background-color: #ccc;
        transform: rotateY(0deg);
    }
    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }
    @media (max-width: 768px) {
        .card {
            width: 78px;
            height: 110px;
        }
        .card-front, .card-back {
            font-size: 20px;
        }
    }

    @keyframes vibration {
        0%, 100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }

    .vibrate {
        animation: vibration .3s linear infinite;
    }
`;

const OrientationStyle = createGlobalStyle`
    @media screen and (max-width: 1024px) {
        html, body {
        height: 100%;
        overflow: hidden;
        }
    #root {
        height: 100%;
        overflow-y: auto;
        position: fixed;
        width: 100%;
        }
    }
`;

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: -55px;
`;

const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6px;
`;

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto 20px;
    padding: 10px;
    background-color: #333;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 16px;
    user-select: none;
    width: 90%;
    max-width: 500px;

    @media (max-width: 320px) {
        font-size: 14px;
        padding: 8px;
    }

    @media (min-width: 321px) and (max-width: 375px) {
        font-size: 15px;
        padding: 9px;
    }

    @media (min-width: 376px) and (max-width: 425px) {
        font-size: 16px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 18px;
        max-width: 450px;
    }

    @media (min-width: 769px) {
        font-size: 20px;
        max-width: 500px;
    }
`;

const StatusItem = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
    user-select: none;
`;

const Timer = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #FFD700;
    user-select: none;
`;

const HintSprite = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: pulse 0.80s infinite;
    pointer-events: none;
    z-index: 1;
    top: 25vh;

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }

    p {
        margin-top: 10px;
        font-size: 14px;
        color: #FFD700;
        font-weight: bold;
        background-color: black;
        padding: 4px 10px;
        border-radius: 8px;
    }
`;

const ResponsiveBoardArea = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 20px auto 0; // Añade margen superior
    padding-top: 10px; // Añade padding superior

    @media (max-width: 320px) {
        transform: scale(0.8);
        transform-origin: top center;
        margin-top: -30px; // Ajusta el margen para pantallas pequeñas
    }

    @media (min-width: 321px) and (max-width: 375px) {
        transform: scale(0.9);
        transform-origin: top center;
        margin-top: -26px; // Ajusta el margen para pantallas medianas
    }

    @media (min-width: 376px) and (max-width: 425px) {
        transform: scale(0.95);
        transform-origin: top center;
        margin-top: -24px; // Ajusta el margen para pantallas más grandes
    }
`;

const ResponsiveStatusContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 400px;
    margin: 20px auto 0; // Añade margen superior
    padding-top: 10px; // Añade padding superior

    @media (max-width: 320px) {
        transform: scale(0.8);
        transform-origin: top center;
        margin-top: 5px; // Ajusta el margen para pantallas pequeñas
    }

    @media (min-width: 321px) and (max-width: 375px) {
        transform: scale(0.9);
        transform-origin: top center;
        margin-top: 5px; // Ajusta el margen para pantallas medianas
    }

    @media (min-width: 376px) and (max-width: 425px) {
        transform: scale(0.95);
        transform-origin: top center;
        margin-top: 5px; // Ajusta el margen para pantallas más grandes
    }
`;

/* Contenido en cartas */
const cardContents = ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8', 'I9'];

const Board = () => {
    const translate = useTranslation('board');

    const [level, setLevel] = useState(1);
    const [coins, setCoins] = useState(0);
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [vibratingCard, setVibratingCard] = useState(null);
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
    const [userInteracted, setUserInteracted] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [correctPairSoundIndex, setCorrectPairSoundIndex] = useState(0);
    const [areAudiosInitialized, setAreAudiosInitialized] = useState(false);
    const [currentLevelComponent, setCurrentLevelComponent] = useState(null);
    const minimalLevels = useRef([]);
    const normalLevels = useRef([]);
    const lastMinimalLevel = useRef(null);
    const lastNormalLevel = useRef(null);

    const minimalLevelComponents = useMemo(() => [
        MinimalType01Level, MinimalType02Level, MinimalType03Level, MinimalType04Level,
        MinimalType05Level, MinimalType06Level, MinimalType07Level, MinimalType08Level
    ], []);

    const levelComponents = useMemo(() => [
        Type01Level, Type03Level, Type04Level, Type05Level,
        Type06Level, Type07Level, Type08Level, Type09Level, Type10Level,
        Type11Level, Type12Level, Type13Level, Type14Level, Type15Level,
        Type16Level, Type17Level, Type19Level, Type18Level, Type20Level,
        Type21Level, Type22Level, Type23Level, Type24Level, Type25Level,
        Type26Level, Type27Level, Type28Level, Type29Level, Type30Level,
        Type31Level, Type32Level, Type33Level, Type34Level, Type35Level,
        Type36Level, Type37Level, Type38Level, Type39Level, Type40Level,
        Type41Level, Type42Level, Type43Level, Type44Level, Type45Level,
        Type46Level, Type47Level, Type48Level, Type49Level, Type50Level,
        Type51Level, Type52Level, Type53Level, Type54Level, Type55Level,
        Type56Level, Type57Level, Type58Level, Type59Level, Type60Level,
        Type61Level, Type62Level, Type63Level, Type64Level, Type65Level,
        Type66Level, Type67Level,
    ], []);

    // Usamos useSound para cada efecto de sonido
    const [playErrorSound] = useSound(parejaError_SFX_01, { volume: 0.65 });
    const [playLevelUpSound] = useSound(ganarPartida_SFX_01, { volume: 0.55 });
    const [playCorrectPair1] = useSound(parejaGood_SFX_01, { volume: 1.0 });
    const [playCorrectPair2] = useSound(parejaGood_SFX_02, { volume: 1.0 });
    const [playCorrectPair3] = useSound(parejaGood_SFX_03, { volume: 1.0 });

    const correctPairSounds = useMemo(() => [playCorrectPair1, playCorrectPair2, playCorrectPair3], [playCorrectPair1, playCorrectPair2, playCorrectPair3]);

    useEffect(() => {
        initializeGame();
    }, [level]);

    useEffect(() => {
        if (cards.length > 0) {
            const initialVibratingCard = Math.floor(Math.random() * cards.length);
            setVibratingCard(initialVibratingCard);

            setTimeout(() => {
                setVibratingCard(null);
            }, 1000);
        }
    }, [cards]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!userInteracted && Date.now() - lastInteractionTime > 15000) {
                const randomCard = Math.floor(Math.random() * cards.length);
                setVibratingCard(randomCard);
            } else {
                setVibratingCard(null);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [lastInteractionTime, userInteracted, cards.length]);

    useEffect(() => {
        if (flippedIndices.length === 2) {
            checkLevelCompletion();
        }
    }, [flippedIndices]);

    useEffect(() => {
        let timer;
        if (isTimeRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsTimeRunning(false);
            handleGameLoss();
        }
        return () => clearInterval(timer);
    }, [isTimeRunning, timeLeft]);

    const initializeGame = () => {
        const totalCards = getTotalCardsForLevel(level);
        const levelCardContents = cardContents.slice(0, totalCards / 2);
        const duplicatedContents = levelCardContents.concat(levelCardContents);
        const shuffledContents = level === 7 ? proportionallyShuffleArray(duplicatedContents) : shuffleArray(duplicatedContents);

        const initialCards = shuffledContents.map((content, index) => ({
            content,
            isFlipped: false,
            id: index,
        }));

        setCards(initialCards);
        setFlippedIndices([]);

        if (level === 1) {
            setIsTimeRunning(false);
        } else {
            setIsTimeRunning(true);
        }

        let components;
        if (level <= 3) {
            components = minimalLevelComponents;
            if (minimalLevels.current.length === 0) {
                minimalLevels.current = shuffleArray([...components]);
            }
            let nextLevel = minimalLevels.current.pop();
            if (nextLevel === lastMinimalLevel.current) {
                minimalLevels.current.unshift(nextLevel);
                nextLevel = minimalLevels.current.pop();
            }
            lastMinimalLevel.current = nextLevel;
            setCurrentLevelComponent(() => nextLevel);
        } else {
            components = levelComponents;
            if (normalLevels.current.length === 0) {
                normalLevels.current = shuffleArray([...components]);
            }
            let nextLevel = normalLevels.current.pop();
            if (nextLevel === lastNormalLevel.current) {
                normalLevels.current.unshift(nextLevel);
                nextLevel = normalLevels.current.pop();
            }
            lastNormalLevel.current = nextLevel;
            setCurrentLevelComponent(() => nextLevel);
        }
    };

    const getTotalCardsForLevel = level => Math.min(level * 2 + 2, 16);

    const shuffleArray = array => {
        const shuffledArray = [...array];
        let currentIndex = shuffledArray.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
                shuffledArray[randomIndex], shuffledArray[currentIndex]];
        }
        return shuffledArray;
    };

    const proportionallyShuffleArray = array => {
        const repeats = {};
        array.forEach(card => {
            repeats[card] = (repeats[card] || 0) + 1;
        });

        const shuffledArray = [];
        while (shuffledArray.length < array.length) {
            for (const card of array) {
                if (repeats[card] > 0) {
                    shuffledArray.push(card);
                    repeats[card] -= 1;
                }
            }
        }

        return shuffleArray(shuffledArray);
    };

    /* Función para calcular la recompensa en Coins */
    const calculateCoinReward = (level) => {
        if (level <= 9) return 9;
        if (level <= 19) return 5;
        if (level <= 29) return 2;
        return 1;
    };

    const handleCardClick = useCallback(index => {
        if (!isTimeRunning && level === 1) {
            setIsTimeRunning(true);
        }

        if (flippedIndices.length >= 2 || cards[index].isFlipped) return;

        setCards(prevCards => {
            const newCards = [...prevCards];
            newCards[index].isFlipped = true;
            return newCards;
        });

        setFlippedIndices(prevIndices => [...prevIndices, index]);
        setLastInteractionTime(Date.now());
        setUserInteracted(true);
        setVibratingCard(null);
        setShowHint(false);
    }, [isTimeRunning, flippedIndices, level, cards]);

    const checkLevelCompletion = useCallback(() => {
        const [index1, index2] = flippedIndices;
        const card1 = cards[index1];
        const card2 = cards[index2];

        if (card1.content === card2.content) {
            correctPairSounds[correctPairSoundIndex]();
            setCorrectPairSoundIndex((prevIndex) => (prevIndex + 1) % correctPairSounds.length);

            setTimeout(() => {
                setCards(prevCards => {
                    const newCards = prevCards.map((card, i) =>
                        i === index1 || i === index2 ? { ...card, isFlipped: true } : card
                    );
                    return newCards;
                });
                setFlippedIndices([]);

                // Se calcula la recompensa de monedas basada en el nivel actual
                const coinReward = calculateCoinReward(level);
                setCoins(prevCoins => prevCoins + coinReward);

                if (allPairsFound()) {
                    playLevelUpSound();
                    handleNextLevel();
                }
            }, 1000);
        } else {
            playErrorSound();

            setTimeout(() => {
                setCards(prevCards => {
                    const newCards = prevCards.map((card, i) =>
                        i === index1 || i === index2 ? { ...card, isFlipped: false } : card
                    );
                    return newCards;
                });
                setFlippedIndices([]);
            }, 800);
        }
    }, [flippedIndices, cards, correctPairSounds, correctPairSoundIndex, playErrorSound, playLevelUpSound, level]);

    const handleNextLevel = () => {
        setLevel(prevLevel => prevLevel + 1);
        setTimeLeft(prevTime => prevTime + 33);
        initializeGame();
    };

    const allPairsFound = () => cards.every(card => card.isFlipped);

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}m:${secs < 10 ? '0' : ''}${secs}s`;
    };

    const handleGameLoss = () => {
        setShowPopup(true);
        setIsMenuOpen(false);
        setShowConfirmDialog(false);
    };

    const handleRestart = () => {
        setLevel(1);
        setCoins(0);
        setCards([]);
        setFlippedIndices([]);
        setTimeLeft(80);
        setIsTimeRunning(false);
        setShowPopup(false);
        initializeGame();
    };

    const handleContinue = (usedAd = false) => {
        const costoCoins = level * 11;
        if (usedAd || coins >= costoCoins) {
            if (!usedAd) {
                setCoins(prevCoins => prevCoins - costoCoins);
            }
            setTimeLeft(prevTime => prevTime + 130);
            setShowPopup(false);
            setIsTimeRunning(true);
        }
    };

    return (
        <BoardContainer>
            <BoardGlobalStyle />
            <OrientationStyle />
            <ResponsiveStatusContainer>
                <StatusContainer>
                    <StatusItem>
                        <Timer>{formatTime(timeLeft)}</Timer>
                    </StatusItem>
                    <StatusItem>Coins: {coins}</StatusItem>
                    <StatusItem>Level: {level}</StatusItem>
                </StatusContainer>
            </ResponsiveStatusContainer>
            <Menu
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                showConfirmDialog={showConfirmDialog}
                setShowConfirmDialog={setShowConfirmDialog}
                onRestart={handleRestart}
            />
            {/*================================================================*/}
            {/*================================================================*/}



            {/* JUEGO OFICIAL */}
            <ResponsiveBoardArea>
                <div className='container-fluid'>
                    {currentLevelComponent && React.createElement(currentLevelComponent, { cards, handleCardClick })}
                </div>
            </ResponsiveBoardArea>

            
            {/* TESTEO DE NIVELES; Solo el nivel personalizado */}
            {/* <ResponsiveBoardArea>
                <Type01Level cards={cards} handleCardClick={handleCardClick} />
            </ResponsiveBoardArea> */}

            {/* TESTEO DE NIVELES; 3 niveles normales y luego el nivel personalizado */}
            {/* <ResponsiveBoardArea>
                <div className='container-fluid'>
                    {level <= 3 ? (
                        <BoardGrid $level={level} className={`board-grid board-level-${level}`}>
                            {cards.map(card => (
                                <MemoizedCard
                                    key={card.id}
                                    content={card.content}
                                    isFlipped={card.isFlipped}
                                    onClick={() => handleCardClick(card.id)}
                                />
                            ))}
                        </BoardGrid>
                    ) : <Type02Level cards={cards} handleCardClick={handleCardClick} />}
                </div>
            </ResponsiveBoardArea> */}



            {/*================================================================*/}
            {/*================================================================*/}
            {showHint && (
                <HintSprite>
                    <img src={hintSprt} alt="Hand Hint" width={60} height={60} />
                    <p>{translate('hintSprite', 'Press a card')}</p>
                </HintSprite>
            )}
            {showPopup && (
                <MemoizedEmergente
                    maxNivel={level - 1}
                    level={level}
                    coins={coins}
                    onRestart={handleRestart}
                    onContinue={(usedAd) => handleContinue(usedAd)}
                />
            )}
        </BoardContainer>
    );
};

const MemoizedCard = React.memo(Card);
const MemoizedEmergente = React.memo(Emergente);

export default Board;