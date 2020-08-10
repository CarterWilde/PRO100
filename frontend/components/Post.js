import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
const alertClicked = () => {
  alert('Clicked');
};
export class Post extends React.Component {
   render() {
    const siteTextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold,
      },
    };
    const descriptionTextStyles = {
      root: {
        color: '#333333',
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

    const sectionStackTokens = { childrenGap: 20 };
    const cardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };

    return (
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Basic card" horizontal tokens={cardTokens}>
          <Card.Item>
            <Text>Basic horizontal card</Text>
          </Card.Item>
        </Card>

        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpeg" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
              Title PlaceHolder
            </Text>
            <Text variant="small" styles={helpfulTextStyles}>
              $100 
            </Text>
            <Text styles={descriptionTextStyles}>Details PlacHolder</Text>
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