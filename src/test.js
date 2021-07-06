const { produce } = require("immer");
const { Map, Seq } = require("immutable");

const userInfo = {
  name: "Eric",
};

function userChanger(user) {
  return produce(user, (draft) => {
 (draft.isAdmin = "YES");
  });
}

const newUserIndo = userChanger(userInfo);
console.log(newUserIndo);
console.log(userInfo);
