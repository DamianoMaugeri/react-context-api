import { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../config';
import { Card } from '../../components/Card/Card';
import GlobalContext from '../../context/GlobalContext';
import PostList from '../../components/PostsList/PostList';
import CategoryList from '../../components/CategoriesList/CategoryList';





export default function Posts() {

    //const [posts, setPosts] = useState([])

    // const { posts, fetchPosts } = useContext(GlobalContext);


    // useEffect(() => fetchPosts(), []);

    /*
    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }
    */



    // funzione per eliminare un post 

    // function deletePost(post) {
    //     // setPosts(posts.filter(post => post !== currentPost))

    //     axios.delete(`${BASE_URI}/posts/${post.id}`)
    //         .then((res) => {
    //             fetchPosts()
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }



    return (
        <main>
            <CategoryList />
            <section>
                <div className="container">
                    <h1> I MIEI POST</h1>
                </div>
            </section>

            <PostList />
        </main>

    )
}