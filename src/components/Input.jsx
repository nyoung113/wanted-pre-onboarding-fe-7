import styled from 'styled-components';

const Input = ({
  name = '',
  type = 'text',
  placeholder = '',
  value = '',
  errorMessage = '',
  onChange,
}) => {
  return (
    <InputContainer>
      <StyledInput
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => (onChange ? onChange(e) : '')}
      ></StyledInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
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
