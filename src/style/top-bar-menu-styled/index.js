import styled from 'styled-components';

export const TopMenuStyled = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;

  @media (max-width: 500) {
    min-width: 250px;
  }
`;

export const TopMenuContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 2;

  height: 5em;
  border-bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #826741 20.31%, rgba(46, 29, 6, 0.46) 100%), #7a613d;
  padding: 0 0.5em;
`;

export const logoNameStyle = {
  marginLeft: '0.3em',
  marginBottom: 0,
  marginTop: '0.2em',
  fontFamily: 'Cormorant Garamond',
  fontStyle: 'normal',
  fontWeight: 'bold',
  color: '#F9E9D2',
};

export const containerLogoStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
};

export const searchStyle = { width: '30%' };
