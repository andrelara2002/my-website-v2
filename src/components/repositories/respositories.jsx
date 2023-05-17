import React from "react";
import Card from "../card/card";


export default function Repositories({ repos }) {



    return !repos ? <strong>No repos found </strong>
        : <section className="repositories container max-w-none grid grid-cols-4 gap-5 p-5">
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