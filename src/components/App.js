import GridContentLayout from "./GridContentLayout";
import {  ReactGridProvider } from "../contexts/ReactGridContext"

function App() {
  return (<>
    <ReactGridProvider>
      <GridContentLayout />
    </ReactGridProvider>
  </>
  );
}

export default App;
