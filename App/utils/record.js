import API from './API';

// 글 불러오기
const getRecord = async (user_id, post_id) => {
  return await API.get(`/record/${user_id}/${post_id}`)
    .then(function (response) {
      console.log('글 불러오기', response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 다른 유저 글 불러오기
const getOtherPost = async (user_id, setOtherRecord) => {
  return await API.get(`/record/other/${user_id}`)
    .then(function (response) {
      console.log('다른 유저 글 불러오기', response);

      setOtherRecord(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 글쓰기
const postRecord = async (
  user_id,
  subcharacter_id,
  content,
  feeling,
  secret,
) => {
  return await API.post(`/record/post/${user_id}/${subcharacter_id}`, {
    content: content,
    feeling: feeling,
    secret: secret,
  })
    .then(function (response) {
      console.log('글 저장 완료');
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 글 석제
const deleteRecord = async (user_id, subcharacter_id) => {
  return await API.delete(`/record/post/${user_id}/${subcharacter_id}`)
    .then(function (response) {
      console.log('부캐릭터가 삭제되었습니다');
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 좋아요
const postLike = async (user_id, post_id, likeState) => {
  return await API.post(`/record/likes/${user_id}/${post_id}`, {
    likeState: likeState,
  })
    .then(function (response) {
      console.log('글 저장 완료');
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 좋아요 여부
const getLike = async (user_id, likePostList) => {
  return await API.get(`/record/likes/${user_id}`)
    .then(function (response) {
      likePostList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default {
  getRecord,
  getOtherPost,
  postRecord,
  deleteRecord,
  postLike,
  getLike,
};
