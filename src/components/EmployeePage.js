import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EmployeePage = ()=>{
    const {id} = useParams();
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState();

    // useEffect(()=>{
    //     const getData = async (id)=>{
    //         const dataFromServer = await fetchData(id);
    //         setData(dataFromServer);
    //     };

    //     getData();
    // }, [id]);

    // get Employee data from backend
    // const fetchData = async (id)=>{
    //     const res = await fetch(`http://127.0.0.1:8000/api/employee/${id}`);
    //     const data = await res.json();
    //     return data;
    // }; 
    
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/employee/${id}`, {})
        .then((res=>res.json()))
        .then((response)=>{
            setData({...response[0]});
            setIsloading(false);
        })
        .catch((error)=>console.log(error));
    }, [id]);

    return (
        <>
            {!isLoading && (
                <div className="emp-table">
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <th>First Name:</th>
                            <td>{data.first_name}</td>
                        </tr>
                        <tr>
                            <th>Last Name:</th>
                            <td>{data.last_name}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{data.email}</td>
                        </tr>
                        <tr>
                            <th>Phone No:</th>
                            <td>{data.phone}</td>
                        </tr>
                        <tr>
                            <th>Organization:</th>
                            <td>{data.organization}</td>
                        </tr>
                        <tr>
                            <th>Designation:</th>
                            <td>{data.designation}</td>
                        </tr>
                        <tr>
                            <th>Salary:</th>
                            <td>{data.salary}</td>
                        </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            )}
            <Link to="/">Go Back</Link>
        </>
    );
};

export default EmployeePage;