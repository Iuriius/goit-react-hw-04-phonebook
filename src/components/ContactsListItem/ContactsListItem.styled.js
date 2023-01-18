import styled from '@emotion/styled';

export const Button = styled.button`
  margin: 5px;
  color: snow;
  text-shadow: darkslateblue 1px 1px 1px;
  width: 70px;
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

export const ContactName = styled.p`
  margin: 0;
  font-size: larger;
  color: darkorchid;
  text-shadow: 1px 1px 0px lightgrey;
`;

export const ContactNumber = styled.span`
  margin-left: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
