import styled from 'styled-components/native';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  padding: ${normalize(30)}px ${normalize(12)}px ${normalize(5)}px ${normalize(12)}px;
`;

export const MenuButton = styled.TouchableOpacity`
  position: absolute;
  top: ${normalize(30)}px;
  left: ${normalize(20)}px;
  width: ${normalize(55)}px;
  height: ${normalize(55)}px;
  border: 1px solid #14BDAA;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  align-self: flex-start;
`

export const Title = styled.Text`
  width: 100%;
  font-family: sans-serif-condensed;
  text-transform: uppercase;
  text-align: center;
  font-size: ${normalize(28)}px;
  color: #fff;
  padding-bottom: ${normalize(10)}px;
  border-bottom-width: 2px;
  border-color: #14BDAA;
  margin-bottom: ${normalize(5)}px;
`

export const MainTitle = styled(Title)`
  position: absolute;
  top: ${normalize(50)}px;
`

export const ModalTitle = styled(Title)`
  margin-top: ${normalize(10)}px;
  margin-bottom: ${normalize(10)}px;
  font-size: ${normalize(24)}px;
  color: #000;
  align-self: center;
`

export const ModalView = styled.View`
  width: ${normalize(350)}px;
  height: ${normalize(160)}px;
  border-radius: 5px;
  background-color: #fff;
  align-self: center;
  justify-content: center;
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: ${normalize(22)}px;
  font-family: sans-serif-condensed;
  text-transform: uppercase;
  color: #14BDAA;
  text-align: center;
`

export const ModalButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: ${normalize(8)}px;
  right: ${normalize(8)}px;
  width: ${normalize(43)}px;
  height: ${normalize(43)}px;
  border: 1px solid #14BDAA;
  border-radius: 5px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const DefaultView = styled(Row)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${normalize(3)}px;
  margin-top: ${normalize(5)}px;
`

export const DefaultButton = styled.TouchableOpacity`
  background-color: #14BDAA;
  padding: ${normalize(10)}px ${normalize(20)}px;
  width: ${normalize(165)}px;
  margin-top: ${normalize(10)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const DefaultText = styled.Text`
  color: #fff;
  font-size: ${normalize(22)}px;
  font-family: sans-serif-light;
`

export const Header = styled.View`
  justify-content: space-around;
  width: 100%;
`

export const DateView = styled.View`
  background-color: #F99702;
  border-radius: 5px;
  padding: ${normalize(2)}px ${normalize(5)}px;
  margin-left: ${normalize(10)}px;
`

export const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const DateText = styled.Text`
  color: #fff;
  font-size: ${normalize(24)}px;
  font-family: sans-serif-condensed;
`

export const Input = styled.TextInput`
  background-color: #fff;
  font-size: ${normalize(18)}px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${normalize(10)}px;
  padding-right: ${normalize(10)}px;
  border-bottom-width: 3px;
  border-bottom-color: #14BDAA;
  border-radius: 5px;
  height: ${normalize(40)}px;
  flex: 1;
  width: ${normalize(80)}px;
  max-width: ${normalize(210)}px;
`

export const PickerView = styled.View`
  width: 48%;
  background-color: #fff;
  border-bottom-width: 3px;
  margin-top: ${normalize(5)}px;
  border-color: #14BDAA; 
  border-radius: 5px;
`;

export const ClientPickerView = styled(PickerView)`
  width: ${normalize(210)}px;
`

export const NextButton = styled(DefaultButton)`
  position: absolute;
  bottom: ${normalize(50)}px;
  right: ${normalize(10)}px;
  align-self: flex-end;
`