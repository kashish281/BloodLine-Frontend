import React from "react";
import Form from "../../components/Shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/Shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
           
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner11.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
          <div className="text-center">
          

              {/* Blood-Bank Heading */}
              
             
            </div>

            <Form
              formTitle={"Login Here!"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
