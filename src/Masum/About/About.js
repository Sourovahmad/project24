import React from 'react';
import './About.css';
import about3 from '../../images/about-3.png';
import c1 from '../../images/c3.png';

const About = () => {
    return (
        <div id="about"  className='about_area pt-4 pb-5'>
            <div className='container'>
                <h2 className='a_title text-center pb-4'>ROADMAP AND PROJECT FEATURES</h2>

                <div className='row extra_margin'>
                    <div className='col-md-3'>
                        <div className='a_card mb-3 one'>
                            <h6 className=''>Implemented in Phase 1 (ONLAUNCH)</h6>
                            <div className="a_bg"><img src={about3} class="money img-fluid" alt=""/></div>
                            <div className='px-3'>
                                <h2 className="pt-2">YIELDING <span>$POWDER</span></h2>
                                <p>Cartel members can enter the lab to produce $POWDER daily. Higher ranking Cartel members will produce more $POWDER.</p>
                                <p>Cops can go ‘On Duty’ and earn a % of all $POWDER produced as a tax. Cops also have a chance to ‘arrest’ (steal) other NFTs minted with $POWDER</p>
                                <p>$POWDER is the utility token of Cops and Cartels ecosystem. It will be used to mint new NFTs, upgrade current ones and map the future of the game.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='a_card two'>
                            <h6 className=''>Implemented in Phase 2</h6>
                            <div className="a_bg"><img src='' class="img-fluid" alt=""/></div>
                            <div className='px-3'>
                                <h2 className="pt-2">LAND <span>& UPGRADES</span></h2>
                                <p>Upon 100% mint of Gen 0, phase 2 will be implemented</p>
                                <p>Upgrade your Cartel members rank (Total of 4 ranks) and yield more $POWDER.</p>
                                <p>Use $POWDER to purchase land within the games ecosystem. There will only be 15,000 plots of land available.</p>
                                <p>Each piece of land will have unique capabilities and grant different benefits within the game</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='a_card mb-3 three'>
                            <h6 className='a_sub'></h6>
                            <div className="a_bg"><img src={c1} class="a_m img-fluid" alt=""/></div>
                            <div className='px-3'>
                                <h2 className="pt-2">FACTIONS <span>& REWARDS</span></h2>
                                <p className='pb-2'>Join 1 of 4 factionsand gain access to faction specific areas in the Discord with exclusive giveaways</p>
                                <p className='pb-2'>$100,000 prize is allocated upon 85% mint and split between those who mint a Legendary Cartel Leader NFT (Total of 3).</p>
                                <p>Some reserved NFTs will be airdropped to holders who minted prior to 25%</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='a_card four'>
                            <h6 className='a_sub'></h6>
                            <div className="a_bg"><img src='' class="img-fluid" alt=""/></div>
                            <div className='px-3'>
                                <h2 className="pt-2">COMMUNITY <span>DAO</span></h2>
                                <p className='pb-2'>A portion of funds is allocated towards the Community DAO Each NFT grants access to the community DAO and voting rights over the DAO’s assets.</p>
                                <p className='pb-2'>$POWDER will represent the fractional shares of NFTs held in the vault.</p>
                                <p>3 plots of land in The SANDBOX will be purchased and held in the community DAO upon 100% mint of Gen 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;