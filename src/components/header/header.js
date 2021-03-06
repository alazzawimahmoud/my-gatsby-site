import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const menuData = [
  { title: "Home", link: "/home" },
  { title: "Our cake", link: "/our cake" },
  { title: "Your order", link: "/your order" },
];
export default function Header() {
  return (
    <Wrapper>
      <Title>
        candy <span>&</span> cake
      </Title>
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem title={item.title}>{item.title}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  padding: 70px;
  width: 100%;
  display: grid;
  background: #d5a6bd;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 200px;
  width: 1440px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  background: #741b47;
`;

const MenuItem = styled.div`
  width: 150px;
  top: 100px;
  color: #d5a6bd;
  font-size: 17px;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 5px;
  :hover {
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    background: #a64d79;
  }
`;
const Title = styled.h1`
  font-size: 80px;
  color: #741b47;
  span {
    color: #a64d79;
  }
`;
