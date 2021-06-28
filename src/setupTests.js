// import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom/extend-expect';

import { createSerializer } from 'enzyme-to-json';

configure( { adapter: new Adapter() });

expect.addSnapshotSerializer( createSerializer( { mode: 'deep' } ) );