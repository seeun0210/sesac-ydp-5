const Comment = require('../model/Comment'); //controller<-model
exports.main = (req, res) => {
  res.render('index');
}; //각각의함수들을 만듦과 동시에 exports하고있다.
exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.getCommentAll() });
};
exports.comment = (req, res) => {
  const cmtId = Number(req.params.id);
  const comments = Comment.getCommentAll(); //댓글 목록 배열
  if (!comments[cmtId - 1]) {
    return res.render('404');
  }
  res.render('comment', { comment: comments[cmtId - 1] });
};
