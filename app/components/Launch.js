'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
import Login from './Login2'

var Persons = [
  {name: 'Barrack Obama', image: 'https://pbs.twimg.com/profile_images/451007105391022080/iu1f7brY_400x400.png'},
  {name: 'Albert Einstein', image: 'http://www.deism.com/images/Einstein_laughing.jpeg'},
  {name: 'The Beast', image: 'http://vignette2.wikia.nocookie.net/marveldatabase/images/4/43/Henry_McCoy_(Earth-10005)_0002.jpg/revision/latest?cb=20091116202257'},
  {name: 'Me', image: 'https://avatars0.githubusercontent.com/u/1843898?v=3&s=460'},
  {name: 'HellBoy', image: 'http://www.flickeringmyth.com/wp-content/uploads/2014/06/Ron-Perlman-as-Hellboy.jpg'}
]

class Launch extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Login/>
                <Button onPress={Actions.swipeCards}>Jump to Swipe Page</Button>
                <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

export default Launch;
