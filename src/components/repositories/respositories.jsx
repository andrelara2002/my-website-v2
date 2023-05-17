import React from "react";
import Card from "../card/card";
import './style.sass'
import { Logotypes } from "../../services/Logotypes";

export default function Repositories({ repos }) {



    return repos.length < 1 ? <strong className="p-5 ">No projects found </strong>
        : <section className="repositories gap-5 grid grid-view">
            {
                repos.map((repo, index) => {
                    const logo = Logotypes[repo.language?.toLowerCase()]
                    console.log(repo.language)
                    return < Card
                        key={index}
                        title={repo?.name?.replaceAll('-', ' ')}
                        description={repo?.description}
                        language={repo?.language}
                        github={repo?.html_url}
                        link={repo?.homepage}
                        Logo={logo ? logo : Logotypes.code}
                    />
                })
            }
        </section>
}