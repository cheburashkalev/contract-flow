# Contract-Flow - GlobalForce Smart Contract Framework

A smart contract framework for GlobalForce.

## Installation

```
npm i -g contract-flow
```

### Using npx

You can also use `npx` for any of these commands so that you don't need to manually install first. 

For instance:

```
npx contract-flow create ...
```

## Create a new project

```
contract-flow create <project_name> [optional_directory] 
```

## Scaffold a contract, test file, or deployment

```
contract-flow scaffold <type(contract|test|deployment)> <name|network> [optional_directory]
```

## Build

```
contract-flow build
```

## Test

```
contract-flow test [--build]
```

## Deploy

```
contract-flow deploy <network> [--build]
```

## Want to use a starter kit?

Head over to [the EOS Template Projects Repo](https://github.com/eosnetworkfoundation/template-projects) and see how you can use
contract-flow to generate starterkit templates.

## Configs

When you create a project you get a `contract-flow.config.js` file and a `.env` file. 
Inside your `.env` you will put any private keys you need. 

The `contract-flow.config.js` file defines the information needed for deployments.
In the `networks` key, you can define any key you want that matches a file in the `deployments` directory. 



## Need help?

```
contract-flow --help
```
