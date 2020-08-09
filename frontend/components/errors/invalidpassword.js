import {MessageBar, MessageBarType} from '@fluentui/react';

export const InvalidPasswordError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Incorrect password.</MessageBar>
    )
}