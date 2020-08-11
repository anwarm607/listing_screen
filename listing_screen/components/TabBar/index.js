import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import * as Mock from '../../mock/mockJson.json';

export const TabBar = (props) => {
  const [page, setPage] = useState(0);
  const viewPage = useRef(null);
  const scrollRef = useRef(null);
  const goTo = (index) => {
    viewPage.current.setPage(index);
    setPage(index);
  };
  useEffect(() => {
    scrollRef.current.scrollTo({x: page * 40, y: 0, animated: true});
  }, [page]);
  // replace Mock instead of props.data incase of api error
  const leftSideContent = (value) =>
    props.data.listings[value].filter((item, index) => index % 2 !== 0);
  const rightSideContent = (value) =>
    props.data.listings[value].filter((item, index) => index % 2 === 0);

  return (
    <>
      <View style={{marginBottom: 20}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollToOverflowEnabled
          centerContent
          ref={scrollRef}>
          {props.tabName.map((tabs, index) => {
            return (
              <TouchableOpacity onPress={() => goTo(index)}>
                <View
                  style={{
                    marginRight: 10,
                    backgroundColor: page === index ? '#FF7655' : '#F8F6F9',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: page === index ? '#fff' : '#77747B'}}>
                    {tabs.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ViewPager
        style={{flex: 1}}
        initialPage={0}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
        ref={viewPage}>
        {props.tabName.map((item, index) => {
          const pageItem = {
            leftSideContent: leftSideContent(item.value),
            rightSideContent: rightSideContent(item.value),
          };
          return (
            <View key={`${index + 1}`}>{props.pageComponent(pageItem)}</View>
          );
        })}
      </ViewPager>
    </>
  );
};
