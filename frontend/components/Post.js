import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
const alertClicked = () => {
  alert('Clicked');
};
export class Post extends React.Component {
   render() {
    constructor(props) {
      super(props)
      this.state = {error: "0", comp: "login"}
  }
    const siteTextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold,
      },
    };
    const postTextStyles = {
      root: {
        color: '#333333',
        frontSize: 15,
        fontWeight: FontWeights.regular,
      },
    };
    const descriptionTextStyles = {
      root: {
        color: '#333333',
        frontSize: 12,
        fontWeight: FontWeights.regular,
      },
    };
    const helpfulTextStyles = {
      root: {
        color: '#333333',
        fontSize: 23,
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
    const priceTextStyles = {
      root: {
        color: '#333333',
        fontSize: 20,
        fontWeight: FontWeights.regular,
      },
    };
    const sectionStackTokens = { childrenGap: 20 };
    const cardTokens = { childrenMargin: 10};
    const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
    const infoCardSectionTokens = { padding: '0px 100px 0px 20px' };

    return (
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://vignette.wikia.nocookie.net/smite/images/e/e1/2826.jpg/revision/latest?cb=20140511201423" alt="Placeholder image."/>
          </Card.Item>
          <Card.Section styles={infoCardSectionStyles} tokens={infoCardSectionTokens}>
            <Text variant="small" styles={siteTextStyles}>
            {this.title}
            </Text>
            <Text variant="small" styles={postTextStyles}>
              Posted by: Smite
            </Text>
            <Text variant="small" styles={priceTextStyles}>
            {this.price} 
            </Text>
          </Card.Section>
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
    );
  }
  
}
export default Post;