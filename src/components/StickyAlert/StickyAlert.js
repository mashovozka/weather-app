import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useSnackbar } from 'notistack';

const ContainerStickyAlert = ({ children }) => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.weatherReducer.error);

    useEffect(() => {
        if (alert && alert.message) {
            const key = enqueueSnackbar(alert.message, {
                variant: alert.type,
                onClick: () => {
                    closeSnackbar(key);
                }
            });
        }
    }, [alert, closeSnackbar, enqueueSnackbar]);

    return children;
};

export default ContainerStickyAlert;