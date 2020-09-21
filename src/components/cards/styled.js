import styled from 'styled-components';

export const CardStyled = styled.div`
  margin: 25px;
  width: fit-content;
  max-width: 475px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover {
    box-shadow: 2px 0px 2px #000, -2px 0px 2px #000, 0px 2px 2px #000, 0px -2px 2px #000;
  }
`;

export const BookCoverStyled = styled.img`
  width: calc(100px + 4vw);
  max-height: 250px;
  box-shadow: 0 10px 15px #333;
`;

export const BookInfo = styled.div`
  margin-top: 15px;
  align-self: flex-start;
  padding-left: 20px;
  font-size: calc(10px + 0.5vw);
  display: flex;
  flex-flow: column nowrap;
  text-overflow: ellipsis;
`;

export const Details = styled.div`
  padding: 5px 0;
`;

export const TitleStyled = styled.span`
  font-weight: 800;
`;

export const UserInfo = styled(BookInfo)`
  margin-top: 27px;
  padding-left: 0;
`;
