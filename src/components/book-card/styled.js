import styled from 'styled-components';
import { Card } from 'antd';

export const BookCoverStyled = styled.img`
  width: calc(100px + 1.5vw);
  max-width: 150px;
  max-height: 250px;
  box-shadow: 0 10px 15px #999;
`;

export const Details = styled.div`
  padding: 5px 0;
`;

export const TitleStyled = styled.span`
  font-weight: 800;
`;

export const UserInfo = styled.div`
  font-size: 1em;
  margin-top: 60px;
  padding-left: 0;
`;

export const BookCoverOnly = styled(Card.Meta)`
  & > div {
    padding-right: 0;
  }
`;
