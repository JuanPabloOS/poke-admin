import * as yup from 'yup';
import { types } from '../data/types';

const PokemonSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  height: yup.number().min(0).required('Este campo es obligatorio'),
  weight: yup.number().min(0).required('Este campo es obligatorio'),
  fstType: yup
    .mixed()
    .oneOf([...types])
    .required('Este campo es obligatorio'),
  sndType: yup.mixed().oneOf([...types, '']),
  hp: yup.number().min(0).max(255).required('Este campo es obligatorio'),
  attack: yup.number().min(0).max(255).required('Este campo es obligatorio'),
  defense: yup.number().min(0).max(255).required('Este campo es obligatorio'),
  spAttack: yup.number().min(0).max(255).required('Este campo es obligatorio'),
  spDefense: yup.number().min(0).max(255).required('Este campo es obligatorio'),
  speed: yup.number().min(0).max(255).required('Este campo es obligatorio'),
});

export default PokemonSchema;
