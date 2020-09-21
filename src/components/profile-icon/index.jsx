import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DivIcon, DivUser, DivProfileIcon, linkStyled } from '../../style';

const ProfileIcon = () => {
  const username = useSelector((state) => state.session.user.user);
  return (
    <>
      <DivProfileIcon>
        <DivIcon>
          <Avatar size={70} icon={<UserOutlined />} />
        </DivIcon>
        <DivUser>
          <Link to="/profile" style={linkStyled}>
            {username}
          </Link>
        </DivUser>
      </DivProfileIcon>
    </>
  );
};

export default ProfileIcon;
