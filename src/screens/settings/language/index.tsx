import { Box, FlatList, Radio } from 'native-base';
import React from 'react';
import { ListRenderItemInfo, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { appSelectors } from '../../../store/app/app.selector';
import { appActions, Languages } from '../../../store/app/app.slice';

const LanguageScreen = () => {
  const language = useSelector(appSelectors.language);
  const dispatch = useDispatch();

  const data = Object.entries(Languages).map(([key, value]) => ({
    language: value,
    key,
  }));

  const _renderItem = ({
    index,
    item,
  }: ListRenderItemInfo<{
    language: string;
    key: string;
  }>) => (
    <Box padding={2} marginX={4} marginY={1}>
      <Radio value={item.key} key={index} size="sm">
        <Text>{item.language}</Text>
      </Radio>
    </Box>
  );

  return (
    <Box flex={1}>
      <Radio.Group
        name="languages"
        value={language}
        onChange={value => {
          dispatch(appActions.setLanguage(value as keyof typeof Languages));
        }}>
        <FlatList
          data={data}
          renderItem={info => _renderItem(info)}
          width="full"
        />
      </Radio.Group>
    </Box>
  );
};

export default LanguageScreen;
