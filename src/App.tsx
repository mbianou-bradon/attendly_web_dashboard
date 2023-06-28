import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"
import NavBar from './components/Navbar';
import Error from "./pages/Error";
import Header from "./components/Header";
import Attendance from "./pages/AttendanceScreen";
import Users from "./pages/User";
import Login from "./pages/Login";
import Home from "./pages/Home";



const MyApp = () => {


  return (
    <div className="font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">
        <NavBar />
        <Header />
          <div className="h-full lg:h-scree sm:ml-[13rem]">
             <Outlet />
          </div>
    </div>
  )
}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [ 
        { path: '/', element: <Home />,},
        { path: '/students', element: <Users />},
        { path: '/login', element: <Login />},
        { path: '/attendances', element: <Attendance />},
        { path: '/attendances/:course', element: <Attendance />},

      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;