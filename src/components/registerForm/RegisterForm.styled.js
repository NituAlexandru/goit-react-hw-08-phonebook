import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  &&:hover {
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;