import { useState } from 'react';
import './App.css';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import CustomHook from './components/CustomHook';
import UseMemoEx from './components/Practice/UseMemoEx';

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemo />
      <hr />
      <UseCallback />
      <UseCallback2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHook />
      <hr />
      <UseMemoEx />
    </div>
  );
}

export default App;
