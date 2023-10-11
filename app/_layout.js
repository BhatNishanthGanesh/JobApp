import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React from "react";


SplashScreen.preventAutoHideAsync();
  

const Layout=()=>{
    const [fontsloaded] =useFonts({
        DMbold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    })

    const onLayoutRootView=useCallback(async()=>{
        if(fontsloaded){
            await SplashScreen.hideAsync();
        }
    },[fontsloaded])

    if(!fontsloaded) {
        return null;
    }
    return <Stack onLayout={onLayoutRootView}/>
}
export default Layout