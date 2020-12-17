import React from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';
import styled from 'styled-components';
const TextError = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;
const CustomFormControl = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        size="sm"
        autoComplete="off"
        isInvalid={meta.touched && meta.error}
        isValid={meta.touched && !meta.error}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <>
          <TextError>{meta.error}</TextError>
        </>
      ) : null}
    </Form.Group>
  );
};

export default CustomFormControl;

export const CustomSelectControl = ({ label, children, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        size="sm"
        as="select"
        autoComplete="off"
        isInvalid={meta.touched && meta.error}
        isValid={meta.touched && !meta.error}
        {...field}
        {...props}
      >
        {children}
      </Form.Control>

      {meta.touched && meta.error ? (
        <>
          <TextError>{meta.error}</TextError>
        </>
      ) : null}
    </Form.Group>
  );
};
