import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import StatBar from '../components/StatBar';
import { PokemonContext } from '../context/PokemonProvider';
import { pokemonColors } from '../styles';
import AddPokemon from '../modals/AddPokemon';
import EditPokemon from '../modals/EditPokemon';
import TextSpan from './TextSpan';
import ActionIcon from './ActionIcon';

const TypeSpan = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${(props) => pokemonColors[props.pokemonType]};
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  padding: 0.3rem;
  text-align: center;
  width: 200px;
  font-size: 18px;
`;

const ActionsContainer = styled.div`
  position: absolute;
  top: 1em;
  left: 0;
`;

const DetailsSpan = styled.span`
  color: ${(props) => props.theme.neutroTextColor};
  transition: all 0.2s ease-out;
  font-size: clamp(1.5rem, 2vw, 2rem);
`;

const PokemonInfo = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { activePokemon } = useContext(PokemonContext);

  function formatId(id) {
    if (id < 10) {
      return `#00${id}`;
    }
    if (id < 100) {
      return `#0${id}`;
    }
    return `#${id}`;
  }

  function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Row className="justify-content-center align-items-center py-1">
              {activePokemon != null ? (
                <DetailsSpan>
                  {formatId(activePokemon.id) + ' '}
                  {formatName(activePokemon.name)}
                </DetailsSpan>
              ) : null}

              <ActionsContainer>
                {activePokemon !== null ? (
                  <ActionIcon
                    data-testid="button-edit-pokemon"
                    data-cy="button-edit-pokemon"
                    onClick={() => setShowEdit(true)}
                  >
                    <i className="fas fa-edit"></i>
                  </ActionIcon>
                ) : null}
                <ActionIcon
                  data-testid="button-add-pokemon"
                  data-cy="button-add-pokemon"
                  onClick={() => setShowAdd(true)}
                >
                  <i className="fas fa-plus"></i>
                </ActionIcon>
              </ActionsContainer>
            </Row>
            <Row className="justify-content-center align-items-center py-1">
              {activePokemon != null
                ? activePokemon.types.map((t, i) => (
                    <TypeSpan
                      className="mb-1"
                      key={`type-${t.name}-${i}`}
                      pokemonType={t.name}
                    >
                      {t.name}
                    </TypeSpan>
                  ))
                : null}
            </Row>
            <Row className="justify-content-center align-items-center py-1">
              <div>
                {activePokemon !== null ? (
                  <TextSpan>
                    Weight: {activePokemon.weight + ' '}
                    Height: {activePokemon.height}
                  </TextSpan>
                ) : null}
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md="6">
            {activePokemon !== null
              ? activePokemon.stats.map((s, i) => (
                  <StatBar
                    key={`stat-bar-${s}-${i}`}
                    label={s.name}
                    stat={s.base_stat}
                    color={pokemonColors[activePokemon.types[0].name]}
                  />
                ))
              : null}
          </Col>
        </Row>
      </Container>
      <AddPokemon show={showAdd} handleClose={() => setShowAdd(false)} />
      {activePokemon !== null ? (
        <EditPokemon show={showEdit} handleClose={() => setShowEdit(false)} />
      ) : null}
    </>
  );
};

export default PokemonInfo;
