import React from 'react';
import blx from '../../images/blx.png';
import './Main.css';

const Main = () => {
    return (
        <div>
            <div className='main_area py-5'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-6'>
                            <div className='left'>
                            <h1>COPS &</h1>
                            <h1>CARTELS</h1>
                            <p>MINTING 15th DECEMBER</p>
                            </div>
                        </div>

                        <div className='col-md-6 d-flex align-items-cnter'>
                            <div className='right pt-3 pb-4'>
                                <h1 className='title'>MINT NOW</h1>
                                <img src={blx} alt="Trulli"/>
                                <p>0/30,000 MINTED TOTAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='discord_btn'>
                <button className='btn'>JOIN US ON DISCORD</button>
            </div>
        </div>
    );
};

export default Main;