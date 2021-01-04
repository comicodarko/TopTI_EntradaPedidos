import React, { useState, useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/AntDesign';

import LogoImage from '../../assets/logo.png';

import * as S from './styles';

export default function DrawerMenu({ navigation }) {

  const [ip, setIp] = useState('');
  
  async function fetchData() {
    setIp(await AsyncStorage.getItem('ipkey'));
  } 

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <S.Container>
      <S.Row>
        <S.Logo source={LogoImage}/>
        <S.Version>Versão 0.1</S.Version>
        <S.Title>Entrada de Pedidos</S.Title>
      </S.Row>  

      <S.Row>
        <S.Row style={{flexDirection: 'row'}}>
          <S.DefaultText>IP:</S.DefaultText>
          <S.IpInput
            value={ip}
            onChangeText={(text) => setIp(text)}
          />  
          <S.Button
            onPress={ async () => {
              await AsyncStorage.setItem('ipkey', ip);
              Keyboard.dismiss();
              Alert.alert('IP confirmado!');
              navigation.navigate('Login', {
                ip
              })
            }}
          >
          <S.DefaultText>Confirmar</S.DefaultText>  
        </S.Button>  
        </S.Row>
        <S.Button style={{ flexDirection: 'row' }}>
          <S.DefaultText>Recarregar </S.DefaultText>
          <Icon name='reload1' color='#fff' size={25}/>
        </S.Button>
      </S.Row>
    </S.Container>
  );
};