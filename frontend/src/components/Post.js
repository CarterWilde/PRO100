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

/*

*/
const alertClicked = () => {
  alert('Clicked');
};
export class Post extends React.Component {
  constructor(props) {
    super(props)

  // TODO: Brandon, The search will return the data needed to complete the post component. The JSON data
  //      respresented in this return is stored in `this.props.elements` it should look like this:
  //   {
  //      Title: "A type of string",
  //      PostedBy: {
  //        Username: "A type of string",
  //        Email: "A type of string",
  //        Password: "A type of string"
  //      }, ----NOTE of type User. 
  //      Price: 100 ----NOTE this is of type Number
  //      Image: Buffer ----Note this is of type Buffer
  //      Content: "A type of string"
  //      Votes: {
  //        Total: 100 ----NOTE this is a type of Number
  //        Up: [User], ----NOTE this is an Array of type user. (refer to the user type on line 26-30) derive the amount from the length of this array
  //        Down: [User] ----NOTE this is an Array of type user. (refer to the user type on line 26-30) derive the amount from the length of this array
  //    }
  // To add to this, the data is for one element only. dont wory about anthing dynamic at this point. I handle that in postDisplayer.js 
  // and call this class to return me a new component. All oyu need to do is make conditons to check if the component is in preview mode
  // (the actuall post popup view) or if its a final versioon being displayed on the home page. The JSON dat should only be injected if
  // we are in that final state on the home screen. Not the preview. If you need help with anything, I'll be happy to help.
  // We also need to creat a call to the backend to actually update the votes section of this component. Again this needs to be thrown
  // into a conditon of what state its in. We doint want the preview verison to update a `null` post. Thats bad. 


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
    const cardTokens = { childrenMargin: 10};
    const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
    const infoCardSectionTokens = { width: "160px",maxWidth: "160px",maxHeight: "173px",margin: '5px 5px 5px 10px'};
    const ImageTokens = {maxWidth: "300px",maxHeight: "150px"};

    return (
      <div  id="post" >
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>

          <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
            <Text  className = "word-wrap"  variant="small" styles={titleTextStyles}>
            Example
            {this.props.title}
            </Text>
            <Text variant="small" styles={priceTextStyles}>
              $1000
            {this.props.price}
            </Text>
            <Text className = "overflow" variant="small" styles={descriptionTextStyles}>
            This is exmaple of what you want to tell the people who see 
            {this.props.descirption}
            </Text>
          </Card.Section>

          <Card.Item>
            <div >
            {this.props.imageUrl}
            <Image style={ImageTokens} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0XsKvLjkn5XZG9XP1S2FO0qQp8qO5E6HJ5w&usqp=CAU"/>
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
export default Post;