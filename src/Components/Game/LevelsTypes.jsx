// src/Components/Game/LevelsTypes.jsx
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import Card from './Card';





/*
=================================================
STYLED COMPONENTS CONSTANTES
=================================================
*/
const AnimatedBoardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6px;
`;


























/*
=================================================
NIVELES MINIMALISTAS
=================================================
*/
/*
1º Tipo de nivel minimalista: Elevación Delicada
*/
const delicateElevationAnimation = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
`;
const MinimalCardContainer1 = styled.div`
    display: inline-block;
    animation: ${delicateElevationAnimation} 1.5s ease-in-out infinite;
`;
export const MinimalType01Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card) => (
                <MinimalCardContainer1 key={card.id}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer1>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
2º Tipo de nivel minimalista: Efecto de vibración leve
*/
const subtleShakeAnimation = keyframes`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(0.5deg); }
    75% { transform: rotate(-0.5deg); }
`;
const MinimalCardContainer2 = styled.div`
    display: inline-block;
    animation: ${subtleShakeAnimation} 0.5s linear infinite;
`;
export const MinimalType02Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer2
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.05}s`
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer2>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
3º Tipo de nivel minimalista: Efecto de órbitas microscópicas
*/
const microOrbitAnimation = keyframes`
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(3px, 3px); }
    50% { transform: translate(0, 6px); }
    75% { transform: translate(-3px, 3px); }
`;
const MinimalCardContainer3 = styled.div`
    display: inline-block;
    animation: ${microOrbitAnimation} 4s linear infinite;
`;
export const MinimalType03Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer3
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.5}s`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer3>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
4º Tipo de nivel minimalista: Rotación Alterna
*/
const alternateRotationAnimation = keyframes`
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
`;
const MinimalCardContainer4 = styled.div`
    display: inline-block;
    animation: ${alternateRotationAnimation} 3s ease-in-out infinite;
`;
export const MinimalType04Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer4
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.3}s`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer4>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
5º Tipo de nivel minimalista: Movimiento Browniano
*/
const brownianMotionAnimation = keyframes`
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(2px, -4px); }
    50% { transform: translate(-1px, 1px); }
    75% { transform: translate(1px, 2px); }
`;
const MinimalCardContainer5 = styled.div`
    display: inline-block;
    animation: ${brownianMotionAnimation} 3s linear infinite;
`;
export const MinimalType05Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer5
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer5>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
6º Tipo de nivel minimalista: Efecto onda de escala
*/
const scaleWaveAnimation = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
`;
const MinimalCardContainer6 = styled.div`
    display: inline-block;
    animation: ${scaleWaveAnimation} 2s ease-in-out infinite;
`;
export const MinimalType06Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer6
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.9}s`
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer6>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
7º Tipo de nivel minimalista: Rotación Pendular
*/
const pendulumRotationAnimation = keyframes`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(1deg); }
    75% { transform: rotate(-1deg); }
`;
const MinimalCardContainer7 = styled.div`
    display: inline-block;
    animation: ${pendulumRotationAnimation} 2.5s ease-in-out infinite;
`;
export const MinimalType07Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer7
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.2}s`,
                        transformOrigin: index % 2 === 0 ? 'top' : 'bottom'
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer7>
            ))}
        </AnimatedBoardGrid>
    );
};

/*
8º Tipo de nivel minimalista: Oscilación Suave
*/
const gentleOscillationAnimation = keyframes`
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(2px) rotate(0.5deg); }
`;
const MinimalCardContainer34 = styled.div`
    display: inline-block;
    animation: ${gentleOscillationAnimation} 3s ease-in-out infinite;
`;
export const MinimalType08Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <MinimalCardContainer34
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.2}s`
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </MinimalCardContainer34>
            ))}
        </AnimatedBoardGrid>
    );
};

























/*
=================================================
NIVELES COMPLEJOS
=================================================
*/
/*
1º Tipo de nivel: Animación de movimiento en "S"
*/
const moveInS = keyframes`
    0%, 100% { 
        transform: translate(0, 0) rotate(0deg); 
        opacity: 1;
    }
    25% { 
        transform: translate(50%, 25%) rotate(5deg); 
        opacity: 0.8;
    }
    50% { 
        transform: translate(0, 50%) rotate(-5deg); 
        opacity: 1;
    }
    75% { 
        transform: translate(-50%, 25%) rotate(5deg); 
        opacity: 0.8;
    }
`;
const AnimatedCardContainer1 = styled.div`
    display: inline-block;
    animation: ${moveInS} 4s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
    }
`;
export const Type01Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer1
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.2}s`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer1>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
2º Tipo de nivel: Tren de juguete (ES NECESARIO REPARAR O REEMPLAZAR POR OTRO)
*/
/* const trainAnimation = keyframes`
    0%, 100% { top: 0; left: calc(100% - 60px); }
    25% { top: calc(100% - 100px); left: calc(100% - 60px); }
    50% { top: calc(100% - 90px); left: 0; }
    75% { top: 0; left: 0; }
`;
const AnimatedCardContainer2 = styled.div`
    position: absolute;
    width: 60px;
    height: 90px;
    animation: ${trainAnimation} linear infinite;
    animation-duration: 20s;
    animation-delay: ${props => props.$delay}s;
`;
export const Type02Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid style={{ position: 'relative', width: '100%', height: '80vh' }}>
            {cards.map((card, index) => {
                const delay = -(index * 2);

                return (
                    <AnimatedCardContainer2
                        key={card.id}
                        $delay={delay}
                    >
                        <Card
                            content={card.content}
                            isFlipped={card.isFlipped}
                            onClick={() => handleCardClick(card.id)}
                        />
                    </AnimatedCardContainer2>
                );
            })}
        </AnimatedBoardGrid>
    );
}; */


