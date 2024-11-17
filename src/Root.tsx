import { Route, Routes } from "react-router-dom";
import Layout from "./common/components/Layouts/Layouts";
import Main from "./pages/Main/Main";



function Root(){ 
    return(
        <Routes >
            <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            </Route>
        </Routes>
    )
}

export default Root