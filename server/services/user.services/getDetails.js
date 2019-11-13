import Users from '../../models/user.model';

const handleRequest = (userId, callback) => {
  Users.findOne({ _id: userId }).exec((err, result) => {
    if (err || result == null) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

export default {
  handleRequest,
};