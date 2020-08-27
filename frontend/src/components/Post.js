import * as React from 'react';
import { Card } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { IconButton, Image, Stack, Text } from 'office-ui-fabric-react';



const alertClicked = () => {
    alert('Clicked');
};
export class Post extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="post" className="lines" >
                <Stack tokens={{childrenGap:20, margin:"5px"}}>
                    <Card aria-label="Clickable horizontal card " horizontal tokens={{childrenMargin:10, width:"100%",height:"400px", maxWidth:"none !important"}} style={{ height: "200px", display: "grid", gridTemplateColumns: "5fr 3fr 1fr" }}>
                        <Card.Section styles={{width:"160px", padding:"5px"}} tokens={{width:"160px", padding:"5px"}}>
                            <Text maxlength="4" variant="small" styles={{fontWeight:FontWeights.regular, fontSize:25}}>{this.props.title}</Text>
                            <Text variant="small" styles={{fontWeight:FontWeights.regular, fontSize:15}}>{this.props.price}</Text>
                            <Text className="overflow" variant="small" styles={{fontWeight:FontWeights.regular, fontSize:12}}>{this.props.descirption}</Text>
                        </Card.Section>

                        <Card.Item>
                            <div>
                                <Image style={{maxHeight:"150px", padding:"5px"}} src={this.props.imageUrl} />
                                <strong style={{fontWeight:FontWeights.regular, fontSize:10}} >By: {this.props.username}</strong>
                            </div>
                        </Card.Item>

                        <Card.Section style={{ display: "grid", justifyContent: "center", alignItems: "center" }} styles={{alignSelf:"stretch", borderLeft:"1px solid #F3F2F1"}} tokens={{padding:"0px"}}>
                            <Stack width="100%">
                                <IconButton iconProps={{ iconName: "CaretUpSolid8" }} style={{color:"#0078D4", fontSize:16,fontWeight:FontWeights.regular}} onClick={() => { console.log("upvote") }} style={{ outline: 'none' }} />
                                <Text style={{ textAlign: "center", fontWeight: FontWeights.bold }}>{this.props.votes}</Text>
                                <IconButton iconProps={{ iconName: "CaretDownSolid8" }} style={{color:"#0078D4", fontSize:16,fontWeight:FontWeights.regular}} onClick={() => { console.log("downvote") }} style={{ outline: 'none' }} />
                            </Stack>
                        </Card.Section>
                    </Card>
                </Stack>
            </div>
        );
    }
}
export default Post;