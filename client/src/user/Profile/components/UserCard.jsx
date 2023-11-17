import { useState } from 'react'
import logo from '../../../assets/logo.png'
import { AiFillGithub, AiOutlineFastBackward } from 'react-icons/ai'
import { useLocation } from 'react-router-dom';


function UserCard({ username, name, picture, bio, phoneNumber, role, skills = [] }) {
    const location = useLocation();
    const isUserProfile = location.pathname === `/u/${username}`;

    const [showMore, setShowMore] = useState(false);
    const toggleBio = () => {
        setShowMore(!showMore);
    };

    const truncatedBio = showMore ? bio : bio?.slice(0, 150);
    return (
        <div className="rounded-2xl bg-eerie-black-2  shadow-md flex flex-col h-fit p-12 border border-jet w-full">
            <div className='flex w-full justify-center'>
                <img src={picture} alt="" className='rounded-full  w-[90px]' />
            </div>

            <div className='flex flex-col items-center gap-[8px] p-0'>
                <div>
                    <h1 className='normal-case text-center'>
                        {name}
                    </h1>
                    <div className="badges text-center">
                        <div className="badge bg-[#9ACD32] text-black mx-1">member</div>
                        {role >= 4 && <div className="badge bg-[#FFFF00] text-black mx-1">
                            contributor
                        </div>}
                        {role >= 5 && <div className="badge bg-[#7DF9FF] text-black mx-1">
                            admin
                        </div>}
                    </div>
                    <div className="skills text-center pt-2">
                        {skills.map((skill, index) => (
                            <div key={index} className="badge bg-custom-blue text-black mx-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                </div>
                <div>
                    <p>
                        {truncatedBio}

                        {bio?.length > 150 && (
                            <button onClick={toggleBio} className="text-blue-500 hover:underline">
                                {showMore ? '...show less' : '...show more'}
                            </button>
                        )}
                    </p>
                </div>
                {/* <div>
                    <AiFillGithub size='5vw' />
                </div> */}

            </div>
            {isUserProfile ? null : (
                <div className="flex w-full justify-center">
                    <button className="bg-blue-500 flex gap-1 items-center justify-center text-white px-4 py-2 rounded-full mt-4">
                        <AiOutlineFastBackward />
                        Go back
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserCard