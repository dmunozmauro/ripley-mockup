import styled from 'styled-components';

export const NavegationMenu = styled.section`
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 215px;
`;

export const NavegationMenuContainer = styled.div`
  border-left: 5px solid #6A148E;
  box-shadow: 0 0 10px 0 rgb(10 10 10 / 20%);
  height: 100%;
  margin-right: 20px;
  padding: 0 15px 0 0;
  width: 215px;

  @media (max-width: 1279px) {
   display: none;
  }
 `;

export const TopLogoContainer = styled.div`
  box-sizing: border-box;
  height: 40px;
  padding: 0 20px;
  width: 100%;
`;

export const UserContainer = styled.div`
  border-bottom: 1px solid #CCCCCC;
  color: #333333;
  display: flex;
  line-height: 20px;
  margin-left: 10%;
  padding: 20px 0;
  width: 90%;
`;

export const LogoImg = styled.img`
  height:40px;
  width: 40px;
`;


export const UserName = styled.p`
  color: #4a4a4a;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const UserMail = styled.p`
  font-size: 14px;
  margin: 5px 0px;
`;

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconUser = styled.img`
  height: 23px;
  margin: 5px 10px 0 0;
  width: 23px;
`;

export const NavegationList = styled.ul`
  box-sizing: border-box;
  color: #333333;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px 0;
  width: 100%;
  overflow: auto;
`;

export const NavegationListItem = styled.li`
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px 20px;
  list-style: none;

  &:hover {
    background-color: #F0F0F0;  
    cursor: pointer;
    transition: all 0.5s ease-in;    
  }
`;

export const BlockButtonSignOff = styled.div`
  box-sizing: border-box;
  padding: 10px 5px;
  width: 100%;
`;

export const NavegationListSubMenu = styled.ul`
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px 20px;
  
`;


export const NavegationListSubMenuItem = styled.li`
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px 20px;
  transition: all 0.5s ease-in; 
  list-style:none; 
  cursor: pointer;

  &:hover {
    background-color: #F0F0F0;  
    cursor: pointer;
    transition: all 0.5s ease-in;    
  }
`;
