import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: darkorchid;
  text-shadow: 1px 1px 1px pink;
  text-align: center;
`;

export const Input = styled.input`
  width: 320px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid pink;
  box-shadow: rebeccapurple 1px 3px 3px;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 20px;
  color: snow;
  text-shadow: darkslateblue 1px 1px 1px;
  width: 150px;
  line-height: 1.5rem;
  background: pink;
  border: none;
  border-radius: 7px;
  box-shadow: rebeccapurple 2px 2px 2px;
  cursor: pointer;
  transition: all 150ms ease 0s;

  &:hover,
  &:focus {
    background: blueviolet;
    box-shadow: 2px 5px 5px darkorchid;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
