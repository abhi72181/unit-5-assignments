import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;

  & div:nth-child(odd) {
    color: red;
    border: 1px solid blue;
  }
  & div:hover{
    background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  }
`;
export { Flex };
