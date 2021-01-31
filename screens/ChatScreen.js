import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

const ChatScreen = ({ navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            // title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View style={{flexDirection: "row", alignItems: "center", marginLeft: -25}}>
                    <Avatar rounded source={{ uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"}}/>
                    <Text style={{color: "white", marginLeft: 10, fontWeight: "700", fontSize: 17}}>
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            // headerLeft: () => (
            //     <TouchableOpacity style={{ marginLeft: 10}} onPress={navigation.goBack}>
            //         <AntDesign name="arrowleft" size={24} color="white"/>
            //     </TouchableOpacity>
            // ), 
            headerRight: () => (
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 70,
                        marginRight: 20
                    }}    
                >
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={22} color="white"/>
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])

    return (
        <View>
            <Text>{route.params.chatName} </Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
