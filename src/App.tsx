import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"
import NavBar from './components/Navbar';
import Error from "./pages/Error";
import Header from "./components/Header";
import Attendance from "./pages/Attendance";
import Users from "./pages/User";
import Login from "./pages/Login";



const MyApp = () => {


  return (
    <div className="bg-primary text-white font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">
        <NavBar />
        <Header />
          <div className="h-full lg:h-screen sm:ml-[11.6rem]">
             <Outlet />
          </div>
        <Footer/>
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
        { path: '/blogs', element: <Blogs />},
        { path: '/attendance', element: <Attendance />},
        { path: '/attendances/:course', element: <ProjectDetails />},

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