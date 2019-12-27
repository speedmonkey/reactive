/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

const frTranslationMessages = require('./translations/fr');
const enTranslationMessages = require('./translations/en');
const DEFAULT_LOCALE = 'fr';

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, frTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const getTranslation = (messages, scope, locale) => {
  const translation = {};
  /* eslint-disable no-return-assign */
  Object.entries(messages).map(
    entry => (translation[`${scope}.${entry[0]}`] = entry[1][locale]),
  );
  /* eslint-enable */
  return translation;
};

const translationMessages = {
  fr: formatTranslationMessages('fr', frTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};

exports.getTranslation = getTranslation;
exports.translationMessages = translationMessages;
