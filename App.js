import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions, YellowBox, Linking } from "react-native";

import OneSignal from 'react-native-onesignal'; // Import package from node modules

import { Feather } from "@expo/vector-icons";

import {
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    SignOutScreen
} from "./screens/index";


console.disableYellowBox = true
YellowBox.ignoreWarnings(['Warning:'])




import SideBar from './components/SideBar'
import { Component } from "react";

const Drawer = createDrawerNavigator();
let appId = "22ca7109-525e-4e76-8ed6-824d6f63fa10";

export default class App extends Component {



    constructor(properties) {
        super(properties);

        //OneSignal.setLogLevel(6, 0);
        OneSignal.init(appId, {
            kOSSettingsKeyAutoPrompt: false,
            kOSSettingsKeyInAppLaunchURL: false
        });
        OneSignal.inFocusDisplaying(2);

    }


    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={{
                        width: Dimensions.get('window').width * 0.95,
                    }}
                    drawerContent={(props) => <SideBar {...props} />}
                    drawerContentOptions={{
                        activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
                        activeTintColor: "#53115B",
                        itemsContainerStyle: {
                            marginTop: 16,
                            marginHorizontal: 8
                        },
                        itemStyle: {
                            borderRadius: 4
                        }
                    }}
                >
                    <Drawer.Screen name="Profile" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
                    }} component={ProfileScreen} />
                    <Drawer.Screen name="Message" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
                    }} component={MessageScreen} />
                    <Drawer.Screen name="Activities" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
                    }} component={ActivityScreen} />
                    <Drawer.Screen name="Lists" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
                    }} component={ListScreen} />
                    <Drawer.Screen name="Reports" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
                    }} component={ReportScreen} />
                    <Drawer.Screen name="Statistics" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
                    }} component={StatisticScreen} />
                    <Drawer.Screen name="SignOut" options={{
                        drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
                    }} component={SignOutScreen} />
                    <Drawer.Screen
                        name="web proof"
                        component={() => Linking.openURL('http://www.adprosoft.com/')}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );

    }

}

