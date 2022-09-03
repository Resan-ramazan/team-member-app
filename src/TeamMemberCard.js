import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'
import { useContext } from 'react'
import  DataContext  from './context/DataContext'

const TeamMemberCard = ({ employee }) => {
    const { handleEmployeeCardClick,selectedTeam } = useContext(DataContext);
return (
        <div className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} id={employee.id}
            key={employee.id}
            onClick={handleEmployeeCardClick}>
            {employee.gender === "female" ? <img className='card-img-top' src={femaleProfile} />
                : <img className='card-img-top' src={maleProfile} />}
            

            <div className='card-body'>
                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                <p className='card-text'><b>Designation:</b> {employee.designation}</p>
            </div>
        </div>
    )

}


export default TeamMemberCard;