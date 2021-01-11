import React, { Component} from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';


export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {artistsData: null}
    }

    componentDidMount() {
        this.updateDataSource(this.props.artists)
    }
   
     componentDidUpdate(newProps) {
        if (newProps.artists !== this.props.artists) {
          this.updateDataSource(newProps.artists)
        }
    }

    updateDataSource = (data) => {
        this.setState({artistsData: data});
        //console.log(data);
    }

    navigateToDetails = (data) => {
        Actions.details({data});
        console.log(data)
    }

    render() {
        const loadArtistBox = ({item}) => (
            <TouchableHighlight
            onPress={ () => {this.navigateToDetails(item)} }
            >
                <ArtistBox
                artist = {item}
                />
            </TouchableHighlight>
        )

        return (
            <FlatList
                data={this.state.artistsData}
                renderItem={loadArtistBox}
            />
        )
    }
}

