import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Form.Group controlId="formFilter">
      <Form.Label className="mb-2 fs-5">Find contacts by name</Form.Label>
      <Form.Control
        type="search"
        onChange={e => dispatch(getVisibleContact(e.target.value))}
      ></Form.Control>
    </Form.Group>
  );
};
