import { RootState } from '..';

export const appSelectors = {
  language: (state: RootState) => state.app.language,
};
