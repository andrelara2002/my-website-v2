import React from "react";
import Card from "../card/card";
import './style.sass'


export default function Repositories({ repos }) {



    return !repos ? <strong>No repos found </strong>
        : <section className="repositories gap-5 grid grid-view">
            {
                repos.map((repo, index) => {
                    return < Card
                        key={index}
                        title={repo?.name}
                        description={repo?.description}
                        language={repo?.language}
                    />
                })
            }
        </section>
}