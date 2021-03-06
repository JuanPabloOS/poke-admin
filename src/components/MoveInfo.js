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
                <b>Accuracy: </b>
                {moveInfo.accuracy}
              </TextSpan>
              <TextSpan>
                <b>Damage class: </b>
                {moveInfo.damage_class}
              </TextSpan>
              <TextSpan>
                <b>Effect entry: </b>
                {moveInfo.effect_entry}
              </TextSpan>
              <TextSpan>
                <b>Description: </b>
                {moveInfo.description}
              </TextSpan>
              <TextSpan>
                <b>Power: </b>
                {moveInfo.power}
              </TextSpan>
              <TextSpan>
                <b>PP: </b>
                {moveInfo.pp}
              </TextSpan>
              <TextSpan>
                <b>Target: </b>
                {moveInfo.target}
              </TextSpan>
              <TextSpan>
                <b>Type: </b>
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
