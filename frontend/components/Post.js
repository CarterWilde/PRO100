import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights} from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

const alertClicked = () => {
  alert('Clicked');
};
export class Post extends React.Component {
  constructor(props) {
    super(props)
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
        flexDirection:'row',
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1
        
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
    
    const sectionStackTokens = { childrenGap: 20 };
    const cardTokens = { childrenMargin: 10};
    const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
    const infoCardSectionTokens = { maxWidth: "115px",maxHeight: "180px",margin: '10px 10px 10px 10px'};
    const ImageTokens = {maxWidth: "145px",maxHeight: "180px"};

    return (
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>

          <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
            <Text  variant="small" styles={titleTextStyles}>
            {this.props.title}
            </Text>
            <Text variant="small" styles={priceTextStyles}>
            {this.props.price}
            </Text>
            <Text variant="small" styles={descriptionTextStyles}>
            {this.props.descirption}
            </Text>
          </Card.Section>

          <Card.Item styles={ImageTokens}>
            <div styles={ImageTokens}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKNi3LO7KsxAUHYOT57knh3884q574tL0ZSQ&usqp=CAU" />
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
    );
  }
  
}
export default Post;