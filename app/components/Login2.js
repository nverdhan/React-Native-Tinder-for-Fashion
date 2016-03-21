'use strict';

var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

var FBSDKLogin = require('react-native-fbsdklogin');


var {
  FBSDKLoginButton
} = FBSDKLogin;


var Login = React.createClass({
  render: function() {
    return (
      <View>
        <FBSDKLoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCancelled) {
                Actions.error("Login Cancelled")
              } else {
                Actions.tinderCards()
              }
            }
          }}
          onLogoutFinished={() => Actions.error("Logout Done")}
          readPermissions={[]}
          publishPermissions={['publish_actions']}/>
      </View>
    );
  }
});

module.exports = Login;