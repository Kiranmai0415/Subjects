import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Course from '../Components/Courses'
import SelectedCardDetails from '../Components/CardDetails'
import BrowserCard from '../AllCards/BrowserDevTools/BrowserCard'
import HtmlCard from "../AllCards/Html/HtmlCard"
import CSSCard from '../AllCards/CSS/CSSCard'
import GitHubCard from '../AllCards/GitHub/GitHub'
import PythonCard from '../AllCards/Python/PythonCard'
import JavaScriptCard from '../AllCards/JavaScript/JavaScriptCard'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/course' element={<Course />} />
                <Route path="/card/:id" component={<SelectedCardDetails />} />
                {/* <Route path='/card/htmlcard' element={<HtmlCard />} /> */}
                {/* <Route path="/tag/:tagName" element={<HtmlCard />} />  */}
                <Route path='/card/csscard' element={<CSSCard />} />
                <Route path="/tag/:tagName" element={<CSSCard />} />  
                <Route path='/card/javascriptcard' element={<JavaScriptCard />} />
                <Route path="/tag/:tagName" element={<JavaScriptCard />} />
                 <Route path='/card/githubcard' element={<GitHubCard />} />
                <Route path="/tag/:tagName" element={<GitHubCard />} />
                 <Route path='/card/pythoncard' element={<PythonCard />} />
                <Route path="/tag/:tagName" element={<PythonCard />} />
                 <Route path='/card/devtoolscard' element={<BrowserCard/>} />
                <Route path="/tag/:tagName" element={<BrowserCard />} /> 
                

            </Routes>
        </BrowserRouter>
    )
}

export default Routing