/*
3º Tipo de nivel: Animación de rotación
*/
const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const AnimatedCardContainer3 = styled.div`
    display: inline-block;
    animation: ${rotate} 2.8s linear infinite;
`;
export const Type03Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer3 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer3>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
4º Tipo de nivel: Animación de desvanecimiento
*/
const fadeInOut = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: -0.99; }
`;
const AnimatedCardContainer4 = styled.div`
    display: inline-block;
    animation: ${fadeInOut} 3.5s ease-in-out infinite;
`;
export const Type04Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer4 key={card.id} style={{ animationDelay: `${index * 0.25}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer4>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
5º Tipo de nivel: Pulso magnético
*/
const pA = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
`;

const magneticMoveAnimation = keyframes`
    0%, 100% {
        transform: translateX(0) translateY(0);
    }
    25% {
        transform: translateX(5px) translateY(-25px);
    }
    50% {
        transform: translateX(-5px) translateY(10px);
    }
    75% {
        transform: translateX(5px) translateY(45px);
    }
`;

const AnimatedCardContainer5 = styled.div`
    display: inline-block;
    animation: ${pA} 1.5s ease-in-out infinite,
               ${magneticMoveAnimation} 1s ease-in-out infinite;
    transition: all 0.3s ease;

    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
`;

export const Type05Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer5
                    key={card.id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer5>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
6º Tipo de nivel: Gravedad inversa
*/
const inverseGravityAnimation = keyframes`
    0%, 100% { 
        transform: translateY(0) rotate(0deg); 
        opacity: 1;
    }
    25% { 
        transform: translateY(-45%) rotate(-10deg); 
        opacity: 1.8;
    }
    50% { 
        transform: translateY(25%) rotate(15deg); 
        opacity: 1;
    }
    75% { 
        transform: translateY(-50%) rotate(-23deg); 
        opacity: 0.9;
    }
`;

const floatingEffect = keyframes`
    0%, 100% { box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    50% { box-shadow: 0 15px 25px rgba(0,0,0,0.2); }
`;

const AnimatedCardContainer6 = styled.div`
    display: inline-block;
    animation: 
        ${inverseGravityAnimation} 6s ease-in-out infinite,
        ${floatingEffect} 6s ease-in-out infinite;
    transform-origin: center;
    transition: all 0.3s ease;

    &:hover {
        animation-play-state: paused;
        transform: scale(1.1) translateY(-10px);
        box-shadow: 0 20px 30px rgba(0,0,0,0.3);
    }
`;

export const Type06Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer6
                    key={card.id}
                    style={{
                        animationDelay: `${index * 0.2}s`,
                    }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer6>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
7º Tipo de nivel: Espiral hipnótica
*/
const spiralAnimation = keyframes`
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.5); }
    100% { transform: rotate(360deg) scale(1); }
`;
const AnimatedCardContainer7 = styled.div`
    display: inline-block;
    animation: ${spiralAnimation} 5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type07Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer7 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer7>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
8º Tipo de nivel: Caleidoscopio
*/
const kaleidoscopeAnimation = keyframes`
    0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
    33% { transform: rotate(120deg) scale(1.2); filter: hue-rotate(120deg); }
    66% { transform: rotate(240deg) scale(0.8); filter: hue-rotate(240deg); }
    100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
`;
const AnimatedCardContainer8 = styled.div`
    display: inline-block;
    animation: ${kaleidoscopeAnimation} 8s linear infinite;
`;
export const Type08Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer8 key={card.id} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer8>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
9º Tipo de nivel: Efecto Cascada Cuántica
*/
const quantumCascadeAnimation = keyframes`
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
    25% { transform: translateY(30%) rotate(90deg); opacity: 0.7; }
    50% { transform: translateY(60%) rotate(180deg); opacity: 0.5; }
    75% { transform: translateY(90%) rotate(270deg); opacity: 0.2; }
`;
const AnimatedCardContainer9 = styled.div`
    display: inline-block;
    animation: ${quantumCascadeAnimation} 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2) rotate(0deg);
        opacity: 1;
    }
`;
export const Type09Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer9 key={card.id} style={{ animationDelay: `${index * 0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer9>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
10º Tipo de nivel: Mosaico en expansión
*/
const mosaicAnimation = keyframes`
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(2.1) rotate(300deg); }
`;
const AnimatedCardContainer10 = styled.div`
    display: inline-block;
    animation: ${mosaicAnimation} 4.5s ease-in-out infinite;
`;
export const Type10Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer10 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer10>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
11º Tipo de nivel: Efecto Dimensión Espejo
*/
const quantumStormAnimation = keyframes`
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    25% { transform: translate(20px, -20px) rotate(45deg); opacity: 0.7; }
    50% { transform: translate(-20px, 20px) rotate(-90deg); opacity: 0.8; }
    75% { transform: translate(10px, 10px) rotate(180deg); opacity: 0.7; }
`;
const AnimatedCardContainer11 = styled.div`
    display: inline-block;
    animation: ${quantumStormAnimation} 4s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2);
    }
