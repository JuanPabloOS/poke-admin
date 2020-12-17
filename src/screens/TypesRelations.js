import React, { useState, useEffect, useContext } from 'react';

import { DAMAGE_TYPES } from '../data/types';
import DamageComparison from '../components/DamageComparison';
import { Col, Container, Row } from 'react-bootstrap';
import SelectType from '../modals/SelectType';
import styled from 'styled-components';
import { ThemeModeContext } from '../context/ThemeContext';
import ScreenContainer from './ScreenContainer';
import TypeButton from '../components/TypeButton';

const Padding = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TypesRelations = () => {
  const { darkMode } = useContext(ThemeModeContext);
  const [showSelectType, setShowSelectType] = useState(false);
  const [omitType, setOmitType] = useState('');
  const [firstType, setFirstType] = useState('');
  const [secondType, setSecondType] = useState('');

  const [ftDDF, setFtDDF] = useState([]);
  const [ftDDT, setFtDDT] = useState([]);
  const [ftHDF, setFtHDF] = useState([]);
  const [ftHDT, setFtHDT] = useState([]);
  const [stDDF, setStDDF] = useState([]);
  const [stDDT, setStDDT] = useState([]);
  const [stHDF, setStHDF] = useState([]);
  const [stHDT, setStHDT] = useState([]);

  function handleSetType(type) {
    if (firstType === '') {
      setFirstType(type);
      return;
    }
    if (secondType === '') {
      setSecondType(type);
    }
    setShowSelectType(false);
  }

  useEffect(() => {
    if (firstType !== '') {
      setFtDDF(DAMAGE_TYPES[firstType]['doubleDamageFrom'] || []);
      setFtDDT(DAMAGE_TYPES[firstType]['doubleDamageTo'] || []);
      setFtHDF(DAMAGE_TYPES[firstType]['halfDamageFrom'] || []);
      setFtHDT(DAMAGE_TYPES[firstType]['halfDamageT'] || []);
    }
    if (secondType !== '') {
      setStDDF(DAMAGE_TYPES[secondType]['doubleDamageFrom'] || []);
      setStDDT(DAMAGE_TYPES[secondType]['doubleDamageTo'] || []);
      setStHDF(DAMAGE_TYPES[secondType]['halfDamageFrom'] || []);
      setStHDT(DAMAGE_TYPES[secondType]['halfDamageT'] || []);
    }
  }, [firstType, secondType]);

  const Padding = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  `;
  return (
    <>
      <ScreenContainer>
        <Padding>
          <Col className={darkMode ? 'bg-dark' : 'bg-gray'}>
            <Row className="justify-content-center">
              <TypeButton>first</TypeButton>
              <TypeButton>Second</TypeButton>
            </Row>
            {firstType !== '' || secondType !== '' ? (
              <Container
                fluid
                className="d-flex flex-wrap justify-content-around"
              >
                <DamageComparison
                  label="Double damage from"
                  types={[...ftDDF, ...stDDF]}
                />
                <DamageComparison
                  label="Double damage to"
                  types={[...ftDDT, ...stDDT]}
                />
                <DamageComparison
                  label="Half damage from"
                  types={[...ftHDF, ...stHDF]}
                />
                <DamageComparison
                  label="Half damage to"
                  types={[...ftHDT, ...stHDT]}
                />
              </Container>
            ) : null}
          </Col>
        </Padding>
      </ScreenContainer>
      <SelectType
        show={showSelectType}
        handleSetType={handleSetType}
        omit={omitType}
        handleClose={() => setShowSelectType(false)}
      />
    </>
  );
};

export default TypesRelations;
