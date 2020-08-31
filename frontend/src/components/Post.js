import * as React from 'react';
import { connect } from 'react-redux'
import { Card } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { IconButton, Image, Stack, Text } from 'office-ui-fabric-react';
import axios from 'axios'
import {} from '../stores/configureStore'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countVotes: this.props.votes
        }
    }

    Vote = async type => {
        if(type === 1) this.setState({countVotes: this.state.countVotes + 1})
        else this.setState({countVotes: this.state.countVotes - 1})
        await axios.put('http://localhost:8080/vote', {
            data: {
                "id": this.props.id,
                "user": this.props.data.User._id,
                "inc": type
            }
        })
    }

    render() {
        return (
            <div id="post" className="lines" >
                <Stack tokens={{ childrenGap: 20, margin: "5px" }}>
                    <Card aria-label="Clickable horizontal card " horizontal tokens={{ childrenMargin: 10, width: "100%", height: "450px", maxWidth: "none !important" }} style={{ height: "200px", display: "grid", gridTemplateColumns: "5fr 3fr 1fr" }}>
                        <Card.Section styles={{ width: "160px", padding: "5px" }} tokens={{ width: "160px", padding: "5px" }}>
                            <Text  className="title" maxlength="4" variant="small" style={{ fontWeight: FontWeights.regular, fontSize: 25 }}>{this.props.title}</Text>
                            <Text  variant="small" style={{ fontWeight: FontWeights.regular, fontSize: 17 }}>{this.props.price}</Text>
                            <Text className="overflow" variant="small" style={{ fontWeight: FontWeights.regular, fontSize: 16 }}>{this.props.descirption}</Text>
                        </Card.Section>

                        <Card.Item>
                            <div>
                                <Image style={{ maxHeight: "150px", padding: "5px" }} src={this.props.imageUrl} />
                                <strong style={{ fontWeight: FontWeights.bold, fontSize: 18 }} >By: {this.props.username}</strong>
                            </div>
                        </Card.Item>

                        <Card.Section style={{ display: "grid", justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderLeft: "1px solid #F3F2F1" }} tokens={{ padding: "0px" }}>
                            <Stack width="100%">
                                <IconButton iconProps={{ iconName: "CaretUpSolid8" }} style={{ color: "#0078D4", fontSize: 16, fontWeight: FontWeights.regular }} onClick={() => { this.Vote(1) }} style={{ outline: 'none' }} />
                                <Text style={{ textAlign: "center", fontWeight: FontWeights.bold }}>{this.state.countVotes}</Text>
                                <IconButton iconProps={{ iconName: "CaretDownSolid8" }} style={{ color: "#0078D4", fontSize: 15, fontWeight: FontWeights.regular }} onClick={() => { this.Vote(-1) }} style={{ outline: 'none' }} />
                            </Stack>
                        </Card.Section>
                    </Card>
                </Stack>
            </div>
        );
    }
}


export default connect(state => ({ ...state }))(Post);