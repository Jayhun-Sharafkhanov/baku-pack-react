import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import { createContext, ReactElement, useState } from 'react';


interface AlertType {
    message: string;
    type: 'success' | 'info' | 'error' | 'warning'
    timeout?: number;
}

export const AlertContext = createContext((a: AlertType) => { })

interface Props {
    children: ReactElement;
}
const AlertProvider = ({ children }: Props) => {
    const [showAlert, setShowAlert] = useState(false)
    const [alert, setAlert] = useState<AlertType>({} as AlertType)

    const setAlertFunc = (alertType: AlertType) => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, alertType.timeout || 2000);
        setAlert(alertType)
    }

    return (
        <AlertContext.Provider value={setAlertFunc}>
            <Fade in={showAlert} timeout={600} style={{
                position: 'fixed',
                right: 20,
                top: 20,
                zIndex: 999999
            }}>
                <Alert severity={alert.type} onClose={() => setShowAlert(false)}>{alert.message}</Alert>
            </Fade>
            {children}
        </AlertContext.Provider>
    )
}


export default AlertProvider;