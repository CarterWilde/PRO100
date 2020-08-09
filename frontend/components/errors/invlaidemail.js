import {MessageBar, MessageBarType} from '@fluentui/react';

export const EmailError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Invalid Email.</MessageBar>
    )
}