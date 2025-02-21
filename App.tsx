import {RecoilRoot} from 'recoil';
import Routers from './src/routers/Routers';

const App = () => {
  return (
    <RecoilRoot>
      <Routers />
    </RecoilRoot>
  );
};

export default App;
