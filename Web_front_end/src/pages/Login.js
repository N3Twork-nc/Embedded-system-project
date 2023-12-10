import React, {useState, useEffect } from 'react';
import * as styles from './styleLogin';
import { Link } from 'react-router-dom';
import { signin } from '../api/signin.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await signin(username, password);
      // Nếu thành công, thực hiện đổi hướng hoặc các hành động khác
    } catch (error) {
      console.error('Error while signing in:', error);
    }
  };

  return (
    <styles.LoginRoot>
      <styles.TableLogin>
        <styles.Title> Welcome to Plantaholic! </styles.Title>

        <styles.EmailContainer>
          <styles.TitleEmail>Email hoặc username</styles.TitleEmail> 
          <styles.InputEmail
            type="text"
            placeholder="Nhập email hoặc username"
            value={username}
            onChange={handleUsernameChange}
          />
        </styles.EmailContainer>

        <styles.PassContainer>
          <styles.TitlePass>Mật khẩu</styles.TitlePass> 
          <styles.InputPass
            type="text"
            placeholder="Nhập vào mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
        </styles.PassContainer>

        <styles.ForgotCon>
          <styles.RememberCheckbox type="checkbox" />
          <styles.Remember> Remember me</styles.Remember>
          <styles.Forgot>Forgot password?</styles.Forgot>
        </styles.ForgotCon>
        <Link to='/dashboard'>
          <styles.LoginButton onClick={handleSignIn}>Login</styles.LoginButton>
        </Link>
        

      </styles.TableLogin>
      <styles.ImgLeft alt="" src="/cover.jpg" />

    </styles.LoginRoot>
  );
};

export default Login;
