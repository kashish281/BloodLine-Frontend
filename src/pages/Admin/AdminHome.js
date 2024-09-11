import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr/>
          <p>
          The Blood Bank MERN project is a full-stack web application designed to streamline the process of blood donation and management. Built using the MERN stack, it offers a comprehensive platform for blood banks, donors, and recipients. Key features include user authentication and registration, where donors and recipients can create profiles, manage their information, and track donation history. The application allows users to search for available blood types, request donations, and view their request status in real-time. For blood bank administrators, it provides tools to manage blood inventory, process donation requests, and maintain records. With an intuitive interface, robust backend, and seamless integration of front-end and back-end technologies, the Blood Bank project aims to make blood donation more accessible, efficient, and transparent for all users.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
