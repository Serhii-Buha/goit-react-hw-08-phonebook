import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerCustom = styled(Container)`
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  border: none;
  border-radius: 20px;
  cursor: pointer;

  margin-top: 10px;
  margin-bottom: 30px;
  padding: 5px 10px;

  background-color: #f3f6f9;

  /* background-color: #20bcc6; */
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background-color: #c0c9d8;
  }
`;

export const SpinStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
