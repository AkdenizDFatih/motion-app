import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthForm,
  ErrorMessage,
  FormTitle,
  InputFieldContainer,
} from "./AutenthicationLayout.style.js";
import { AuthFormContainer } from "./AutenthicationLayout.style";
import useApiRequest from "../../hooks/useApiRequest.js";
import { PrimaryButton } from "../../styles/globalStyles";
import InputField from "./InputField";
import CreateAccountProgress from "./CreateAccountProgress.jsx";

const VerificationSection = () => {
  const registeredEmail = localStorage.getItem("registered_email");
  const [userData, setUserData] = useState({ email: registeredEmail });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const { sendRequest, error, data } = useApiRequest({ auth: false });

  const handleValidationSubmit = (e) => {
    e.preventDefault();
    sendRequest("patch", "auth/registration/validation/", userData);
  };

  useEffect(() => {
    if (data === "success") {
      navigate("/");
      localStorage.removeItem("registered_email");
    }
  }, [data]);

  return (
    <>
      <AuthFormContainer>
        <AuthForm className="activation-form" cols={2}>
          <div className="input-container">
            <FormTitle>Verification</FormTitle>
            <InputField
              placeholder="Validation Code"
              error={error}
              type="text"
              userData={userData}
              id={"code"}
              handleInput={handleInput}
              span={2}
            />

            <InputField
              type="email"
              userData={userData}
              id={"email"}
              error={error}
              handleInput={handleInput}
              label={"E-mail"}
            />

            <InputField
              userData={userData}
              id={"username"}
              error={error}
              handleInput={handleInput}
              label={"Username"}
            />

            <InputField
              label="First Name"
              userData={userData}
              error={error}
              handleInput={handleInput}
              id={"first_name"}
            />
            <InputField
              label="Last Name"
              userData={userData}
              error={error}
              id={"last_name"}
              handleInput={handleInput}
            />

            <InputField
              userData={userData}
              label="Password"
              error={error}
              id={"password"}
              handleInput={handleInput}
              type={"password"}
            />

            <InputField
              userData={userData}
              label="Repeat Password"
              error={error}
              id={"password_repeat"}
              handleInput={handleInput}
              type={"password"}
            />
            {error?.non_field_errors && (
              <ErrorMessage>{error.non_field_errors}</ErrorMessage>
            )}
            {error?.detail && <ErrorMessage>{error.detail}</ErrorMessage>}
          </div>
          <div>
            <InputFieldContainer span={2}>
              <PrimaryButton onClick={handleValidationSubmit}>
                Complete
              </PrimaryButton>
            </InputFieldContainer>
            <CreateAccountProgress step={3} />
          </div>
        </AuthForm>
      </AuthFormContainer>
    </>
  );
};

export default VerificationSection;
