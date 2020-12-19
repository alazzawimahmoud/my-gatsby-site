import React from "react";
import styled from "styled-components";

export default function Celebration() {
  console.log('Hello from Mahmoud!')
  return (
    <Wrapper>
      <TitleWrapper>
        Caramel Party Cupcake
        <span> price: $52.99</span>
      </TitleWrapper>
      <TextWrapper>
        Flavourful vanilla cupcake, with our special caramel buttercream recipe,
        topped with a dab of sweet, buttery caramel and crunchy toffee bits.
      </TextWrapper>
      <img src="/images/mini/mini-2.png" alt="mini" />

      <FormWrapper>
        <p>quantity</p>

        <button type="button" className="quantity">
          -
        </button>
        <input type="text" value="1" className="quantity" />
        <button type="button" className="quantity">
          +
        </button>
      </FormWrapper>
      <p className="information">
        PLEASE WRITE YOUR PERSONALIZED MESSAGE BELOW
      </p>
      <input type="text" className="message" />
      <button type="button" className="order">
        Order
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  img {
    position: absolute;
    top: 150px;
    right: 700px;
    width: 500px;
  }
  .message {
    position: absolute;
    right: 90px;
    top: 515px;
    width: 530px;
    height: 150px;
    border-color: #e1b472;
    border-radius: 5px;
  }
  .information {
    position: absolute;
    top: 490px;
    right: 220px;
    color: #946013;
  }
  .order {
    position: absolute;
    top: 700px;
    right: 100px;
    width: 500px;
    height: 30px;
    background: #e1b472;
    border-color: #e1b472;
  }
`;
const TextWrapper = styled.p`
  position: absolute;
  top: 350px;
  right: 100px;
  width: 500px;
  line-height: 1.5;
  background: #e1b472;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  color: #472f09;
`;
const FormWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 250px;

  input {
    text-align: center;
    width: 400px;
    height: 30px;
    background: #e1b472;
    border-color: #e1b472;
  }
  button {
    width: 50px;
    height: 36px;
    background: #e1b472;
    border-color: #e1b472;
  }
  p {
    font-size: 20px;
    color: #472f09;
    padding: 10px;
  }
`;
const TitleWrapper = styled.h1`
  position: absolute;
  top: 150px;
  right: 200px;
  font-size: 30px;
  font-weight: 10px;
  display: grid;
  gap: 10px;
  color: #946013;
  span {
    font-size: 20px;
  }
`;
