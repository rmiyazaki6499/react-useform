import React from 'react';
import useForm from "./useForm";
import validate from './LoginValidationRules';

const Form = () => {
  const login = () => {
    console.log(values);
  }

  const { values, handleChange, handleSubmit, errors } = useForm(login, validate);

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className={`input ${errors.email && 'is-danger'}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ''}
                    required
                  />
                  { errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && 'is-danger'}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ''}
                    required
                  />
                  { errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
