import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {
  const navigate = useNavigate();
  const { id } = useParams(); // Extract ID parameter from URL
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isActive: ''
  });

  useEffect(() => {
    if (id) {
      // Fetch employee data by ID if ID is provided in the URL
      EmployeeService.getEmployeesById(id).then(res => {
        res.data.isActive = Boolean(res.data.active);
        setEmployee(res.data);
      });
    }
  }, [id]);

  useEffect(() => {
    document.title = id ? "Edit Employee" : "Add Employee";
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: type === 'checkbox' ? Boolean(checked) : value
    }));
    console.log("Checked value: " + checked)
  }

  const saveEmployee = (e) => {
    e.preventDefault();
    employee.active = employee.isActive;
    console.log("Employee Data:" + JSON.stringify(employee));
    if (id === undefined) {
        EmployeeService.createEmployee(employee).then(res => {
            navigate('/');
        })
    } else {
        console.log("Updated checked value: " + employee.isActive)
        EmployeeService.updateEmployee(id, employee).then(res => {
            navigate('/');
        })
    }
    
  }

  const cancel = () => {
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className=' card col-md-6 offset-md-3'>
          <h3 className='text-center'>{id ? 'Edit Employee' : 'Add Employee'}</h3>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>First Name: </label>
                <input placeholder='first name' name='firstName' className='form-control' value={employee.firstName} onChange={handleChange}/>
                <label>Last Name: </label>
                <input placeholder='last name' name='lastName' className='form-control' value={employee.lastName} onChange={handleChange}/>
                <label>Email: </label>
                <input placeholder='email address' name='email' className='form-control' value={employee.email} onChange={handleChange}/>
                <label>Active: <input type='checkbox' name='isActive' className='form-check' checked={employee.isActive} onChange={handleChange} /></label>
              </div>
              <div>
                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                <button className='btn btn-danger' onClick={cancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
