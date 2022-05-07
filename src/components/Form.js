import  {useState} from 'react';


const Form = ({onAdd})=>{
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [status, setStatus] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!first_name){
            alert('please give a name');
            return;
        }
        onAdd({first_name, last_name, email, phone, organization, designation, salary, status});
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setOrganization('');
        setDesignation('');
        setSalary('');
        setStatus(false);

    };
    return (<>
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>First Name :</label>
                <input type='text' placeholder='First Name' value={first_name} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Last Name :</label>
                <input type='text' placeholder='Last Name' value={last_name} onChange={(e)=>setLastName(e.target.value)}></input>
            </div>
            <div className="form-control"><label>Email :</label><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
            <div className="form-control">
                <label>Phone No :</label>
                <input type='tel' placeholder='Phone No:' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
            <div className="form-control"><label>Organization :</label><input type="text" placeholder="Organization" value={organization} onChange={(e)=>setOrganization(e.target.value)}/></div>
            <div className="form-control"><label>Designation :</label><input type="text" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)}/></div>
            <div className="form-control"><label>Salary :</label><input type="text" placeholder="Salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/></div>
            <div className="form-control"><label>Status :</label><input type="checkbox" placeholder="" value={status} onChange={(e)=>setStatus(e.currentTarget.checked)}/></div>
            <input className='btn btn-block' type='submit' value='Save Data'></input>
        </form>
        </>
    );
};

export default Form;