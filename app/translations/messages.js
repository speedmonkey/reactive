const { homeMessages, homeScope } = require('containers/Home/messages');

const getFullTranslations = locale => ({
  ...getTranslation(homeMessages, homeScope, locale),
});

// Get the messages from the scope entry
const getTranslation = (messages, scope, locale) => {
  const translation = {};
  /* eslint-disable no-return-assign */
  Object.entries(messages).map(
    entry => (translation[`${scope}.${entry[0]}`] = entry[1][locale]),
  );
  /* eslint-enable */
  return translation;
};

module.exports = getFullTranslations;
