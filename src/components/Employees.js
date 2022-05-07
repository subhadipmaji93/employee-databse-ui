import Employee from "./Employee";

const Employees = ({employees, onDelete})=>{
    
    return (
        <>
          {employees.map((emp)=>(
            <Employee key={emp.id} id={emp.id} employee={`${emp.first_name} ${emp.last_name}`} onDelete={onDelete}></Employee>
          ))}
        </>
    )
}

export default Employees;