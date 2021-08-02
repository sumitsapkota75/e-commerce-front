import React from "react";
import styled from "styled-components";
import { Cart3 } from "@styled-icons/bootstrap/Cart3";
import { message } from "antd";

const Wrapper = styled.div`
  width: 200px;
  height: 55px;
  background-color: #1b75bb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  h3 {
    color: white;
    font-weight: bold;
  }
  &:hover {
    background-color: #165f97;
    cursor: pointer;
  }
`;

const CartIcon = styled(Cart3)`
  color: white;
  max-width: 100px;
  height: 30px;
  margin-right: 20px;
`;

const AddToCart = () => {
  const handleAddtoCart = () => {
    message.success("Item added to cart");
  };
  return (
    <Wrapper>
      <CartIcon onClick={handleAddtoCart} />
      <div>
        <h3>Add to Cart</h3>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
