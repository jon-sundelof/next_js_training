import Image from 'next/image'
import UserCard from '../components/shared/cards/user-card/UserCard'
import {Users} from '../data/data'

export default function aboutUs () {
    console.log(Users)
    return (
        <div className= "container mx-auto px-4 flex flex-col justify-center items-center">
            <h1 className="text-black-200 text-5xl">Jon and Jesper</h1>
            <p className="whitespace-normal align-baseline">The best in the industry</p>
            <div className="container m-9 w-80 flex flex-col justify-center items-center">
                <p className="whitespace-normal align-baseline">"Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body,
                 be full of that idea, and just leave every other idea alone. This is the way to success." --Swami Vivekananda</p>
            </div>
            <div className="container flex justify-evenly">
                {Users.map((item, index) => {
                    return <UserCard key={index} img={item.img} width={item.width} height={item.height} text={item.text}/>
                })}
            </div>
        </div>
    )
}
