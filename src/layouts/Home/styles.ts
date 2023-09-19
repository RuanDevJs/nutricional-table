import styled, { css } from "styled-components/native";
import { ViewProps } from "react-native";

import { Device } from "../../helpers";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export const Background = styled.View`
  height: ${Device.height}px;
  background-color: #fdfdfd;

  margin-top: 4px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const BackgroundBlur = styled(AnimatedBlurView)`
  height: 100%;
  opacity: 1;
  position: absolute;
  left: 0;
  right: 0;
  background-color: red;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;

  height: 100%;
`;

export const Poster = styled.Image`
  width: ${Device.width * 0.9}px;
  height: ${Device.width * 0.9}px;

  margin-top: -${Device.width * 0.3}px;
`;

export const MoreInfo = styled.View`
  width: ${Device.width * 0.6}px;
  margin-top: 16px;

  flex-direction: row;
  justify-content: space-between;
`;

export const MoreInfoWrap = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Graph = styled.View`
  width: ${Device.width * 0.9}px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

interface GraphRowProps extends ViewProps {
  isFilled?: boolean;
}

export const Table = styled.View<GraphRowProps>`
  width: 60px;
  height: 10px;

  border-radius: 10px;
  background-color: ${({ isFilled }) => (isFilled ? "#3bab1e" : "#B1DDA5")};

  margin-top: 4px;
`;

export const GraphWrap = styled.View`
  margin-bottom: 18px;
`;

export const GraphRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomSheet = styled(Animated.View)`
  position: absolute;

  width: ${Device.width}px;
  height: ${Device.height}px;
  background-color: #fdfdfd;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const BottomSheetContainer = styled(Animated.View)`
  padding: 32px 0;
  height: 100%;
`;

export const BottomSheetLine = styled(Animated.View)`
  width: 100px;
  height: 10px;

  margin: 0 auto 18px auto;

  border-radius: 10px;
  background-color: #b1dda5;

  opacity: 0.7;
`;

export const Nutricional = styled.View`
  padding: 0 ${Device.width * 0.1}px;
  padding-bottom: 4px;
`;

export const NutricionalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const NutricionalList = styled.View`
  margin-left: 16px;
`;
