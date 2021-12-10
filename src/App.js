import { useState } from 'react';
import Modal from './components/Modal/Modal';
import PostsBar from './components/PostsBar';
import SideBar from './components/SideBar';
import './style/app.css'

function App() {
  const [active, setActive] = useState(false)



  return (
    <div className="App">
      <header></header>
      <div className="main">
        <aside className="left__side">
          <SideBar/>
        </aside>
        <aside className="right__side">
          <PostsBar/>
          <button className="modal_btn" onClick={() => setActive(true)}>+</button>
        </aside>
      </div>
      <div className="footer">

      </div>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
