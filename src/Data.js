export const questionDataList = [
    { id: 1, title: "That's a question", choice: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"] },
    { id: 2, title: "Another question", choice: ["Option A", "Option B", "Option C", "Option D"] },
    { id: 3, title: "Yet another question", choice: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"] }
    // Ekstra soruları ve seçenekleri buraya ekleyebilirsiniz
  ];

  export const contractAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "getInfo",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newValue",
          "type": "string"
        }
      ],
      "name": "InfoUpdated",
      "type": "event"
    },
  ];