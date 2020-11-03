// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

export default {
  "Keys": "SessionKeys2",
  "Address": "AccountId",
  "LookupSource": "AccountId",
  "WorkId": "u32",
  "Id": "u32",
  "Name": "Vec<u8>",
  "RefCount": "u8",
  "Value": "Vec<u8>",
  "NameData": {
    "value": "Value",
    "owner": "AccountId",
    "expiration": "Option<u32>"
  },
  "CollectionMode": {
    "_enum": {
      "Invalid": null,
      "NFT": "u32",
      "Fungible": "u32",
      "ReFungible": "(u32, u32)"
    }
  },
  "NftItemType": {
    "Collection": "u64",
    "Owner": "AccountId",
    "Data": "Vec<u8>"
  },
  "Ownership": {
    "owner": "AccountId",
    "fraction": "u128"
  },
  "ReFungibleItemType": {
    "Collection": "u64",
    "Owner": "Vec<Ownership<AccountId>>",
    "Data": "Vec<u8>"
  },
  "CollectionType": {
    "Owner": "AccountId",
    "Mode": "CollectionMode",
    "Access": "u8",
    "DecimalPoints": "u32",
    "Name": "Vec<u16>",
    "Description": "Vec<u16>",
    "TokenPrefix": "Vec<u8>",
    "CustomDataSize": "u32",
    "OffchainSchema": "Vec<u8>",
    "Sponsor": "AccountId",
    "UnconfirmedSponsor": "AccountId"
  },
  "Pool": {
    "id": "Id",
    "account": "AccountId",
    "acc_rewards_per_share": "Balance",
    "last_reward_block": "BlockNumber",
    "asset_id": "Id",
    "total_balance": "Balance"
  },
  "Staker": {
    "amount": "Balance",
    "reward": "Balance",
    "debt": "Balance"
  }
};
