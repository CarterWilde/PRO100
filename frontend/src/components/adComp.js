import React, { Component } from 'react'
import { FontWeights } from '@uifabric/styling';
import { Card } from '@uifabric/react-cards';
import { Stack, Text, Image } from '@fluentui/react';
import adJSON from '../ads/ad-info.json'

export default class AdComp extends Component {

    render() {
        const randAd = Math.floor(Math.random() * (7 + 1));
        const data = adJSON[randAd]
        return (
            <div id="post" className="ad" >
                <a target="_blank" rel="noopener noreferrer" href={data.link} style={{ textDecoration: "none" }}>
                    <Stack tokens={{childrenGap:20, margin:"5px"}}>
                        <Card aria-label="Basic vertical card" tokens={{childrenMargin:10, width:"100%", height:"450px", maxWidth:"none !important"}} style={{ height: "200px" }}>
                            <Card.Item className="gradient-border">
                                <strong style={{fontWeight:FontWeights.bold}} >Sponsored by: {data.spnsoredBy}</strong>
                            </Card.Item>
                            <Card.Section horizontal style={{ width: "100%", cursor: "pointer" }}>
                                <Card.Item>
                                    <Image style={{maxHeight:"150px", padding:"5px"}} src={`/src/ads/images/${data.image}`} />
                                </Card.Item>
                                <Card.Section styles={{width:"160px", padding:"5px"}} tokens={{width:"160px", padding:"5%"}}>
                                    <Text maxlength="4" variant="small" style={{fontWeight:FontWeights.regular, fontSize:25}}>{data.name}</Text>
                                    <Text variant="small" style={{fontWeight:FontWeights.regular, fontSize:17}}>{data.price}</Text>
                                    <Text variant="small" style={{fontWeight:FontWeights.regular, fontSize:14}}>Click to view product information.</Text>
                                </Card.Section>
                            </Card.Section>
                        </Card>
                    </Stack>
                </a>
            </div>
        )
    }
}