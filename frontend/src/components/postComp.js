import React, { Component } from 'react'
import { Stack, TextField, DefaultButton, PrimaryButton, DefaultPalette } from '@fluentui/react';

export class PostComp extends Component {
    constructor(props) {
        super(props)
        //Props { title, postedBy, Price, image, content, upVote(), downVote(), details()}
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