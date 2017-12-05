pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract ShrimpCoin is MintableToken {
	string public constant NAME = "ShrimpCoin";
	string public constant SYMBOL = "SHRMP";
	uint256 public constant DECIMAL = 18;
}
