import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { IconButton, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';



const alertClicked = () => {
    alert('Clicked');
};
export class Post extends React.Component {
    constructor(props) {
        super(props)
    }
    render() 
    {
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
        const descriptionTextStyles = {
            root: {
                ...fontStyle,
                fontSize: 12

            },
        };

        const postByTextStyles = {
            root: {
                ...fontStyle,
                fontSize: 10
            },
        };

        const iconStyles = {
            root: {
                color: '#0078D4',
                fontSize: 16,
                fontWeight: FontWeights.regular,
            },
        };
        const CardSectionStyles = {
            root: {
                alignSelf: 'stretch',
                borderLeft: '1px solid #F3F2F1',
            },
        };

        const sectionStackTokens = { childrenGap: 20, margin: '5px 5px 5px 5px' };
        const cardTokens = { childrenMargin: 10, width: '100%', height:"400px", maxWidth: 'none !important' };
        const footerCardSectionTokens = { padding: '0' };
        const infoCardSectionTokens = { width: "160px", padding: '5%' };
        const ImageTokens = { maxHeight: "150px", padding: '5%' };

        return (
            <div id="post" className="lines" >
                <Stack tokens={sectionStackTokens}>
                    <Card aria-label="Clickable horizontal card " horizontal tokens={cardTokens} style={{height: "200px",display:"grid", gridTemplateColumns:"5fr 3fr 1fr"}}>
                        <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
                            <Text maxlength="4" variant="small" styles={titleTextStyles}>
                                {this.props.title}
                            </Text>

                            <Text variant="small" styles={priceTextStyles}>
                                {this.props.price}
                            </Text>

                            <Text className="overflow" variant="small" styles={descriptionTextStyles}>
                                {this.props.descirption}
                            </Text>
                        </Card.Section>

                        <Card.Item>
                            <div>
                                <Image style={ImageTokens} src={this.props.imageUrl} />
                                <strong style={postByTextStyles} >By: {this.props.username}</strong>
                            </div>
                        </Card.Item>

                        <Card.Section style={{display:"grid", justifyContent:"center", alignItems:"center"}} styles={CardSectionStyles} tokens={footerCardSectionTokens}>
                            <Stack width="100%">
                                <IconButton iconProps={{ iconName: "CaretUpSolid8" }} styles={iconStyles} onClick={() => { console.log("upvote") }} style={{ outline: 'none' }} />
                                <Text style={{textAlign:"center", fontWeight:FontWeights.bold}}>{this.props.votes}</Text>
                                <IconButton iconProps={{ iconName: "CaretDownSolid8" }} styles={iconStyles} onClick={() => { console.log("downvote") }} style={{ outline: 'none' }} />
                            </Stack>
                        </Card.Section>
                    </Card>
                </Stack>
            </div>
        );
    }
}
export default Post;