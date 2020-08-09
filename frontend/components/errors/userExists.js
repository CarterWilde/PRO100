import {MessageBar, MessageBarType} from '@fluentui/react';

export const UserExistsError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >User already exists.</MessageBar>
    )
}