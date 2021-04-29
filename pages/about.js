import Image from 'next/image'

export default function aboutUs () {
    console.log("Vi är i about")
    return (
        <div className= "container mx-auto px-4 flex flex-col justify-center items-center">
            <h1 className="text-black-200 text-5xl">About</h1>
            <div className="container mx-auto w-80 flex flex-col justify-center items-center">
                <p className="whitespace-normal align-baseline">The best in the industry</p>
                <p className="whitespace-normal align-baseline">"Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body,
                 be full of that idea, and just leave every other idea alone. This is the way to success." --Swami Vivekananda</p>
            </div>
        </div>
    )
}
