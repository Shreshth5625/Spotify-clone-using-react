import React from 'react'
import {useParams} from 'react-router-dom'

const PlaylistPage = () => {

  let {id} = useParams()

    return (
        <div className="playlistPage">
          <div className="mainInner">

            {/* For left column */}
            <div className="playlistPageInfo">
              <div className="playlistPageImage">
                <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="pic" />
              </div>

                <h1>Title</h1>
                <p>Spotify</p>
                <button>Play</button>
                
                <div className="icons">
                  <div className="iconsHeart">

                  </div>
                  <div className="iconsDots">

                  </div>
                </div>

                <p>Sufi flavour to Bollywood music</p>
            </div>

            {/* To display songs in a playlist */}
            <div className="playlistPageSongs">
                <ul>
                  <li>Song 1</li>
                  <li>Song 2</li>
                  <li>Song 3</li>
                  <li>Song 4</li>
                  <li>Song 5</li>
                </ul>
            </div>
          </div>
        </div>  
    )
}

export default PlaylistPage
