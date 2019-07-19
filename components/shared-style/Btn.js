import styled from 'styled-components';
import Frame from '../Frame';

export default styled(Frame).attrs({
  as: 'button',
})`
  padding: 7px 20px 5px;

  font-size: 12px;

  &:disabled {
    color: #868a8e;
  }

  &:active:focus {
    padding: 7px 18px 3px 20px;
    box-shadow: inset 0 0 0 1px #868a8e;
    outline: 1px dotted #000;
    outline-offset: -5px;
  }

  &:focus {
    padding: 6px 19px 4px;

    outline: 1px dotted #000;
    outline-offset: -5px;
    border: 1px solid black;
  }
`;