`;
export const Type11Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer11 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer11>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
12º Tipo de nivel: Tornado de cartas
*/
const tornadoAnimation = keyframes`
    0% { transform: rotate(0deg) translateY(0) scale(1); }
    50% { transform: rotate(180deg) translateY(-50px) scale(0.5); }
    100% { transform: rotate(360deg) translateY(0) scale(1); }
`;
const AnimatedCardContainer12 = styled.div`
    display: inline-block;
    animation: ${tornadoAnimation} 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type12Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer12
                    key={card.id}
                    style={{ animationDelay: `${index * 0.3}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer12>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
13º Tipo de nivel: Efecto dominó
*/
const dominoAnimation = keyframes`
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(90deg); }
`;
const AnimatedCardContainer13 = styled.div`
    display: inline-block;
    animation: ${dominoAnimation} 2s ease-in-out infinite;
    transform-origin: bottom;
`;
export const Type13Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer13
                    key={card.id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer13>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
14º Tipo de nivel: Efecto nucleones
*/
const nucleonesAnimation = keyframes`
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-5px, 5px); }
    40% { transform: translate(-5px, -5px); }
    60% { transform: translate(5px, 5px); }
    80% { transform: translate(5px, -5px); }
`;
const AnimatedCardContainer14 = styled.div`
    display: inline-block;
    animation: ${nucleonesAnimation} 0.5s ease-in-out infinite;
`;
export const Type14Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer14
                    key={card.id}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer14>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
15º Tipo de nivel: Efecto de metamorfosis
*/
const metamorphosisAnimation = keyframes`
    0%, 100% { border-radius: 0; transform: rotate(0deg); }
    25% { border-radius: 50% 0 0 0; transform: rotate(90deg); }
    50% { border-radius: 50% 50% 0 0; transform: rotate(180deg); }
    75% { border-radius: 50% 50% 50% 0; transform: rotate(270deg); }
`;
const AnimatedCardContainer15 = styled.div`
    display: inline-block;
    animation: ${metamorphosisAnimation} 8s ease-in-out infinite;
`;
export const Type15Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer15
                    key={card.id}
                    style={{ animationDelay: `${index * 0.4}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer15>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
16º Tipo de nivel: Efectp de ondas sísmicas
*/
const seismicWaveAnimation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) translateY(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px) translateY(10px); }
`;
const AnimatedCardContainer16 = styled.div`
    display: inline-block;
    animation: ${seismicWaveAnimation} 5s ease-in-out infinite;
