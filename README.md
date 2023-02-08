# <img src="logo.svg" alt="Angle Borrowing Module" height="40px"> Merkl Contracts

[![CI](https://github.com/AngleProtocol/merkl-contracts/workflows/CI/badge.svg)](https://github.com/AngleProtocol/merkl-contracts/actions?query=workflow%3ACI)

This repository contains the smart contracts of the Merkl product developed by Angle.

It basically contains two contracts:

- `DistributionCreator`: to which DAOs and individuals can deposit their rewards to incentivize a pool
- `Distributor`: the contract where users can claim their rewards

## Setup

### Install packages

You can install all dependencies by running

```bash
yarn
forge i
```

### Create `.env` file

In order to interact with non local networks, you must create an `.env` that has:

- `MNEMONIC`
- network key
- `ETHERSCAN_API_KEY`

For additional keys, you can check the `.env.example` file.

Warning: always keep your confidential information safe.

### Tests

Contracts in this repo rely on Hardhat tests. You can run tests as follows:

```bash
yarn hardhat:test ./test/hardhat/distributor/merkleRootDistributor.test.ts
```

You can also check the coverage of the tests with:

```bash
yarn hardhat:coverage
```

### Coverage

```bash
yarn hardhat:coverage
```

### Deploying

```bash
yarn deploy mainnet
```

## Foundry Installation

```bash
curl -L https://foundry.paradigm.xyz | bash

source /root/.zshrc
# or, if you're under bash: source /root/.bashrc

foundryup
```

To install the standard library:

```bash
forge install foundry-rs/forge-std
```

To update libraries:

```bash
forge update
```

## Media

Don't hesitate to reach out on [Twitter](https://twitter.com/AngleProtocol) 🐦
