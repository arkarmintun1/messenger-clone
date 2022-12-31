import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, HStack, Text } from 'native-base';
import React from 'react';
import { ListRenderItemInfo, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ROUTE, RouteParams } from '..';

type SettingOptions = {
  title: string;
  icon: string;
  action: () => void;
  value?: string;
};

type Props = NativeStackScreenProps<RouteParams, ROUTE.SETTINGS>;

const SettingsScreen = ({}: Props) => {
  const data: SettingOptions[] = [
    { title: 'Account', icon: 'user', action: () => {} },
    { title: 'Chats', icon: 'message-circle', action: () => {} },
    { title: 'Notifications', icon: 'bell', action: () => {} },
    {
      title: 'Language',
      icon: 'globe',
      value: 'English (US)',
      action: () => {},
    },
    { title: 'Dark Mode', icon: 'moon', action: () => {} },
    { title: 'Help Center', icon: 'help-circle', action: () => {} },
    { title: 'Logout', icon: 'log-out', action: () => {} },
  ];

  const _renderItem = ({ index, item }: ListRenderItemInfo<SettingOptions>) => (
    <TouchableOpacity key={index} onPress={() => {}}>
      <Box rounded="full" borderRadius={8} padding={2} marginX={4} marginY={1}>
        <HStack space="4" alignItems="center">
          <Icon name={item.icon} size={18} />
          <Text flex={1}>{item.title}</Text>
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
