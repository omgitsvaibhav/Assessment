import React, { useEffect, useState } from "react";
import strongPassword from "./RegExp";
import PasswordCheckList from "./PasswordCheckList";
import axios from "axios";


export default function PasswordCheck() {
  const [isValid, SetisValid] = useState(false);
  const [passwordText, SetpasswordText] = useState("");
  const [passwordSteps, SetpasswordSteps] = useState(0);
  const [passwordValue, SetpasswordValue] = useState("");

  useEffect(() => {
    SetisValid(strongPassword.test(passwordValue));
    if (isValid) {
      SetpasswordText("Strong password");
      //console.log(passwordText);
      SetpasswordSteps(0);
      //console.log(passwordSteps);
    } else {
      SetpasswordSteps(0);
      SetpasswordText("Weak password");
      //console.log(passwordText);
      if (!/(?=.*[0-9])/.test(passwordValue))
        SetpasswordSteps((passwordSteps) => passwordSteps + 1);
      if (!/(?=.*[a-z])/.test(passwordValue))
        SetpasswordSteps((passwordSteps) => passwordSteps + 1);
      if (!/(?=.*[A-Z])/.test(passwordValue))
        SetpasswordSteps((passwordSteps) => passwordSteps + 1);
      if (!/(?=.*[^A-Za-z0-9])/.test(passwordValue))
        SetpasswordSteps((passwordSteps) => passwordSteps + 1);
      if (passwordValue.length < 6)
        SetpasswordSteps((passwordSteps) => passwordSteps + 1);
      if (passwordValue.length > 6 && /(.)\1\1/.test(passwordValue)) {
        SetpasswordText(
          "Password should not contain 3 consecutive repeating characters"
        );
        //console.log(passwordText);
      }
      if (passwordValue.length > 20) {
        SetpasswordText("Password length should be between 6 to 20 characters");
        //console.log(passwordText);
      }
    }
  }, [isValid, passwordValue, passwordSteps, passwordText]);

  function HandlePassword(event) {
    SetpasswordValue(event.target.value);
  }

  function handleSubmit() {
    axios
      .post("http://localhost:8000/api/v1/password/storepassword", {
        password: passwordValue,
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(`error occurred in saving password: ${error}`);
      });
  }

  return (
    <div className="password-container">
      <form>
        <div className="password-input">
          <label>Password</label>
          <input
            type="password"
            id="passwordinput"
            onChange={HandlePassword}
            required
          />
        </div>
        <div id="Password-validator">
          {passwordValue.length === 0 && (
            <p>Enter password to check validity</p>
          )}
          {passwordValue.length > 0 && <p>{passwordText}</p>}
        </div>
        <div id="password-steps">
          {isValid && <p>Steps: {passwordSteps}</p>}
          {passwordSteps > 0 && !isValid && <p>Steps: {passwordSteps}</p>}
        </div>
        <div className="save-password">
          <button disabled={!isValid} onClick={handleSubmit}>Save</button>
        </div>
      </form>
      <PasswordCheckList />
    </div>
  );
}
