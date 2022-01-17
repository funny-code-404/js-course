import { contacts } from "../../App";

export const friendsInfoMaker = (arrFriends) => {
  return arrFriends.map((id) => {
    return contacts.find((contact) => id === contact.id);
  });
};
