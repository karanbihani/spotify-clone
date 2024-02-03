import Types from './Types';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { LuLibrary } from "react-icons/lu";

function LibraryTop(){
    
    return(<div className="library-top-container">
        <div className="library-upper-section">
            <p className="icon-text-style"><LuLibrary style={{fontSize: "1.5rem"}}/>Your Library</p>;
            <div className="library-upper-section-icons">
                <AddOutlinedIcon/>
                <ArrowForwardOutlinedIcon/>
            </div>
        </div>

        <div className='choice'>
            {/* <button className="listen-type">Playlists</button>
            <button className="listen-type">Artists</button>
            <button className="listen-type">Albums</button>
            <button className="listen-type">Podcast & Shows</button> */}

            <Types name="Playlist" />
            <Types name="Artists" />
            <Types name="Albums" />
            <Types name="Podcast & Shows" />
        </div>
        
        <div className='library-top-bottom-container'>
            <SearchIcon/>
            <div className='right icon-text-style'>Recents <FormatListBulletedIcon/></div>
        </div>
    </div>)
}

export default LibraryTop;