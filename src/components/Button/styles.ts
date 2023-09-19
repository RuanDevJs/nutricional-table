import styled, { css } from "styled-components/native";
import { Device } from "../../helpers";

export const Container = styled.TouchableOpacity`
  width: ${Device.width * 0.8}px;
  padding: 20px;

  align-items: center;
  justify-content: center;

  background-color: #3bab1e;
  border-radius: 16px;
`;
