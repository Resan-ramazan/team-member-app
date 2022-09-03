import TeamMemberCard from "./TeamMemberCard";
import { useContext } from "react";
import  DataContext  from "./context/DataContext";

const TeamMembers = () => {
    const { employees, selectedTeam,handleEmployeeCardClick } = useContext(DataContext);
    return (
        employees.map((employee) => (
            <TeamMemberCard key={employee.id} employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
        )
        )
    )
}


export default TeamMembers;