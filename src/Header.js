import React from 'react';
import{useContext} from 'react';
import  DataContext  from './context/DataContext';


const Header = () => {
    const { selectedTeam, teamMemberCount } = useContext(DataContext);
    return (
        <header className='container'>
            <div className='row justify-content-center mt-3 mb-4'>
                <div className='col-8'>
                    <h1 className='mt-4 p5 ' >Team Member Allocation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'Member':'Members'}</h3>
                </div>
            </div>
        </header>
    );
}


export default Header;