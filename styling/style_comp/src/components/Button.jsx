import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  padding-top: 8px;
  text-align: center;
  background-color: ${(props)=>props.theme==="light" ? "#f6f54d" : "#143f6b"};
  color: ${(props)=>props.theme==="light" ? "#143f6b" : "#f6f54d"};
  cursor: pointer;
  margin: 5px;

  &:hover{
    box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;
  }
`;
export { Button };
