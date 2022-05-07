import {FaTimes} from 'react-icons/fa';
import { useHistory } from 'react-router';
const Employee = ({employee, onDelete, id})=>{
   const history = useHistory();

   const handleRoute = ()=>{
    //    console.log('open', id);
       history.push(`/employee/${id}`);
   };
    return (
        <div className="employee" id={id} onDoubleClick={handleRoute}>
            <h3>{employee}<FaTimes style={{color:'red'}} onClick={()=>onDelete(id)}></FaTimes></h3>
            
        </div>
    );
};

export default Employee;