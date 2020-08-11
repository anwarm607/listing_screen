import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: 20px;
  padding-top: ${StatusBar.currentHeight + 20}px;
  background-color: #fff;
`;
export const ActivityBarWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfilePic = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 6px;
`;
export const GrayTitle = styled.Text`
  color: #96959d;
  font-size: 18px;
`;
export const BlackTitle = styled.Text`
  font-size: 28px;
  color: #000;
`;
export const Indicator = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff7852;
  width: 13px;
  height: 13px;
  border-radius: 500px;
  border-width: 2px;
  border-color: #fff;
`;
export const Card = styled.View`
  elevation: 2;
  border-radius: 6px;
  margin-horizontal: 5px;
  background-color: #fff;
  margin-vertical: 6px;
  justify-content: center;
  align-items: center;
`;
export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
export const CardDesc = styled.Text`
  font-size: 11px;
  margin-top: 5px;
  color: #96959d;
`;
export const LoadingWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabContentWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
