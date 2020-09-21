import styled from 'styled-components';

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgb(219, 212, 202);
  h1 {
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: bold;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerResults = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(219, 212, 202);
`;

export const searchPageStyle = { width: '60%', padding: '1.5em' };
