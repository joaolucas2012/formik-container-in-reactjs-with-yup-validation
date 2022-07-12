import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenterContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = styled.div`
  margin: 20px 0;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Label = styled.label`
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 1000px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: red;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: rgb(27, 168, 126); 
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;

  &:hover{
    cursor: pointer;
    background-color: rgb(35, 216, 162);
  }
`;