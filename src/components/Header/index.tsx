import React from "react";
import { ArrowLeft, Heart } from "phosphor-react-native";

import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Button>
        <ArrowLeft size={24} color="#242424" />
      </Styled.Button>
      <Styled.Button>
        <Heart size={24} color="#242424" />
      </Styled.Button>
    </Styled.Container>
  );
}
