import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, HStack } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListRenderItemInfo, Text, TouchableOpacity } from 'react-native';
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
    { title: t(L.account), icon: 'user', action: () => {} },
    { title: t(L.chats), icon: 'message-circle', action: () => {} },
    { title: t(L.notifications), icon: 'bell', action: () => {} },
    {
      title: t(L.language),
      icon: 'globe',
      value: Languages[language],
      action: () => navigation.push(ROUTE.LANGUAGE),
    },
    { title: t(L.darkMode), icon: 'moon', action: () => {} },
    { title: t(L.helpCenter), icon: 'help-circle', action: () => {} },
    { title: t(L.logout), icon: 'log-out', action: () => {} },
  ];

  const _renderItem = ({ index, item }: ListRenderItemInfo<SettingOptions>) => (
    <TouchableOpacity key={index} onPress={item.action}>
      <Box rounded="full" borderRadius={8} padding={2} marginX={4} marginY={1}>
        <HStack space="4" alignItems="center">
          <Icon name={item.icon} size={18} />
          <Text style={{ flex: 1 }}>{item.title}</Text>
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
