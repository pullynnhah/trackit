import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 45px;

  color: #666;
  font-size: 20px;
  line-height: 25px;

  padding: 11px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  &::placeholder {
    color: #dbdbdb;
  }

  &:disabled,
  &:disabled::placeholder {
    color: #afafaf;
    background: #f2f2f2;
  }
  margin-bottom: 7px;
`;
