import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import IconError from "../images/icon-error.svg";

// import * as React from "react";
// https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
// https://flaviocopes.com/how-to-validate-email-address-javascript/

const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const StyledForm = styled.form`
  fieldset {
    padding: 0 2rem;
    overflow: visible;
    border: none;
  }

  input {
    padding: 1em 1.8em 0.9em;
    font-size: 14px;
    color: hsl(0, 36%, 70%);
    border: 1px solid hsl(0, 36%, 70%);
    border-radius: 28px;
    width: 95%;
    background-color: #fff4f4;

    :focus {
      color: hsl(0, 6%, 24%);
    }
  }

  .inputError {
    border: 2px solid red;
    padding: 1em 1.8em 0.9em;
    background: url(${IconError}) no-repeat 205px center;

    @media only screen and (min-width: 1440px) {
      padding: 1em 1.8em 0.9em;
      background: url(${IconError}) no-repeat 260px center;
    }
  }

  button {
    padding: 1em 1.7em 0.5em;
    position: relative;
    top: 6px;
    border-radius: 50px;
    background-image: linear-gradient(
      135deg,
      hsl(0, 80%, 86%),
      hsl(0, 74%, 74%)
    );
    border: none;
    margin-left: -17%;
    -webkit-box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);
    -moz-box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);
    box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);

    :hover,
    :focus,
    :active {
      background-image: linear-gradient(
        135deg,
        hsl(0, 80%, 86%),
        hsl(0, 82%, 86%)
      );
    }
  }
`;

const EmailInput = () => {
  const stateSchema = {
    email: { value: "", error: "" },
  };

  // define stateValidationSchema
  // stateSchema properties should be the same as stateValidationSchema
  // in order for validation to work for the input.
  const stateValidationSchema = {
    email: {
      required: true,
      validator: {
        regEx: expression,
        error: "Please provide a valid email.",
      },
    },
  };

  // Usually we placed here the api for handling form submission
  function onSubmitForm(state) {
    // alert(JSON.stringify(state, null, 2));
    alert(state.email.value);
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    stateValidationSchema,
    onSubmitForm
  );

  const windowWidth = document.documentElement.clientWidth;

  const errorStyle = {
    color: "red",
    fontSize: "13px",
    padding: windowWidth > 1439 ? ".65em 0 0 2.5em" : ".65em 0 0 4.5em",
    textAlign: "left",
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <fieldset>
        <label htmlFor="email">
          <input
            value={state.email.value}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleOnChange}
            className={state.email.error ? "inputError" : ""}
          />
        </label>

        <button type="submit" name="submit" disable={disable}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </fieldset>
      {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
    </StyledForm>
  );
};

export default EmailInput;
