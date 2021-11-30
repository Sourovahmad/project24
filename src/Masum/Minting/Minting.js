import React from 'react';
import './Minting.css';
import blx from '../../images/blx.png';
import about3 from '../../images/about-3.png';

const Minting = () => {
    return (
        <div id="mint" className='minting_area pt-3 pb-2'>
            <div className='container'>
                <div className='minting_details'>
                    <h5 className='title text-center'>MINTING</h5>

                    <div className='mint pt-3 px-3 px-lg-0 d-lg-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div><img src={blx} className="img-fluid" alt="" /></div>
                        
                            <div>
                                <h6>TOKEN ID</h6>
                                <p>1 to 10,000</p>
                                <p>10,001 to 20,000</p>
                                <p>20,001 to 30,000</p>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-between'>
                            <div className=''>
                                <h6>MINTING COST</h6>
                                <p>0.075 ETM</p>
                                <p>15,000 $POWDER</p>
                                <p>30,000 $POWDER</p>
                            </div>
                            
                            <div><img src={about3} className="img-fluid " alt="" /></div>
                        </div>
                    </div>
                </div>

                    <div className='row extra_m pt-3'>
                        <div className='col-md-4 pb-3'>
                            <div className='cart ex_padding0 pt-2'>
                                <h5 className='text-center pb-1'>CARTEL</h5>
                                <p className='text-center pb-4'>You have a 85% chance to mint a cartel crew part of 1 of the 3 cartels</p>

                                <div className='pb-4'>
                                    <h6>Staking (ENTER LAB)</h6>
                                    <p>Accumulate a base rate of 5,000 $POWER daily</p>
                                </div>

                                <div className='pb-3 mb-1'>
                                    <h6>Claiming</h6>
                                    <p>Receive 75% of $POWDER produced by your Cartel Member</p>
                                    <p className='risk pb-1'>RISK: Cops take a 25% tax on all $POWDER
                                        produced in exchange they have agreed to 
                                        turn a blind eye to the illegal operation
                                        Taxed $POWDER is split among all staked
                                        Cops proportional to their officer ranking
                                    </p>
                                </div>

                                <div className='pb-4'>
                                    <h6>Unstake (FLEE LAB)</h6>
                                    <p>All $POWDER produced is claimed</p>
                                    <p className='risk' style={{paddingBottom: '1px'}}>
                                        RISK: 50% chance ALL $POWDER produced
                                        is seized by the Cops. Seized $POWDER
                                        is split among all staked Cops proportional
                                        to their officer ranking
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4  pb-4'>
                            <div className='cart ex_padding12 pt-2'>
                                <h5 className='text-center pb-2'>COPS</h5>
                                <p className='text-center pb-4'>
                                    You have a 15% chance to mint a cop
                                    Cops will have a total of 4 ranks
                                </p>

                                <div className='pb-4 ex_padding1'>
                                    <h6>Rankings:</h6>
                                    <p>Higher ranked cops will receive:</p>
                                    <p>- Higher amount of $powder from tax</p>
                                    <p>chance of arresting newly 
                                       minted NFTS
                                    </p>
                                </div>

                                <div className='pb-4 ex_padding11'>
                                    <h6>Staking (ON DUTY)</h6>
                                    <p>
                                        Only staked Cops are able to receive
                                        $POWDER from tax and arrest NFTs
                                    </p>
                                </div>

                                <div className='pb-4 ex_padding111'>
                                    <h6>Claiming</h6>
                                    <p>
                                        Receive all $POWDER tax accumulated
                                        by your staked Cop
                                    </p>
                                </div>

                                <div className='pb-4'>
                                    <h6>Unstake (OFF DUTY)</h6>
                                    <p className='mb-1'>
                                        Receive all $POWDER tax accumulated
                                        by your staked Cop
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 pb-3'>
                            <div className='cart pt-2'>
                                <h5 className='text-center'>$POWDER</h5>
                                <p className='text-center pb-4'>The maximum supply of $POWDER is 2,500,000,000</p>
                            
                                <div className='pb-2'>
                                    <h6>Allocations</h6>
                                    <p className=' ex_padding2'>
                                        300,000,000 $POWDER will be allocated
                                        to the team
                                    </p>
                                    
                                    <p className=' ex_padding3'>
                                        500,000,000 $POWDER will be reserved
                                        for community giveaways
                                    </p>

                                    <p className='ex_padding4'>
                                        1,700,000,000 $POWDER is available 
                                        through staking. Once all $POWDER is
                                        produced the lab will shut down
                                    </p>
                                </div>

                                <div className='pb-2'>
                                    <h6>Usage:</h6>
                                    <p>Mint a new NFT using $POWDER</p>
                                    <p>
                                        - There’s a 7.5% chance your NFT will be a Cop
                                    </p>
                                    <p className='risk'>
                                        RISK: 7.5% chance of the new NFT being
                                        arrested by a staked Cop. Higher ranked Cops
                                        have a higher chance to arrest NFTs 
                                    </p>
                                </div>

                                <div className='pb-1'>
                                    <h6>PHASE 2:</h6>
                                    <p>
                                        Claim land with $POWDER, each piece of land
                                        has different capabilities and will allow
                                        for the production of new resources
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Minting;