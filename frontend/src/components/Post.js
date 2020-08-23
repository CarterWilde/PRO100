import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
import { connect } from 'react-redux';

/*
Post By: and buttons 

Post By: https://developer.microsoft.com/en-us/fluentui#/controls/web/documentcard
Work in Progess 

import {
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import { TestImages } from '@uifabric/example-data';

const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];
<DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
*/

/*
   <Icon iconName="RedEye" styles={iconStyles}  onClick={_alertClicked}  allowDisabledFocus disabled={disabled} checked={checked} />
   const { disabled, checked } = props;
*/

const alertClicked = () => {
    alert('Clicked');
};
export class Post extends React.Component {
    constructor(props) {
        super(props)

        // TODO: Brandon, The search will return the data needed to complete the post component. The JSON data
        console.log(this.props.elements) //I added this so you can see it. as of now its only dumby data. It will say only a single string
    }
    render() {
        const titleTextStyles = {
            root: {
                color: '#333333',
                fontSize: 25,
                fontWeight: FontWeights.regular,
            },
        };
        const priceTextStyles = {
            root: {
                color: '#333333',
                fontSize: 15,
                fontWeight: FontWeights.regular,
            },
        };
        const descriptionTextStyles = {
            root: {
                color: '#333333',
                fontSize: 12,
                fontWeight: FontWeights.regular,

            },
        };

        const postByTextStyles = {
            root: {
                color: '#333333',
                fontSize: 10,
                fontWeight: FontWeights.regular,
            },
        };

        const iconStyles = {
            root: {
                color: '#0078D4',
                fontSize: 16,
                fontWeight: FontWeights.regular,
            },
        };
        const footerCardSectionStyles = {
            root: {
                alignSelf: 'stretch',
                borderLeft: '1px solid #F3F2F1',
            },
        };
        const infoCardSectionStyles = {
            root: {
                alignSelf: 'stretch',
                borderLeft: '1px solid #F3F2F1',
            },
        };

        const sectionStackTokens = { childrenGap: 20, margin: '5px 5px 5px 5px' };
        const cardTokens = { childrenMargin: 10 };
        const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
        const infoCardSectionTokens = { width: "160px", maxWidth: "160px", maxHeight: "173px", margin: '5px 5px 5px 10px' };
        const ImageTokens = { maxWidth: "300px", maxHeight: "150px" };

        //dump data 
        // const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];

        return (
            <div id="post" >
                <Stack tokens={sectionStackTokens}>
                    <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>

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
                                <strong style={postByTextStyles} >By: {this.props.data.User.Username}</strong>
                            </div>
                        </Card.Item>

                        <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
                            <Icon iconName="RedEye" styles={iconStyles} />

                            <Icon iconName="SingleBookmark" styles={iconStyles} />

                            <Stack.Item grow={1}>
                                <span />
                            </Stack.Item>
                            <Icon iconName="MoreVertical" styles={iconStyles} />
                        </Card.Section>
                    </Card>
                </Stack>
            </div>
        );
    }

}
export default connect(state => ({...state}))(Post);