import pinkFloyd from "../assets/pinkFloyd.jpeg"

function LibraryCard(prop){
    return(<div className="library-card">
        <img src={pinkFloyd} alt="music album cover" /> 
        <div className="right-card">
            <h4> Any Color You Like</h4>
            <p> The Dark Side of the Moon</p>
        </div>
    </div>)
}

export default LibraryCard; 