import React from 'react';
import { render } from '@testing-library/react';
import Frame from './Frame';

describe('<Frame />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Frame />);
      expect(container).toMatchSnapshot();
    });
  });
});
