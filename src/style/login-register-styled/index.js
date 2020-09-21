import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-left: 40%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60%;
  background: #ababab;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
