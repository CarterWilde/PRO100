import {MessageBar, MessageBarType} from '@fluentui/react';
import React from 'react';

export const EmailError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Invalid Email.</MessageBar>
    )
}