import API from './API';

// 로그인
const login = async (user_id, password, navigate, dispatch) => {
  return await API.post(`/auth/login/${user_id}/${password}`)
    .then(function (response) {
      console.log('Login Success', response.data.userCode);

      dispatch({
        type: 'setCode',
        userID: response.data.userCode,
      });

      navigate;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default {
  login,
};
