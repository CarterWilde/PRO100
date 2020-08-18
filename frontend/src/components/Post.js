import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights} from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
/*
Post By: https://developer.microsoft.com/en-us/fluentui#/controls/web/documentcard
Work in Progess 
import {
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import { TestImages } from '@uifabric/example-data';
const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];
<DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
*/
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
    const infoCardSectionTokens = { maxWidth: "120px",maxHeight: "173px",margin: '5px 5px 5px 10px', width:"100px"};
    const ImageTokens = {maxWidth: "145px",maxHeight: "180px"};

    return (
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>

          <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
            <Text maxLength = {8} maxlength="10" className = "word-wrap"  variant="small" styles={titleTextStyles}>
            {this.props.title}
            </Text>
            <Text variant="small" styles={priceTextStyles}>
            {this.props.price}
            </Text>
            <Text className = "overflow" variant="small" styles={descriptionTextStyles}>
            {this.props.descirption}
            </Text>
          </Card.Section>

          <Card.Item styles={ImageTokens}>
            <div styles={ImageTokens}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe39OMLvdNbssmihH4-cwvagbbR9ehAzJ89w&usqp=CAU" />
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