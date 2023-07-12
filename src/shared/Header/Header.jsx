import React from "react";
import styled from "styled-components";
import logoutIcon from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  position: fixed;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Name = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

const LogoutButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Header = (props) => {
  const { userDetails } = props;
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userMapsToken");

    navigate("/");
  };

  return (
    <HeaderContainer>
      <Name>{userDetails?.name}</Name>
      <LogoutButton src={logoutIcon} alt="logout" onClick={handleLogout} />
    </HeaderContainer>
  );
};

export default Header;
