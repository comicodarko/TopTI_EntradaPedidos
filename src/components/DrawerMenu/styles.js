import styled from 'styled-components/native';
import normalize from '../../utils/normalize';

export const Container = styled.View`
  flex: 1;
  background-color: #202020;
  border-right-width: 1px;
  border-color: #14BDAA;
  justify-content: space-evenly;
  align-items: center;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${normalize(5)}px;
  margin-right: ${normalize(5)}px;
  flex-wrap: wrap;
`

export const Logo = styled.Image`
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  border-radius: ${normalize(100)}px;
  margin-bottom: ${normalize(10)}px;
  border-width: 3px;
  border-color: #14BDAA;
`;

export const Version = styled.Text`
  font-family: sans-serif-light;
  color: #aaa;
`;
 
export const Title = styled.Text`
  font-family: sans-serif-light;
  font-size: ${normalize(28)}px;
  color: #fff;
`

export const IpText = styled.Text`
  font-family: sans-serif-light;
  font-size: ${normalize(16)}px;
  color: #fff;
`

export const IpInput = styled.TextInput`
  margin-left: ${normalize(5)}px;
  width: ${normalize(100)}px;
  font-size: ${normalize(12)}px;
  padding: ${normalize(5)}px;
  margin-right: ${normalize(10)}px;
  background-color: #fff;
  border-bottom-width: 3px;
  border-color: #14BDAA;
  border-radius: 5px;
`;

export const IpButton = styled.TouchableOpacity`
  background-color: #14BDAA;
  align-items: center;
  justify-content: center;
  padding: ${normalize(8)}px;
  border-radius: 5px;
  margin-top: ${normalize(20)}px;
`