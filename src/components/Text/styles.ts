import { TextProps } from "react-native";
import styled, { css } from "styled-components/native";

import { Device } from "../../helpers";

interface Props extends TextProps {
  title: string;
  size: "sm" | "x";
}

export const Title = styled.Text`
  color: #242424;
`;
