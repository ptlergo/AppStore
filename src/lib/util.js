exports.debug = (obj) => {
  console.log(obj.msg + obj.term);

  return {
    msg: obj.msg,
    term: obj.term,
  };
};
