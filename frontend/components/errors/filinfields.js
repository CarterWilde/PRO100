import {MessageBar, MessageBarType} from '@fluentui/react';

export const FieldError = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
        >Fill in all fields.</MessageBar>
    )
}