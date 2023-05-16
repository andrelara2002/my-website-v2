import React from "react";
import './style.sass'

import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'


export default function Card({ Logo }) {

    return <article className="project container max-w-md shadow-lg  rounded-lg  p-4 ">
        <section className="info p-5">
            <div className="text">
                <strong className="text-slate-700">Jane Cooper</strong>
                <p className="text-slate-400">Regional Paradigmn Technician</p>
            </div>
            {Logo && <Logo />}
        </section>
        <section className="actions">
            <button className="action">
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