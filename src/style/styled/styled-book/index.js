import styled from 'styled-components';

const StyledDivBook = styled.div`
  margin: 0 0 21px 30px;
  width: 64px;
  height: 72px;
  background: url(${props => `${props.urlImg}`});
  background-size: cover;	
  box-sizing: border-box;
  cursor: pointer;
`;

export default StyledDivBook;