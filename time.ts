// const time = new Date();
// console.log(time.getHours())
// console.log(time.getMinutes())

// var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
// var myDate = new Date().toTimeString().replace(/(\d{2}:\d{2}).*/, '$1');
// console.log(myDate)

// const time = new Date().toTimeString().replace(/(\d{2}:\d{2}).*/, '$1');

// const time = new Date();
// console.log(time.toTimeString());

// const myTime = new Date('2019-04-02T06:51:37.112Z');
// const date = new Date('Tue Apr 02 2019 09:51:37 GMT+0300 (Восточная Европа (лето))');

// console.log(myTime.toTimeString());
// console.log(date.getFullYear());

// interface UserInfo {
//   id: number;
//   first_name: string;
//   last_name: string;
//   gender: string;
//   avatar: string;
// }

// interface ThisDialogUsers {
//   [key: number]: UserInfo | null;
// }

// const thisDialogUsers = {};

// thisDialogUsers["1"] =
//   {
//     id: 29,
//     first_name: "adeline",
//     last_name: "willimont",
//     gender: "Female",
//     avatar: null
//   } || null;

//   thisDialogUsers["2"] = null;

//   console.log(thisDialogUsers);
//   console.log(thisDialogUsers['3']);
//   if (thisDialogUsers["2"]) {
//     console.log('жопа');
//   }
//   console.log(thisDialogUsers['2'] ? 'true' : "false");

var options = {
  // era: 'long',
  // year: 'numeric',
  // month: 'long',
  // day: 'numeric',
  // weekday: 'long',
  // timezone: 'UTC',
  hour12: false,
  hour: "numeric",
  minute: "numeric"
  // second: 'numeric'
};

// const getDate = (date: string): void => {
//   const currentDate = new Date();
//   const dateOfMessage = new Date(date);
//   if ()
// };

// const getFormatedDate = (pastDateString) => {
//   const currentDate = new Date();
//   const pastDate = new Date(pastDateString);

//   const dateFormatters = [
//     {
//       diff: (currentDate, pastDate) =>
//         currentDate.getFullYear() - pastDate.getFullYear() > 0,
//       options: { year: "numeric" }
//     },
//     {
//       diff: (currentDate, pastDate) =>
//         currentDate.getDay() - pastDate.getDay() > 0,
//       options: {
//         hour12: false,
//         hour: "numeric",
//         minute: "numeric",
//         month: "long",
//         day: "numeric"
//       }
//     }
//   ];

//   const todayFormatter = { hour12: false, hour: "numeric", minute: "numeric" };
//   const formatter = dateFormatters.find(({ diff }) => diff(currentDate, pastDate));
//   const options = formatter ? formatter.options : todayFormatter;

//   return pastDate.toLocaleString("en", options)
// };

// console.log(getFormatedDate("2018-04-01T14:16:10.990Z"));

