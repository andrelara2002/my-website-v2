import React from "react";
import Card from "../card/card";
import './style.sass'


export default function Repositories({ repos }) {



    return repos.length < 1 ? <strong className="pl-5 ">No projects found </strong>
        : <section className="repositories gap-5 grid grid-view">
            {
                repos.map((repo, index) => {
                    return < Card
                        key={index}
                        title={repo?.name?.replaceAll('-', ' ')}
                        description={repo?.description}
                        language={repo?.language}
                        github={repo?.html_url}
                        link={repo?.homepage}
                    />
                })
            }
        </section>
}