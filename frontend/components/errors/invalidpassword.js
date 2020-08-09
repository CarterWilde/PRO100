import {MessageBar, MessageBarType} from '@fluentui/react';

export const PasswordErrorInvalid = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Incorrect password.</MessageBar>
    )
}
