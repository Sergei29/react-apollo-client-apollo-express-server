import React, { useState } from "react";
import { login } from "../../utils/auth";

type StateType = {
  email: string;
  password: string;
  error: boolean;
};

type Props = {
  onLogin: () => void;
};

const LoginForm = ({ onLogin }: Props): JSX.Element => {
  const [state, setState] = useState<StateType>({
    email: "",
    password: "",
    error: false,
  });
  const { email, password, error } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = state;
    login(email, password).then((ok) => {
      if (ok) {
        onLogin();
      } else {
        setState((prevState) => ({
          ...prevState,
          error: true,
        }));
      }
    });
  };

  return (
    <form>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <p className="help is-danger">{error && "Invalid credentials"}</p>
        <div className="control">
          <button className="button is-link" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
