import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuContainer, menuStyle } from '../../style';
import ProfileIcon from '../profile-icon';

const SideMenu = () => {
  const location = useLocation();
  return (
    <MenuContainer>
      <Menu selectedKeys={location.pathname} style={menuStyle} mode="inline">
        <ProfileIcon />
        <Menu.Item key="/search">
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item key="/bookcase">
          <Link to="/bookcase">Bookcase</Link>
        </Menu.Item>
        <Menu.Item key="/timeline">
          <Link to="/timeline">Timeline</Link>
        </Menu.Item>
      </Menu>
    </MenuContainer>
  );
};

export default SideMenu;