const messages = [{
  "id": "32689394-84b4-4720-8531-8b07d551ef02",
  "user_id": 3,
  "text": "nisi vulputate nonummy maecenas tincidunt lacus at velit",
  "date": "2018-12-21T19:06:45Z"
}, {
  "id": "a4a0191c-2237-45ea-aded-21ceacde379a",
  "user_id": 3,
  "text": "orci mauris lacinia sapien quis libero nullam",
  "date": "2018-11-21T02:07:53Z"
}, {
  "id": "361e4323-214a-40a0-972d-2eb0b8804033",
  "user_id": 1,
  "text": "et tempus semper",
  "date": "2019-03-09T17:27:53Z"
}, {
  "id": "d158bb84-a8b8-42af-9c5c-bc8e325abe50",
  "user_id": 1,
  "text": "lacinia",
  "date": "2019-01-31T16:28:38Z"
}, {
  "id": "0582dab2-12e6-4b64-a343-e1460fca7e99",
  "user_id": 4,
  "text": "at",
  "date": "2019-02-22T23:11:07Z"
}, {
  "id": "723ec613-6a3d-46ee-8651-b133f89a0e2e",
  "user_id": 1,
  "text": "sapien sapien non mi integer ac neque duis bibendum morbi non",
  "date": "2019-01-03T11:59:32Z"
}, {
  "id": "e4b32919-8e21-4b56-a987-cb8f9f57de79",
  "user_id": 4,
  "text": "curabitur in libero ut massa volutpat",
  "date": "2018-11-13T21:14:55Z"
}, {
  "id": "76f4f8b0-0df5-4192-900d-a172b2e76aea",
  "user_id": 2,
  "text": "quis augue luctus tincidunt nulla mollis",
  "date": "2019-01-12T10:51:06Z"
}, {
  "id": "e7f2e0af-1168-46ad-8279-e7eccd60f83a",
  "user_id": 3,
  "text": "in libero ut massa volutpat convallis",
  "date": "2019-01-09T09:55:57Z"
}, {
  "id": "edb9de36-9fc4-4e68-9e1d-a283286a36d3",
  "user_id": 4,
  "text": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
  "date": "2019-03-27T07:44:08Z"
}, {
  "id": "e5a4701d-e7be-4709-ab0f-a924c5fb9504",
  "user_id": 4,
  "text": "at velit eu est congue elementum in hac habitasse platea",
  "date": "2018-09-07T06:08:53Z"
}, {
  "id": "8a71e5a1-afb5-43c8-899e-3892b23889a0",
  "user_id": 3,
  "text": "morbi a",
  "date": "2018-10-29T15:42:32Z"
}, {
  "id": "7f99f83a-9bfc-40b8-b3bb-6b45c436f3b9",
  "user_id": 3,
  "text": "augue luctus tincidunt nulla mollis molestie lorem",
  "date": "2018-12-15T05:39:20Z"
}, {
  "id": "40e984d1-d591-4e39-a276-fd90e9a1e9d4",
  "user_id": 3,
  "text": "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
  "date": "2018-11-13T19:53:50Z"
}, {
  "id": "bdf3f9d5-6a56-4afe-8c87-76f856286f56",
  "user_id": 4,
  "text": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
  "date": "2019-03-27T20:20:10Z"
}, {
  "id": "1ad628f8-d2cf-431a-a4f6-f94f3183ec46",
  "user_id": 4,
  "text": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
  "date": "2018-12-05T14:57:12Z"
}, {
  "id": "e0f52037-a705-4926-96b3-6ec42aadd389",
  "user_id": 2,
  "text": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
  "date": "2019-01-06T15:53:44Z"
}, {
  "id": "5f8decf5-38aa-4886-84f0-09d26e2a06c8",
  "user_id": 4,
  "text": "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
  "date": "2019-03-16T20:24:44Z"
}, {
  "id": "ab515167-43c8-4974-97f5-334adec5befb",
  "user_id": 1,
  "text": "eu tincidunt in leo maecenas",
  "date": "2018-12-13T09:36:59Z"
}, {
  "id": "3b4c20b7-5add-400a-a483-4dc3e97442de",
  "user_id": 3,
  "text": "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
  "date": "2018-10-08T13:58:30Z"
}, {
  "id": "800e45ce-0ef6-420d-bf5f-e2ba1a96c5c9",
  "user_id": 3,
  "text": "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
  "date": "2019-02-05T02:35:49Z"
}, {
  "id": "4c58efc9-fcb0-4ade-9279-c5d4f115de50",
  "user_id": 3,
  "text": "odio odio elementum eu interdum eu tincidunt in leo maecenas",
  "date": "2019-02-25T12:31:32Z"
}, {
  "id": "de34c85d-9205-4520-94cb-d7c76badceb9",
  "user_id": 1,
  "text": "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis",
  "date": "2018-12-01T09:25:22Z"
}, {
  "id": "4fc33604-ea8b-4886-9cfc-8f159aafd040",
  "user_id": 1,
  "text": "lectus aliquam sit amet diam",
  "date": "2019-02-24T12:18:36Z"
}, {
  "id": "1667e275-850f-4fe8-89ce-dfd52b2fa8c6",
  "user_id": 4,
  "text": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur",
  "date": "2018-11-20T19:22:33Z"
}]

const getFormatedDate = (pastDateString) => {
  const currentDate = new Date();
  const pastDate = new Date(pastDateString);

  const dateFormatters = [
    {
      diff: (currentDate, pastDate) =>
        currentDate.getFullYear() - pastDate.getFullYear() > 0,
      options: { year: "numeric" }
    },
    {
      diff: (currentDate, pastDate) =>
        currentDate.getMonth() - pastDate.getMonth() > 0,
      options: {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric"
      }
    },
    {
      diff: (currentDate, pastDate) =>
        currentDate.getDay() - pastDate.getDay() > 0,
      options: {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric"
      }
    }
  ];

  const todayFormatterOptions = { hour12: false, hour: "numeric", minute: "numeric" };
  const formatter = dateFormatters.find(({ diff }) => diff(currentDate, pastDate));
  const options = formatter ? formatter.options : todayFormatterOptions;

  return pastDate.toLocaleString("en", options);
};

const compareByDate = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
}
const sortedMessages = messages.sort(compareByDate);
sortedMessages.forEach(message => console.log(getFormatedDate(message.date)))
// console.log(messages.sort(compareByDate))
