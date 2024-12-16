"use client"

import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import { Snackbar } from "@mui/material";
import { SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";

export default function Messages() {

    const storeMessages = useStoreMessages()

    const errors = storeMessages?.errors;
    const notifications = storeMessages?.notifications;

    return (
        <>
            {errors.map((error, index) => {
                return (
                    <Snackbar
                        className="errorSnackBarMessage"
                        key={index}
                        open={errors.length >= 1}
                        autoHideDuration={6000}
                        message={error}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => storeMessages.clearErrors([])}>
                        <SnackbarMessageAlert
                            className="errorAlert"
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => storeMessages.clearErrors([])}
                        >
                            {error}
                        </SnackbarMessageAlert>
                    </Snackbar>
                )
            })}
            {notifications.map((notification, index) => {
                return (
                    <Snackbar
                        className="notificationSnackBarMessage"
                        key={index}
                        open={notifications.length >= 1}
                        autoHideDuration={6000}
                        message={notification}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => storeMessages.clearNotifications([])}>
                        <SnackbarMessageNotification
                            className="notificationAlert"
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => storeMessages.clearNotifications([])}
                        >
                            {notification}
                        </SnackbarMessageNotification>
                    </Snackbar>
                )
            })}
        </>
    )
}