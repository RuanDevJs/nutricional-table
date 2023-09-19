import React from "react";

import Text from "../../components/Text";
import Button from "../../components/Button";

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Salad from "../../assets/Dish.png";

import * as Styled from "./styles";
import { Device, nutricionalData } from "../../helpers";

export default function Home() {
  const bottomSheet = useSharedValue(0);
  const context = useSharedValue({
    translateY: 0,
  });

  const handleGesture = Gesture.Pan()
    .onStart((event) => {
      context.value = { translateY: bottomSheet.value };
    })
    .onChange((event) => {
      bottomSheet.value = event.translationY + context.value.translateY;

      if (bottomSheet.value <= -100) {
        return (bottomSheet.value = 0);
      } else if (bottomSheet.value >= 500) {
        return (bottomSheet.value = Device.height);
      }
    })
    .onEnd((event) => {
      if (bottomSheet.value <= -100) {
        return (bottomSheet.value = 0);
      } else if (bottomSheet.value >= 500) {
        return (bottomSheet.value = Device.height);
      }
    });

  const rStyledBottomSheet = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(bottomSheet.value),
        },
      ],
    };
  });

  const rStyledBackground = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        bottomSheet.value,
        [Device.width, -bottomSheet.value],
        [1, 0.75]
      ),
    };
  });

  return (
    <GestureHandlerRootView style={{ position: "relative" }}>
      <Styled.Background>
        <Styled.Container>
          <Styled.Poster
            source={Salad}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Text title="Salada variada" type="heading-1" />
          <Styled.MoreInfo>
            <Styled.MoreInfoWrap>
              <Text title="Energia" type="heading-3" />
              <Text title="221,15 kcal" type="number-mid" />
            </Styled.MoreInfoWrap>
            <Styled.MoreInfoWrap>
              <Text title="Porção total" type="heading-3" />
              <Text title="240 g" type="number-mid" />
            </Styled.MoreInfoWrap>
          </Styled.MoreInfo>
          <Styled.Graph>
            <Styled.GraphWrap>
              <Text title="Protéinas" type="heading-3" />
              <Styled.GraphRow>
                <Styled.Table isFilled />
                <Styled.Table isFilled />
                <Styled.Table isFilled />
                <Styled.Table />
                <Styled.Table />
              </Styled.GraphRow>
            </Styled.GraphWrap>
            <Styled.GraphWrap>
              <Text title="Carboidratos" type="heading-3" />
              <Styled.GraphRow>
                <Styled.Table isFilled />
                <Styled.Table isFilled />
                <Styled.Table isFilled />
                <Styled.Table />
                <Styled.Table />
              </Styled.GraphRow>
            </Styled.GraphWrap>
            <Styled.GraphWrap>
              <Text title="Açúcar" type="heading-3" />
              <Styled.GraphRow>
                <Styled.Table isFilled />
                <Styled.Table />
                <Styled.Table />
                <Styled.Table />
                <Styled.Table />
              </Styled.GraphRow>
            </Styled.GraphWrap>
            <Styled.GraphWrap>
              <Text title="Gorduras" type="heading-3" />
              <Styled.GraphRow>
                <Styled.Table isFilled />
                <Styled.Table />
                <Styled.Table />
                <Styled.Table />
                <Styled.Table />
              </Styled.GraphRow>
            </Styled.GraphWrap>
          </Styled.Graph>
          <Button onPress={() => (bottomSheet.value = Device.width)} />
        </Styled.Container>
      </Styled.Background>
      <GestureDetector gesture={handleGesture}>
        <Styled.BottomSheet style={rStyledBottomSheet}>
          <Styled.BottomSheetContainer>
            <Styled.BottomSheetLine />
            {nutricionalData.map((data, index) => {
              return (
                <Styled.Nutricional key={`data-${data.name}--index`}>
                  <Styled.NutricionalRow>
                    <Text title={data.name} type="heading-2" />
                    <Text title={data.value} type="number-sm" />
                  </Styled.NutricionalRow>
                  {data.moreInfo ? (
                    <Styled.NutricionalList>
                      {data.moreInfo.map((info, index) => {
                        return (
                          <Styled.NutricionalRow
                            key={`data-${data.value}--${index}`}
                          >
                            <Text title={info.name} type="number-sm" />
                            <Text title={info.value} type="number-sm" />
                          </Styled.NutricionalRow>
                        );
                      })}
                    </Styled.NutricionalList>
                  ) : null}
                </Styled.Nutricional>
              );
            })}
          </Styled.BottomSheetContainer>
        </Styled.BottomSheet>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
