import {MessageBar, MessageBarType} from '@fluentui/react';
import React from 'react';

export const NoSearchResults = () => {
    return (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            style={{position:"absolute",top:"50%", left:"50%", transform:"transform(-50%,-50%)", zIndex:1000}}
        >No posts matching search criteria. :(</MessageBar>
    )
}