import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployeesComponent() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
      console.log(res.data);
    });
  }, []);

  function handleAddEmployee() {
    navigate('/add-employee');
  }

  function handleEditEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function handleDeleteEmployee(id) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      EmployeeService.deleteEmployee(id).then((res) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
    }
  }

  return (
    <div>
      <h2 className='text-center'>Employee List</h2>
      <div>
        <button className='btn btn-primary' onClick={handleAddEmployee}>
          Add New
        </button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                {/* <td>{String(employee.active)}</td> */}
                <td><input type="checkbox" readOnly checked={employee.active}></input></td>
                <td>
                  <button className='btn btn-info' onClick={() => handleEditEmployee(employee.id)}>
                    Update
                  </button>
                  <button className='btn btn-danger' onClick={() => handleDeleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeesComponent;
