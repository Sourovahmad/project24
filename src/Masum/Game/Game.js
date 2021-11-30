import React from 'react';
import './Game.css';

const Game = () => {
    return (
        <div>
            <div className='empty'></div>

            <div id='game' className='game_area'>
                <div className='container'>
                    <div className='row'>
                        <div className='offset-1 col-10 offset-md-3 col-md-6'>
                            <div className='status px-4 py-2 mb-5'>
                                <h2>GAME STATS</h2>

                                <div className='d-flex'>
                                    <div className='pr-4 pe-lg-5 pe-xl-5 pe-xxl-5 me-lg-5 me-xl-5 me-xxl-5'>
                                        <p className='game_r'>Cartels Minted:?</p>
                                        <p className='game_r'>Cops Minted:?</p>
                                        <p className='game_r'>Cartels Staked:?</p>
                                        <p className='game_r'>Cops Staked:?</p>
                                    </div>

                                    <div className='ps-3 ps-lg-5  ps-xl-5 px-xxl-5'>
                                        <p>Cartels Arrested:?</p>
                                        <p>$POWDER Claimed:?</p>
                                    </div>
                                </div>
                            </div>

                            <div className='stake py-2'>
                                <h6>$POWDER AVAILABLE: ?$POWDER</h6>
                                <h1 className='pb-2'>STAKE</h1>
                                <button className='mb-4 btn'>CONNECT WALLET</button>
                                <h1 className='pb-2'>UNSTAKE</h1>
                                <button className='mb-2 btn'>CONNECT WALLET</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;