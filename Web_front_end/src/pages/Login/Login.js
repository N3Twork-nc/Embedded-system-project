import React, {useState, useEffect, } from 'react';
import * as styles from './styleLogin.js';
import { Link} from 'react-router-dom';
import { signin } from '../../api/signin.js';
import { useDispatch } from "react-redux"
import { loginSuccess } from '../../reducers/auth.js';
import {updateInfoUser} from "../../reducers/infoUser"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const info = useSelector(state=>state.infoUser);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await signin(username, password);
      if (response['status']=="200"){
        // setIsLoading(false);
        const auth=loginSuccess(response['token'])
        const acUpdateInfo=updateInfoUser(response['info'])
        dispatch(auth)
        dispatch(acUpdateInfo)
        navigate('/dashboard')
      }
      else 
      {
        alert('Tài khoản hoặc mật khẩu không chính xác!')
      }
    } catch (error) {
      console.error('Error while signing in:', error);
      alert('Quá trình đăng nhập đã xảy ra lỗi')
    }
  };

  useEffect(() => {
    document.title = 'Trang đăng nhập';
  }, []);

  return (
    <styles.LoginRoot>
      <styles.TableLogin>
        <styles.Title> Welcome to Plantaholic! </styles.Title>

        <styles.EmailContainer>
          <styles.TitleEmail>Email hoặc username</styles.TitleEmail> 
          <styles.InputEmailCon>
            <styles.ImgMail alt="" src="/email.png" />
                <styles.InputEmail
                  type="text"
                  placeholder="Nhập email hoặc username"
                  value={username}
                  onChange={handleUsernameChange}
                />
            </styles.InputEmailCon>
        </styles.EmailContainer>

        <styles.PassContainer>
          <styles.TitlePass>Mật khẩu</styles.TitlePass> 
            <styles.InputPassCon> 
                <styles.ImgPass alt="" src="/pass.png" />
                <styles.InputPass
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập vào mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                />
              <styles.Show onClick={handleShowPassword}> {showPassword ? 'Hide' : 'Show'}</styles.Show>
            </styles.InputPassCon>
        </styles.PassContainer>

        <styles.ForgotCon>
          <styles.RememberCheckbox type="checkbox" />
          <styles.Remember> Remember me</styles.Remember>
          <styles.Forgot>Forgot password?</styles.Forgot>
        </styles.ForgotCon>
        <Link>
          <styles.LoginButton onClick={handleSignIn}>Login</styles.LoginButton>
        </Link>
        

      </styles.TableLogin>
      <styles.ImgLeft alt="" src="/cover.jpg" />

    </styles.LoginRoot>
  );
};

export default Login;
