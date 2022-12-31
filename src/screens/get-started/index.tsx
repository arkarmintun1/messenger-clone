import { Box, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { L } from '../../localization';

const GetStartedScreen = () => {
  const { t } = useTranslation();
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>{t(L.welcome)}</Text>
    </Box>
  );
};

export default GetStartedScreen;
