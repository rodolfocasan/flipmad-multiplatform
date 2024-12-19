// src/Components/Game/Menu.jsx
import React, { useState, useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

/* Main Menu - Assets */
import menuIcon from "../../assets/images/helpers/single_player.png";

import menuSFX_01 from "../../assets/sounds/effects/mainMenu_seffect_02.wav";
import menuSFX_02 from "../../assets/sounds/effects/boton_seffect_03.wav";
import boton_SFX_01 from "../../assets/sounds/effects/boton_seffect_01.wav";

/* Hook personalizado para traducciones */
import { useTranslation } from './CustomHooks';










const MenuContainer = styled.div`
  position: fixed;
  bottom: 70px;
  right: 10px;
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  border-radius: 10px;
  border: 2px solid #555;
  z-index: 10;
  width: 240px;
  user-select: none;

  h2 {
    font-size: 25px;
    font-weight: bold;
  }
`;

const Section = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
`;

const RestartButton = styled.button`
  padding: 12px 20px;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  width: 100%;
  
  &:hover {
    background-color: #FFC700;
  }

  &:active {
    background-color: #FFD700;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.$active ? '#555' : '#FFD70E')};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  user-select: none;

  img {
    user-select: none;
  }

  &:hover {
    background-color: ${(props) => (props.$active ? '#333' : '#FFC700')};
  }

  &:active {
    background-color: ${(props) => (props.$active ? '#333' : '#FFD700')};
  }
`;

const ConfirmDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #333;
  color: white;
  border-radius: 10px;
  border: 2px solid #555;
  z-index: 20;
  width: 270px;
  user-select: none;
`;

const DialogButton = styled.button`
  padding: 12px 20px;
  margin: 10px;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  width: 100%;
  
  &:hover {
    background-color: #FFC700;
  }

  &:active {
    background-color: #FFD700;
  }
`;

const BugReportButton = styled.a`
  display: block;
  padding: 9px 16px;
  background-color: #FF6347;
  color: #ffffff;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  width: 70%;
  text-decoration: none;
  margin: 1px auto;
  
  &:hover {
    background-color: #FF4500;
  }

  &:active {
    background-color: #FF6347;
  }
`;

const Menu = ({ isOpen, setIsOpen, showConfirmDialog, setShowConfirmDialog, onRestart }) => {
  const translate = useTranslation('menu');

  const [playMenuSound] = useSound(menuSFX_01, { volume: 0.17 });
  const [playButtonSound] = useSound(menuSFX_02, { volume: 0.17 });
  const [playConfirmButtonSound] = useSound(boton_SFX_01, { volume: 0.96 });

  const toggleMenu = () => {
    if (!isOpen) {
      playMenuSound();
    }
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest('#menu-container') && !event.target.closest('#menu-button')) {
      setIsOpen(false);
    }
  };

  const handleNewGameClick = () => {
    setShowConfirmDialog(true);
    playButtonSound();
  };

  const handleConfirmNewGame = () => {
    setShowConfirmDialog(false);
    onRestart();
  };

  const handleCancelNewGame = () => {
    setShowConfirmDialog(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <MenuButton id="menu-button" $active={isOpen} onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu Icon" width={40} height={40} />
      </MenuButton>
      <MenuContainer id="menu-container" $show={isOpen}>
        <h2 style={{ margin: 0 }}>{translate('title', 'Single')}</h2>
        <Divider />
        <Section>
          <RestartButton onClick={handleNewGameClick}>
            {translate('button_01', 'New Game')}
          </RestartButton>
        </Section>
        <Divider />
        <Section>
          <BugReportButton href="https://forms.gle/erF2f5F6tAgcXU1V8" target="_blank">
            {translate('report_button_01', 'Report a bug')}
          </BugReportButton>
        </Section>
      </MenuContainer>
      <ConfirmDialog $show={showConfirmDialog}>
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px' }}>
          {translate('confirm_dialog_title', 'Are you sure?')}
        </p>
        <p style={{ textAlign: 'center' }}>
          {translate('confirm_dialog_subtitle', 'All progress will be lost...')}
        </p>
        <DialogButton onClick={() => {
          playConfirmButtonSound();
          handleConfirmNewGame();
        }}>
          {translate('confirm_dialog_option_01', 'Yes')}
        </DialogButton>
        <DialogButton onClick={handleCancelNewGame}>
          {translate('confirm_dialog_option_02', 'No')}
        </DialogButton>
      </ConfirmDialog>
    </>
  );
};

export default Menu;