import {Id, toast, ToastOptions, UpdateOptions} from "react-toastify";
import {useCallback} from "react";

export class NotificationService {
    private readonly OPTIONS: ToastOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: 'dark'
    }

    notify = useCallback((message: string, options?: ToastOptions) => {
        toast(message, {...this.OPTIONS, ...options});
    }, []);


    loading = useCallback((message: string, options?: ToastOptions) => {
        return toast.loading(message, {...this.OPTIONS, ...options});
    }, []);


    update = useCallback((notification_id: Id, options?: UpdateOptions) => {
        toast.update(notification_id, {...this.OPTIONS, ...options});
    }, []);


    dismiss = useCallback((notification_id: Id) => {
        toast.dismiss(notification_id);
    }, []);
}

export default function useNotificationService() {
    return new NotificationService()
}