import axios from "axios"
import { useState, useEffect } from "react"
import { Card, CardBody, CardFooter, CardHeader, Link, Tooltip } from "@nextui-org/react"
import { faLink, faRankingStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Projects() {

    const [projects, setProjects] = useState([])
    const featuredProj = 'https://github.com/Max-Schulten/truth-table-plus'
    const [feat, setFeat] = useState({})

    function featured(url) {
        return url === featuredProj
    }

    useEffect(() => {
        axios.get('https://api.github.com/users/max-schulten/repos')
            .then(response => {
                let arr = []
                const res = response.data
                for (const repo of res) {
                    const bool = featured(repo.html_url)
                    if (!repo.fork && repo.name != 'Max-Schulten' && !bool) {
                        arr.push({
                            name: repo.name,
                            desc: repo.description,
                            url: repo.html_url
                        })
                    } else if (bool) {
                        setFeat({
                            name: repo.name,
                            desc: repo.description,
                            url: repo.html_url
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
            {featuredProj !== '' && 
                <div className="flex justify-center m-10 text-center">
                    <Card className="project-card bg-black/25 w-fit" isFooterBlurred>
                        <CardHeader className="bg-orange-400/30 text-white flex justify-between">{feat.name}<div className="flex"><FontAwesomeIcon className="mx-2 mt-1" color="gold" icon={faRankingStar}/><p>Featured!</p></div></CardHeader>
                        <CardBody className="card-body">
                            {feat.desc}
                        </CardBody>
                        <Tooltip className="tooltip" content='Visit repo'>
                                    <CardFooter as={Link} href={feat.url} target='_blank' className="flex justify-center">
                                        <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                                    </CardFooter>
                                </Tooltip>
                    </Card>
                </div>
            }
            <div className="grid lg:grid-cols-4 gap-3 m-4 sm:grid-cols-1">
                {projects.map((proj, index) => {
                    if (!proj.is_featured) {
                        return (
                            <Card className='project-card bg-black/25' key={index} isFooterBlurred>
                                <CardHeader className='project-card-header bg-orange-400/30 text-white'>
                                    {proj.name}
                                </CardHeader>
                                <CardBody className="card-body">
                                    {proj.desc}
                                </CardBody>
                                <Tooltip className="tooltip" content='Visit repo'>
                                    <CardFooter as={Link} href={proj.url} target='_blank' className="flex justify-center">
                                        <FontAwesomeIcon icon={faLink} size="lg" color="white" />
                                    </CardFooter>
                                </Tooltip>
                            </Card>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Projects