import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
const { width } = Dimensions.get('screen');

const Details = ({ navigation, route }) => {
  const house = route.params;

  const InteriorCard = ({ interior }) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Machine image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Icons
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={style.headerBtn}>
                <Icons name="bookmark-border" size={20} color={COLORS.dark} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={style.detailsContainer}>
          {/* Name and ratings view container */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {house.title}
            </Text>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={style.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 9, marginLeft: 5, marginRight: 5 }}>155 ratings</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{ fontSize: 16, color: COLORS.white }}>
            {house.location}
          </Text>

          <Text style={{ marginTop: 10, color: COLORS.white }}>
            {house.details}
          </Text>

          {/* Facilities container */}
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
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


          {/* Interior list */}
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({ item }) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={style.footer}>
            <View>
              <Text
                style={{ color: COLORS.blue, fontWeight: 'bold', fontSize: 18 }}>
                Estimate Price
              </Text>
              <Text
                style={{ fontSize: 12, color: COLORS.grey, fontWeight: 'bold' }}>
                including/excluding GST
              </Text>
            </View>
            <View style={style.bookNowBtn}>
              <Text style={{ color: COLORS.white }}>Contact Us Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 400,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 30,
    width: 50,
    backgroundColor: COLORS.grey,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 25,
    width: 35,
    backgroundColor: COLORS.dark,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginTop: 25,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.white
  },
});

export default Details;
