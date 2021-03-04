import axios from 'axios';

export function addZero(number){
  if (number <= 9) 
    return "0" + number;
  else
    return number;  
}

export async function login(settedIp, user, password) {
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
      const response = await axios.post(`http://${settedIp}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));
      
      if(res.err_msg.indexOf('BANCO') > -1) {
        return {
          error: true,
          message: 'Erro de conexão com o banco de dados!'
        }
      } else if(res.fun_codigo == 0) {
        return {
          error: true,
          message: 'Verifique as credenciais!'
        }
      } else {
        return {
          error: false,
          data: res.fun_codigo
        }
      }
    } catch (error) {
      return {
        error: true,
        message: `${error}`
      }
    }
}

export async function getClients(ip) {
  let xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:getClientesJSON xmlns:m="http://${ip}/lavanderia/ws/getClientesJSON">

        </m:getClientesJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>          
      `;

      console.log(xmls);
  
    try {
      const response = await axios.post(`http://${ip}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));
      
      if(res.err_msg) {
        return {
          error: true,
          message: `${res.err_msg}`
        }
      } else {
        return {
          error: false,
          data: res
        }
      }
    } catch (error) {
      return {
        error: true,
        message: `${error}`
      }
    }
}

export async function getLavados(ip, client) {
  let xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:getLavadosJSON xmlns:m="http://${ip}/lavanderia/ws/getLavadosJSON">
          <cli>${client}</cli>
        </m:getLavadosJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>          
      `;

    try {
      const response = await axios.post(`http://${ip}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));
      
      if(res.err_msg) {
        return {
          error: true,
          message: `${res.err_msg}`
        }
      } else {
        return {
          error: false,
          data: res
        }
      }
    } catch (error) {
      return {
        error: true,
        message: `${error}`
      }
    }
}

export async function getClothes(ip, client) {
  let xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:getRoupasJSON xmlns:m="http://${ip}/lavanderia/ws/getRoupasJSON">
          <cli>${client}</cli>
        </m:getRoupasJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>          
      `;

    try {
      const response = await axios.post(`http://${ip}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));

      if(res.err_msg) {
        return {
          error: true,
          message: `${res.err_msg}`
        }
      } else {
        return {
          error: false,
          data: res
        }
      }
    } catch (error) {
      return {
        error: true,
        message: `${error}`
      }
    }
}

export async function getServices(ip, client) {
  let xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:getServicosJSON xmlns:m="http://${ip}/lavanderia/ws/getServicosJSON">
          <cli>${client}</cli>
        </m:getServicosJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>          
      `;

      console.log(xmls);
    try {
      const response = await axios.post(`http://${ip}/lavanderia/ws/soapserver.php?wsdl`,
      xmls,
      {headers: {'Content-Type': 'application/xml'}}
      )
      const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));

      if(res.err_msg) {
        return {
          error: true,
          message: `${res.err_msg}`
        }
      } else {
        return {
          error: false,
          data: res
        }
      }
    } catch (error) {
      return {
        error: true,
        message: `${error}`
      }
    }
}


export async function setEntry(ip, pedido, funcionario, date) {
  const newDate = date.toLocaleDateString('pt-br').replace('/', '.'); 
  const newHour = new Date();
  var hora = newHour.getHours() < 10 ? `0${newHour.getHours()}` : `${newHour.getHours()}`;
  var minuto = newHour.getMinutes() < 10 ? `0${newHour.getMinutes()}` : `${newHour.getMinutes()}`;
  var segundos = newHour.getSeconds() < 10 ? `0${newHour.getSeconds()}` : `${newHour.getSeconds()}`;
  
  return pedido.roupas.map(async (roupa) => {
    const xmls =
      `<?xml version="1.0" encoding="UTF-8"?>
      <SOAP-ENV:Envelope
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <SOAP-ENV:Body>
        <m:setSaidaJSON xmlns:m="http://${ip}/lavanderia/ws/setSaidaJSON">
          <ped>${pedido.codigo}</ped>
          <lvd>${pedido.lavado.codigo}</lvd>
          <rou>${roupa.codigo}</rou>
          <fun>${funcionario.id}</fun>
          <dat>${newDate.replace('/', '.')}</dat>
          <hor>${hora}:${minuto}:${segundos}</hor>
          <qtd>${roupa.saindo}</qtd>
        </m:setSaidaJSON>
      </SOAP-ENV:Body>
      </SOAP-ENV:Envelope>         
      `;

      try {
        const response = await axios.post(`http://${ip}/lavanderia/ws/soapserver.php?wsdl`,
        xmls,
        {headers: {'Content-Type': 'application/xml'}}
        )
        const res = (JSON.parse(response.data.substring(response.data.indexOf('{'), response.data.indexOf('}') + 1)));
        
        if(res.err_msg.indexOf('BANCO') > -1) {
          return {
            error: true,
            message: 'Erro de conexão com o banco de dados!'
          }
        } else if(res.ok === false) {
          return {
            error: true,
            message: 'Falha ao enviar saída para o banco!'
          }
        } else {
          return {
            error: false
          }
        }
      } 
      catch (error) {
        return {
          error: true,
          message: `${error}`
        }
      }
  })
    
}