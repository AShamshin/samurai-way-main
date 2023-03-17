import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { RootStateType, ActionTypes, StoreType } from './redux/store';
export type PropsType = {
  store: StoreType;
  state: RootStateType;
  dispatch: (action: ActionTypes) => void;
};

const App: React.FC<any> = (props) => {
  const state = props.store.getState();

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path='/profile' render={() => <Profile store={props.store} />} />

        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
};

export default App;