`;
export const Type16Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer16
                    key={card.id}
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer16>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
17º Tipo de nivel: Efecto Teletransportación Cuántica
*/
const quantumTeleportAnimation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
    25% { transform: translateX(100%) translateY(-100%); opacity: 0; }
    50% { transform: translateX(-100%) translateY(100%); opacity: 0; }
    75% { transform: translateX(0) translateY(0); opacity: 1; }
`;
const AnimatedCardContainer17 = styled.div`
    display: inline-block;
    animation: ${quantumTeleportAnimation} 5s cubic-bezier(0.85, -0.55, 0.17, 1.55) infinite;
`;
export const Type17Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer17 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer17>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
18º Tipo de nivel: Efecto de cuerdas estirantes
*/
const cosmicStringAnimation = keyframes`
    0%, 100% { transform: translateY(0) scaleY(1); }
    50% { transform: translateY(20px) scaleY(1.2); }
`;
const AnimatedCardContainer18 = styled.div`
    display: inline-block;
    animation: ${cosmicStringAnimation} 3s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: translateY(-10px) scale(1.1);
    }
`;
export const Type18Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer18 key={card.id} style={{ animationDelay: `${index * 0.15}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer18>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
19º Tipo de nivel: Efecto de Fisión Nuclear
*/
const fissionAnimation = keyframes`
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
    25% { transform: scale(1.5) rotate(90deg); opacity: 0.8; }
    50% { transform: scale(0.8) rotate(180deg); opacity: 0.5; }
    75% { transform: scale(1.2) rotate(270deg); opacity: 0.8; }
`;
const AnimatedCardContainer19 = styled.div`
    display: inline-block;
    animation: ${fissionAnimation} 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type19Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer19 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer19>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
20º Tipo de nivel: Efecto de Danza Cuántica
*/
const quantumDanceAnimation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
    25% { transform: translateX(20px) translateY(-20px) rotate(90deg); }
    50% { transform: translateX(-20px) translateY(20px) rotate(180deg); }
    75% { transform: translateX(20px) translateY(20px) rotate(270deg); }
`;
const AnimatedCardContainer20 = styled.div`
    display: inline-block;
    animation: ${quantumDanceAnimation} 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type20Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer20 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer20>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
21º Tipo de nivel: Caos Cuántico
*/
const quantumChaosAnimation = keyframes`
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
    20% { transform: translate(20px, -20px) rotate(72deg) scale(1.2); opacity: 0.8; }
    40% { transform: translate(-20px, 20px) rotate(144deg) scale(0.8); opacity: 0.6; }
    60% { transform: translate(20px, 20px) rotate(216deg) scale(1.4); opacity: 0.4; }
    80% { transform: translate(-20px, -20px) rotate(288deg) scale(0.8); opacity: 0.2; }
`;
const AnimatedCardContainer21 = styled.div`
    display: inline-block;
    animation: ${quantumChaosAnimation} 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type21Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer21 key={card.id} style={{ animationDelay: `${index * 0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer21>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
22º Tipo de nivel: Efecto Torsión Espaciotemporal
*/
const spacetimeTwistAnimation = keyframes`
    0%, 100% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px); }
    25% { transform: perspective(1000px) rotateY(180deg) rotateX(45deg) translateZ(100px); }
    50% { transform: perspective(1000px) rotateY(360deg) rotateX(0deg) translateZ(200px); }
    75% { transform: perspective(1000px) rotateY(540deg) rotateX(-45deg) translateZ(100px); }
`;
const AnimatedCardContainer22 = styled.div`
    display: inline-block;
    animation: ${spacetimeTwistAnimation} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type22Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer22 key={card.id} style={{ animationDelay: `${index * 0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer22>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
23º Tipo de nivel: Flujo de Antimateria
*/
const antimatterFlowAnimation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); filter: invert(0%); }
    25% { transform: translateX(50px) translateY(-30px) rotate(90deg); filter: invert(25%); }
    50% { transform: translateX(-30px) translateY(50px) rotate(180deg); filter: invert(100%); }
    75% { transform: translateX(30px) translateY(30px) rotate(270deg); filter: invert(75%); }
`;
const AnimatedCardContainer23 = styled.div`
    display: inline-block;
    animation: ${antimatterFlowAnimation} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type23Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer23 key={card.id} style={{ animationDelay: `${index * 0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer23>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
24º Tipo de nivel: Fase de inversión
*/
const phaseInversionAnimation = keyframes`
    0%, 100% { transform: rotateY(0deg); filter: invert(0%); }
    50% { transform: rotateY(180deg); filter: invert(100%); }
`;
const AnimatedCardContainer24 = styled.div`
    display: inline-block;
    animation: ${phaseInversionAnimation} 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
`;
export const Type24Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer24 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer24>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
25º Tipo de nivel: Turbulencia Dimensional
*/
const dimensionalTurbulenceAnimation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); filter: hue-rotate(0deg); }
    25% { transform: translateX(30px) translateY(-30px) rotate(45deg); filter: hue-rotate(90deg); }
    50% { transform: translateX(-30px) translateY(30px) rotate(-45deg); filter: hue-rotate(180deg); }
    75% { transform: translateX(30px) translateY(30px) rotate(45deg); filter: hue-rotate(270deg); }
`;
const AnimatedCardContainer25 = styled.div`
    display: inline-block;
    animation: ${dimensionalTurbulenceAnimation} 4s ease-in-out infinite;
`;
export const Type25Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer25 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer25>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
26º Tipo de nivel: Vórtice Gravitacional
*/
const vortexAnimation = keyframes`
    0% { transform: rotate(0deg) translateY(0) scale(1); }
    50% { transform: rotate(180deg) translateY(40vh) scale(0.5); }
    100% { transform: rotate(360deg) translateY(0) scale(1); }
`;
const AnimatedCardContainer26 = styled.div`
    display: inline-block;
    animation: ${vortexAnimation} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    &:hover { animation-play-state: paused; }
`;
export const Type26Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer26 key={card.id} style={{ animationDelay: `${index * -0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer26>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
27º Tipo de nivel: Onda Sísmica
*/
const seismicWaveAnimation2 = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); }
    25% { transform: translateX(10px) translateY(10px); }
    50% { transform: translateX(-10px) translateY(-10px); }
    75% { transform: translateX(-10px) translateY(10px); }
`;
const AnimatedCardContainer27 = styled.div`
    display: inline-block;
    animation: ${seismicWaveAnimation2} 0.5s ease-in-out infinite;
    &:hover { animation-play-state: paused; transform: scale(1.1); }
`;
export const Type27Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer27 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer27>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
28º Tipo de nivel: Pulsación Cuántica
*/
const quantumPulseAnimation = keyframes`
    0%, 100% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(1.5); filter: brightness(0.8); }
`;
const AnimatedCardContainer28 = styled.div`
    display: inline-block;
    animation: ${quantumPulseAnimation} 1s ease-in-out infinite;
    &:hover { animation-play-state: paused; transform: scale(1.2); filter: brightness(1.7); }
`;
export const Type28Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer28 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer28>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
29º Tipo de nivel: Tornado Eléctrico
*/
const electricTornadoAnimation = keyframes`
    0% { transform: rotate(0deg) translateX(0) translateY(0); filter: hue-rotate(0deg); }
    25% { transform: rotate(90deg) translateX(20px) translateY(-20px); filter: hue-rotate(90deg); }
    50% { transform: rotate(180deg) translateX(0) translateY(0); filter: hue-rotate(180deg); }
    75% { transform: rotate(270deg) translateX(-120px) translateY(120px); filter: hue-rotate(270deg); }
    100% { transform: rotate(360deg) translateX(0) translateY(0); filter: hue-rotate(360deg); }
`;
const AnimatedCardContainer29 = styled.div`
    display: inline-block;
    animation: ${electricTornadoAnimation} 8s linear infinite;
    &:hover { animation-play-state: paused; transform: scale(1.1); }
`;
export const Type29Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer29 key={card.id} style={{ animationDelay: `${index * -0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer29>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
30º Tipo de nivel: Efecto zooming-out
*/
const zoomOutAnimation = keyframes`
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0); opacity: 0; }
`;
const AnimatedCardContainer30 = styled.div`
    display: inline-block;
    animation: ${zoomOutAnimation} 2s ease-in-out infinite;
    &:hover { animation-play-state: paused; transform: scale(1.1); opacity: 1; }
`;
export const Type30Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer30 key={card.id} style={{ animationDelay: `${index * 0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer30>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
31º Tipo de nivel: Giros locos
*/
const bounceRotate = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(0deg); }
    40% { transform: translateY(20px) rotate(180deg); }
    60% { transform: translateY(-105px) rotate(360deg); }
`;
const AnimatedCardContainer31 = styled.div`
    display: inline-block;
    animation: ${bounceRotate} 4s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
    }
`;
export const Type31Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer31 key={card.id} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer31>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
32º Tipo de nivel: Desplazamiento intermedial
*/
const interdes = keyframes`
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-20px); }
    50% { transform: translateX(100px); }
`;
const AnimatedCardContainer32 = styled.div`
    display: inline-block;
    animation: ${interdes} 1.2s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: translateX(0) scale(1.1);
    }
`;
export const Type32Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer32 key={card.id} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer32>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
33º Tipo de nivel: Falsa gravitacion lunar
*/
const lunarFloat = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-150px); }
`;
const AnimatedCardContainer33 = styled.div`
    display: inline-block;
    animation: ${lunarFloat} 2s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: translateY(0) scale(1.1);
    }
`;
export const Type33Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer33 key={card.id} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer33>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
34º Tipo de nivel: Parpadeo instantáneo
*/
const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;
const AnimatedCardContainer34 = styled.div`
    display: inline-block;
    animation: ${blink} 4s step-start infinite;
    &:hover {
        animation-play-state: paused;
        opacity: 1;
        transform: scale(1.1);
    }
`;
export const Type34Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer34 key={card.id} style={{ animationDelay: `${index * 0.6}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer34>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
35º Tipo de nivel: Terremoto terremoto tracatracatraca
*/
const terremotoAnimation = keyframes`
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
`;
const AnimatedCardContainer = styled.div`
    display: inline-block;
    animation: ${terremotoAnimation} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    cursor: pointer;
`;
export const Type35Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
36º Tipo de nivel: Simulación de maracas
*/
const maracasAnimation = keyframes`
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateY(-50px) rotate(-22deg); }
    20%, 40%, 60%, 80% { transform: translateX(76px) rotate(22deg); }
`;
const AnimatedCardContainer36 = styled.div`
    display: inline-block;
    animation: ${maracasAnimation} 2.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    cursor: pointer;
`;
export const Type36Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer36 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer36>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
37º Tipo de nivel: Doble spin
*/
const doubleSpin = keyframes`
    0%, 100% { transform: scale(1) rotate(0); }
    50% { transform: scale(1.2) rotate(360deg); }
`;
const AnimatedCardContainer37 = styled.div`
    display: inline-block;
    animation: ${doubleSpin} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    cursor: pointer;
`;
export const Type37Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer37 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer37>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
38º Tipo de nivel: Efecto onda de ceguedad
*/
const waveBlinkAnimation = keyframes`
    0%, 100% { transform: rotate(0); opacity: 1; }
    25% { transform: rotate(10deg); opacity: 0; }
    75% { transform: rotate(-10deg); opacity: 0; }
`;
const AnimatedCardContainer38 = styled.div`
    display: inline-block;
    animation: ${waveBlinkAnimation} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    cursor: pointer;
`;
export const Type38Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer38 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer38>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
39º Tipo de nivel: Rebote elástico
*/
const elasticBounce = keyframes`
    0%, 100% { transform: scale(1, 1); }
    40% { transform: scale(1.2, 0.8); }
    60% { transform: scale(0.8, 1.2); }
    80% { transform: scale(1.1, 0.9); }
`;
const AnimatedCardContainer39 = styled.div`
    display: inline-block;
    animation: ${elasticBounce} 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
    }
`;
export const Type39Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer39 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer39>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
40º Tipo de nivel: Efecto torbellino en cruz
*/
const whirlwindAnimation = keyframes`
    0% { transform: translate(0, 0) rotate(0); }
    25% { transform: translate(50px, -50px) rotate(90deg); }
    50% { transform: translate(0, -100px) rotate(180deg); }
    75% { transform: translate(-50px, -50px) rotate(270deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
`;
const AnimatedCardContainer40 = styled.div`
    display: inline-block;
    animation: ${whirlwindAnimation} 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2) rotate(0);
    }
`;
export const Type40Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer40 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer40>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
41º Tipo de nivel: Efecto de vuelo trasero
*/
const flyingBack = keyframes`
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
    25% { transform: translate(100px, -100px) scale(0.5); opacity: 0.5; }
    50% { transform: translate(-100px, 100px) scale(0.2); opacity: 0; }
    75% { transform: translate(-50px, -50px) scale(0.8); opacity: 0.8; }
`;
const AnimatedCardContainer41 = styled.div`
    display: inline-block;
    animation: ${flyingBack} 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2);
        opacity: 1;
    }
