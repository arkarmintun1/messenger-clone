import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, HStack, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListRenderItemInfo, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { ROUTE, RouteParams } from '..';
import { L } from '../../localization';
import { appSelectors } from '../../store/app/app.selector';
import { Languages } from '../../store/app/app.slice';

type SettingOptions = {
  title: string;
  icon: string;
  action: () => void;
  value?: string;
};

type Props = NativeStackScreenProps<RouteParams, ROUTE.SETTINGS>;

const SettingsScreen = ({ navigation }: Props) => {
  const language = useSelector(appSelectors.language);
  const { t } = useTranslation();

  const data: SettingOptions[] = [
    { title: 'Account', icon: 'user', action: () => {} },
    { title: 'Chats', icon: 'message-circle', action: () => {} },
    { title: 'Notifications', icon: 'bell', action: () => {} },
    {
      title: t(L.language),
      icon: 'globe',
      value: Languages[language],
      action: () => navigation.push(ROUTE.LANGUAGE),
    },
    { title: 'Dark Mode', icon: 'moon', action: () => {} },
    { title: 'Help Center', icon: 'help-circle', action: () => {} },
    { title: 'Logout', icon: 'log-out', action: () => {} },
  ];

  const _renderItem = ({ index, item }: ListRenderItemInfo<SettingOptions>) => (
    <TouchableOpacity key={index} onPress={item.action}>
      <Box rounded="full" borderRadius={8} padding={2} marginX={4} marginY={1}>
        <HStack space="4" alignItems="center">
          <Icon name={item.icon} size={18} />
          <Text flex={1} borderWidth={0.5} alignSelf="center">
            {item.title}
          </Text>
          <Text>{item.value}</Text>
          <Icon name="chevron-right" size={18} />
        </HStack>
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box flex={1}>
      <FlatList
        data={data}
        renderItem={info => _renderItem(info)}
        width="full"
      />
    </Box>
  );
};

export default SettingsScreen;
