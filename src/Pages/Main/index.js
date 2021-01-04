import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

import * as S from './styles';
import normalize from '../../utils/normalize';

export default function Main({ navigation }){

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

      <S.MainTitle>Entrada de Pedidos</S.MainTitle>
      <S.Header>
        <S.DefaultView>
          <S.DefaultText>Entrada:</S.DefaultText>
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
          <S.ClientPickerView>
            <Picker
              selectedValue={1}
              style={{height: normalize(40), width: '100%', color: '#000'}}
              onValueChange={() => {}}>
              <Picker.Item label="FULANO" value={1} />
              <Picker.Item label="BELTRANO" value={2} />
            </Picker>
          </S.ClientPickerView>
        </S.DefaultView>

        <S.DefaultView>
          <S.DefaultText>Doc Auxiliar:</S.DefaultText>
          <S.Input />
        </S.DefaultView>
      </S.Header>
      <S.NextButton onPress={() => navigation.navigate('Details')} > 
        <S.DefaultText>
          Prosseguir
        </S.DefaultText>
      </S.NextButton>
    </S.Container>
  );
};