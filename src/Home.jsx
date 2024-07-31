import { Card, CardFooter, Image } from "@nextui-org/react"
import max from './assets/max.jpg'

function Home() {
    return (
        <>
            <h1 className='text-white mt-32 text-3xl text-center'>Welcome to my page.</h1>
            <h2 className='text-orange-400 mt-20 text-xl text-center'>Use the nav to your right to find out more about me and what I do.</h2>

            <div className="flex justify-center mt-24">
                <Card className="w-fit bg-transparent" isFooterBlurred>
                    <Image src={max} height={400}/>
                    <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">Thank you for visiting.</CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Home