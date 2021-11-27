import React from 'react';
import './Features.css';
import about1 from '../../images/about-1.png';
import about2 from '../../images/about-2.png';
import about3 from '../../images/about-3.png';

const Features = () => {
    return (
        <div className='features_area'>
            <div className='container'>
                <div className='up_info pb-5'>
                    <h4 className='title text-center pt-3 pt-2'>COPS AND CARTELS</h4>
                    <p>It’s a crooked place this town, a desperate place, full of gangsters and corruption.
                        Most people, go about their lives, avoiding dark alleys and late nights; but there
                        are some who live for those places. They love the night and live for danger, and they
                        take to the streets. Three Cartels run this city, producing $POWDER and fighting for
                        territory. There are still a few cops that fight hard to protect the city but the Cartels
                        have managed to turn most of them corrupt. The deal is they pay the Cops a tax on all
                        $POWDER produced. In exchange, the Cops will turn a blind eye to the illegal operations.
                    </p>
                </div>

                <div className='pt-3'>
                    <h5 className='sub_title'>Project Features:</h5>
                    <p className='detail'>Details on the project and Utility</p>

                    <div className='row'>
                        <div className='col-md-4 pb-3'>
                            <div className='card px-4 py-3 text-center'>
                                <h5 className='one pb-2'>Staking <span>&</span> Tokenomics</h5>
                                <p>Stake Cartel crew to earn $POWDER and purchase land </p>
                                <p>Stake Cops to earn a % of ALL $POWDER produced and have a chance to stealother NFTs minted with$POWDER</p>
                                <img src={about3} className="img-fluid custom1" alt="" />
                            </div>
                        </div>

                        <div className='col-md-4 pb-3'>
                            <div className='card px-4 py-3 text-center'>
                                <h5 className='two pb-2'>Integration into <span>SandBox</span> with playable avatars</h5>
                                <p>VX Cops and Cartels NFTs will be released which will act as playable avatars in The Sandbox. 3 plots of land will be purchased and assigned to each cartel.</p>
                                <img src={about1} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className='col-md-4 pb-3'>
                            <div className='card px-4 py-3 text-center'>
                                <h5 className='one pb-2'>Factions <span>&</span> Upgrades</h5>
                                <p>Upgrade your Cartel or Cop NFT rank to earn better rewards</p>
                                <p>User $POWDER to purchase land within the games ecosystem and claim it as your Cartels territory</p>
                                <img src={about2} className="img-fluid custom2" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;