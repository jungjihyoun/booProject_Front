import API from './API';

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
const getLike = async (user_id, likePostList) => {
  return await API.get(`/subCharacter/likes/${user_id}`)
    .then(function (response) {
      likePostList(response.data);
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

const postSubCharacter = async (user_id, title, subtitle, goal, startDate) => {
  return await API.post(`/subCharacter/record/${user_id}`, {
    title: title,
    subtitle: subtitle,
    goal: goal,
    startDate: startDate,
  })
    .then(function (response) {
      console.log('부캐릭터 저장 완료', response.data);
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

export default {
  getSubcharacter,
  getOtherSubcharacter,
  postSubCharacter,
  deleteSubCharacter,
  getLike,
  postLike,
};
