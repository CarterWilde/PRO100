import React, { Component } from 'react'
import { FontWeights } from '@uifabric/styling';
import { Card } from '@uifabric/react-cards';
import { Stack, Text, Image } from '@fluentui/react';
import adJSON from '../ads/ad-info.json'

export default class AdComp extends Component {

    render() {
        const randAd = Math.floor(Math.random() * (7 + 1));
        const data = adJSON[randAd]
        const fontStyle = {
            color: '#333333',
            fontWeight: FontWeights.regular,
        }

        const titleTextStyles = {
            root: {
                ...fontStyle,
                fontSize: 25
            },
        };
        const priceTextStyles = {
            root: {
                ...fontStyle,
                fontSize: 15
            },
        };
        const postByTextStyles = {
            root: {
                ...fontStyle,
                fontSize: 10
            },
        };
        const sectionStackTokens = { childrenGap: 20, margin: '5px 5px 5px 5px' };
        const cardTokens = { childrenMargin: 10, width: '100%', height:"400px", maxWidth: 'none !important' };
        const infoCardSectionTokens = { width: "160px", padding: '5%' };
        const ImageTokens = { maxHeight: "150px", padding: '5%' };
        return (
            <div id="post" className="lines" >
                <a target="_blank" rel="noopener noreferrer" href={data.link} style={{textDecoration:"none"}}>
                    <Stack tokens={sectionStackTokens}>
                        <Card aria-label="Clickable horizontal card " horizontal tokens={cardTokens} style={{height: "200px",display:"grid", gridTemplateColumns:"5fr 3fr 1fr"}}>
                            <Card.Item>
                                <>
                                    <strong style={postByTextStyles} >Sponsored by: {data.spnsoredBy}</strong>
                                    <Image style={ImageTokens} src={`/src/ads/images/${data.image}`} />
                                </>
                            </Card.Item>
                            <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
                                <Text maxlength="4" variant="small" styles={titleTextStyles}>
                                    {data.name}
                                </Text>
                                <Text variant="small" styles={priceTextStyles}>
                                    {data.price}
                                </Text>
                            </Card.Section>
                        </Card>
                    </Stack>
                </a>
            </div>
        )
    }
}