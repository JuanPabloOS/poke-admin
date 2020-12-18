import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ItemsContext } from '../context/ItemsProvider';
import PanelContainer from './PanelContainer';
import TextSpan from './TextSpan';
const ItemInfo = () => {
  const { activeItem, activeItemId } = useContext(ItemsContext);
  const [itemInfo, setItemInfo] = useState(null);
  useEffect(() => {
    setItemInfo(null);
    fetch(`https://pokeapi.co/api/v2/item/${activeItemId}/`)
      .then((res) => res.json())
      .then((data) => {
        setItemInfo({
          category: data.category.name,
          effect_entries: data.effect_entries,
          description: data.flavor_text_entries.find(
            (e) => e.language.name === 'en'
          ).text,
        });
      })
      .catch(console.error);
  }, [activeItemId]);

  return (
    <PanelContainer>
      {activeItem !== null && (
        <Row className="justify-content-center">
          <img src={activeItem.imgUrl} alt="" width={200} height={200} />
        </Row>
      )}
      <Row>
        <Col className="d-flex flex-column px-4">
          {itemInfo === null ? (
            <TextSpan>Loading...</TextSpan>
          ) : (
            <>
              <TextSpan>
                <b>Description</b>: {itemInfo.description}
              </TextSpan>
              <TextSpan>
                <b>Category</b>: {itemInfo.category}
              </TextSpan>
              <TextSpan>
                <b>Effects:</b>
              </TextSpan>
              {itemInfo.effect_entries.map((ef) => (
                <TextSpan>{ef.effect}</TextSpan>
              ))}
            </>
          )}
        </Col>
      </Row>
    </PanelContainer>
  );
};

export default ItemInfo;
