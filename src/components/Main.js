import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">adwdawadas</div>
            <div className="mainContent">
                
                <div className="cardsWrap">
                    <h1>Uniquely Yours</h1>
                    <div className="card">
                       <div className="cardImage">
                           <img src="https://images.unsplash.com/photo-1592966556928-5c4d163e8bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
                           alt="Peace Music"/>
                        </div> 
                        <div className="cardContent">
                            <h3>Liked songs</h3>
                        </div>

                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                </div>

                <div className="cardsWrap">
                    <h2>Focus</h2>
                    <span className="seeAll">SEE ALL</span>
                    <p className="subText">Music to help you concentrate.</p>
                    
                    {/* For multiple cards in a row */}
                    <div className="cardsWrapInner">
                        <div className="card">
                            
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1592966556928-5c4d163e8bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
                                alt="Peace Music"/>
                            </div> 
                            
                            <div className="cardContent">
                                <h3>Music for concentration</h3>
                                <span >Music to help you concentrate.</span>
                            </div>

                            <span className="playIcon">
                                <PlayIcon />
                            </span>

                        </div>

                        <div className="card">
                            
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1592966556928-5c4d163e8bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
                                alt="Peace Music"/>
                            </div> 
                            
                            <div className="cardContent">
                                <h3>Music for concentration</h3>
                                <span >Music to help you concentrate.</span>
                            </div>

                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            
                        </div>
                        
                        <div className="card">
                            
                            <div className="cardImage">
                                <img src="https://images.unsplash.com/photo-1592966556928-5c4d163e8bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
                                alt="Peace Music"/>
                            </div> 
                            
                            <div className="cardContent">
                                <h3>Music for concentration</h3>
                                <span >Music to help you concentrate.</span>
                            </div>

                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            
                        </div>
                        
                    </div>

                </div>

            </div> 
        </div>
    )
}

export default Main
