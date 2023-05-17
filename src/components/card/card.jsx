import React from "react";
import './style.sass'

import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'


export default function Card({ Logo, title, description, link, github }) {

    const handleWebsite = website => {
        if (website) window.open(website, '_blank')
    }

    return <article className="project container max-w-md shadow border-1 border-gray-500 rounded-lg ">
        <section className="info p-5">
            <div className="text ">
                <strong className="text-slate-700 capitalize">{title}</strong>
                <p className="description text-slate-400 line-clamp-3">{description}</p>
            </div>

        </section>
        <section className={`actions border-t-2  grid grid-cols-${link ? 2 : 1} border-gray-100`}>
            <button onClick={() => handleWebsite(github)} className="action border-r-2 border-gray-100 hover:bg-pink-500 hover:rounded-lg">
                <AiOutlineGithub />
                <strong>Github</strong>
            </button>
            {
                link ?
                    <button onClick={() => handleWebsite(link)} className="action border-r-2 border-gray-100 hover:bg-pink-500 hover:rounded-lg">
                        <BiLinkExternal />
                        <strong>Acessar</strong>
                    </button>
                    : <></>
            }
        </section>
    </article >
}