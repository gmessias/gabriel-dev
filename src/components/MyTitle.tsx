import Image from 'next/image'

const MyTitle: React.FC = () => {
    return (
        <div className={"flex items-center justify-center w-full my-8"}>
            <div className={"flex items-center"}>
                <div className={"w-24 h-24 mr-4"}>
                    <Image
                        src={"/gabriel-photo.jpg"}
                        alt={"Gabriel Messias profile photo"}
                        width={"96"}
                        height={"96"}
                    />
                </div>
                <div>
                    <h1 className={"text-xl font-bold text-white"}>Gabriel M. P.</h1>
                    <p className={"text-lg text-white"}>Back-end Developer</p>
                </div>
            </div>
        </div>
    );
};

export default MyTitle;