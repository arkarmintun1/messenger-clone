import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, HStack, Menu, Pressable, Text, useTheme } from 'native-base';
import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import { ROUTE, RouteParams } from '..';
import { L } from '../../localization';

type Props = NativeStackScreenProps<RouteParams, ROUTE.HOME>;

const HomeScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          shouldOverlapWithTrigger={false}
          offset={8}
          crossOffset={8}
          placement="top right"
          borderRadius={12}
          trigger={triggerProps => (
            <Pressable accessibilityLabel="Settings" {...triggerProps}>
              <Icon
                color={theme.colors.white}
                name="more-horizontal"
                size={18}
              />
            </Pressable>
          )}>
          <Menu.Item onPress={() => navigation.push(ROUTE.SETTINGS)}>
            <HStack space={2} alignItems="center">
              <Icon name="settings" size={14} />
              <Text>{t(L.settings)}</Text>
            </HStack>
          </Menu.Item>
        </Menu>
      ),
    });
  }, [navigation, t, theme.colors.white]);

  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Home Screen</Text>
    </Box>
  );
};

export default HomeScreen;
