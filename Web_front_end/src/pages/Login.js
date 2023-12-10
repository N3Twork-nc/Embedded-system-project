import React, {useState, useEffect } from 'react';
import * as styles from './styleLogin';

const Login = () => {
  return (
    <styles.LoginRoot>
      <styles.TableLogin>
        <styles.Title> Welcome to Plantaholic! </styles.Title>

        <styles.EmailContainer>
          <styles.TitleEmail>Email hoặc username</styles.TitleEmail> 
          <styles.InputEmail
            type="text"
            placeholder="Nhập email hoặc username"
          />
        </styles.EmailContainer>

        <styles.PassContainer>
          <styles.TitlePass>Mật khẩu</styles.TitlePass> 
          <styles.InputPass
            type="text"
            placeholder="Nhập vào mật khẩu"
          />
        </styles.PassContainer>

        <styles.ForgotCon>
          <styles.RememberCheckbox type="checkbox" />
          <styles.Remember> Remember me</styles.Remember>
          <styles.Forgot>Forgot password?</styles.Forgot>
        </styles.ForgotCon>

        <styles.LoginButton>Login</styles.LoginButton>

      </styles.TableLogin>
      <styles.ImgLeft alt="" src="/cover.jpg" />

    </styles.LoginRoot>
  );
};

export default Login;
