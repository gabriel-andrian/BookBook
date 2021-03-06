import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
`;

export const menuStyle = {
  width: '120px',
  height: '100vh',
  background: '#7A613D',
  boxShadow: 'inset 0px 6px 15px rgba(0, 0, 0, 0.25)',
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
};

export const DivIcon = styled.div`
  padding-bottom: 1em;
`;

export const DivUser = styled.div`
  padding-bottom: 8em;
`;

export const DivProfileIcon = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const linkStyled = { color: 'rgb(249, 233, 210)' };
