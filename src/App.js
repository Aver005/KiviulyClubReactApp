/*
    Styles
*/
import './style/App.css';

/*
    Models
*/
import Header from "./components/Header";


/*
    Utils
*/
import PageRoutes from "./PageRoutes";
import {BrowserRouter} from "react-router-dom";


function App()
{
    return (
        <BrowserRouter>
            <Header />
            <PageRoutes />
        </BrowserRouter>
    );
}

export default App;