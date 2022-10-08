import styled from 'styled-components';

const Input = ({ placeholder, errorMessage, isValidate, onChange }) => {
  return (
    <InputContainer>
      <StyledInput
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></StyledInput>
      {isValidate ? '' : <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
`;

const ErrorMessage = styled.p`
  color: red;
`;
