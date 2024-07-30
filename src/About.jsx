import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


function About() {
    return (
        <>
            <h1 className='text-white mt-10 text-3xl text-center'>About me.</h1>
            <div className="m-10 gap-10 grid lg:grid-cols-2 sm:grid-cols-1 content-center">
                <div className="grid grid-cols-1 gap-3 content-center grid-rows-2">
                    <Card className="bg-black/40 h-fit">
                        <CardHeader className="text-white text-2xl bg-black/20">
                            Who am I?
                        </CardHeader>
                        <CardBody className="card-body">
                            <p>My name is Maximilian (Max) and I am a Computer Science B.S. (Concentrating in A.I.) and Mathematics B.A. candidate at Case Western Reserve University in Cleveland, OH.</p>
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

                <Card className="bg-black/40 h-fit">
                    <CardHeader className="text-white text-2xl bg-black/20">
                        A Short Bio
                    </CardHeader>
                    <CardBody className="card-body">
                        I was born in Cincinnati, OH to two first generation German immigrants. I moved around a lot before high school, I spend two seperate four and two year stints respectively in Geneva, Switzerland where I attended the International School of Geneva. I also spent two years between those stints in Singapore, where I attended the Singapore American School. We eventually found our way back to Cincinnati where I completed all of high school. Eventually, graduating Summa Cum Laude and attending Case Western Reserve University. Here I&#39;ve begun pursuing my degress in CS and Math.
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default About