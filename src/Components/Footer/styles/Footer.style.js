import styled from 'styled-components/macro';

export const Container = styled.footer`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  max-width: 1000px;
  gap: 20%;
  @media (max-width: 560px) {
    gap: 13%;
  }
  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
