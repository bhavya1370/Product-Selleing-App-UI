import {
    StyleSheet,
    Image,
    View,
    SafeAreaView,
    Text,
    Pressable,
} from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';

const image = [
    {
        image: require('../assets/transf.jpg'),
    },
    {
        image: require('../assets/ManyMotors.jpg'),
    },
    {
        image: require('../assets/grn-1.jpg'),
    },
]

const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'darkgrey' }}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} />
            <View>
                <ScrollView
                    pagingEnabled
                    showsHorizontalScrollIndicator={true}
                    horizontal={true}
                >
                    {
                        image.map((image, index) => (
                            <View key={index} style={{ alignItems: "center", }}>
                                <Image
                                    source={image.image}
                                    style={{
                                        width: 410, height: 400, borderBottomLeftRadius: 150,
                                        borderTopRightRadius: 150,
                                    }}
                                />
                            </View>
                        ))
                    }

                </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
                {/* Title container */}
                <View>
                    <Text style={styles.title}>Suraj-Shakti Engineers</Text>
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic', paddingTop: 10, color: 'white' }}>For all your Industrial needs</Text>
                </View>

                {/* Text container */}
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.textStyle}>
                        We have years of experiance in Buying,Selling and Renting all kinds of electric motors, generators, transformers and other industrial equipments.
                    </Text>
                    <Text style={styles.textStyle}>
                        Find what you need in just a few clicks
                    </Text>
                </View>

                {/* Button container */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        paddingBottom: 10,
                        paddingTop: 40,
                    }}
                >
                    {/* button */}
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <View style={styles.btn}>
                            <Text style={{ color: 'white' }}>Dive IN</Text>
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={styles.bottomView}>
                <Icon name="location-pin" size={30} color={COLORS.dark} />
                <Text style={{ flexDirection: 'row', }}>BG-352,Transport Nagar, New Delhi </Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    btn: {
        height: 50,
        width: 330,
        marginHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 16,
        color: COLORS.white,
        alignContent: 'center',
        textAlign: 'justify',
        marginTop: 10,
        fontStyle: 'italic',
    },
    bottomView: {
        height: 70,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,

    },
});
export default Welcome