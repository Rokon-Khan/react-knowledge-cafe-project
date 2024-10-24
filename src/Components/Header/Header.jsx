
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center w-11/12 border-b-2 my-4 py-4 mx-auto'>
            <h3 className="text-4xl font-bold">React Knowledge Cafe Project</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;