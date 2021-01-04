import styled from 'styled-components/native';
import normalize from '../../../utils/normalize';

import { DefaultText, DefaultButton, DefaultView } from '../styles';

export const Details = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-around;
padding-bottom: ${normalize(5)}px;
border-bottom-width: 2px;
border-color: #14BDAA;
`

export const Scroll = styled.ScrollView`
  width: 100%;
  height: ${normalize(160)}px;
  border-radius: 5px;
  background-color: #fff5;
  margin-top: ${normalize(10)}px;
  margin-bottom: ${normalize(30)}px;
`

export const Service = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
align-self: center;
flex-wrap: wrap;
background: #fff;
width: 80%;
margin-top: ${normalize(10)}px;
padding: ${normalize(5)}px ${normalize(10)}px;
border-radius: 5px;
`

export const ServiceText = styled(DefaultText)`
font-size: ${normalize(18)}px;
font-family: sans-serif-condensed;
text-transform: uppercase;
color: #000;
`

export const AddService = styled(DefaultButton)`
padding: ${normalize(5)}px ${normalize(10)}px;
margin-top: ${normalize(10)}px;
`

export const DefaultViewColumn = styled(DefaultView)`
  flex-direction: column;
`