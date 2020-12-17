import * as yup from 'yup';
import { types } from '../data/types';

const PokemonSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  height: yup.number().required('Este campo es obligatorio'),
  weight: yup.number().required('Este campo es obligatorio'),
  fstType: yup
    .mixed()
    .oneOf([...types])
    .required('Este campo es obligatorio'),
  sndType: yup.mixed().oneOf([...types, '']),
  hp: yup.number().required('Este campo es obligatorio'),
  attack: yup.number().required('Este campo es obligatorio'),
  defense: yup.number().required('Este campo es obligatorio'),
  spAttack: yup.number().required('Este campo es obligatorio'),
  spDefense: yup.number().required('Este campo es obligatorio'),
  speed: yup.number().required('Este campo es obligatorio'),
});

export default PokemonSchema;
