import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

import { addZero, getClients } from '../../services/api';

import * as S from './styles';
import normalize from '../../utils/normalize';

export default function Main({ navigation, route }){

  const { ip } = route.params;
  const newDate = new Date();
  const [dateShow, setDateShow] = useState(false);
  const [date, setDate] = useState(newDate);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState();
  const [docAux, setDocAux] = useState('');

  useEffect(() => {
    getClients(ip).then(json => {
      let clientsArr = [];
      json.data.arr_cli.map(client => {
        const clientObj = {
          id: client.substring(0, client.indexOf("-")),
          label: client.slice(client.indexOf('-') +1, client.length),
        }
        clientsArr.push(clientObj);
      })
      setClients(clientsArr); 
    })
  }, [])

  useEffect(() => { clients.length > 0 && setClient(clients[0].id) }, [clients])

  return (
    <S.Container>

      {dateShow && (
        <DateTimePicker
          testID="dateTimePicker"
          mode="date" display="default"
          value={date}
          minimumDate={newDate - 2592000000} maximumDate={newDate}
          onChange={(e, selectedDate) => {
            setDateShow(false);
            const currentDate = selectedDate || date;
            setDate(currentDate);
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
                {`${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`}
              </S.DateText>
            </S.DateView>
          </S.DateButton>
        </S.DefaultView>

        <S.DefaultView>
          <S.DefaultText>Cliente:</S.DefaultText>
          <S.ClientPickerView>
            <Picker
              style={{height: normalize(40), width: '100%', color: '#000'}}
              selectedValue={client}
              onValueChange={(newClient) => {setClient(newClient)}}>
              {clients.map(client => <Picker.Item key={client.id} label={client.label} value={client.id} />)}
            </Picker>
          </S.ClientPickerView>
        </S.DefaultView>

        <S.DefaultView>
          <S.DefaultText>Doc Auxiliar:</S.DefaultText>
          <S.Input 
            value={docAux}
            onChangeText={newText => setDocAux(newText)}
          />
        </S.DefaultView>
      </S.Header>
      <S.NextButton onPress={() => navigation.navigate('Details', {
        ip,
        client,
        docAux,
        date: `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`
      })} > 
        <S.DefaultText>
          Prosseguir
        </S.DefaultText>
      </S.NextButton>
    </S.Container>
  );
};