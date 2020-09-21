import styled from 'styled-components';

export const ContainerTimeline = styled.div`
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

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerReviews = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(219, 212, 202);
`;
