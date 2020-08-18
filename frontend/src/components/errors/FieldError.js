import {MessageBar, MessageBarType} from '@fluentui/react';
import React from 'react';

export const FieldError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Fill in all fields.</MessageBar>
    )
}