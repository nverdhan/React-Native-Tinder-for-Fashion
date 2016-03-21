'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;
var Launch = require('./app/components/Launch');
var Register = require('./app/components/Register');
var Login = require('./app/components/Login');
var Login2 = require('./app/components/Login2');
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Error = require('./app/components/Error');
var TabView = require('./app/components/TabView');
var TinderCards = require('./app/components/swipecards')
var SwipeCards = require('./app/containers/swipeCardContainer')
// import Storage from 'react-native-storage';


// var storage = new Storage({
//     // maximum capacity, default 1000  
//     size: 1000,    
    
//     // expire time, default 1 day(1000 * 3600 * 24 secs) 
//     defaultExpires: 1000 * 3600 * 24,
    
//     // cache data in the memory. default is true. 
//     enableCache: true,
    
//     // if data was not found in storage or expired, 
//     // the corresponding sync method will be invoked and return  
//     // the latest data. 
//     sync : {
//         // we'll talk about the details later. 
//     }
// })

// global.storage = storage;


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class Header extends React.Component {
    render(){
        return <Text>Header</Text>
    }
}

export default class Example extends React.Component {
    render() {
        return (
            <Router hideNavBar={true} name="root">
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Schema name="tab" type="switch" icon={TabIcon} />

                <Route name="register" component={Register} title="Register"/>
                <Route name="tinderCards" component={TinderCards} title="TinderCards"/>
                <Route name="swipeCards" component={SwipeCards} title="SwipeCards"/>
                <Route name="login" schema="modal">
                    <Router name="loginRouter">
                        <Route name="loginModal" component={Login} schema="modal"/>
                        <Route name="loginModal2" hideNavBar={true} component={Login2} title="Login2"/>
                    </Router>
                </Route>
                <Route name="register2" component={Register} title="Register2"  schema="withoutAnimation"/>
                <Route name="error" type="modal" component={Error}/>
                <Route name="tabbar">
                    <Router footer={TabBar} showNavigationBar={false}>
                        <Route name="tab1" schema="tab" title="Tab #1" >
                            <Router onPop={()=>{console.log("onPop is called!"); return true} }>
                                <Route name="tab1_1" component={TabView} title="Tab #1_1" />
                                <Route name="tab1_2" component={TabView} title="Tab #1_2" />
                            </Router>
                        </Route>
                        <Route name="tab2" schema="tab" title="Tab #2" hideNavBar={true}>
                            <Router onPop={()=>{console.log("onPop is called!"); return true} }>
                                <Route name="tab2_1" component={TabView} title="Tab #2_1" />
                                <Route name="tab2_2" component={TabView} title="Tab #2_2" />
                            </Router>
                        </Route>
                        <Route name="tab3" schema="tab" title="Tab #3" component={TabView} />
                        <Route name="tab4" schema="tab" title="Tab #4" component={TabView} />
                        <Route name="tab5" schema="tab" title="Tab #5" component={TabView} />
                    </Router>
                </Route>
                <Route name="launch" header={Header} initial={true} component={Launch} wrapRouter={true} title="Launch" hideNavBar={true}/>
            </Router>
        );
    }
}