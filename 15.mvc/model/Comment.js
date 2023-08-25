// // (임시) DB로부터 받아온 댓글 목록
// db에서 전체 댓글 목록을 받아왔다고 가정
exports.getCommentAll = () => {
  return [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
    {
      id: 5,
      userid: 'apple',
      date: '2022-11-02',
      comment: '우와!!!!!',
    },
  ];
};
