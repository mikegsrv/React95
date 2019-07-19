import PropTypes from 'prop-types';
import styled from 'styled-components';

const Frame = styled.div`
  ${({ width, height }) => `
    width: ${width};
    height: ${height};
  `}
  background-color: #c3c7cb;
  padding: 4px;
  border: none;

  box-shadow: inset 0.5px 0.5px 0px 0.5px #ffffff, inset 0 0 0 1px #868a8e,
    1px 0px 0 0px #000, 0px 1px 0 0px #000, 1px 1px 0 0px #000;
`;

Frame.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default Frame;
