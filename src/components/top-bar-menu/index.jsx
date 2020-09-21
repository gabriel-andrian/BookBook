import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/images/booksLogo.svg';
import { TopMenuContainer, containerLogoStyle, logoNameStyle, searchStyle } from '../../style';

const TopMenu = () => {
  const [buttonLogin, setButtonLogin] = useState(false);

  const { Search } = Input;
  const history = useHistory();

  const handleClick = () => {
    setButtonLogin(!buttonLogin);
    // TODO: Depois de implementar o state do usuario fazer o login/logout function aqui.
  };

  const handleSearch = (value) => {
    history.push('/search', value);
  };

  return (
    <TopMenuContainer>
      <Link to="/timeline">
        <div style={containerLogoStyle}>
          <img src={Logo} alt="LogoBook" />
          <h1 style={logoNameStyle}>BookBook</h1>
        </div>
      </Link>
      <Search
        style={searchStyle}
        placeholder="Search books by author, title or ISBN..."
        onSearch={(value) => handleSearch(value)}
        enterButton
      />
      {buttonLogin ? (
        <Link to="/">
          <Button type="primary" shape="round" size="large" onClick={handleClick}>
            Logout
          </Button>
        </Link>
      ) : (
          <Link to="/login">
            <Button type="primary" shape="round" size="large" onClick={handleClick}>
              Login
          </Button>
          </Link>
        )}
    </TopMenuContainer>
  );
};

export default TopMenu;
