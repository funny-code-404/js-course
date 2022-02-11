import contacts from "../constants/index";

const friendFinder = (indexArr) => {
  const arrOfFriends = [];
  let i = 0;
  for (let index of indexArr) {
    contacts.forEach((item) => {
      if (item.id === index) {
        arrOfFriends[i] = {
          name: item.name,
          surName: item.surName,
          id: item.id,
          phoneNumber: item.phoneNumber,
        };
        i++;
      }
    });
  }
  console.log(arrOfFriends);
  return arrOfFriends;
};

export default friendFinder;
