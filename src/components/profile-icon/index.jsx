import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { DivIcon, DivUser } from '../../style';

const ProfileIcon = () => {
  return (
    <>
      <div>
        <DivIcon>
          <Avatar size={70} icon={<UserOutlined />} />
        </DivIcon>
        <DivUser>
          <Link to="/profile">UserName</Link>
        </DivUser>
      </div>
    </>
  );
};

export default ProfileIcon;
