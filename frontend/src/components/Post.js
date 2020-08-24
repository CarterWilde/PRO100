import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
<<<<<<< HEAD
import { FontWeights} from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

=======
import { FontWeights } from '@uifabric/styling';
import { IconButton, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
>>>>>>> e55f112d712c743913e26d76fdc70a995b1aa5a5

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
<<<<<<< HEAD
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

    const  postByTextStyles = {
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
    const cardTokens = { childrenMargin: 10};
    const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
    const infoCardSectionTokens = { width: "160px",maxWidth: "160px",maxHeight: "173px",margin: '5px 5px 5px 10px'};
    const ImageTokens = {maxWidth: "300px",maxHeight: "150px"};

    return (
      <div  id="post" >
      <Stack tokens={sectionStackTokens}>
        <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>

          <Card.Section styles={infoCardSectionTokens} tokens={infoCardSectionTokens}>
            <Text maxlength="4"  variant="small" styles={titleTextStyles}>
             {this.props.title.substring(0,12)}   
            </Text>

            <Text variant="small" styles={priceTextStyles}>
            {this.props.price.substring(0,19)}
            </Text>

            <Text className = "overflow" variant="small" styles={descriptionTextStyles}>
            {this.props.descirption}
            </Text>
          </Card.Section>

          <Card.Item>
            <div>
            <Image style={ImageTokens} src= {this.props.imageUrl} />
             <strong style={postByTextStyles} >By:</strong>
             </div>
          </Card.Item>

          <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={iconStyles}/>
    
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
  
=======
    constructor(props) {
        super(props)

        // TODO: Brandon, The search will return the data needed to complete the post component. The JSON data
        console.log(this.props.elements) //I added this so you can see it. as of now its only dumby data. It will say only a single string
    }
    render() {
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
        const cardTokens = { childrenMargin: 10 };
        const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
        const infoCardSectionTokens = { width: "160px", maxWidth: "160px", maxHeight: "173px", margin: '5px 5px 5px 10px' };
        const ImageTokens = { maxWidth: "300px", maxHeight: "150px" };

        //dump data 
        // const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];

        return (
            <div id="post" >
                <Stack tokens={sectionStackTokens}>
                    <Card aria-label="Clickable horizontal card " horizontal tokens={cardTokens} >

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

                        <Card.Section styles={CardSectionStyles} tokens={footerCardSectionTokens}>
                            <Stack>
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

>>>>>>> e55f112d712c743913e26d76fdc70a995b1aa5a5
}
export default Post;