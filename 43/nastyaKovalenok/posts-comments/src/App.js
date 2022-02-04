import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CommentsPage from "./components/CommentsPage";
import DetailsPostsPage from "./components/DetailsPostsPage";
import ErrorMessage from "./components/ErrorMessage";
import Preloader from "./components/Preloader";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/' component={CommentsPage} exact/>
                    <Route path='/:postId' component={DetailsPostsPage}/>
                </Switch>
            </Router>
            <ErrorMessage/>
            <Preloader/>
        </div>
    );
}

export default App;
