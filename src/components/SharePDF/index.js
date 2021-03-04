import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Share from 'react-native-share';
import RNPrint from 'react-native-print'; 
import { addZero } from '../../services/api';

export async function share(plataform) {
  const date = new Date();
  const html = `
    <style>
      * {font-family: monospace}
    </style>
    <div style="font-size: 12px; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-direction: row;">
      <span>
        <b style="font-size: 14px;">DENIM LAUNDRY</b> <br />
      </span>
        
      <span style="font-size: 16px; display: flex; flex-direction: column; align-items: center;">
        <b>ORDEM DE SERVIÇO</b> <br />
        <span>PEDIDO: 164</span>
      </span>

      <span>
        ${`${addZero(date.getDate())}/${addZero(date.getMonth()+1)}/${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`}
      </span>
    </div>
    <div style="font-size: 12px; border-bottom: 1px solid black; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-direction: row;">
      <span>
        <b>Entrada :</b> 10/02/2021 <br /> 
        <b>Funcionário: </b>FULANO
      </span>
    </div>
    <div style="padding: 10px 0; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-direction: row;">
      <span>
        <b>Cliente: </b> CICRANO LTDA <br />
        <b>Endereço: </b> Rua Tal, 63, SALGADO - CARUARU - PE <br />
        <b>Obs:</b> LACRE 3603 - PEÇA PILOTO
      </span> 
    </div>
    
    <table style="border-collapse: collapse; margin-top: 0; padding-top: 0;width:100%; border: 1px solid black; font-size: 12px;">
    <thead>
      <tr style="border-bottom: 1px solid black; font-size: 10px;">
        <th style="border-right: 1px solid black; border-bottom: 1px solid black;">Lavado</th>
        <th style="border-right: 1px solid black; border-bottom: 1px solid black;">Serviços</th>
        <th style="border-right: 1px solid black; border-bottom: 1px solid black;">Roupa</th>
        <th style="border-right: 1px solid black; border-bottom: 1px solid black;">Quantidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;">Clareamento</td>
        <td style="text-align: center;">
          Serviço 1 <br />
          Serviço 2 <br />
          Serviço 3 <br />
        </td>
        <td style="text-align: center;">Calça</td>
        <td style="text-align: center;">175</td>
      </tr>
    </tbody>
    </table>
    <br />
    <div style="width: 100%; display: flex; justify-content: center">
      <p align="center">
        ____________________________________________________<br />
        ENTREGUE POR
      </p>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
        <p align="center">
          ____________________________________________________<br />
          RECEBIDO POR
        </p>
    </div>
  `
  const results = await RNHTMLtoPDF.convert({
    html: html,
    fileName: 'NOTAdeENTRADA',
    base64: true,
  });
  // if(plataform === 'whatsapp') {
  //   const shareOptions = {
  //     url:  `data:application/pdf;base64,` + results.base64,
  //     social: Share.Social.WHATSAPP,
  //     whatsAppNumber: "558193618254",
  //     filename: 'DEBITOFULANO'
  //   };  
  //   Share.shareSingle(shareOptions)
  //     .then((res) => { console.log(res) })
  //     .catch((err) => { err && console.log(err); });
  // } else
  //  if(plataform === 'email') {
  //   const shareOptions = {
  //     title: 'Enviar relatório Team Contabilidade',
  //     url:  `data:application/pdf;base64,` + results.base64,
  //     filename: 'RELATÓRIOTC',
  //     social: Share.Social.EMAIL,
  //     subject: 'Relatório Team Contabilidade ',
  //     email: ''
  //   }
  //   Share.shareSingle(shareOptions)
  //     .then((res) => { console.log(res) })
  //     .catch((err) => { err && Alert.alert('É necessário ter algum aplicativo de email instalado no dispositivo.') });
  // } else {}
    await RNPrint.print({filePath: results.filePath});
}