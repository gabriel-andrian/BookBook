import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContainerPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

export const Main = styled.div`
  position: absolute;
  display: flex;
  top: 5em;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const SideBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 120px;
`;

export const ContentPrivate = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  right: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  overflow: auto;
`;

export const ContentPublic = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  overflow: auto;
`;
