import React from 'react';
import { Styles } from './styles/AppStyle'
import AppHeader from './headers/AppHeader'
import SlotContainer from './slot/SlotContainer'
import configureStore from '../store';
import { Provider } from 'react-redux';
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div style={Styles.mainContainer}>
        <AppHeader title="Slot Machine" />
        <SlotContainer />
      </div>
    </Provider>
  );
}

export default App;
