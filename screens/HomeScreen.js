import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'
import CustomListItem from '../components/CustomListItem'
import { TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { color: "white"},
            headerTintColor: "white",
            headerLeft: () => <View style={{marginLeft: 15}}>
                <TouchableOpacity>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}}/>
                </TouchableOpacity>
            </View>
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
