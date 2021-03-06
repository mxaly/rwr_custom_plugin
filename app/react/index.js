import RWR, {integrationsManager} from 'react-webpack-rails';
import altIntegration from './flux/alt-integration';

integrationsManager.register('alt-store', altIntegration);
RWR.run();

import Counter from './components/counter';
import Stats from './components/stats';
RWR.registerComponent('Counter', Counter);
RWR.registerComponent('Stats', Stats);
