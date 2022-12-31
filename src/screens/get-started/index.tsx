import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTE, RouteParams } from '..';
import { L } from '../../localization';

type Props = NativeStackScreenProps<RouteParams, ROUTE.SETTINGS>;

const GetStartedScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTE.HOME);
    }, 5000);
  }, [navigation]);

  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>{t(L.welcome)}</Text>
    </Box>
  );
};

export default GetStartedScreen;
