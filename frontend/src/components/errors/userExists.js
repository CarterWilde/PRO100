import {MessageBar, MessageBarType} from '@fluentui/react';
import React from 'react';

export const UserExistsError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >User already exists.</MessageBar>
    )
}