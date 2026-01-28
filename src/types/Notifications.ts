export class Notification {
    id: string;
    message: string;
    type: NotificationType;

    constructor(id: string, message: string, type: NotificationType) {
        this.id = id;
        this.message = message;
        this.type = type;
    }
}

export enum NotificationType {
    error = "error",
    warning = "warning",
    success = "success"
}
