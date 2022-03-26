import Error404 from '../components/pages/404/Error404';
import Home from '../components/pages/home/Home';

export const routes= [
  {
    path: "/", 
    className: "home",
    exact: true, 
    hideHeader: false, 
    component: Home, 
    id: 1, 
  },{
    path: "/explore",
    className: "explore", 
    exact: true, 
    hideHeader: false, 
    component: <></>, 
    id: 2, 
  },{
    path: "/quizzes", 
    className: "quizzes",
    exact: true, 
    hideHeader: false, 
    component: <></>, 
    id: 3, 
  },{
    path: "/leaderboard",
    className: "leaderboard", 
    exact: true, 
    hideHeader: false, 
    component: <></>, 
    id: 4, 
  },{
    path: "/user-profile", 
    exact: true, 
    hideHeader: false, 
    component: <></>, 
    id: 5, 
    protected: false,
  },{
    path: "/add-word", 
    exact: true, 
    hideHeader: false, 
    component: <></>, 
    id: 6, 
    protected: true,
  },{
    path: "*", 
    exact: true, 
    hideHeader: false, 
    component: Error404, 
    id: 7, 
    protected: false,
  },
]