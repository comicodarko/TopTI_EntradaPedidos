import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';

export default function Main(){

  const [dateShow, setDateShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <S.Container>

      {dateShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          maximumDate={date}
          display="default"
          onChange={(e, selectedDate) => {
            const currentDate = selectedDate || date;
            setDate(currentDate);
            setDateShow(false);
          }}
        />
      )}

      <S.Title>Entrada de Pedidos</S.Title>
      <S.Scroll>
        <S.Header>
          <S.DefaultView>
            <S.DefaultText>Data de entrada:</S.DefaultText>
            <S.DateButton onPress={() => {setDateShow(true)}}>
              <S.DateView>
                <S.DateText>
                  {`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`}
                </S.DateText>
              </S.DateView>
            </S.DateButton>
          </S.DefaultView>

          <S.DefaultView>
            <S.DefaultText>Cliente:</S.DefaultText>
            <S.PickerView style={{ width: 200 }}>
              <Picker
                selectedValue={1}
                style={{height: 35, width: '100%', color: '#000'}}
                onValueChange={() => {}}>
                <Picker.Item label="FULANO" value={1} />
                <Picker.Item label="BELTRANO" value={2} />
              </Picker>
            </S.PickerView>
          </S.DefaultView>

          <S.DefaultView>
            <S.DefaultText>Doc Auxiliar:</S.DefaultText>
            <S.Input />
          </S.DefaultView>
        </S.Header>

        <S.Details  style={{ borderColor: '#0000' }}>
          <S.DefaultView style={{ flexDirection: 'column' }}>
            <S.DefaultText>Lavado</S.DefaultText>
            <S.PickerView>
              <Picker
                selectedValue={1}
                style={{height: 50, width: '100%', color: '#000'}}
                onValueChange={() => {}}>
                <Picker.Item label="AMACIADO" value={1} />
                <Picker.Item label="DESTROYER" value={2} />
              </Picker>
            </S.PickerView>
          </S.DefaultView>

          <S.DefaultView style={{ flexDirection: 'column' }}>
            <S.DefaultText>Roupa</S.DefaultText>
            <S.PickerView>
              <Picker
                selectedValue={1}
                style={{height: 50, width: '100%', color: '#000'}}
                onValueChange={() => {}}>
                <Picker.Item label="BERMUDA" value={1} />
                <Picker.Item label="CALÇA" value={2} />
              </Picker>
            </S.PickerView>
          </S.DefaultView>
        </S.Details>
        <S.Details>
          <S.DefaultView style={{ flexDirection: 'column', height: 70 }}>
            <S.DefaultText style={{ marginBottom: 5 }}>Quantidade:</S.DefaultText>  
            <S.Input
              style={{ textAlign: 'center' }}
              keyboardType='number-pad'
            />
          </S.DefaultView>  
          <S.DefaultView style={{ flexDirection: 'column', height: 70 }}>
            <S.DefaultText style={{ marginBottom: 5 }}>Peso Unitário:</S.DefaultText>  
            <S.Input
              style={{ textAlign: 'center' }}
              keyboardType='number-pad'
            />
          </S.DefaultView>  
        </S.Details>
        <S.Details  style={{ borderColor: '#0000' }}>
          <S.DefaultView style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <S.DefaultText>Serviços:</S.DefaultText>
            <S.Service>
              <S.ServiceText>Serviço 1</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </S.Service>
            <S.Service>
              <S.ServiceText>Serviço 3</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </S.Service>
            <S.Service>
              <S.ServiceText>Serviço 5</S.ServiceText>
              <Icon name="trash-2" color="#BD211E" size={30} />
            </S.Service>
          </S.DefaultView>

          <S.DefaultView style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <S.PickerView>
              <Picker
                selectedValue={1}
                style={{height: 35, width: '100%', color: '#000'}}
                onValueChange={() => {}}>
                <Picker.Item label="Serviço 1" value={1} />
                <Picker.Item label="Serviço 2" value={2} />
              </Picker>
            </S.PickerView>
            <S.AddService style={{ marginBottom: 5 }}>
              <S.DefaultText>Adicionar</S.DefaultText>
            </S.AddService>

            <S.AddService style={{ marginTop: 'auto', backgroundColor: '#14BDAA' }}>
              <S.DefaultText>Dar Entrada</S.DefaultText>
            </S.AddService>
          </S.DefaultView>
        </S.Details>
      </S.Scroll> 
    </S.Container>
  );
};