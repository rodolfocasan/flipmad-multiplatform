// src/Components/Game/Card.jsx
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import cartaGiro_SFX_01 from "../../assets/sounds/effects/carta_seffect_01.wav";










const Card = ({ content, isFlipped, onClick }) => {
    const [vibrate, setVibrate] = useState(false);

    const [playCardSound] = useSound(cartaGiro_SFX_01, {
        volume: 0.60
    });

    useEffect(() => {
        if (!isFlipped) {
            setVibrate(true);
            const timeout = setTimeout(() => setVibrate(false), 470);
            return () => clearTimeout(timeout);
        } else {
            setVibrate(false);
            playCardSound();
        }
    }, [isFlipped, playCardSound]);

    const handleClick = () => {
        onClick();
        setVibrate(false);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className={`card-inner ${vibrate ? 'vibrate' : ''}`}>
                <div className="card-front">
                    {isFlipped ? (
                        <div className="card-content">{content}</div>
                    ) : (
                        <div className="card-back"></div>
                    )}
                </div>
                <div className="card-back">
                    {isFlipped ? (
                        <div className="card-content">{content}</div>
                    ) : (
                        <div className="card-back"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;