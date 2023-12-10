import styled from "styled-components";

export const LoginRoot = styled.div`
  position: absolute;
  background-color: #ebffe2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImgLeft = styled.img`
  position: absolute;
  top: 13%;
  left: 11%;
  width: 35%;
  height: 75%;
  object-fit: cover;
`;
export const TableLogin = styled.div`
  background-color: #fff;
  position: absolute;
  height: 75%;
  width: 40%;
  top: 13%;
  right: 2.81%;
  bottom: 15.67%;
  left: 45.62%;
`;

export const Title = styled.div`
    position: relative;
    left: 50px;
    padding: 10px;
    top: 10px;
    font-size: 40px;
    font-family: 'Roboto'; 
    font-weight: bold; 
`;
export const EmailContainer = styled.div`
    font-family: 'Poppins'; 
    position: relative;
    margin-top:8%;
    left: 10%;
    height: 15%;
    width: 80%;
`;
export const TitleEmail = styled.div`
    position: relative;
    font-size: 20px;
    font-family: 'Roboto'; 
`;
export const InputEmail = styled.input`
    margin-top: 1%;
    background-color: #EBFFE2;
    height: 55%;
    width: 80%;
    position: absolute;
    height: 70%;
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Roboto';  
    padding-left: 17px;
    border: none;
`;

// export const ImgMail = styled.img`
//     position: absolute;
//     height: 80%;
//     width: 12%;
//     z-index:1;
// `;

export const PassContainer = styled.div`
    font-family: 'Roboto'; 
    position: relative;
    margin-top: 7%;
    left: 10%;
    height: 15%;
    width: 80%;
`;
export const TitlePass = styled.div`
    position: relative;
    font-size: 20px;
    font-family: 'Roboto'; 
`;
export const InputPass = styled.input`
    border: none; 
    background-color: #EBFFE2;
    height: 55%;
    width: 80%;
    position: absolute;
    height: 70%;
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Roboto'; 
    padding-left: 17px;
    margin-top: 1%;
`;
export const ForgotCon = styled.div`
    font-family: 'Roboto'; 
    position: relative;
    margin-top: 4%;
    left: 11%;
    height: 5%;
    width: 85%;
`;
export const RememberCheckbox = styled.input`
  position: absolute;
`;

export const Remember = styled.div`
    position: absolute;
    font-size: 15px;
    font-family: 'Roboto';
    left: 20px;
`;
export const Forgot = styled.div`
    color: #166D29;
    position: absolute;
    font-size: 15px;
    font-family: 'Roboto'; 
    margin-left: 75%;
`;
export const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 25px;
  color: #fff;
  width: 82%;
  height: 12%;
  border: none;
  border-radius: 8px;
  background: #166D29;
  margin-top: 23px; 
  margin-left: 10%;
  font-weight: 700;
`;
