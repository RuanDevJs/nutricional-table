import React from "react";
import { TextProps } from "react-native";
import { Device } from "../../helpers";
import * as Styled from "./styles";

interface Props extends TextProps {
  title: string;
  type: "heading-1" | "heading-2" | "heading-3" | "number-sm" | "number-mid";
}

export default function Text({ title, type, ...props }: Props) {
  const styles = {
    "heading-1": {
      font: "Poppins_600SemiBold",
      size: Device.width * 0.06,
    },
    "heading-2": {
      font: "Poppins_600SemiBold",
      size: Device.width * 0.04, //16px
    },
    "heading-3": {
      font: "Poppins_600SemiBold",
      size: Device.width * 0.038, // 14px
    },
    "number-sm": {
      font: "Poppins_400Regular",
      size: Device.width * 0.038, //14px
    },
    "number-mid": {
      font: "Poppins_400Regular",
      size: Device.width * 0.04, //16px
    },
    "sub-heading": {},
  };
  return (
    <Styled.Title
      style={{ fontFamily: styles[type].font, fontSize: styles[type].size }}
      {...props}
    >
      {title}
    </Styled.Title>
  );
}
