import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Image,
  UIManager,
  LayoutAnimation,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import {
  Container,
  ActivityBarWrap,
  ProfilePic,
  GrayTitle,
  BlackTitle,
  Indicator,
  Card,
  CardTitle,
  CardDesc,
  LoadingWrap,
  TabContentWrap
} from './styles';
import {TabBar} from '../../components/TabBar';
import axios from 'axios';

export const Home = () => {
  const [isHeaderBgShown, setIsHeaderBgShown] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const width = Dimensions.get("window").width;
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://run.mocky.io/v3/d1758e00-b9ca-42bd-9cae-4c87387a7185')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const renderCard = ({item, index}) => {
    return (
      <Card
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
        }}>
        <View style={{width: '60%', alignItems: 'center', paddingVertical: 14}}>
          <Image
            source={require('../../assets/image/coding.png')}
            style={{width: width * 0.3, height: width * 0.3}}
          />
          <CardTitle style={{textAlign: 'center'}}>{item.title}</CardTitle>
          <CardDesc>{item.number_of_elements} Videos</CardDesc>
        </View>
      </Card>
    );
  };

  const TabName = [
    {text: 'Videos', value: 'videos'},
    {text: 'Blogs', value: 'blogs'},
    {text: 'Webinars', value: 'webinars'},
    {text: 'Vlogs', value: 'vlogs'},
    {text: 'Randoms', value: 'randoms'},
  ];
  const handleScroll = (event) => {
    const _y = event.nativeEvent.contentOffset.y;
    if (_y >= 20) {
      if (isHeaderBgShown) {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(400, 'easeInEaseOut', 'opacity'),
        );
        setIsHeaderBgShown(false);
      }
    } else {
      if (!isHeaderBgShown) {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(400, 'easeInEaseOut', 'opacity'),
        );
        setIsHeaderBgShown(true);
      }
    }
  };
  const pageComponent = (data) => {
    return (
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}>
        <TabContentWrap>
          <View>
            <FlatList data={data.leftSideContent} renderItem={renderCard} />
          </View>
          <View style={{paddingTop: 30}}>
            <FlatList data={data.rightSideContent} renderItem={renderCard} />
          </View>
        </TabContentWrap>
      </ScrollView>
    );
  };
  return (
    <Container>
      {isHeaderBgShown ? (
        <ActivityBarWrap>
          <View>
            <GrayTitle>Let's find</GrayTitle>
            <BlackTitle>Courses,</BlackTitle>
          </View>
          <View>
            <ProfilePic
              source={{
                uri:
                  'https://www.gravatar.com/avatar/969cd809f8c852c9c08b8118dbd094ac?s=128&d=identicon&r=PG',
              }}
            />
            <Indicator />
          </View>
        </ActivityBarWrap>
      ) : null}
      {loading ? (
        <LoadingWrap>
          <ActivityIndicator size="large" color="#FF7655" />
        </LoadingWrap>
      ) : data ? (
        <TabBar tabName={TabName} pageComponent={pageComponent} data={data} />
      ) : null}
    </Container>
  );
};
