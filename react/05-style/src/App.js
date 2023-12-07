import './App.css';
import CssModule from './components/CssModule';
import OriginCss from './components/OriginCss';
import SassComponent from './components/SassComponent';
import StyledComponent from './components/StyledComponent';
import SassEx from './components/Practice/SassEx1';
import SassEx2 from './components/Practice/SassEx2';

function App() {
  return (
    <div>
      <OriginCss />
      <hr />
      <CssModule />
      <hr />
      <SassComponent />
      <hr />
      <StyledComponent />
      <hr />
      <SassEx />
      <SassEx2 />
    </div>
  );
}

export default App;
