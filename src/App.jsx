import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import MainLayout from './layouts/MainLayout'

import AboutMe from './pages/AboutMe.jsx'
import HomePage from './pages/Homepage.jsx'
import Posts from './pages/posts/Posts.jsx'
import MinimalLayout from './layouts/MinimalLayout.jsx'
import Show from './pages/posts/show.jsx'
import GlobalContext from './context/GlobalContext.js'
import axios from 'axios'
import { BASE_URI } from './config';

function App() {

  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])

  function fetchPosts() {
    axios.get(`${BASE_URI}/posts`)
      .then(res => {
        setPosts(res.data)
        fetchCategories()
      })
      .catch(err => console.log(err))
  }
  // funzione per eliminare un post

  function deletePost(post) {
    // setPosts(posts.filter(post => post !== currentPost))

    axios.delete(`${BASE_URI}/posts/${post.id}`)
      .then((res) => {
        fetchPosts()
      })
      .catch(err => {
        console.log(err)
      })
  }

  //================ funzione per prendere le categorie

  function fetchCategories() {
    axios.get(`${BASE_URI}/description`)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
  }





  return (

    <GlobalContext.Provider value={{ posts, fetchPosts, deletePost, fetchCategories, categories, setPosts }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<HomePage />}></Route>
            <Route path='about-me' element={<AboutMe />}></Route>
            <Route path='posts'>
              <Route path='' element={<Posts />}> </Route>
              <Route path=':id' element={<Show />}> </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  )
}

export default App
