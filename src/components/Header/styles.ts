import styled, { css } from "styled-components/native";
import { Device } from "../../helpers";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: ${Device.width * 0.01}px;
  padding: ${Device.width * 0.15}px 18px;
`;

export const Button = styled.TouchableOpacity`
  width: ${Device.width * 0.12}px;
  height: ${Device.width * 0.12}px;

  align-items: center;
  justify-content: center;

  background-color: #d8eed2;
  border-radius: 32px;

  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 16;
`;
