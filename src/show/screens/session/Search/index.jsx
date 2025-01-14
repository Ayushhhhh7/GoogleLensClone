import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import {SearchInput, CustomIcon} from 'Components';
import {ColumnView, RowView} from 'Containers';

import {sizes} from 'Theme';

import styles from './styles';

const RECENT_SEARCHES = [
  'shoppin login',
  'messi vs ronaldo',
  'best mobile framework 2024',
  'red blue vs blue pill',
  'how to become batman',
];

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [displayData, setDisplayData] = useState(RECENT_SEARCHES);

  const translateY = useSharedValue(200);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 400,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length < 1) {
        setDisplayData(RECENT_SEARCHES);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        const data = await response.json();
        setSuggestions(data);
        setDisplayData(data[1] || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setDisplayData([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const renderSuggestion = ({item}) => (
    <RowView justifyContent="flex-start" marginTop={sizes.margin}>
      <View
        style={{
          marginTop: sizes.margin,
          backgroundColor: '#2f3135',
          paddingLeft: sizes.padding * 2,
          borderRadius: 20,
          paddingTop: sizes.padding,
          marginRight: sizes.margin * 4,
        }}>
        <CustomIcon
          containerSize={sizes.icon['sm'].containerSize / 2}
          icon="history"
          size={sizes.icon['md'].size}
          iconColor="#9AA0A6"
        />
      </View>

      <Text style={styles.suggestionText}>{item}</Text>
    </RowView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={animatedStyle}>
        <SearchInput
          leftIcon={'back'}
          leftIconOnPress={() => {
            Keyboard.dismiss();
            setTimeout(() => {
              navigation.goBack();
            }, 300);
          }}
          value={query}
          onChangeText={setQuery}
        />
      </Animated.View>
      <ColumnView
        flex={1}
        alignItems="flex-start"
        paddingHorizontal={sizes.padding * 4}>
        <RowView
          justifyContent="space-between"
          marginVertical={sizes.margin * 2}>
          <Text style={{color: '#929ba1'}}>Recent searches</Text>
          <Text style={{color: '#929ba1'}}>MANAGE HISTORY</Text>
        </RowView>
        {loading && (
          <RowView>
            <ActivityIndicator color="#9AA0A6" />
          </RowView>
        )}
        <FlatList
          data={displayData}
          renderItem={renderSuggestion}
          keyExtractor={(item, index) => index.toString()}
        />
      </ColumnView>
    </SafeAreaView>
  );
};

export default Search;
