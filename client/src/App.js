import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
// import Logout from './components/logout';
import Home from './components/home';
import Profile from './components/profile';
import CreatePost from './components/subcomponents/createpost';
import YourPost from './components/yourPost';
import AllPosts from './components/allposts';

//context APi
import { Context } from './components/contextApiForUserLoggedIn';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("footerID").style.bottom = "0";
      } else {
        document.getElementById("footerID").style.bottom = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, []);
  return (
    <Context>
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/profile' component={Profile}></Route>
          <Route exact path='/createpost' component={CreatePost}></Route>
          <Route exact path='/yourpost' component={YourPost}></Route>
          <Route exact path='/allposts' component={AllPosts}></Route>
          <div className="footer" id="footerID">
            <p>Copyright ©2020 Nishant Rana
              <a href="https://www.instagram.com/nishant._.rana_/" rel="noreferrer" target="_blank">
                <i className="fa fa-instagram"> </i>
              </a>
              <a href="https://github.com/nishant007-tech" rel="noreferrer" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </Router>
    </Context>
  );
}

export default App;
