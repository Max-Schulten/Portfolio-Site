import axios from "axios"
import { useState, useEffect } from "react"
import { Card, CardBody, CardFooter, CardHeader, Link, Tooltip } from "@nextui-org/react"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/max-schulten/repos')
            .then(response => {
                let arr = []
                const res = response.data
                for (const repo of res) {
                    if (!repo.fork && repo.name != 'Max-Schulten') {
                        arr.push({
                            name: repo.name,
                            desc: repo.description,
                            url: repo.html_url,
                        })
                    }
                }
                setProjects(arr)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <>
            <h1 className='text-white mt-10 text-3xl text-center'>Checkout some of my projects.</h1>
            <h2 className='text-orange-400 mt-2 text-xl text-center'>These all link to github.</h2>
            <div className="grid lg:grid-cols-4 gap-3 m-4 sm:grid-cols-1">
                {projects.map((proj, index) => {
                    return (
                        <Card className='project-card bg-black/25' key={index}>
                            <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                                {proj.name}
                            </CardHeader>
                            <CardBody className="card-body">
                                {proj.desc}
                            </CardBody>
                            <Tooltip className="tooltip" content='Visit repo'>
                                <CardFooter as={Link} href={proj.url} className="card-footer backdrop-blur-lg bg-black/50 flex justify-center">
                                    <FontAwesomeIcon icon={faLink} size="lg" color="white"/>
                                </CardFooter>
                            </Tooltip>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default Projects