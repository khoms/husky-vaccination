import React, { useState, useEffect } from "react";

// import axios from "axios";

const Appointment = (props) => {
  const [appointmentList, setAppointmentList] = useState();

  const getAppointments = async () => {
    fetch("http://192.168.1.164:3000/api/appointment")
      .then((res) => res.json())
      .then((appointment) => {
        console.log(appointment);
        setAppointmentList(appointment.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // const response = await axios.get("http://localhost:3000/api/appointment");
    // console.log(response);
    // if (response.ok) {
    //   console.log("ok send");
    // }
    // const data = await response.json();
    // setAppointmentList(data);
    // console.log(data);
  };

  useEffect(() => {
    getAppointments();

    // fetch("http://localhost:3000/api/appointment")
    //   .then((res) => res.json())
    //   .then((appointment) => {
    //     console.log(appointment);
    //     setAppointmentList(appointment.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const link = "192.168.1.164:3000/api/appointment";
    // fetch(link)
    //   .then((res) => res.json())
    //   .then((appointment) => {
    //     console.log(appointment);
    //     setAppointmentList(appointment.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="appointment-screen">
      <h1 className="h1-title">Manage Apppoinments</h1>
      <div className="appointment-table">
        <table>
          <thead className="item-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody> */}
          {/* {contacts.map((contact) => (
            <Fragment>
              
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
            </Fragment>
          ))}
        
        </tbody> */}
          {appointmentList
            ? appointmentList.map((appointment) => (
                <tbody className="item-center">
                  <tr>
                    <td>{appointment.useerName}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.phone}</td>

                    <td>
                      <button
                        type="button"
                        //   onClick={(event) => handleEditClick(event, contact)}
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            : null}
        </table>
        {appointmentList ? null : (
          <h2>All the appointents have been reviewed</h2>
        )}
      </div>
    </div>
  );
};

export default Appointment;
