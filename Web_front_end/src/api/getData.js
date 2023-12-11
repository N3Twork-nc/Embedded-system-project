export const signin = async (username, password) => {
    try {
      const data = {
        username: username,
        password: password
      };
      const response = await axios.post(IPServer+'APIsignin', data)
      const info=response.data['info'];
      const token = response.data['token'];
      const status = response.status;
      console.log(status)
      return {status,token,info};
    }
    catch (error){
      const status=error.response.status
      console.log(status)
      return {status,token:"null",info:'null'};
    }
  };