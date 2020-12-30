import React, { useState, useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          <S.IpText>IP:</S.IpText>
          <S.IpInput
            value={ip}
            onChangeText={(text) => setIp(text)}
          />  
          <S.IpButton
            onPress={ async () => {
              await AsyncStorage.setItem('ipkey', ip);
              Keyboard.dismiss();
              Alert.alert('IP confirmado!');
              navigation.navigate('Login', {
                ip
              })
            }}
          >
          <S.IpText>Confirmar</S.IpText>  
        </S.IpButton>  
        </S.Row>
      </S.Row>
    </S.Container>
  );
};