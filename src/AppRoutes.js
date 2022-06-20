import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function AppRoutes() {

    return (
        <div className={'db_wrapper'}>
            <BrowserRouter>
                <Header/>
                <div className="pages_wrap">
                    <Routes>
                        <Route path="/:slug" element={<Home/>}/>
                        <Route path="/" exact element={<Navigate to="/cupertino" />}/>
                    </Routes>
                    
                </div>
            </BrowserRouter>
        </div>
    );
}

export default AppRoutes;
