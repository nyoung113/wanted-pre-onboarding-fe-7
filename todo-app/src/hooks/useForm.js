import { useEffect, useState } from 'react';

const useForm = ({ initialValues, onSignUp, onSignIn, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(validate({ name, value, errors }));
  };

  useEffect(() => {
    setIsValidate(
      Object.values(errors).every((v) => v === '') &&
        Object.values(errors).length === Object.values(initialValues).length
    );
  }, [values, errors, initialValues]);

  const handleSignIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    onSignIn(values);
    alert('제출');
  };

  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    onSignUp(values);
    alert('제출');
  };

  return {
    values,
    errors,
    isLoading,
    isValidate,
    handleChange,
    handleSignIn,
    handleSignUp,
  };
};

export default useForm;
