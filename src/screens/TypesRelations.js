import React, { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import styled from 'styled-components';

import ScreenContainer from './ScreenContainer';
import { ThemeModeContext } from '../context/ThemeContext';

import TypeButton from '../components/TypeButton';
import DamageComparison from '../components/DamageComparison';

import SelectType from '../modals/SelectType';

import { DAMAGE_TYPES } from '../data/types';

const TypesRelations = () => {
  const { darkMode } = useContext(ThemeModeContext);
  const [showSelectType, setShowSelectType] = useState(false);
  const [omitType, setOmitType] = useState('');
  const [firstType, setFirstType] = useState('');
  const [secondType, setSecondType] = useState('');
  const [typeToUpdate, setTypeToUpdate] = useState(1);
  const [ftDDF, setFtDDF] = useState([]);
  const [ftDDT, setFtDDT] = useState([]);
  const [ftHDF, setFtHDF] = useState([]);
  const [ftHDT, setFtHDT] = useState([]);
  const [stDDF, setStDDF] = useState([]);
  const [stDDT, setStDDT] = useState([]);
  const [stHDF, setStHDF] = useState([]);
  const [stHDT, setStHDT] = useState([]);

  function handleShowModal(index) {
    if (index === 1) {
      setTypeToUpdate(1);
    } else {
      setTypeToUpdate(2);
    }
    setShowSelectType(true);
  }
  function handleSetType(type) {
    if (typeToUpdate === 1) {
      setFirstType(type);
    } else {
      setSecondType(type);
    }
    setShowSelectType(false);
  }
  useEffect(() => {
    if (firstType !== '') {
      setFtDDF(
        DAMAGE_TYPES.find((dm) => dm.type === firstType)['doubleDamageFrom'] ||
          []
      );
      setFtDDT(
        DAMAGE_TYPES.find((dm) => dm.type === firstType)['doubleDamageTo'] || []
      );
      setFtHDF(
        DAMAGE_TYPES.find((dm) => dm.type === firstType)['halfDamageFrom'] || []
      );
      setFtHDT(
        DAMAGE_TYPES.find((dm) => dm.type === firstType)['halfDamageTo'] || []
      );
    }
    if (secondType !== '') {
      setStDDF(
        DAMAGE_TYPES.find((dm) => dm.type === secondType)['doubleDamageFrom'] ||
          []
      );
      setStDDT(
        DAMAGE_TYPES.find((dm) => dm.type === secondType)['doubleDamageTo'] ||
          []
      );
      setStHDF(
        DAMAGE_TYPES.find((dm) => dm.type === secondType)['halfDamageFrom'] ||
          []
      );
      setStHDT(
        DAMAGE_TYPES.find((dm) => dm.type === secondType)['halfDamageTo'] || []
      );
    }
  }, [firstType, secondType]);

  return (
    <div
      className={`${darkMode ? 'bg-dark' : 'bg-gray'}`}
      style={{ height: '100vh', overflowY: 'scroll' }}
    >
      <Container fluid>
        <Col>
          <Row className="justify-content-center py-4">
            <TypeButton
              onClick={() => handleShowModal(1)}
              type={`${firstType}`}
            >
              first
            </TypeButton>
            <TypeButton
              onClick={() => handleShowModal(2)}
              type={`${secondType}`}
            >
              Second
            </TypeButton>
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
      </Container>
      <Container>
        <Table data={DAMAGE_TYPES} autoHeight>
          <Column width={200} sortable fixed resizable>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>
          <Column width={200} sortable resizable>
            <HeaderCell>Double Damage from</HeaderCell>
            <Cell dataKey="doubleDamageFrom" />
          </Column>
          <Column width={200} sortable resizable>
            <HeaderCell>Double Damage To</HeaderCell>
            <Cell dataKey="doubleDamageTo" />
          </Column>
          <Column width={200} sortable resizable>
            <HeaderCell>Half Damage from</HeaderCell>
            <Cell dataKey="halfDamageFrom" />
          </Column>
          <Column width={200} sortable resizable>
            <HeaderCell>Half Damage to</HeaderCell>
            <Cell dataKey="halfDamageTo" />
          </Column>
        </Table>
      </Container>

      <SelectType
        show={showSelectType}
        handleSetType={handleSetType}
        omit={omitType}
        handleClose={() => setShowSelectType(false)}
      />
    </div>
  );
};

export default TypesRelations;
