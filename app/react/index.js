import RWR from 'react-webpack-rails';
RWR.run();

import Counter from './components/counter';
import Stats from './components/stats';
RWR.registerComponent('Counter', Counter);
RWR.registerComponent('Stats', Stats);