`;
export const Type41Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer41 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer41>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
42º Tipo de nivel: Movimiento de cartas en tornado de reloj
*/
const cardTornado = keyframes`
    0% { transform: rotate(0) translate(0) scale(1); }
    25% { transform: rotate(90deg) translate(50px, -50px) scale(0.8); }
    50% { transform: rotate(180deg) translate(0, -100px) scale(0.6); }
    75% { transform: rotate(270deg) translate(-50px, -50px) scale(0.8); }
    100% { transform: rotate(360deg) translate(0) scale(1); }
`;
const AnimatedCardContainer42 = styled.div`
    display: inline-block;
    animation: ${cardTornado} 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2) rotate(0);
    }
`;
export const Type42Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer42 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer42>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
43º Tipo de nivel: Efecto elevado de alma
*/
const soulUp = keyframes`
    0% { transform: translateY(0) rotate(0); opacity: 0; }
    10% { transform: translateY(-50px) rotate(45deg); opacity: 1; }
    50% { transform: translateY(-100px) rotate(180deg); opacity: 1; }
    90% { transform: translateY(-150px) rotate(315deg); opacity: 0.5; }
    100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
`;
const AnimatedCardContainer43 = styled.div`
    display: inline-block;
    animation: ${soulUp} 4s ease-out infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2) rotate(0);
        opacity: 1;
    }
