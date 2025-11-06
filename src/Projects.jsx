import axios from "axios"
import { useState, useEffect } from "react"
import { Card, CardBody, CardFooter, CardHeader, Link, Tooltip } from "@nextui-org/react"
import { faLink, faRankingStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Projects() {

    return (
        <>
            <h1 className='text-white mt-10 text-3xl text-center'>Checkout some of my projects.</h1>
            
            <div className="grid lg:grid-cols-4 gap-3 m-10 sm:grid-cols-1">
                <Card className='project-card bg-black/25' key={0} isFooterBlurred>
                    <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                        Left For The Reader
                    </CardHeader>
                    <CardBody className="card-body">
                        LeftForTheReader is an AI-powered mathematics assistant I built to serve as an interactive, context-aware tutor for definitions, theorems, and proofs. The system uses a FastAPI backend connected to a persistent ChromaDB vector database which contains 20k+ ProofWiki entries and a quantized Qwen-2.5-Math-1.5B-Instruct model served via llama.cpp. The app performs retrieval-augmented generation to generate precise, reference-backed mathematical explanations. I containerized the entire stack with Docker Compose—separating the API, model, and database into lightweight services—and deployed it on a VPS with Nginx and SSL for production use. A Streamlit front-end provides an intuitive interface for interactive exploration of math concepts and proofs. 
                    </CardBody>
                    <Tooltip className="tooltip" content='Visit repo'>
                        <CardFooter as={Link} href="https://l4tr-chat.streamlit.app/" target='_blank' className="flex justify-center">
                            <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                        </CardFooter>
                    </Tooltip>
                </Card>
                <Card className='project-card bg-black/25' key={1} isFooterBlurred>
                    <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                        Truth Table+
                    </CardHeader>
                    <CardBody className="card-body">
                        Truth Table+ is a plugin for Obsidian.md that provides users with the ability to automatically generate truth tables from logical expressions. They can provide these expressions using Javascript's logic operators (&&, ||, etc...). The plugin currently has over 600 downloads! It is written in TypeScript.
                    </CardBody>
                    <Tooltip className="tooltip" content='Visit repo'>
                        <CardFooter as={Link} href="https://obsidian.md/plugins?id=truth-table-gen" target='_blank' className="flex justify-center">
                            <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                        </CardFooter>
                    </Tooltip>
                </Card>
            <Card className='project-card bg-black/25' key={2} isFooterBlurred>
                    <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                        Boredom Casino
                    </CardHeader>
                    <CardBody className="card-body">
                        The Boredom Casino is a web-app that allows users to gamble imaginary currency that they accumulate via clicks. Similar to the cookie clicker genre, this web-app was one of my first forays into full-stack development. It is written in JavaScript React.
                    </CardBody>
                    <Tooltip className="tooltip" content='Visit repo'>
                        <CardFooter as={Link} href="https://boredom-casino.vercel.app" target='_blank' className="flex justify-center">
                            <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                        </CardFooter>
                    </Tooltip>
                </Card>

            <Card className='project-card bg-black/25' key={2} isFooterBlurred>
                    <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                        CSDS340 Projects
                    </CardHeader>
                    <CardBody className="card-body">
                        This is a repository that includes the projects I have completed for my introductory machine learning classes. These projects are mainly focused on using Scikit-learn and numpy to do classification and regression on numerical data in Python.
                    </CardBody>
                    <Tooltip className="tooltip" content='Visit repo'>
                        <CardFooter as={Link} href="https://github.com/Max-Schulten/CSDS-340" target='_blank' className="flex justify-center">
                            <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                        </CardFooter>
                    </Tooltip>
                </Card>
            </div>
        </>
    )
}

export default Projects