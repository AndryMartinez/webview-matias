import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview';
import {
    AdMobBanner,
    AdMobInterstitial,
    setTestDeviceIDAsync
  } from 'expo-ads-admob';
  


export default class ScreenTab extends React.Component {
    constructor(props){
        super(props)
        
        this.url = this.props.url
     
        this.showAD();


    }

    async showAD(){
        await setTestDeviceIDAsync('EMULATOR');
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }

    render(){
        return (
            <View style={styles.container}>
                <AdMobBanner
                    bannerSize="leaderboard"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={this.bannerError}
                    style={{alignSelf:"center"}}
                    />
                        <WebView source={{ uri: this.url }}  />
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {

        color: "#161924",
        fontSize: 20,
        fontWeight: "500"

    }
})