`;
export const Type43Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer43 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer43>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
44º Tipo de nivel: Vórtice de dimensiones
*/
const dimensionalVortex = keyframes`
    0% { transform: perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(0px); }
    50% { transform: perspective(500px) rotateX(180deg) rotateY(180deg) translateZ(100px); }
    100% { transform: perspective(500px) rotateX(360deg) rotateY(360deg) translateZ(0px); }
`;
const AnimatedCardContainer44 = styled.div`
    display: inline-block;
    animation: ${dimensionalVortex} 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(50px) scale(1.1);
    }
`;
export const Type44Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer44 key={card.id} style={{ animationDelay: `${index * 0.25}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer44>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
45º Tipo de nivel: Interferencia de fotoplasma
*/
const quantumInterference = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
    25% { transform: translateX(20px) translateY(-20px); opacity: 0.5; }
    50% { transform: translateX(-20px) translateY(20px); opacity: 0; }
    75% { transform: translateX(20px) translateY(20px); opacity: 0.5; }
`;
const AnimatedCardContainer45 = styled.div`
    display: inline-block;
    animation: ${quantumInterference} 4s linear infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
        opacity: 1;
    }
`;
export const Type45Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer45 key={card.id} style={{ animationDelay: `${index * 0.15}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer45>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
46º Tipo de nivel: Efecto de orbital sobre el propio eje
*/
const sinOrbit = keyframes`
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(50px, 50px) rotate(90deg); }
    50% { transform: translate(0, 100px) rotate(180deg); }
    75% { transform: translate(-50px, 50px) rotate(270deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
`;
const AnimatedCardContainer46 = styled.div`
    display: inline-block;
    animation: ${sinOrbit} 2s linear infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.2) rotate(0deg);
    }
`;
export const Type46Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer46 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer46>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
47º Tipo de nivel: Cascada de apariciones (como los taquiones)
*/
const tachyonCascade = keyframes`
    0% { transform: translateY(-100%) rotate(0deg); opacity: 0; }
    50% { transform: translateY(0) rotate(360deg); opacity: 1; }
    100% { transform: translateY(100%) rotate(720deg); opacity: 0; }
`;
const AnimatedCardContainer47 = styled.div`
    display: inline-block;
    animation: ${tachyonCascade} 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    &:hover {
        animation-play-state: paused;
        transform: translateY(0) rotate(0deg) scale(1.2);
        opacity: 1;
    }
`;
export const Type47Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer47 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer47>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
48º Tipo de nivel: Teletransportación cuántica
*/
const quantumTeleportation = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
    25% { transform: translateX(-100px) translateY(100px); opacity: 0; }
    50% { transform: translateX(100px) translateY(-100px); opacity: 0; }
    75% { transform: translateX(-50px) translateY(50px); opacity: 0.5; }
`;
const AnimatedCardContainer48 = styled.div`
    display: inline-block;
    animation: ${quantumTeleportation} 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1) translateX(0) translateY(0);
        opacity: 1;
    }
`;
export const Type48Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer48 key={card.id} style={{ animationDelay: `${index * 0.25}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer48>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
49º Tipo de nivel: Vórtice Hiperdimensional
*/
const hyperdimensionalVortex = keyframes`
    0% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px); }
    50% { transform: perspective(1000px) rotateX(180deg) rotateY(180deg) translateZ(200px); }
    100% { transform: perspective(1000px) rotateX(360deg) rotateY(360deg) translateZ(0px); }
`;
const AnimatedCardContainer49 = styled.div`
    display: inline-block;
    animation: ${hyperdimensionalVortex} 8s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    &:hover {
        animation-play-state: paused;
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(100px) scale(1.1);
    }
`;
export const Type49Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer49 key={card.id} style={{ animationDelay: `${index * 0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer49>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
50º Tipo de nivel: Efecto hoja en 3D
*/
const warpRotateAnimation = keyframes`
    0%, 100% { transform: perspective(100px) rotateX(0) rotateY(0); }
    50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
`;

const AnimatedCardContainer50 = styled.div`
    display: inline-block;
    animation: ${warpRotateAnimation} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    cursor: pointer;
`;

export const Type50Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer50
                    key={card.id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer50>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
51º Tipo de nivel: Reflejo engañoso
*/
const lightSwing = keyframes`
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(20deg); }
`;
const lightTrail = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;
const AnimatedCardContainer51 = styled.div`
    display: inline-block;
    animation: ${lightSwing} 1s ease-in-out infinite;
    cursor: pointer;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(255,255,255,0.8), rgba(255,255,255,0));
        transform: translateX(-50%);
        animation: ${lightTrail} 1s ease-in-out infinite;
    }
