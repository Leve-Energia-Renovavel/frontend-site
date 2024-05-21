import { Snackbar } from "@mui/material";
import { SnackbarMessageAlert, SnackbarMessageNotification } from "./styles";

export default function Messages({ notifications, errors, setErrorMessage, setNotifications }) {
    return (
        <>
            {errors.map((error, index) => {
                return (
                    <Snackbar
                        key={index}
                        open={errors.length >= 1}
                        autoHideDuration={3000}
                        message={error}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => setErrorMessage([])}>
                        <SnackbarMessageAlert
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => setErrorMessage([])}
                        >
                            {error}
                        </SnackbarMessageAlert>
                    </Snackbar>
                )
            })}
            {notifications.map((notification, index) => {
                return (
                    <Snackbar
                        key={index}
                        open={notifications.length >= 1}
                        autoHideDuration={6000}
                        message={notification}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        onClose={() => setNotifications([])}>
                        <SnackbarMessageNotification
                            sx={{ marginBottom: `${index * 5}rem` }}
                            severity="error"
                            variant="filled"
                            onClose={() => setNotifications([])}
                        >
                            {notification}
                        </SnackbarMessageNotification>
                    </Snackbar>
                )
            })}
        </>
    )
}