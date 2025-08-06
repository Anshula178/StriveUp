import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center"> Our team is committed to delivering <br /> nothing but excellence.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50"> We bring creativity, strategy, and innovation together <br /> to build solutions that truly make an impact.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/ourteam.png" alt="office-image" height={184} width={1196}  className="rounded-3xl "/>
            </div>
        </div>
    )
}

export default index;
