import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Image
} from './styles/card.style';

const FeatureContext = createContext();

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature
      src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity <= 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
          {children}
        </Group>
      </Content>
    </Feature>
  ) : null;
};

Card.FeatureTitle = function CardFeature({ children, ...restProps }) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};

Card.FeatureText = function CardFeatureText({ children, ...restProps }) {
  return <FeatureText {...restProps}>{children}</FeatureText>;
};

Card.FeatureClose = function CardFeatureClose({ children, ...restProps }) {
  return <FeatureClose {...restProps}>{children}</FeatureClose>;
};

Card.Maturity = function CardMaturity({ children, ...restProps }) {
  return <Maturity {...restProps}>{children}</Maturity>;
};

Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

export default Card;
