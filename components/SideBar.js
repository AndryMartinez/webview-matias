import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, Linking } from 'react-native';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import {
    AdMobBanner,
    AdMobInterstitial,
    setTestDeviceIDAsync
} from 'expo-ads-admob';



async function ShowIntersticial() {



}

export default sidebar = (props) => {



    return (<ScrollView>
        <Text>Sidebar</Text>


        <View style={styles.container}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="web"
                onPress={() => Linking.openURL('http://www.adprosoft.com/')}
            />
            <DrawerItem
                label="anuncio"
                onPress={async () => {
                    await setTestDeviceIDAsync('EMULATOR')
                    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712') // Test ID, Replace with your-admob-unit-id
                    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
                    await AdMobInterstitial.showAdAsync()
                }}
            />
        </View>

    </ScrollView>)

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
});