`;
export const Type51Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer51
                    key={card.id}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer51>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
52º Tipo de nivel: Pulso cuántico
*/
const quantumPulse = keyframes`
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.8); opacity: 0.6; }
`;
const AnimatedCardContainer52 = styled.div`
    display: inline-block;
    animation: ${quantumPulse} 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1);
        opacity: 1;
    }
`;
export const Type52Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer52 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer52>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
53º Tipo de nivel: Espiral dimensional
*/
const dimensionalSpiral = keyframes`
    0% { transform: rotate(0deg) translateX(0) scale(1); }
    50% { transform: rotate(180deg) translateX(20px) scale(0.8); }
    100% { transform: rotate(360deg) translateX(0) scale(1); }
`;
const AnimatedCardContainer53 = styled.div`
    display: inline-block;
    animation: ${dimensionalSpiral} 6s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: rotate(0deg) translateX(0) scale(1.1);
    }
`;
export const Type53Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer53 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer53>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
54º Tipo de nivel: Momento borroso
*/
const blurMomentum = keyframes`
    0%, 100% { filter: blur(0px) brightness(1); }
    50% { filter: blur(2px) brightness(1.2); }
`;
const AnimatedCardContainer54 = styled.div`
    display: inline-block;
    animation: ${blurMomentum} 4s ease-in-out infinite;
    &:hover {
        animation-play-state: paused;
        filter: blur(0px) brightness(1.1);
        transform: scale(1.05);
    }
`;
export const Type54Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer54 key={card.id} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer54>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
55º Tipo de nivel: Cartas invertidas en X
*/
const flipAndStay = keyframes`
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(180deg); }
`;
const AnimatedCardContainer55 = styled.div`
    display: inline-block;
    animation: ${flipAndStay} 1s ease-out forwards;
    transform-style: preserve-3d;
`;
export const Type55Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card) => (
                <AnimatedCardContainer55 key={card.id}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer55>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
56º Tipo de nivel: Rotación 90 grados derecha con desplazamiento
*/
const rotate90Right = keyframes`
    0% { transform: rotate(0deg) translateX(0); }
    100% { transform: rotate(90deg) translateX(-20px); }
`;
const AnimatedCardContainer56 = styled.div`
    display: inline-block;
    animation: ${rotate90Right} 1s ease-out forwards;
`;
export const Type56Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer56 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer56>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
57º Tipo de nivel: Rotación 90 grados izquierda con desplazamiento
*/
const rotate90Left = keyframes`
    0% { transform: rotate(0deg) translateX(0); }
    100% { transform: rotate(-90deg) translateX(20px); }
`;
const AnimatedCardContainer57 = styled.div`
    display: inline-block;
    animation: ${rotate90Left} 1s ease-out forwards;
`;
export const Type57Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer57 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer57>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
58º Tipo de nivel: Efecto de agujero negro
*/
const blackHoleEffect = keyframes`
    0% { transform: scale(1) rotate(0deg); opacity: 1; }
    100% { transform: scale(0) rotate(720deg); opacity: 0; }
`;
const AnimatedCardContainer58 = styled.div`
    display: inline-block;
    animation: ${blackHoleEffect} 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite alternate;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1) rotate(0deg);
        opacity: 1;
    }
`;
export const Type58Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer58 key={card.id} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer58>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
59º Tipo de nivel: Remolino fractal
*/
const fractalSpin = keyframes`
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(90deg) scale(0.75); }
    50% { transform: rotate(180deg) scale(0.5); }
    75% { transform: rotate(270deg) scale(0.75); }
    100% { transform: rotate(360deg) scale(1); }
`;
const AnimatedCardContainer59 = styled.div`
    display: inline-block;
    animation: ${fractalSpin} 10s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1) rotate(0deg);
    }
