import React, { Component} from 'react';
import { FlatList } from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {artistsData: null}
    }

    componentDidMount() {
        this.updateDataSource(this.props.artists)
    }
   
     componentWillReceiveProps(newProps) {
        if (newProps.artists !== this.props.artists) {
          this.updateDataSource(newProps.artists)
        }
    }

    updateDataSource = (data) => {
        this.setState({artistsData: data});
    }

    navigateToDetails = (data) => {
        Actions.details(data)
    }

    render() {
        const loadArtistBox = ({item}) => {
            <ArtistBox
            name={item.name}
            imageUri={item.image}
            onPress={() => {this.navigateToDetails({item})}}
             />
        }

        return (
            <FlatList
                data={this.state.artistsData}
                renderItem={loadArtistBox}
            />
        )
    }
}

