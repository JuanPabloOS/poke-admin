import React, { useContext } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { PokemonContext } from '../context/PokemonProvider';
import { types } from '../data/types';
import PokemonSchema from '../schemas/PokemonSchema';
import CustomFormControl, {
  CustomSelectControl,
} from '../components/CustomFormControl';

const AddPokemon = ({ show, handleClose }) => {
  const { addPokemon } = useContext(PokemonContext);
  let initialValues = {
    name: '',
    height: 0,
    weight: 0,
    fstType: 'normal',
    sndType: '',
    hp: 0,
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    speed: 0,
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add Pokémon</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={initialValues}
        validationSchema={PokemonSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          addPokemon(values);
          handleClose();
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <FormikForm>
            <Modal.Body>
              <CustomFormControl
                label="Name:"
                name="name"
                type="text"
                placeholder="Name"
              />
              <CustomFormControl label="Height:" type="number" name="height" />
              <CustomFormControl label="Weight:" type="number" name="weight" />

              <CustomSelectControl label="First Type:" name="fstType">
                {types.map((t, i) => (
                  <option key={`type-first-option-${t}-${i}`}>{t}</option>
                ))}
              </CustomSelectControl>
              <CustomSelectControl label="Second Type:" name="sndType">
                <option value="">----</option>

                {types.map((t, i) => (
                  <option key={`type-first-option-${t}-${i}`}>{t}</option>
                ))}
              </CustomSelectControl>
              <CustomFormControl label="Hp:" type="number" name="hp" />
              <CustomFormControl label="Attack:" type="number" name="attack" />
              <CustomFormControl
                label="Defense:"
                type="number"
                name="defense"
              />
              <CustomFormControl
                label="Special Attack:"
                type="number"
                name="spAttack"
              />
              <CustomFormControl
                label="Special Defense:"
                type="number"
                name="spDefense"
              />
              <CustomFormControl label="Speed:" type="number" name="speed" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>
    </Modal>
  );
};

export default AddPokemon;
