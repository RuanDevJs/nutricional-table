import React from "react";
import { TouchableOpacityProps } from "react-native";

import Text from "../Text";
import { ArrowLeft, Heart } from "phosphor-react-native";

import * as Styled from "./styles";

export default function Button({ ...props }: TouchableOpacityProps) {
  return (
    <Styled.Container activeOpacity={0.72} {...props}>
      <Text
        title="Mais detalhes"
        type="number-mid"
        style={{ color: "#FDFDFD" }}
      />
    </Styled.Container>
  );
}
