import { MessageBarType } from '@fluentui/react';

export default class Status {
    public Status: string;
    public StatusType: MessageBarType;

    constructor(status: string, statusType: MessageBarType) {
        this.Status = status;
        this.StatusType = statusType
    }
}