import { defineMessages } from 'react-intl';

export const homeScope = 'homeScope';

export const homeMessages = {
  startProject: {
    id: `${homeScope}.startProject`,
    defaultMessage: `Coucou c'est moi, c'est Moussa`,
    en: `Hello, it's me Moussa!`,
  },
};

export default defineMessages(homeMessages);
