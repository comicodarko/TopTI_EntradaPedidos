import React from 'react';
import {Picker} from '@react-native-picker/picker';

import normalize from '../../../utils/normalize';

import Icon from 'react-native-vector-icons/Feather';

import { Container, DefaultView, DefaultText, PickerView, Input } from '../styles';
import * as S from './styles';

export default function Details({ navigation }) {
  return (
    <Container>
      <S.Details  style={{ borderColor: '#0000' }}>
        <S.DefaultViewColumn>
          <DefaultText>Lavado</DefaultText>
          <PickerView>
            <Picker
              selectedValue={1}
              style={{height: normalize(40), width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="AMACIADO" value={1} />
              <Picker.Item label="DESTROYER" value={2} />
            </Picker>
          </PickerView>
        </S.DefaultViewColumn>

        <S.DefaultViewColumn>
          <DefaultText>Roupa</DefaultText>
          <PickerView>
            <Picker
              selectedValue={1}
              style={{height: normalize(40), width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="BERMUDA" value={1} />
              <Picker.Item label="CALÇA" value={2} />
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
              selectedValue={1}
              style={{height: normalize(40), width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="Serviço 1" value={1} />
              <Picker.Item label="Serviço 2" value={2} />
            </Picker>
          </PickerView>
          <S.AddService style={{ marginBottom: normalize(5) }}>
            <DefaultText>Adicionar</DefaultText>
          </S.AddService>
        </DefaultView>
        <S.DefaultViewColumn>
          <DefaultText>Serviços Adicionados:</DefaultText>

          <S.Scroll>
            <S.Service>
              <S.ServiceText>Serviço 1</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={normalize(30)} />
            </S.Service>
            <S.Service>
              <S.ServiceText>Serviço 3</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={normalize(30)} />
            </S.Service>
            <S.Service>
              <S.ServiceText>Serviço 5</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={normalize(30)} />
            </S.Service>
          </S.Scroll>
          <DefaultView>
            <S.AddService 
              style={{ backgroundColor: '#F99702' }}
              onPress={() => navigation.goBack()}>
              <DefaultText>
                Voltar
              </DefaultText>
            </S.AddService>
            <S.AddService>
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