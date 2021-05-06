import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'

const Playlists = (props) => {
    
    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: 'Electronic Music',
            img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Electronic Music',
            desc: 'Lorem Ipsum'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Bollywood Hits',
            img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Bollywood Hits',
            desc: 'Lorem Ipsum'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Rock Music',
            img: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ1bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Rock Music',
            desc: 'Lorem Ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Coding Mode',
            img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Coding music',
            desc: 'Lorem Ipsum'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday Playlist',
            img: 'https://images.unsplash.com/photo-1590178504902-783e2f104a47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
            alt: 'Sunday Morning',
            desc: 'Lorem Ipsum'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Soothing Music',
            img: 'https://images.unsplash.com/photo-1559312698-24d3ddda89fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Soothing Music',
            desc: 'Lorem Ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Feeling Good',
            img: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVlbCUyMGdvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
            alt: 'Feeling good',
            desc: 'Lorem Ipsum'
        },
    ]

    const matchedPlaylists = dataPlaylists.filter( 
        (playlist) => playlist.category_id === props.category_id
        )

    return (
        <div>
            {/* For multiple cards in a row */}
            <div className="cardsWrapInner">

                {matchedPlaylists.map(playlist => {
                    return(
                        <div className="card">
                            
                            <div className="cardImage">
                                <img 
                                    src={playlist.img}
                                    alt = {playlist.alt}
                                />
                            </div> 
                            
                            <div className="cardContent">
                                <h3>{playlist.name}</h3>
                                <span >{playlist.desc}</span>
                            </div>

                            <span className="playIcon">
                                <PlayIcon />
                            </span>

                        </div>
                    )
                })}                        
            </div>    
        </div>
    )
}

export default Playlists
