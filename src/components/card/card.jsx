import React from "react";
import Spacer from "../spacer/spacer";
import isDark from "../../services/ThemeDetector";
import './style.sass'

import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'


export default function Card({ Logo, title, description, link, github, language }) {

    const handleWebsite = website => {
        if (website) window.open(website, '_blank')
    }


    return <article className="project hover:shadow-md container shadow border-1 dark:bg-zinc-900 border-gray-500 rounded-lg ">
        <section className="info p-5">
            <section className="text ">
                <section className="flex justify-between">
                    <strong className="text-slate-700 text-xl capitalize dark:text-gray-100 ">{title}</strong>
                    {Logo && <Logo.icon size={15} color={Logo.color} />}
                </section>
                <Spacer />
                <p className="description text-slate-400 line-clamp-3 dark:text-slate-300">{description}</p>
            </section>

        </section>
        <section className={`actions ${!link ? 'col-1' : 'col-2'} border-t-2  dark:border-zinc-950 border-gray-100`}>
            <button onClick={() => handleWebsite(github)} className="action dark:border-zinc-900 border-gray-100 hover:bg-pink-500 hover:rounded-lg">
                <AiOutlineGithub color={isDark() ? '#fff' : '#000'} />
                <strong className="text-gray-100">Github</strong>
            </button>
            {
                link ?
                    <button onClick={() => handleWebsite(link)} className="action border-l-2   dark:border-gray-950 hover:bg-pink-500 hover:rounded-lg">
                        <BiLinkExternal color={isDark() ? '#fff' : '#000'} />
                        <strong className="text-gray-100">Acessar</strong>
                    </button>
                    : <></>
            }
        </section>
    </article >
}