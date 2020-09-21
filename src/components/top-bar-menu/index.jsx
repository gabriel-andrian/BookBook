import { Input, Button } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/images/booksLogo.svg';
import { logout } from '../../redux/actions';
import { TopMenuContainer, containerLogoStyle, logoNameStyle, searchStyle } from '../../style';

const TopMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const { Search } = Input;
  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
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
      {token ? (
        <Link to="/login">
          <Button type="primary" shape="round" size="large" onClick={handleClick}>
            Logout
          </Button>
        </Link>
      ) : (
          <Link to="/login">
            <Button type="primary" shape="round" size="large">
              Login
          </Button>
          </Link>
        )}
    </TopMenuContainer>
  );
};

export default TopMenu;
