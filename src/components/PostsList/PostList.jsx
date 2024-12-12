import { useContext, useEffect, useState, } from "react"
import GlobalContext from "../../context/GlobalContext"
import { Card } from "../Card/Card";


export default function PostList() {


    const { posts, fetchPosts } = useContext(GlobalContext)

    useEffect(() => fetchPosts(), []);

    return (
        <div className="container">

            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col_4">
                        {/* <Card post={post} deleteFunction={() => deletePost(post)} onUpdateTitle={(title) => updateTitle(title, post.id)} /> */}
                        <Card post={post} />

                    </div>
                ))}
            </div>
        </div>

    )
}