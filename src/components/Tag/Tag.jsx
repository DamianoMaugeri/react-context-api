import { useContext, useState, } from "react"
import GlobalContext from "../../context/GlobalContext"
import { BASE_URI } from "../../config"
import axios from "axios"
import style from './Tag.module.css'

export default function Tag({ content }) {

    const { setPosts } = useContext(GlobalContext)
    const [isActive, setIsActive] = useState(false)

    function fetchFilteredPost() {

        axios.get(`${BASE_URI}/posts`, {
            params: {
                tag: content
            }
        })
            .then(res => {
                setPosts(res.data)
                setIsActive(true)
            })
            .catch(err => console.log(err))


    }


    return <div className={`${style.tag} ${isActive ? style.active : ''}`} onClick={fetchFilteredPost}>{content}</div>

}