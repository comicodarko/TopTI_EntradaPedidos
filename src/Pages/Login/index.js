import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import Axios from 'axios';

import MenuIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputIcon from 'react-native-vector-icons/Fontisto';

import { MenuButton, Title, DefaultButton, DefaultText, ModalView, ModalText, ModalButton } from '../Main/styles';
import { Container, InputContainer, InputGroup, InputRow, IconView, Input, Loading } from './styles';

export default function Login({ navigation, route }) {

  const { ip } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [loading, setLoading] = useState(false);
  const { openDrawer } = useNavigation();

  const [settedIp, setIp] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function fetchData() {
    setIp(await AsyncStorage.getItem('ipkey'));
  }

  useEffect(() => {
    fetchData();
    setUser('');
    setPassword('');
  }, [])

  useEffect(() => {
    fetchData();
  }, [ip])

  async function login() {
    navigation.navigate('StackNav', {
      screen: 'Main',
      params: {
        ip: settedIp,
        funcionario: ''
      }  
    });
    return
    if(user == '' || password == '') {
      setModalText('Preencha os campos!');
      setModalVisible(true);
      return
    }

    setLoading(true);

    let xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:getConexaoJSON xmlns:m="http://${settedIp}/lavanderia/ws/getConexaoJSON">
          <usr>${user}</usr>
          <pwd>${password}</pwd>
        </m:getConexaoJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>          
      `;
  
    try {
      const response = await Axios.post(`http://${settedIp}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));
      // console.log(res);
      if(res.err_msg.indexOf('BANCO') > -1) {
        setModalText('Erro de conexão com o banco de dados!');
        setModalVisible(true);
        setLoading(false);
        return
      } else if(res.fun_codigo == 0) {
        setModalText('Verifique as credenciais!');
        setModalVisible(true);
        setLoading(false);
        return
      } else {
        setLoading(false);
        navigation.navigate('StackNav', {
          screen: 'Main',
          params: {
            ip: settedIp,
            funcionario: res.fun_codigo
          }  
        });
      }
    } catch (error) {
      setModalText(`${error}`);
      setModalVisible(true);
      setLoading(false);
    }
  }

  return (
    <Container>
      <MenuButton onPress={() => openDrawer()}>
        <MenuIcon name="menu" size={40} color='#14BDAA'/>
      </MenuButton>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={()=>setModalVisible(false) }
        swipeDirection={['up', 'down']}
        onSwipeComplete={() => setModalVisible(false)}
        >
        <ModalView>
          <ModalButton onPress={() => setModalVisible(false)}>
            <ModalText>X</ModalText>
          </ModalButton>
          <ModalText>{modalText}</ModalText>
        </ModalView>
      </Modal>
      
      <InputContainer>
        <Title>Login</Title>
        <InputGroup>
          <InputRow>
            <IconView>
              <InputIcon name="person" size={30} color='#fff'/>
            </IconView>
            <Input
              value={user}
              autoCapitalize="characters"
              onChangeText={(newValue) => setUser(newValue)}
            />
          </InputRow> 
          <InputRow>
            <IconView>
              <InputIcon name="locked" size={30} color='#fff'/>
            </IconView>
            <Input
              value={password}
              keyboardType='number-pad'
              onChangeText={(newValue) => setPassword(newValue)}
              secureTextEntry={true}
            />
          </InputRow>
        </InputGroup>

        <DefaultButton
          style={{ marginTop: 30 }}
          onPress={login}
        >
          <DefaultText>Entrar</DefaultText>
        </DefaultButton>
      </InputContainer>

      
      <Loading animating={loading} size="large" color="#14BDAA" />
    </Container>
  );
};
