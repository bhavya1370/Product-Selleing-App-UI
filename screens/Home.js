import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import COLORS from '../consts/colors';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get('screen');
import machines from '../consts/machines';

const Home = ({ navigation }) => {
    const optionsList = [
        { title: 'Rent machine', img: require('../assets/grn-1.jpg') },
        { title: 'Sell machine', img: require('../assets/transf.jpg') },
    ];
    const categoryList = ['Motors', 'Generators', 'Transformers'];

    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
        return (
            <View style={style.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <Text
                            style={[
                                style.categoryListText,
                                index == selectedCategoryIndex && style.activeCategoryListText,

                            ]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };

    const ListOptions = () => {
        return (
            <View style={style.optionListsContainer}>
                {optionsList.map((option, index) => (
                    <View style={style.optionsCard} key={index}>
                        {/* House image */}
                        <Image source={option.img} style={style.optionsCardImage} />

                        {/* Option title */}
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                            {option.title}
                        </Text>
                    </View>
                ))}
            </View>
        );
    };
    const Card = ({ house }) => {
        return (
            <Pressable
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', house)}>
                <View style={style.card}>
                    {/* House image */}
                    <Image source={house.image} style={style.cardImage} />
                    <View style={{ marginTop: 10 }}>
                        {/* Title and price container */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                {house.title}
                            </Text>
                            <Text
                                style={{ fontWeight: 'bold', color: COLORS.blue, fontSize: 16 }}>
                                Rates
                            </Text>
                        </View>

                        {/* Location text */}

                        <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
                            {house.location}
                        </Text>

                        {/* Facilities container */}
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={style.facility}>
                                <Icon name="tools" size={18} />
                                <Text style={style.facilityText}>reconditioned</Text>
                            </View>
                            <View style={style.facility}>
                                <Icon name="clock-time-four-outline" size={18} />
                                <Text style={style.facilityText}>hours used</Text>
                            </View>
                            <View style={style.facility}>
                                <Icon name="inbox" size={18} />
                                <Text style={style.facilityText}>Quantity</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.grey, flex: 1 }}>
            {/* Customise status bar */}
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            {/* Header container */}
            <View style={style.header}>
                <View>
                    <Text style={{ color: COLORS.dark, fontSize: 30, fontWeight: 'bold', marginTop: 10, }}>
                        GENbro
                    </Text>
                    <Text style={{ color: COLORS.white, fontSize: 20, marginTop: 10 }}>Welcome</Text>
                </View>

                <View style={{marginVertical: 14 }}>
                        <Image
                        source={require('../assets/transformer.png')}
                        resizeMode="contain"
                        style={{ width: 100, height: 100, marginRight: 15, }}
                    />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* Input and sort button container */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                    }}>
                    <View style={style.searchInputContainer}>
                        <Icons name="search" color={COLORS.grey} size={25} />
                        <TextInput placeholder=" Search" />
                    </View>

                    <View style={style.sortBtn}>
                        <Icon name="tune" color={COLORS.white} size={25} />
                    </View>
                </View>

                {/* Render list options */}
                <ListOptions />

                {/* Render categories */}
                <ListCategories />

                {/* Render Card */}
                <FlatList
                    snapToInterval={width - 20}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    vertical
                    data={machines}
                    renderItem={({ item }) => <Card house={item} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10,
    },
    sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },
    optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.white,
        paddingLeft: 10,
        paddingRight: 10
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },
    card: {
        height: 330,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: COLORS.grey },
});
export default Home;
