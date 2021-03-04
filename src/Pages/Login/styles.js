import { Platform } from 'react-native';
import styled from 'styled-components/native';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  padding: ${normalize(50)}px ${normalize(12)}px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: ${normalize(200)}px;
  align-items: center;
  justify-content: center;
`

export const InputGroup = styled.View`
  margin: ${normalize(10)}px ${normalize(50)}px;
  align-items: center;
  justify-content: center;
`

export const InputRow = styled.View`
  height: ${normalize(55)}px;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  background-color: #fff;
  border: 2px solid #14BDAA;
  margin-top: ${normalize(10)}px;
`

export const IconView = styled.View`
  background-color: #14BDAA;
  color: #fff;
  height: 100%;
  width: ${normalize(50)}px;
  align-items: center;
  justify-content: center;
  border-color: #14BDAA;
`

export const Input = styled.TextInput`
  flex: 1;
  margin-left: ${normalize(10)}px;
  border-radius: ${normalize(10)}px;
  background-color: #fff;
  font-size: ${normalize(18)}px;
  font-family: ${Platform.OS === 'ios' ? 'Helvetica-Light' : 'sans-serif-light'};
`

export const Loading = styled.ActivityIndicator`
  top: ${normalize(80)}px;
` 