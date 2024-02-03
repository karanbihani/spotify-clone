import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function MainSection(){

    var timeOfDay = "Evening";

    return(
    <>
    <div className="nav-bar">
        <div className="nav-bar-left">
            <button><KeyboardArrowLeftOutlinedIcon/></button>
            <button><KeyboardArrowRightOutlinedIcon/></button>
        </div>
        <div className="nav-bar-right">
            <button><NotificationsNoneOutlinedIcon/></button>
            <button><AccountCircleOutlinedIcon/></button>
        </div>
    </div>
    <div className='main-right-section'>
        <span className='greeting'>Good {timeOfDay}</span>
        
        <div className='top-played-playlist'>
            Hi
        </div>
        
        <div className='top-played-playlist'>
            Hello
        </div>

    </div>
    </>)
}

export default MainSection