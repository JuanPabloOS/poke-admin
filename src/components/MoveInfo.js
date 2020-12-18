import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { MovesContext } from '../context/MovesProvider';
import PanelContainer from './PanelContainer';
import TextSpan from './TextSpan';
const MoveInfo = () => {
  const { activeMove, activeMoveId } = useContext(MovesContext);
  const [moveInfo, setMoveInfo] = useState(null);

  useEffect(() => {
    setMoveInfo(null);
    fetch(`https://pokeapi.co/api/v2/move/${activeMoveId}/`)
      .then((res) => res.json())
      .then((data) =>
        setMoveInfo({
          accuracy: data.accuracy,
          damage_class: data.damage_class.name,
          effect_entry: data.effect_entries.find(
            (ef) => (ef.language.name = 'en')
          ).effect,
          description: data.flavor_text_entries.find(
            (ft) => (ft.language.name = 'en')
          ).flavor_text,
          power: data.power,
          pp: data.pp,
          target: data.target.name,
          type: data.type.name,
        })
      )
      .catch(console.error);
  }, [activeMoveId]);
  console.log(moveInfo);
  return (
    <PanelContainer>
      <Row>
        <Col className="d-flex flex-column">
          {activeMove !== null && (
            <TextSpan>
              <b>Name:</b> {activeMove.name}
            </TextSpan>
          )}
          {moveInfo === null ? (
            <TextSpan>Loading...</TextSpan>
          ) : (
            <>
              <TextSpan>
                <b>accuracy:</b>
                {moveInfo.accuracy}
              </TextSpan>
              <TextSpan>
                <b>damage_class:</b>
                {moveInfo.damage_class}
              </TextSpan>
              <TextSpan>
                <b>effect_entry:</b>
                {moveInfo.effect_entry}
              </TextSpan>
              <TextSpan>
                <b>description:</b>
                {moveInfo.description}
              </TextSpan>
              <TextSpan>
                <b>power:</b>
                {moveInfo.power}
              </TextSpan>
              <TextSpan>
                <b>pp:</b>
                {moveInfo.pp}
              </TextSpan>
              <TextSpan>
                <b>target:</b>
                {moveInfo.target}
              </TextSpan>
              <TextSpan>
                <b>type:</b>
                {moveInfo.type}
              </TextSpan>
            </>
          )}
        </Col>
      </Row>
    </PanelContainer>
  );
};

export default MoveInfo;
