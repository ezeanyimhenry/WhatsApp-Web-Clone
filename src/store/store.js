const makeid = (length) => {
  var result = "";
  var characters = "123456789123456789123456789123456789123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
//
export const chatRooms = [
  {
    id: 1,
    name: "user1",
    profile_image: "https://robohash.org/1?set=set2&&size=180x180"
  },
  {
    id: 2,
    name: "user2",
    profile_image: "https://robohash.org/2?set=set2&&size=180x180"
  },
  {
    id: 3,
    name: "user3",
    profile_image: "https://robohash.org/3?set=set2&&size=180x180"
  },
  {
    id: 4,
    name: "user4",
    profile_image: "https://robohash.org/4?set=set2&&size=180x180"
  },
  {
    id: 5,
    name: "user5",
    profile_image: "https://robohash.org/5?set=set2&&size=180x180"
  }
];
export const chats = [
  {
    id: makeid(12),
    chatid: 1,
    messages: [
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      }
    ]
  },
  {
    id: makeid(12),
    chatid: 2,
    messages: [
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      }
    ]
  },
  {
    id: makeid(12),
    chatid: 3,
    messages: [
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      }
    ]
  },
  {
    id: makeid(12),
    chatid: 4,
    messages: [
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      }
    ]
  },
  {
    id: makeid(12),
    chatid: 5,
    messages: [
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "receiver",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      },
      {
        type: "sender",
        msg: "Salesforce B2B Commerce offers buyers the seamless"
      }
    ]
  }
];
