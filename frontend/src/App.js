import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from "axios";
import Header from './components/header';
import Details from './pages/details';
import AddBlog from './pages/add-blog';
import Category from './pages/category';

function App() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        async function fetchData() {
            try {
                const result = await axios.get("http://localhost:1337/api/blogs")
                setBlogs(result.data.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/'
                           element={<div>{blogs.sort((a, b) => b.attributes.createdAt.localeCompare(a.attributes.createdAt)).map(blog => {
                            return (
                                <div style={{
                                    width: "60%",
                                    margin: "auto",
                                    padding: "20px",
                                    marginBottom: "15px",
                                    border: "1px solid coral",
                                    borderRadius: "10px"
                                }}
                                key={blog.id}>
                                    <h3>{blog.attributes.title}</h3>
                                    <h5>{blog.attributes.author}</h5>
                                    <p>{blog.attributes.body}</p>
                                </div>
                            )
                        })}</div>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                    <Route path='/addblog' element={<AddBlog/>}/>
                    <Route path='/category/:id' element={<Category/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