`;
export const Type59Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer59 key={card.id} style={{ animationDelay: `${index * -0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer59>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
60º Tipo de nivel: Danza de origami
*/
const origamiFold = keyframes`
    0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
    25% { transform: rotateX(90deg) rotateY(0deg); }
    50% { transform: rotateX(90deg) rotateY(90deg); }
    75% { transform: rotateX(0deg) rotateY(90deg); }
`;
const AnimatedCardContainer60 = styled.div`
    display: inline-block;
    animation: ${origamiFold} 2s linear infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: rotateX(45deg) rotateY(45deg) scale(1.1);
    }
`;
export const Type60Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer60 key={card.id} style={{ animationDelay: `${index * -0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer60>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
61º Tipo de nivel: Caleidoscopio cuántico
*/
const quantumKaleidoscope = keyframes`
    0%, 100% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
    25% { transform: rotate(90deg) scale(0.75); filter: hue-rotate(90deg); }
    50% { transform: rotate(180deg) scale(1.25); filter: hue-rotate(180deg); }
    75% { transform: rotate(270deg) scale(0.75); filter: hue-rotate(270deg); }
`;
const AnimatedCardContainer61 = styled.div`
    display: inline-block;
    animation: ${quantumKaleidoscope} 8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    &:hover {
        animation-play-state: paused;
        transform: scale(1.1) rotate(0deg);
        filter: hue-rotate(0deg);
    }
`;
export const Type61Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer61 key={card.id} style={{ animationDelay: `${index * -0.3}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer61>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
62º Tipo de nivel: Tormenta eléctrica
*/
const electricStorm = keyframes`
    0%, 100% { transform: translateX(0) translateY(0); filter: brightness(1); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) translateY(5px); filter: brightness(1.5); }
    20%, 40%, 60%, 80% { transform: translateX(5px) translateY(-5px); filter: brightness(2); }
`;
const AnimatedCardContainer62 = styled.div`
    display: inline-block;
    animation: ${electricStorm} 1s linear infinite;
    &:hover {
        animation-play-state: paused;
        filter: brightness(2.5) contrast(1.5);
        transform: scale(1.1);
    }
`;
export const Type62Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer62 key={card.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer62>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
63º Tipo de nivel: Paradoja espaciotemporal
*/
const spacetimeParadox = keyframes`
    0% { transform: perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(0px); }
    25% { transform: perspective(500px) rotateX(180deg) rotateY(90deg) translateZ(50px); }
    50% { transform: perspective(500px) rotateX(360deg) rotateY(180deg) translateZ(100px); }
    75% { transform: perspective(500px) rotateX(540deg) rotateY(270deg) translateZ(50px); }
    100% { transform: perspective(500px) rotateX(720deg) rotateY(360deg) translateZ(0px); }
`;
const AnimatedCardContainer63 = styled.div`
    display: inline-block;
    animation: ${spacetimeParadox} 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(50px) scale(1.1);
    }
`;
export const Type63Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer63 key={card.id} style={{ animationDelay: `${index * -0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer63>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
64º Tipo de nivel: Vórtice cuántico
*/
const quantumVortex = keyframes`
    0% { transform: rotate3d(1, 1, 1, 0deg); filter: hue-rotate(0deg); }
    50% { transform: rotate3d(1, 1, 1, 180deg) scale(0.5); filter: hue-rotate(180deg); }
    100% { transform: rotate3d(1, 1, 1, 360deg); filter: hue-rotate(360deg); }
`;
const AnimatedCardContainer64 = styled.div`
    display: inline-block;
    animation: ${quantumVortex} 8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: rotate3d(1, 1, 1, 0deg) scale(1.1);
        filter: hue-rotate(90deg) brightness(1.2);
    }
`;
export const Type64Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer64 key={card.id} style={{ animationDelay: `${index * -0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer64>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
65º Tipo de nivel: Vórtice de agujero de gusano
*/
const wormholeVortex = keyframes`
    0% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0); }
    50% { transform: perspective(1000px) rotateY(180deg) rotateX(360deg) translateZ(-200px); }
    100% { transform: perspective(1000px) rotateY(360deg) rotateX(720deg) translateZ(0); }
`;
const AnimatedCardContainer65 = styled.div`
    display: inline-block;
    animation: ${wormholeVortex} 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(100px) scale(1.1);
    }
`;
export const Type65Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer65 key={card.id} style={{ animationDelay: `${index * -0.5}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer65>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
66º Tipo de nivel: Prisma temporal
*/
const timePrism = keyframes`
    0%, 100% { transform: rotateX(0deg) rotateY(0deg); filter: hue-rotate(0deg); }
    25% { transform: rotateX(90deg) rotateY(0deg); filter: hue-rotate(90deg); }
    50% { transform: rotateX(180deg) rotateY(90deg); filter: hue-rotate(180deg); }
    75% { transform: rotateX(270deg) rotateY(180deg); filter: hue-rotate(270deg); }
`;
const AnimatedCardContainer66 = styled.div`
    display: inline-block;
    animation: ${timePrism} 10s linear infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: rotateX(0deg) rotateY(0deg) scale(1.1);
        filter: hue-rotate(0deg) brightness(1.2);
    }
`;
export const Type66Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer66 key={card.id} style={{ animationDelay: `${index * -0.4}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer66>
            ))}
        </AnimatedBoardGrid>
    );
};


/*
67º Tipo de nivel: Fusión de dimensiones
*/
const dimensionFusion = keyframes`
    0%, 100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); opacity: 1; }
    33% { transform: perspective(1000px) rotateX(60deg) rotateY(60deg) rotateZ(60deg); opacity: 0.7; }
    66% { transform: perspective(1000px) rotateX(-60deg) rotateY(-60deg) rotateZ(-60deg); opacity: 0.7; }
`;
const AnimatedCardContainer67 = styled.div`
    display: inline-block;
    animation: ${dimensionFusion} 5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    transform-style: preserve-3d;
    &:hover {
        animation-play-state: paused;
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.1);
        opacity: 1;
    }
`;
export const Type67Level = ({ cards = [], handleCardClick }) => {
    return (
        <AnimatedBoardGrid>
            {cards.map((card, index) => (
                <AnimatedCardContainer67 key={card.id} style={{ animationDelay: `${index * -0.6}s` }}>
                    <Card
                        content={card.content}
                        isFlipped={card.isFlipped}
                        onClick={() => handleCardClick(card.id)}
                    />
                </AnimatedCardContainer67>
            ))}
        </AnimatedBoardGrid>
    );
};