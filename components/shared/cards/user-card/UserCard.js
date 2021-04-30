import Image from "next/image"


const UserCard = ({img, width, height, text}) => {
    return (
        <div className="rounded-3xl w-96 my-4 shadow-xl flex flex-row p-9">
            <Image src={img} width={width} height={height} className="rounded-xl" />
            <p>{text}</p>
        </div>
    )
}

export default UserCard
