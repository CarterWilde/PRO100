import React, { Component } from 'react'
import { Stack, TextField, DefaultButton, PrimaryButton, DefaultPalette } from '@fluentui/react';

export default class AdComp extends Component {
    constructor() {
        super()
    }


    render() {

        const itemStyles = {
            alignItems: 'center',
            background: DefaultPalette.themePrimary,
            color: DefaultPalette.white,
            display: 'flex',
            height: 50,
            justifyContent: 'center',
            width: 50,
          };
        return (
            <div id="post">
                <Stack verticalAlign="center" horizontal horizontalAlign="space-between">
                    <Stack verticalAlign="center" >
                        <span style={itemStyles}>1</span>
                        <span style={itemStyles}>2</span>
                        <span style={itemStyles}>3</span>
                    </Stack>
                    <Stack verticalAlign="center" >
                        <span style={itemStyles}>1</span>
                        <span style={itemStyles}>2</span>
                        <span style={itemStyles}>3</span>
                    </Stack>
                    <Stack verticalAlign="center" >
                        <span style={itemStyles}>1</span>
                        <span style={itemStyles}>2</span>
                        <span style={itemStyles}>3</span>
                    </Stack>
                </Stack>
            </div>
        )
    }
}