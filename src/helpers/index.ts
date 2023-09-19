import { Platform, Dimensions } from "react-native";

type Device = {
  width: number;
  height: number;
  behavior: "padding" | "height";
  plataform: "android" | "ios";
};

type NutricionalData = {
  name: string;
  value: string;
  moreInfo?: {
    name: string;
    value: string;
  }[];
};

const { width, height } = Dimensions.get("window");

export const Device: Device = {
  width,
  height,
  behavior: Platform.OS === "android" ? "height" : "padding",
  plataform: Platform.OS === "android" ? "android" : "ios",
};

export const nutricionalData: NutricionalData[] = [
  {
    name: "Energia",
    value: "221,15 kcal",
  },
  {
    name: "Proteínas",
    value: "15,13 g",
  },
  {
    name: "Carboidratos",
    value: "18,40 g",
    moreInfo: [
      {
        name: "Fibra Alimentar",
        value: "5,83 g",
      },
      {
        name: "Açúcar",
        value: "4,88 g",
      },
    ],
  },
  {
    name: "Gorduras Totais",
    value: "5,18 g",
    moreInfo: [
      {
        name: "Gorduras Saturadas",
        value: "0,86 g",
      },
      {
        name: "Gorduras Trans",
        value: "0 g",
      },
    ],
  },
  {
    name: "Colesterol",
    value: "0 mg",
  },
  {
    name: "Sódio",
    value: "243,03 mg",
  },
  {
    name: "Potássio",
    value: "291,85 mg",
  },
  {
    name: "Cálcio",
    value: "49,02 mg",
  },
  {
    name: "Ferro",
    value: "2,91 mg",
  },
  {
    name: "Magnésio",
    value: "48,23 mg",
  },
  {
    name: "Vitamina C",
    value: "29,49 mg",
  },
  {
    name: "Vitamina D",
    value: "24,88 mg",
  },
  {
    name: "Vitamina B6",
    value: "32,40 mg",
  },
];
