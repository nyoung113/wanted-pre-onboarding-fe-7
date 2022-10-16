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
      <ErrorMessage visible={errorMessage ? true : false}>
        {errorMessage}
      </ErrorMessage>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  display: ${(props) => (props.visible ? 'inline' : 'none')};
`;
