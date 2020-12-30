import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

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

      <S.GetView>
      <S.DefaultText>Data de entrada</S.DefaultText>
        <S.DateButton onPress={() => {setDateShow(true)}}>
          <S.DateView>
            <S.DateText>
                {`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`}
            </S.DateText>
          </S.DateView>
        </S.DateButton>
      </S.GetView>
    </S.Container>
  );
};