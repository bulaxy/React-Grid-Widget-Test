import GridContentLayout from "./GridContentLayout";
import NavbarComponent from './NavbarComponent'
import { ReactGridProvider } from "../contexts/ReactGridContext"

function App() {
  return (<>
    <ReactGridProvider>
      <NavbarComponent />
      <GridContentLayout />
    </ReactGridProvider>
  </>
  );
}

export default App;
