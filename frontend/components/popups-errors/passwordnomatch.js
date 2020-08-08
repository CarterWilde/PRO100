import {MessageBar, MessageBarType} from '@fluentui/react';

export const PasswordNoMatchError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Passwords do not match.</MessageBar>
    )
}
