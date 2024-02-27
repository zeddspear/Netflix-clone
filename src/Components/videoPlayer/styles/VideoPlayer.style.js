import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0 20px;
  z-index: 101;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    position: fixed;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 30px;
  transition: transform ease 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
