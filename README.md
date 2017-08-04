# Contracts Starter Project

Starter project for a dApp's contract code. Build, deploy, and test Solidity contracts.

### Build
Recompile contracts and build artifacts.
```
$ yarn build
```

### Build Artifacts
Rebuilds truffle artifacts found at `./build/artifacts` from your contracts in `.build/contracts`.
```
$ yarn build-artifacts
```

### Deploy
Deploy contracts to RPC provider at port `8545`.
```
$ yarn redeploy
```

### Recompile
Recompile your contracts without rebuilding artifacts
```
$ yarn recompile
```

### Test
Restart `testrpc` and run `truffle test`.
```
$ yarn test
```
