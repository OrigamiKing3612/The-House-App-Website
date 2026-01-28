import { ref } from "vue";
import { Notification, NotificationType } from "~/types/Notifications";

const notifications = ref<Notification[]>([]);

export function useNotifications() {
    const error = (message: string, error?: Error | undefined | unknown) => {
        if (error) {
            console.error(message + ":", error);
        }
        add(message, NotificationType.error);
    }
    const warning = (message: string) => {
        add(message, NotificationType.warning);
    }
    const success = (message: string) => {
        add(message, NotificationType.success);
    }

    const add = (message: string, type: NotificationType) => {
        if (notifications.value.length + 1 > 5)
            notifications.value = removeFirstItem(notifications.value);
        notifications.value.push(new Notification(Date.now().toString(), message, type));
    }

    function removeFirstItem(arr: Notification[]): Notification[] {
        if (arr.length === 0) {
            return arr;
        }
        return arr.slice(1);
    }

    const close = (id: string) => {
        notifications.value = notifications.value.filter(n => n.id !== id);
    };

    return {
        notifications,
        error,
        warning,
        success,
        close,
    };
}
