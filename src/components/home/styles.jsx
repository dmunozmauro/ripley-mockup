import styled from 'styled-components';

export const Container  = styled.div`
 box-sizing: border-box;
 display: flex;
 flex-direction: row;
 font-weight: normal;
 margin: 0 auto;
 padding: 25px 15px;
 width: 100%;

 @media (max-width: 720px) {
  display: block
}
`;

export const MainHome = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BlockContent = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;