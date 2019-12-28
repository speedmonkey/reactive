/*
 *
 * Language
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { makeSelectLocale } from './selectors';

const Language = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
);

Language.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

export default connect(mapStateToProps)(Language);
