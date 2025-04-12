import { Provider } from 'react-redux';
import './App.css';
import AppSearch from './components/APIWORKs/AppSearch';
import GetApi from './components/APIWORKs/GetApi';
import Admin from './components/HOC/Admin';
import User from './components/HOC/User';
import PureComp from './components/pureComponentEx/PureComp';
import UseCallBack from './components/UseCallBack';
import UseMemo from './components/UseMemo';
import UseRedux from './components/UseReduxEx';
import UseDebounce from './components/UseDebounce';
import UseThrottle from './components/UseThrottle';
import { UseRef } from './components/UseRef';
import { UseReducer } from './components/UseReducer';
import UseContext from './components/UseContext';
import UseCustomHook from './components/UseCustomHook';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import storenew from './reduxtoolkitExample/storenew';
import UseReduxToolkit from './components/UseReduxToolkit';
import PaginationWork from './components/Pagination';
import AddUser from './components/AddUser';
import AddPost from './posts/AddPost';
import PostDashboard from './posts/PostDashboard';
import PostList from './posts/PostList';
import SearchPost from './posts/SearchPost';
import DND from './components/DND';
import Throttle from './components/Throttle';
import PostDetail from './posts/PostDetail';
import UserForm from './components/forms/UserForm';
import ProtectedRoutes from './ProtectedRoutes';
import Login from './components/Login';
import ReducerNew from './components/ReducerNew';
import AdminRole from './components/HOCExample/AdminRole';
import UserRole from './components/HOCExample/UserRole';
// import store from './Redux/store';
import ReduxCounterExample from './components/ReduxCounterExample';
import ContextExample from './components/ContextExample';
import DebounceEx from './components/DebounceEx';
import UseCallBackEx from './components/UseCallBackEx';
import UseMemoExam from './components/UseMemoExam';
import store from './components/Redux/store';
import Student from './components/Student';
import Otp from './components/Otp';
import ImageUpload from './components/ImageUpload';
import EventCapturing from './EventCapturing/EventCapturing';
import EventBubblingDemo from './EventBubbling/EventBubbling';

const isAuth=true;

function App() {
  return (
    <Provider store={store}>
    <div >
    {/* <PureComp/> */}
    {/* <UseMemo/> */}
    {/* <UseCallBack/> */}

    {/* <Admin/>
    <User/> */}
    {/* <GetApi/> */}
    {/* <AppSearch/> */}
    {/* <UseRedux/> */}
    {/* <UseDebounce/> */}
    {/* <UseThrottle/> */}
    {/* <PaginationWork/> */}
    {/* <AddUser/> */}
    {/* <AddPost/> */}
    {/* <DND/> */}
    {/* <Throttle/> */}
    {/* <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
      <Route element={<ProtectedRoutes isAuth={isAuth}/>}>
      <Route path='/' element={<PostDashboard/>}/>
      <Route path='/post/:id' element={<PostDetail/>}/>
      <Route path='/addpost' element={<AddPost/>}/>
      <Route path='/allposts' element={<PostList/>}/>
      <Route path="/search" element={<SearchPost/>}/>
      </Route>
      <Route path='*' element={<Navigate to="/login" />}/>
    </Routes>
    </BrowserRouter> */}
    {/* <ReducerNew/> */}
    {/* <AdminRole/>
    <UserRole/> */}
    {/* <UserForm/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    {/* <UseContext/> */}
    {/* <UseCustomHook/> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<UseCustomHook/>}/>
      <Route path="/post/:id" element={<PostDetails/>}/>
    </Routes>
    </BrowserRouter> */}
{/* <ReduxCounterExample/> */}
{/* <ContextExample/> */}
{/* <DebounceEx/> */}
{/* <UseCallBackEx/> */}
{/* <UseMemoExam/> */}
{/* <Student/> */}
{/* <Otp/> */}
{/* <ImageUpload/> */}
{/* <EventCapturing /> */}
<EventBubblingDemo/>
    {/* <UseReduxToolkit/> */}
    {/* <UseThrottle/> */}

    </div>
    </Provider>
  );
}

export default App;
