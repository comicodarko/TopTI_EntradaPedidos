import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { share } from '../../../components/SharePDF';
import { addZero, getLavados, getClothes, getServices } from '../../../services/api';
import normalize from '../../../utils/normalize';
import Icon from 'react-native-vector-icons/Feather';
import { Container, DefaultView, DefaultText, PickerView, Input } from '../styles';
import * as S from './styles';

export default function Details({ navigation, route }) {
  
  const { ip, client, date, docAux } = route.params;
  const [lavados, setLavados] = useState([]);
  const [lavado, setLavado] = useState('');
  const [clothes, setClothes] = useState([]);
  const [clothe, setClothe] = useState('');
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    getLavados(ip, client).then(json => {
      if(json.error) {
        Alert.alert(`${json.message}`);
      } else {
        let lavadosArr = [];
        json.data.arr_lvd.map(lavado => {
          const lavadoObj = {
            id: lavado.substring(0, lavado.indexOf("-")),
            label: lavado.slice(lavado.indexOf('-') +1, lavado.length),
          }
          lavadosArr.push(lavadoObj);
        })
        setLavados(lavadosArr);
        getClothes(ip, client).then(json => {
          if(json.error) {
            Alert.alert(`${json.message}`);
          } else {
            let clothesArr = [];
            json.data.arr_rou.map(clothe => {
              const clotheObj = {
                id: clothe.substring(0, clothe.indexOf("-")),
                label: clothe.slice(clothe.indexOf('-') +1, clothe.length),
              }
              clothesArr.push(clotheObj);
            })
            setClothes(clothesArr);
            getServices(ip, client).then(json => {
              if(json.error) {
                Alert.alert(`${json.message}`);
              } else {
                let servicesArr = [];
                json.data.arr_srv.map(service => {
                  const serviceObj = {
                    id: service.substring(0, service.indexOf("-")),
                    label: service.slice(service.indexOf('-') +1, service.length),
                  }
                  servicesArr.push(serviceObj);
                })
                setServices(servicesArr);
              }
            })    
          }
        })
      }
    })
  }, [client]);

  async function removeService(service) {
    let servicesArr = [...selectedServices];
    servicesArr.splice(service, 1);
    setSelectedServices(servicesArr);
  }

  useEffect(() => { lavados.length > 0 && setLavado(lavados[0].id)}, [services]);
  useEffect(() => { clothes.length > 0 && setClothe(clothes[0].id)}), [clothes];

  return (
    <Container>
      <S.Details style={{ borderColor: '#0000' }}>
        <S.DefaultViewColumn>
          <DefaultText>Lavado</DefaultText>
          <PickerView>
            <Picker
              style={{height: normalize(40), width: '100%', color: '#000'}}
              selectedValue={lavado}
              onValueChange={newLavado => {setLavado(newLavado)}}>
              {lavados.map(lavado => <Picker.Item key={lavado.id} label={lavado.label} value={lavado.id} />)}
            </Picker>
          </PickerView>
        </S.DefaultViewColumn>

        <S.DefaultViewColumn>
          <DefaultText>Roupa</DefaultText>
          <PickerView>
            <Picker
              style={{height: normalize(40), width: '100%', color: '#000'}}
              selectedValue={clothe}
              onValueChange={newClothe => {setClothe(newClothe)}}>
              {clothes.map(clothe => <Picker.Item key={clothe.id} label={clothe.label} value={clothe.id} />)}
            </Picker>
          </PickerView>
        </S.DefaultViewColumn>
      </S.Details>
      <S.Details>
        <S.DefaultViewColumn>
          <DefaultText>Quantidade:</DefaultText>  
          <Input
            style={{ textAlign: 'center' }}
            keyboardType='number-pad'
          />
        </S.DefaultViewColumn>  
        <S.DefaultViewColumn style={{ height: normalize(75) }}>
          <DefaultText>Peso Unitário:</DefaultText>  
          <Input
            style={{ textAlign: 'center' }}
            keyboardType='number-pad'
          />
        </S.DefaultViewColumn>  
      </S.Details>
      <S.Details  style={{ borderColor: '#0000', flexWrap: 'wrap' }}>
        <DefaultView>
          <PickerView>
            <Picker
              style={{height: normalize(40), width: '100%', color: '#000'}}
              selectedValue={service}
              onValueChange={newService => {setService(newService)}}>
              {services.map(service => <Picker.Item key={service.id} label={service.label} value={service} />)}
            </Picker>
          </PickerView>
          <S.AddService style={{ marginBottom: normalize(5) }}
            onPress={() => {setSelectedServices(selectedServices => [...selectedServices, service])}}
          >
            <DefaultText>Adicionar</DefaultText>
          </S.AddService>
        </DefaultView>
        <S.DefaultViewColumn>
          <DefaultText>Serviços Adicionados:</DefaultText>

          <S.Scroll>
            {selectedServices.map(service => {
              return (
                <S.Service key={service.id}>
                  <S.ServiceText>{service.label}</S.ServiceText>
                  <TouchableOpacity onPress={() => removeService(service)}>
                    <Icon name="x" color="#F99702" size={normalize(30)} />
                  </TouchableOpacity>
                </S.Service>
              )
            })}
          </S.Scroll>
          <DefaultView>
            <S.AddService 
              style={{ backgroundColor: '#F99702' }}
              onPress={() => navigation.goBack()}>
              <DefaultText>
                Voltar
              </DefaultText>
            </S.AddService>
            <S.AddService onPress={share}>
              <DefaultText>
                Dar Entrada
              </DefaultText>
            </S.AddService>
          </DefaultView>
        </S.DefaultViewColumn>
      </S.Details>
    </Container>
  );
};