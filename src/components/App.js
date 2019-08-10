import React from 'react';
import { Styles } from './styles/AppStyle'
import AppHeader from './headers/AppHeader'
import SlotContainer from './slot/SlotContainer'
function App() {
  return (
    <div style={Styles.mainContainer}>
      <AppHeader title="Slot Machine" />
      <SlotContainer />
    </div>
  );
}

export default App;
