// src/Components/Home/Notifications.jsx
import React, { useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Preferences } from '@capacitor/preferences';










const Notifications = () => {
    useEffect(() => {
        const initializeNotifications = async () => {
            const { value } = await Preferences.get({ key: 'hasRequestedNotificationPermissions' });

            if (value === 'true') {
                return; // Ya se han solicitado los permisos, no hacer nada
            }

            // Solicitar permisos de notificación
            const requestPermissions = async () => {
                const { display } = await LocalNotifications.checkPermissions();
                if (display !== 'granted') {
                    await LocalNotifications.requestPermissions();
                }
            };

            await requestPermissions();
            await scheduleNotification();

            // Marcar que los permisos ya han sido solicitados
            await Preferences.set({ key: 'hasRequestedNotificationPermissions', value: 'true' });
        };

        const scheduleNotification = async () => {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        title: "Hey 👀!",
                        body: "A1, B2, C3, D4...",
                        id: 1,
                        schedule: { every: 'day' }, // Notificación diaria
                        /* schedule: { every: 'minute' }, // Notificación cada minuto (para TEST, remover en producción) */
                        sound: "raw://notification_beep",
                        smallIcon: "notification_icon_normal",
                        attachments: null,
                        actionTypeId: "",
                        extra: null
                    }
                ]
            });
        };

        initializeNotifications();
    }, []);

    return null; // No UI para este componente
};

export default Notifications;
