import React, { useState } from 'react';
import Modal from 'react-modal';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthService from '../../services/auth.service';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  /*
  this.setState({
    message: '',
    loading: true
  });

  this.form.validateAll();

  if (this.checkBtn.context._errors.length === 0) {
    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push('/profile');
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  } else {
    this.setState({
      loading: false
    });
  }*/
};

export default function LoginModal(props) {
  const [modalOpen, setModalOpen] = useState(props.display);
  const [userName, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form onSubmit={handleLogin} ref={(c) => {}}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={userName}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={(c) => {}} />
          </Form>
        </div>
      </div>
    </Modal>
  );
}
