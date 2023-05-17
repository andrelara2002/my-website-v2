import React from "react";
import './style.sass'

import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'


export default function Card({ Logo, title, description, link, github }) {

    return <article className="project container max-w-md shadow border-1 border-gray-500 rounded-lg ">
        <section className="info p-5">
            <div className="text ">
                <strong className="text-slate-700">{title}</strong>
                <p className="description text-slate-400 line-clamp-3">{description}</p>
            </div>

        </section>
        <section className="actions border-t-2 border-gray-100">
            <button className="action border-r-2 border-gray-100">
                <AiOutlineGithub />
                <strong>Github</strong>
            </button>
            <button className="action">
                <BiLinkExternal />
                <strong>Acessar</strong>
            </button>
        </section>
    </article>
}