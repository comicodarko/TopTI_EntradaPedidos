import React from 'react';
import {Picker} from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/Feather';

import { Container, DefaultView, DefaultText, PickerView, Input } from '../styles';
import { AddService, Details as Detail, Service, ServiceText, Scroll } from './styles';

export default function Details({ navigation }) {
  return (
    <Container>
      <Detail  style={{ borderColor: '#0000' }}>
        <DefaultView style={{ flexDirection: 'column' }}>
          <DefaultText>Lavado</DefaultText>
          <PickerView>
            <Picker
              selectedValue={1}
              style={{height: 40, width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="AMACIADO" value={1} />
              <Picker.Item label="DESTROYER" value={2} />
            </Picker>
          </PickerView>
        </DefaultView>

        <DefaultView style={{ flexDirection: 'column' }}>
          <DefaultText>Roupa</DefaultText>
          <PickerView>
            <Picker
              selectedValue={1}
              style={{height: 40, width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="BERMUDA" value={1} />
              <Picker.Item label="CALÇA" value={2} />
            </Picker>
          </PickerView>
        </DefaultView>
      </Detail>
      <Detail>
        <DefaultView style={{ flexDirection: 'column', height: 70 }}>
          <DefaultText style={{ marginBottom: 5 }}>Quantidade:</DefaultText>  
          <Input
            style={{ textAlign: 'center' }}
            keyboardType='number-pad'
          />
        </DefaultView>  
        <DefaultView style={{ flexDirection: 'column', height: 70 }}>
          <DefaultText style={{ marginBottom: 5 }}>Peso Unitário:</DefaultText>  
          <Input
            style={{ textAlign: 'center' }}
            keyboardType='number-pad'
          />
        </DefaultView>  
      </Detail>
      <Detail  style={{ borderColor: '#0000', flexWrap: 'wrap' }}>
        <DefaultView>
          <PickerView>
            <Picker
              selectedValue={1}
              style={{height: 40, width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="Serviço 1" value={1} />
              <Picker.Item label="Serviço 2" value={2} />
            </Picker>
          </PickerView>
          <AddService style={{ marginBottom: 5 }}>
            <DefaultText>Adicionar</DefaultText>
          </AddService>
        </DefaultView>
        <DefaultView style={{ flexDirection: 'column' }}>
          <DefaultText>Serviços Adicionados:</DefaultText>

          <Scroll>
            <Service>
              <ServiceText>Serviço 1</ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </Service>
            <Service>
              <ServiceText>Serviço 3</ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </Service>
            <Service>
              <ServiceText>Serviço 5</ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </Service>
          </Scroll>
          <DefaultView>
            <AddService 
              style={{ backgroundColor: '#F99702' }}
              onPress={() => navigation.goBack()}>
              <DefaultText>
                Voltar
              </DefaultText>
            </AddService>
            <AddService>
              <DefaultText>
                Dar Entrada
              </DefaultText>
            </AddService>
          </DefaultView>
        </DefaultView>
      </Detail>
    </Container>
  );
};