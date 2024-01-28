import './App.css';
import "./components/myStyles.css";
import LogIn from './components/LogIn';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import OnlineUsers from './components/OnlineUsers';
import OnlineGroups from './components/OnlineGroups';
import CreateGroups from './components/CreateGroups';
import { createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';




const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<LogIn></LogIn>,
  errorElement:<Error></Error>
},
{
  path:"app",
  element:<MainContainer></MainContainer>,
  children:[
    {
      path:"welcome",
      element:<Welcome></Welcome>
    },
    {
      path:"chat",
      element:<ChatArea></ChatArea>,
    },
    {
      path:"users",
      element:<OnlineUsers></OnlineUsers>
    },
    {
      path:"groups",
      element:<OnlineGroups></OnlineGroups>
    },
    {
      path:"createGroups",
      element:<CreateGroups></CreateGroups>
    }

  ]
}  
])


export default appRouter ;
