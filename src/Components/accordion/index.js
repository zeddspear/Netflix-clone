import React, { createContext, useContext, useState } from 'react';
import { Container, Inner, Title, Header, Body, Item } from './styles/accordion.style';

const ToggleShow = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleShow.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleShow.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleShow);
  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleShow);
  return toggleShow ? (
    <Body className={toggleShow ? 'active' : null} {...restProps}>
      {children}
    </Body>
  ) : null;
};

export default Accordion;
