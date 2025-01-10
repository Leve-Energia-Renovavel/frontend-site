"use client"

import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import { Snackbar } from "@mui/material";
import { SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";
import { ErrorOutline, CheckCircleOutline } from "@mui/icons-material";

export default function Messages() {

    const storeMessages = useStoreMessages()

    const errors = storeMessages?.errors;
    const notifications = storeMessages?.notifications;

    const autoHideDuration = 6000

    return (
        <>
            {errors.map((error, index) => {
                return (
                    <Snackbar
                        className="errorSnackBarMessage"
                        key={index}
                        open={errors.length >= 1}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

                        autoHideDuration={autoHideDuration}
                        message={error}
                        onClose={() => storeMessages.clearErrors([])}>
                        <SnackbarMessageAlert
                            className="errorAlert"
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            icon={<ErrorOutline />}
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
                        autoHideDuration={autoHideDuration}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

                        message={notification}
                        onClose={() => storeMessages.clearNotifications([])}>
                        <SnackbarMessageNotification
                            className="notificationAlert"
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            icon={<CheckCircleOutline />}
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