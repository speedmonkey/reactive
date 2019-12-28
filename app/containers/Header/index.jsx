import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FrenchFlag from 'images/languages/fr.svg';
import EnglishFlag from 'images/languages/en.svg';
import { changeLocaleAction } from 'containers/Language/actions';
import { Wrapper, Navbar, Title, LanguageWrapper, Flag } from './styles';
import { FR, EN } from './constants';

const Header = ({ changeLocale }) => (
  <Wrapper>
    <Navbar>
      <Title>Reactive</Title>
      <LanguageWrapper>
        <Flag src={FrenchFlag} onClick={() => changeLocale(FR)} />
        <Flag src={EnglishFlag} onClick={() => changeLocale(EN)} />
      </LanguageWrapper>
    </Navbar>
  </Wrapper>
);

Header.propTypes = {
  changeLocale: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch(changeLocaleAction(locale)),
  };
}

export default connect(null, mapDispatchToProps)(Header);
