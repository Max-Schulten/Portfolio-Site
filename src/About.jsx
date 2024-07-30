import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function About() {
    return (
        <>
            <h1 className='text-white mt-10 text-3xl text-center'>About me.</h1>
            <div className="m-10 gap-10 grid grid-cols-4 content-center">
                <Card className="bg-black/40 h-fit">
                    <CardHeader className="text-white text-2xl bg-black/20">
                        Who am I?
                    </CardHeader>
                    <CardBody className="card-body">
                        <p>My name is Maximilian (Max) and I am a Computer Science B.S. (Concentrating in A.I.) and Mathematics B.A. candidate at Case Western Reserve University in Cleveland, OH.</p> 
                    </CardBody>
                </Card>
                <Card className="bg-black/40">
                    <CardHeader className="text-white text-2xl bg-black/20">
                        A Short Bio
                    </CardHeader>
                    <CardBody className="card-body">
                        I was born in Cincinnati, OH to two first generation German immigrants. I moved around a lot before high school, I spend two seperate four and two year stints respectively in Geneva, Switzerland where I attended the International School of Geneva. I also spent two year between those stints in Singapore, where I attended the Singapore American School. We eventually found our way back to Cincinnati where I completed all of high school eventually, graduating Summa Cum Laude and attending Case Western Reserve University. Here I&#39;ve begun pursuing my degress in CS and Math.
                    </CardBody>
                </Card>
            </div>
            <div className='flex flex-row justify-center mt-3'>
                <Link><FontAwesomeIcon size="2x" icon={faGithub} /></Link>
                <Divider className='mx-1' orientation="vertical" />
                <Link><FontAwesomeIcon size='2x' icon={faGithub} /></Link>
            </div>

        </>
    )
}

export default About