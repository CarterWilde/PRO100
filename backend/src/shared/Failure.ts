import { MessageBarType } from '@fluentui/react';

import Status from "./Status";
import { FailureCodes } from './FailureCodes';

export default class Failure extends Status {
    public Reason: string;
    public FailureCode: FailureCodes;

    constructor(status: string, statusType: MessageBarType, reason: string, code: FailureCodes) {
        super(status, statusType);
        this.Reason = reason;
        this.FailureCode = code;
    }
}