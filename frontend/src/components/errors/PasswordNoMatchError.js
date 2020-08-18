import {MessageBar, MessageBarType} from '@fluentui/react';
import React from 'react';

export const PasswordNoMatchError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Passwords do not match.</MessageBar>
    )
}