export const contractAddress = "0xbB3930980039f625caE3Bd3b9b04904CE3D42716";
export const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "builder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "username",
        "type": "string"
      }
    ],
    "name": "BuilderRegistered",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "builders",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "username",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bio",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "github",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "twitter",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "website",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "skills",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profileImageUri",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "registered",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getBuilder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "username",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bio",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "github",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "twitter",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "website",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "skills",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "profileImageUri",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "registered",
            "type": "bool"
          }
        ],
        "internalType": "struct RegisterBuilder.Builder",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "username",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bio",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "github",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "twitter",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "website",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "skills",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profileImageUri",
        "type": "string"
      }
    ],
    "name": "registerBuilder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
