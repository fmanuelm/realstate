/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  useColorScheme,
  View,
  FlatList, ActivityIndicator, Button, TextInput
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import { HomeScreen } from './screens/HomeScreen';
import { getCryptos } from './api/api';
import styles, { styles2 } from './screens/HomeScreen.style';
//import { NewsCard } from './components/NewCard';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState(0);
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [moreLoading, setMoreLoading] = useState(true);
  const [isListEnd, setIsListEnd] = useState(false);
  const [cryptosearch, onCryptosearch] = React.useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const requestAPI = async () => {
    if (page == 0)
      setLoading(true);
    const limit = 100;
    let start = page * limit;
    let response = await getCryptos(start, limit);
    
    if (page == 0)
      setResult(response.data);
    if (page > 0)
      setResult([...result,...response.data]);
    setLoading(false);
    console.log(page);
    console.log(result);
  }
  const fetchMoreCryptos = async () => {
    setPage(page + 1);

  }
  const renderHeader = () => (
      <Text style={styles.title}>CryptoCoins</Text>
  )
  const renderFooter = () => (
    <View style={styles.footerText}>
        {moreLoading && <ActivityIndicator />}
        {isListEnd && <Text>No more Cryptos at the moment</Text>}
      </View>
  )
  const renderEmpty = () => (
    <View style={styles.emptyText}>
        <Text>No Data at the moment</Text>
        <Button onPress={() => requestAPI()} title='Refresh'/>
    </View>
  )
  useEffect(()=>{
    requestAPI();
  },[page])

  const NewsCard = ({ news }) => {
    return (
      <View style={styles2.container}>
          <Image
              defaultSource={require('./asset/newspaper.png')}
              source={{uri: `https://www.coinlore.com/img/50x50/${news.nameid}.png`}}
              style={styles2.image}
          />
          <View style={styles2.titleContainer}>
              <Text style={styles2.title}>{news.name}</Text>
          </View>

      </View>
    )   
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <TextInput 
            style={{ border: '1px solid #ddd'}}
            onChangeText={onCryptosearch}
            value={cryptosearch}
          />
      </View>
      {loading ?
            <View style={styles.loading}>
                <ActivityIndicator size='large' />
            </View>
            :
            <FlatList
            contentContainerStyle={{flexGrow: 1}}
                data={result}
                renderItem={({ item }) => (
                    <NewsCard news={item} />
                )}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={renderEmpty}
                onEndReachedThreshold={0.2}
                onEndReached={fetchMoreCryptos}
            />
        }
    </SafeAreaView>
  );
};



export default App;
