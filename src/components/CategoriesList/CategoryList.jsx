import { useContext, useEffect, useState, } from "react"
import GlobalContext from "../../context/GlobalContext"
import Tag from "../Tag/Tag"
import style from './CategoryList.module.css'


export default function CategoryList() {

    const { fetchCategories, categories } = useContext(GlobalContext)

    useEffect(() => fetchCategories, [])


    return (
        <div className="container">
            <div className="row">
                <ul className={style.tags}>
                    {
                        categories.map(category => (
                            <li key={category}>
                                <Tag content={category} />

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}