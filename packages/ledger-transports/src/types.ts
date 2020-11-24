// Copyright 2017-2020 @polkadot/ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Transport from '@ledgerhq/hw-transport';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface TransportDef {
  create (): Promise<Transport>;
  type: LedgerTypes;
}
