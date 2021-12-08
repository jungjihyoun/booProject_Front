import API from './API';
import axios from 'axios';
// 부캐 불러오기
const getSubcharacter = async (user_id, likeState) => {
  return await API.get(`/subCharacter/${user_id}`)
    .then(function (response) {
      console.log('글 불러오기', response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 다른 부캐 불러오기
const getOtherSubcharacter = async (user_id, setOtherBoo) => {
  return await API.get(`/subCharacter/otherboo/${user_id}`)
    .then(function (response) {
      console.log('다른 부캐 불러오기 @', response);
      setOtherBoo(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 좋아요 여부
const getLike = async (user_id, setLikePostList) => {
  return await API.get(`/subCharacter/likes/${user_id}`)
    .then(function (response) {
      setLikePostList(response.data);
      console.log('a', response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const postLike = async (user_id, subcharacter_id, likeState) => {
  return await API.post(`/subCharacter/likes/${user_id}/${subcharacter_id}`, {
    likeState: likeState,
  })
    .then(function (response) {
      console.log('글 저장 완료');
    })
    .catch(function (error) {
      console.log(error);
    });
};

const postSubCharacter = async (
  user_id,
  title,
  subtitle,
  goal,
  startDate,
  image,
  secret,
  navigate,
) => {
  var data = new FormData();
  data.append('title', title);
  data.append('goal', goal);
  data.append('subtitle', subtitle);
  data.append('startDate', startDate);
  data.append('secret', secret);
  if (image !== '') {
    data.append('file', image);
  }

  var config = {
    method: 'post',
    url: `http://localhost:8080/subCharacter/record/${user_id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      navigate();
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteSubCharacter = async (user_id, subcharacter_id) => {
  return await API.delete(`/subCharacter/post/${user_id}/${subcharacter_id}`)
    .then(function (response) {
      console.log('부캐릭터가 삭제되었습니다');
    })
    .catch(function (error) {
      console.log(error);
    });
};

const postImage = async (user_id, image) =>
  await axios.post(`http://localhost:8080/image/upload/${user_id}`, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export default {
  getSubcharacter,
  getOtherSubcharacter,
  postSubCharacter,
  deleteSubCharacter,
  getLike,
  postLike,
  postImage,
};
