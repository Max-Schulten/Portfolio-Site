import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


function About() {
    return (
        <>
            <h1 className='text-white mt-10 text-3xl text-center'>About me.</h1>
            <h2 className='text-orange-400 mt-2 text-xl text-center'>And where I come from.</h2>
            <div className="m-10 gap-10 grid lg:grid-cols-1 sm:grid-cols-1 content-center">
                <div className="grid grid-cols-2 gap-3 content-center grid-rows-2">
                    <Card className="bg-black40 h-fit">
                        <CardHeader className="text-white text-2xl bg-black/20">
                            About Me
                        </CardHeader>
                        <CardBody className="card-body">
                            <p>
                                My name is Maximilian (Max) and I am a Computer Science B.S. (Concentrating in A.I.) and Mathematics B.S. candidate at Case Western Reserve University in Cleveland, OH. My primary interests are in machine learning and AI, in particular the mathematical foundations and study of these fields.
                                I love coding and I love math.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="bg-black/40 h-fit">
                        <CardHeader className="text-white text-2xl bg-black/20">
                            Find Me
                        </CardHeader>
                        <CardBody className="card-body gap-3 flex flex-row justify-center">
                            <Link href="https://github.com/Max-Schulten" target="_blank" className="social w-fit"><FontAwesomeIcon icon={faGithub} size="3x"/></Link>
                            <Link href="" target="_blank" className="social w-fit"><FontAwesomeIcon icon={faLinkedin} size="3x"/></Link>
                            <Link href="mailto:maximilian.schulten1@gmail.com" target="_blank" className="social w-fit"><FontAwesomeIcon icon={faEnvelope} size="3x"/></Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default About