
		/*********************************************************************************************
		.) VARIABLES
		// https://sepolia.etherscan.io/address/0xc4bF5CbDaBE595361438F8c6a187bDc330539c60#code

		**********************************************************************************************/
		window.optionsList = [
            {
                    "ERC20_TOKEN_ADDRESS": "0x3723A0d04ABDFA902d47426973E0cb49C2fC3B86",//trok arb sepolia
                    "ERC20_TOKEN_ABI": 'troktoken',
                    "REGISTRY_CONTRACT_ADDRESS":"0xEeF51be62Cc32e2f7c0Bf490a7ED355A2e7a0a3A",
                    "TOKEN_CHAIN_NAME": 'ARBITRUM(SEPOLIA)',
                    "TOKEN_NAME": "TROK",
                    "SYMBOL": "TROK",
                    "API": 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
                    "TOKEN_CHAINID": '421614',
                    "EXPLORER": 'https://sepolia.arbiscan.io/',
                    "POLYBASE_DB" :"https://explorer.testnet.polybase.xyz/studio/pk%2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3%2FSTARKID/collections/STARKID",
                    "ZK_PUBKEY" :"2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3"
                },
                        {
                    "ERC20_TOKEN_ADDRESS": "0x6DE727032A1B2B93B430873b52eebf20FD44180E",//trok arb sepolia
                    "REGISTRY_CONTRACT_ADDRESS":"0xEeF51be62Cc32e2f7c0Bf490a7ED355A2e7a0a3A",
                    "TOKEN_CHAIN_NAME": 'ARBITRUM(SEPOLIA)',
                    "TOKEN_NAME": "TROK",
                    "SYMBOL": "TROK",
                    "API": 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
                    "TOKEN_CHAINID": '421614',
                    "EXPLORER": 'https://sepolia.arbiscan.io/',
                    "ERC20_TOKEN_ABI": 'troktoken',
                    "POLYBASE_DB" :"https://explorer.testnet.polybase.xyz/studio/pk%2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3%2FSTARKID/collections/STARKID",
                    "ZK_PUBKEY" :"2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3"
                },
            {
                    "ERC20_TOKEN_ADDRESS": "0x4874d782022507E9a4F82C6D6Df32e332A8D30fB",//trok arb sepolia
                    "REGISTRY_CONTRACT_ADDRESS":"0xEeF51be62Cc32e2f7c0Bf490a7ED355A2e7a0a3A",
                    "TOKEN_CHAIN_NAME": 'ARBITRUM(SEPOLIA)',
                    "TOKEN_NAME": "TROK",
                    "SYMBOL": "TROK",
                    "API": 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
                    "TOKEN_CHAINID": '421614',
                    "EXPLORER": 'https://sepolia.arbiscan.io/',
                    "ERC20_TOKEN_ABI": 'troktoken',
                    "POLYBASE_DB" :"https://explorer.testnet.polybase.xyz/studio/pk%2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3%2FSTARKID/collections/STARKID",
                    "ZK_PUBKEY" :"2F0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3"
                },
             
            ]
    
    
            ABIs = {
                troktoken: [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "AccessControlBadConfirmation", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "neededRole", "type": "bytes32" } ], "name": "AccessControlUnauthorizedAccount", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ECDSAInvalidSignature", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "name": "ECDSAInvalidSignatureLength", "type": "error" }, { "inputs": [ { "internalType": "bytes32", "name": "s", "type": "bytes32" } ], "name": "ECDSAInvalidSignatureS", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "ERC20InvalidSpender", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "ERC2612ExpiredSignature", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "signer", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" } ], "name": "ERC2612InvalidSigner", "type": "error" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "currentNonce", "type": "uint256" } ], "name": "InvalidAccountNonce", "type": "error" }, { "inputs": [], "name": "InvalidShortString", "type": "error" }, { "inputs": [ { "internalType": "string", "name": "str", "type": "string" } ], "name": "StringTooLong", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [], "name": "EIP712DomainChanged", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" } ], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "callerConfirmation", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "eip712Domain", "outputs": [ { "internalType": "bytes1", "name": "fields", "type": "bytes1" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "version", "type": "string" }, { "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "address", "name": "verifyingContract", "type": "address" }, { "internalType": "bytes32", "name": "salt", "type": "bytes32" }, { "internalType": "uint256[]", "name": "extensions", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_MINT_AMOUNT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "mintingInfo", "outputs": [ { "internalType": "uint256", "name": "lastMintTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "amountMinted", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "nonces", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "VALIDATOR_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" } ],
                usdctoken: [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "authorizer", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "nonce", "type": "bytes32" }], "name": "AuthorizationCanceled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "authorizer", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "nonce", "type": "bytes32" }], "name": "AuthorizationUsed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_account", "type": "address" }], "name": "Blacklisted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newBlacklister", "type": "address" }], "name": "BlacklisterChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "burner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newMasterMinter", "type": "address" }], "name": "MasterMinterChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "minterAllowedAmount", "type": "uint256" }], "name": "MinterConfigured", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "oldMinter", "type": "address" }], "name": "MinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAddress", "type": "address" }], "name": "PauserChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newRescuer", "type": "address" }], "name": "RescuerChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_account", "type": "address" }], "name": "UnBlacklisted", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "inputs": [], "name": "CANCEL_AUTHORIZATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "RECEIVE_WITH_AUTHORIZATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TRANSFER_WITH_AUTHORIZATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "authorizer", "type": "address" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }], "name": "authorizationState", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "blacklist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "blacklister", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "authorizer", "type": "address" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "cancelAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "authorizer", "type": "address" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "cancelAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "minter", "type": "address" }, { "internalType": "uint256", "name": "minterAllowedAmount", "type": "uint256" }], "name": "configureMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currency", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "decrement", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "increment", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "tokenName", "type": "string" }, { "internalType": "string", "name": "tokenSymbol", "type": "string" }, { "internalType": "string", "name": "tokenCurrency", "type": "string" }, { "internalType": "uint8", "name": "tokenDecimals", "type": "uint8" }, { "internalType": "address", "name": "newMasterMinter", "type": "address" }, { "internalType": "address", "name": "newPauser", "type": "address" }, { "internalType": "address", "name": "newBlacklister", "type": "address" }, { "internalType": "address", "name": "newOwner", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "newName", "type": "string" }], "name": "initializeV2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "lostAndFound", "type": "address" }], "name": "initializeV2_1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "accountsToBlacklist", "type": "address[]" }, { "internalType": "string", "name": "newSymbol", "type": "string" }], "name": "initializeV2_2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "isBlacklisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "masterMinter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "minter", "type": "address" }], "name": "minterAllowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauser", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "validAfter", "type": "uint256" }, { "internalType": "uint256", "name": "validBefore", "type": "uint256" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "receiveWithAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "validAfter", "type": "uint256" }, { "internalType": "uint256", "name": "validBefore", "type": "uint256" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "receiveWithAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "minter", "type": "address" }], "name": "removeMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "tokenContract", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "rescueERC20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rescuer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "validAfter", "type": "uint256" }, { "internalType": "uint256", "name": "validBefore", "type": "uint256" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "transferWithAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "validAfter", "type": "uint256" }, { "internalType": "uint256", "name": "validBefore", "type": "uint256" }, { "internalType": "bytes32", "name": "nonce", "type": "bytes32" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "transferWithAuthorization", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "unBlacklist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newBlacklister", "type": "address" }], "name": "updateBlacklister", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newMasterMinter", "type": "address" }], "name": "updateMasterMinter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newPauser", "type": "address" }], "name": "updatePauser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newRescuer", "type": "address" }], "name": "updateRescuer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }],
            }
            
            erc20Abi = [
      "function totalSupply() view returns (uint256)",
      "function balanceOf(address account) view returns (uint256)",
      "function transfer(address recipient, uint256 amount) returns (bool)",
      "function transferFrom(address sender, address recipient, uint256 amount) returns (bool)",
      "function approve(address spender, uint256 amount) returns (bool)",
      "function allowance(address owner, address spender) view returns (uint256)",
      "function symbol() view returns (string)",  
      "function decimals() view returns (uint8)"  // Added the decimals function
    ];
    
    
    
    
    async function initstealth(signer){
        
 
                        console.warn('initstealth()')
        
                        reloadTranslations()
                        // await loadContacts()
                        // loadContacts()
                        // let  addr  =document.getElementById('yourAddress').getAttribute('address');
                        // console.warn('USER ADDRESS',addr)
        
                        
                            // Check if password exists in sessionStorage
                            const storedPassword = sessionStorage.getItem("password");
                            if (storedPassword) {
                                console.log("Password found in sessionStorage!!");
                            } else {
                                console.log("No password found in sessionStorage.");
                            }
    
    
                     
    
                        if (typeof signer === 'undefined') {
                            console.warn('No signer passed at init()');
                            
                            signer = await getSigner();
                            if (signer === false) {
                                console.log("The function returned false.");
                                return;
                            }
                        } else {
                            console.warn("SIGNER:", signer);
                        }
    
                        // LOAD BALANCE
                        let currentTokenContract = await loadToken(signer.address)
                        console.log("currentTokenContract()",currentTokenContract)
    
                            // let  addr  =document.getElementById('yourAddress').getAttribute('address');
                        console.warn('USER ADDRESS',signer.address)
                        loadContacts(signer.address)
    
                        // LOAD BALANCES
                    
                        console.warn('EVM ADDRESS (getSigner): ', signer.address)
                            setAddress(signer.address)
                            // let balance= await checkERC20Balance(signer.address) 
                            // let gasBalance= await checkGasBalance(signer.address) 
                            // userData.innerHTML = ` <svg  class="rounded rounded-circle " width="40px"  height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onclick="event.stopPropagation();openModalId('#defaultTokenModal')" style=" position: absolute; left: 0; "> <path fill='#d17c78' d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg> <a id="" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${optionsList[0].ERC20_TOKEN_ADDRESS }">Balance: ${balance} </a> <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path  fill='#d17c78' d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> <br> <div id="miniversion"> <a  target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${signer.address}">gas: ${gasBalance} </a> </div> `;
                        
    
                            // POPULATE TOKEN SELECTORS
                        populateSelectInput()
                        // populateSelectInput('tokenType');//populate selec input inside wallet send
    
    
                        
                            // LOAD DID
                        await loadDID( signer)
    
    
                        // CREATE CHAT
                        await createXMPTchat(signer);
    
                        // populateSelectInput()
                        // populateSelectInput('tokenType');//populate selec input inside wallet send
    
                        // let currentTokenContract = await loadToken(signer.address)
                        // console.log("currentTokenContract()",currentTokenContract)
    
    
                    // -----------------------------------------
                    // CHECK IF USER IS ARROBED
                    // -----------------------------------------
    
                        // Get the current URL
                        const currentUrl = window.location.href;
    
                        // Create a URL object
                        const url = new URL(currentUrl);
    
                        // Extract the pathname (everything after the domain)
                        const pathname = url.pathname;
    
                        // Define the pattern to match the "/@username" part
                        const pattern = /^\/@(\w+)/;
    
                        // Check if the pathname matches the pattern
                        const match = pathname.match(pattern);
    
                        if (match) {
                        // Extract the username from the pathname
                        const username = match[1];
    
                        // Do something with the username
                        console.warn(`Username detected: ${username}`);
    
                        // check if alias is present in iusnaturalis smart contract
    
                        // Example: Redirect or load user-specific content
                        // window.location.href = `/user/${username}`;
                        } else {
                        console.log("No username detected in the URL.");
                        }
                    // ----------------------------------------------------------------------------------
                    //  CHECK IF USER COMES FROM A LINK
                    // ----------------------------------------------------------------------------------
                    const urlParams = new URLSearchParams(window.location.search);
                     
    
                    const chatValue = urlParams.get('chat');
                    if (chatValue !== null) {
					console.warn(`( ⤵️⤵️⤵️⤵️comes from a  link)chat FOUND! TRYING TO CHAT WITH: ${chatValue}`);

                        openChat()
                        
                        // check if has did
                            // const regexDID = /^did:ius:0x[a-fA-F0-9]{40}$/;
                            const regexDID = /^0x[a-fA-F0-9]{40}$/;
                            const regexAddress = /^0x[a-fA-F0-9]{40}$/;
                            if (regexDID.test(chatValue)) {
    
                                // Split the DID string by ':'
                                const parts = chatValue.split(':');
    
                                // The Ethereum address is the last part
                                const ethAddress = parts[parts.length - 1];
    
                                // Optionally, validate the Ethereum address using ethers.js
                                if (ethers.isAddress(ethAddress)) {
                                console.log("Valid Ethereum Address:", ethAddress);
                                evmAddr= ethAddress;
                                
                            } else {
                                console.log("Invalid Ethereum Address:", ethAddress);
                            }
                                        
    
                                // RESOLVE DID https://192.168.43.129:4343/?chat=did:ius:0xD5Dc42A1A5BEC5E86599791460b844b379211c3f
                                console.warn('✅ chatValue is in the correct format, FETCHING DID: ',chatValue)
                                
                                let didData = await fetchDID(chatValue)
                                dd=didData
                                    if (didData.data.avatar != '') {
                                        console.warn( ' HAS AAVATAR!');
                                        avatar = didData.data.avatar;
                                    } else {
                                        console.log( ' DOESN\'T HAVE A AVATAR ');
                                        avatar = "./anonym.jpg"
                                    }
                                
                                console.warn( ` alias: ${didData.data.alias}`);
    
    
                                // ?????????????????????????????????????????
                                // HAcer aqui o en SaveContactsToLocalStorage la verificacion de si existe un did?
                                // ?????????????????????????????????????????
                                let contact = { address: didData.data.alias, username: null, avatar: didData.data.avatar, did: chatValue }
                                console.warn('CONTACTO POR URL!',contact)
                                SaveContactsToLocalStorage(contact);
        
                                        try { await chatWith(evmAddr, JSON.parse(avatar) ) } 
                                            catch (error) { Toast.fire('Error X', error.message, "error"); }
    
        
                            } 
                            else if (regexAddress.test(chatValue)) {
                                // console.warn('⭐ chatValue is and ETH ADDress in the correct format.');
                                // await chatWith(chatValue,avatar)
        			// IF THIS IS AN ADDRESS
							console.warn('(⭐ THIS IS AN ADDRES ⭐ )chatValue is and ETH ADDress in the correct format.',chatValue);
							
// quizas tendria que ser al releaseEvents, primero chat y luego async fetchDID
							let didData = await fetchDID(chatValue)
							dd=didData
							let avatar;
							let chatavatar;
								if (didData.data.avatar != '') {
									console.log( ' HAS AAVATAR!');
									avatar = didData.data.avatar;
									chatavatar= JSON.parse(avatar) 
								} else {
									console.warn( ' DOESN\'T HAVE A AVATAR ');
									avatar = "anonym.jpg"
									chatavatar = avatar
								}
							
							console.warn( ` alias: ${didData.data.alias}`);

							let contact = { address: didData.data.alias, username: null, avatar: avatar, did: chatValue }
							console.warn('CONTACTO POR URL!',contact)
							SaveContactsToLocalStorage(contact);

								console.warn('chatWith()', chatValue, chatavatar )
									try { await chatWith(chatValue, chatavatar ) } 
									catch (error) { Toast.fire('Error', error.message, "error"); }





                            }
        
                            else {
                                console.warn('❌ chatValue is NOT in the correct format.');
                            }
                         
                    } else {
                        console.warn('chat parameter not found in the URL');
                    }
                    // ----------------------------------------------------------------------------------
                    //  FIN CHECK IF USER COMES FROM A LINK
                    // ----------------------------------------------------------------------------------
                        
                        GLOBALCHAIN = localStorage.getItem("GLOBALCHAIN");
                        if (GLOBALCHAIN === null) {
                            console.log('GLOBALCHAIN is null');
                            localStorage.setItem("GLOBALCHAIN", 0);
                            GLOBALCHAIN = 0;
    
                        } else {
                            console.log('GLOBALCHAIN :', GLOBALCHAIN);
                        }
                    // -----------------------------------------
                    //  fin CHECK IF USER COMES FROM A LINK
                    // -----------------------------------------
                        await getChatAddresses()
                         await loadContacts()
                        await listenAllNewAddresses()
    
                     
                    
                    }
                    initstealth()
                    
        
            
                            // var isFullscreen = false;
                var body = document.querySelector('body');
            var lastTapTime = 0;
            var isFullscreen = false;
    
        function toggleFullscreen() {
            if (!isFullscreen) {
                Toast.fire({ icon: 'info', title: 'full screen in on!', text:' (double click again to turn it of)'});
    
    
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
                isFullscreen = true;
            } else {
                Toast.fire({ icon: 'info', title: 'full screen in off!', text:''});
    
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                isFullscreen = false;
            }
        }
        
        
        /*********************************************************************************************
            .) SOUNDS
            **********************************************************************************************/
    
            function playBeep() {
            var AudioContext = window.AudioContext || window.webkitAudioContext;
            var audioCtx = new AudioContext();
    
            var oscillator = audioCtx.createOscillator();
            oscillator.type = "sine"; // Set the waveform type
            oscillator.frequency.value = 864; // Set the frequency (Hz)
    
            oscillator.connect(audioCtx.destination);
            oscillator.start();
    
            // Stop the oscillator after 100 milliseconds
            setTimeout(function () {
                oscillator.stop();
            }, 100);
            }
    
    
            // Initialize Tone.js
            Tone.start();
            console.log("tone started");
            // Create a simple click sound with different parameters
            const clickSynth = new Tone.Synth({
            oscillator: {
                type: "sine", // You can experiment with different oscillator types
            },
            envelope: {
                attack: 0.01,
                decay: 0.1,
                sustain: 0.1,
                release: 0.5,
            },
            }).toDestination();
    
            function playButtonClickSound() {
            // Trigger the synth to produce a short click sound
            clickSynth.triggerAttackRelease("C4", "8n");
            }
            
            /*********************************************************************************************
            .) MANAGE MODALS
            **********************************************************************************************/
    
    
    function openModalId(id, event) {
      console.log("openingModal", id, event);
      setTimeout(() => {
        window[id + "Modal"] = new bootstrap.Modal(document.querySelector(`${id}`));
        window[id + "Modal"].show(event);
    
        // Check if the modal is open
        var isModalOpen = window[id + "Modal"]._isShown;
        // console.log("Is modal open?", window[id + "Modal"], isModalOpen);
      }, 50);
    }
    
    function closeModalId(id, event) {
      console.log("closing modal", id, event);
      var modal = window[id + "Modal"];
      if (modal && modal._isShown) {
        // console.log("Is modal open?", modal, modal._isShown);
        modal.hide(event);
      } else {
        console.log("Modal is not open or not defined.");
      }
    }
    
    /*********************************************************************************************
    .) sweetalert2
    // position: "top-right",
    **********************************************************************************************/
    
                const ToastTop = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
                iconColor: "white",
                customClass: {
                    popup: "colored-toast",
                },
                });
    
                const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
                iconColor: "white",
                customClass: {
                    popup: "colored-toast",
                },
                });
    
                const fixedToast = swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                showDenyButton: false,
                showCancelButton: false,
                iconColor: "white",
                customClass: {
                    popup: "colored-toast",
                },
                });
    
    
        /*********************************************************************************************
        .)  SIDEBAR
        **********************************************************************************************/
    
        // Define the plToggle function
        function plToggle(event) {
            console.log('plToggle()')
          document.querySelector(".overlay").classList.toggle("overlayisOpen");
            const button = document.querySelector('.menu__handle');
            button.click();
        }
    
        // Add a click event listener to the overlay element
        document.querySelector(".overlay").addEventListener("click", function (event) {
          console.warn("clickeado en nav li");
          plToggle();
        });
    
    
        /*********************************************************************************************
        .)  COPYFadd 
        **********************************************************************************************/
    
    function copy2clipboard(text) {
                // let text = `${ipfsGateway}${cid}`;
                console.log('COPIED!', text)
                let textLink = `<a target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${text}">${text}</a>`;
    
                if (window.clipboardData && window.clipboardData.setData) {
                    ToastTop.fire('Copied to Clipboard', textLink, "success");
                    return window.clipboardData.setData("Text", text);
                }
                else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        ToastTop.fire('Copied to Clipboard!', textLink, "success");
                        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    }
                    catch (ex) {
                        console.warn("Copy to clipboard failed.", ex);
                        return prompt("Copy to clipboard: Ctrl+C, Enter", text);
                    }
                    finally {
                        document.body.removeChild(textarea);
                    }
                }
            }
    
    function shortAddressETH(address) {
        if (typeof address !== 'string' || address.length < 42) {
            throw new Error('Invalid Ethereum address');
        }
        return address.substring(0, 6) + "..." + address.substring(38, 42);
    }
    
    function shortAddressSTARK(address) {
        if (typeof address !== 'string' || address.length < 64) {
            throw new Error('Invalid StarkNet address');
        }
        return address.substring(0, 6) + "..." + address.substring(address.length - 4);
    }
    
    async function reloadBalance(){
        console.log('reloadBalance()')
    
        let network = await checkNetwork();
                console.log('network:', network)
    
                if (network == false) {
                    console.log('network FALSE:', network)
                    headerNotes.innerHTML = `  <div class="alert alert-danger alert-dismissible fade show headerNotes"> <button type="button" class="btn-close" data-bs-dismiss="alert"></button> <strong>Danger!</strong> Error de red. </div>`
    
                    return
                }
                else if (network == true) {
                    console.log('network TRUE:', network)
                }
    
                let  addr  =document.getElementById('yourAddress').getAttribute('address');
                let balance= await checkERC20Balance(addr) 
                let gasBalance= await checkGasBalance(addr) 
                userData.innerHTML = `			
                <a id="" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${optionsList[0].ERC20_TOKEN_ADDRESS }">Balance: ${balance}</a>
                <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path fill="currentColor" d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> 
                <br>
            <a id="miniversion" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${addr}">gas: ${gasBalance}</a>
                
                `;
    }
    
    
    
    
    async function getLocalWalletSigner() {
          console.warn('getLocalWalletSigner()');
    
         
    
          return Swal.fire({
            title: dictionary[globalLang]["unlockWallet"],
            input: 'password',
            inputAttributes: { autocapitalize: 'off' },
            showLoaderOnConfirm: true,
            backdrop: true,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Enter',
            denyButtonText: `Cancel`,
    
    
    
            html:  `
            <input type="checkbox" id="rememberPassword" name="rememberPassword" checked> 
            <label for="rememberPassword">${dictionary[globalLang]["rememberPassword"]}</label> 
            `,
            footer: '<a href="/docs/index.html#" target="_blank" rel="noopener noreferrer">Docs</a>',
            preConfirm: (value) => {
                if (!value) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> A password is required')
        }
     
      },
            allowOutsideClick: () => { const popup = Swal.getPopup(); popup.classList.remove('swal2-show'); setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake'); }); setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake'); }, 500); return false; },
          })
          .then(async (result) => {
            if (result.isConfirmed) {
     
            // =========================
            //   if input rememberPassword is clicked
             
    
                        const password = result.value;
                        const rememberPasswordCheckbox = Swal.getPopup().querySelector('#rememberPassword');
    
                        console.log('password entered!');
    
                        if (rememberPasswordCheckbox.checked) {
                        sessionStorage.setItem("password", password);
    
                        } else {
                        sessionStorage.removeItem("password");
    
                        }
    
                        // Continue with your logic using the entered password
                        // return password;
            // =========================
    
              let encryptedjson = localStorage.getItem('encryptedWallet');
              let ew = JSON.parse(encryptedjson);
              console.log('pub key of wallet in localstorage:', ew.address);
    
              try {
                return ethers.Wallet.fromEncryptedJson(encryptedjson, result.value).then(async (localWallet) => {
                  console.log('localWallet.publicKey:', localWallet.publicKey);
                  let provider = new ethers.JsonRpcProvider(`${optionsList[0].API}`); //v6
                  const signer = localWallet.connect(provider);
                  console.log('SIGNER:', signer);
                // await loadDID( signer)
                  return signer;
                });
              } catch (error) {
                console.error('Error during wallet decryption:', error);
                Toast.fire('Error', error.message, "error");
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: error.message,
                });
                return null;
              }
            }
            return null;
          }).catch(error => {
            console.error('Error during Swal prompt:', error.reason);
            Toast.fire('Error', error.message, "error");
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
            });
    
    
            return null;
          });
        }
    
    // ---------------------------------------------
    
    function toChecksumAddress(address) {
        return ethers.getAddress(address);
    }
    
    
    // -----------------------
    // ------------------------------
    async  function unlockLocalwallet(){
    
    console.log('unlockLocalwallet()')
      // LOAD CHAT
          let signer;
      console.log('there is no signer')
      try {
          signer = await getLocalWalletSigner();
        
      } catch (error) {
            console.log('error at getLocalWalletSigner() ', error.message); 
        
      }
      lockscreen.style.display='none'
    
    
      await loadDID( signer)
      syncBalance()
      await initstealth(signer)
    
      if (!signer) {
        console.log('Handle case where signer is not obtained');
        lockscreen.style.display='flex'
        return; // Or throw an error, or handle the case in another way
      }
    
    }
    
    // ---------------------------------------------
    
/*********************************************************************************************
.)  getSigner
**********************************************************************************************/
async function getSigner(){
    console.warn('*** getSigner() ***')

    let signer;
// 1- GET  PRIV KEY(IF not CREATE IT)
const chatETHPrivKey = localStorage.getItem('chatETHPrivKey');
if (!chatETHPrivKey) {
console.warn('No chatETHPrivKey found. Checking for unbackedWallet.');

// 2- NO PRIV KEY, IS UNBACKEDWALLET?
const unbackedWallet = localStorage.getItem('unbackedWallet');
if (!unbackedWallet) {
console.warn('No unbackedWallet found. Checking for encryptedWallet.');

// 3-  NO UNBACKED WALLET, is JSONWALLET?
const encryptedWallet = localStorage.getItem('encryptedWallet');
if (!encryptedWallet) {
    console.warn('No encryptedWallet found.');
    // CREATE UNBACKED WALLET
    try { signer = await ethers.Wallet.createRandom() }
    catch (error) { console.log(error.message); 
    fixedToast.fire('Error', error.message, "error"); }
    console.warn('RANDOM WALLET CREATED!:', signer.address, 'mnemonic:', signer.mnemonic.phrase, 'privkey:', signer.privateKey)
    localStorage.setItem('unbackedWallet', JSON.stringify(signer.mnemonic.phrase))
    
    setTimeout(() => {
    console.warn('ADDING REMEMBER TO BACKUP WALLET TO HEADERNOTES ^^^^^^^^^^')

        headerNotes.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show headerNotes">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Alert!</strong> Remember to backup your wallet.
                <button type="button" class="btn btn-primary" onclick="backup()">Backup Now</button>
            </div>
            `;
    }, 5000);

    // return signer; // Return the signer here

} else {
    // Handle encryptedWallet
    console.warn('3- encryptedWallet found. Checking for jsonWalletPassword.');
    const jsonWalletPassword = sessionStorage.getItem('password');
    if (!jsonWalletPassword) {
        console.warn('No jsonWalletPassword found.');

        // 1. get and form address from json wallet
        let addr =JSON.parse(encryptedWallet).address;
        const checksumAddress = toChecksumAddress(`0x${addr}`);

        // 2. shot it into qr
        setAddress(checksumAddress)
        
        // 3. display UI in lock mode
        document.getElementById("loader").style.display = "none";//flex
        lockscreen.style.display='flex'

        return false

    } else {
        // Handle encryptedWallet and jsonWalletPassword
        console.log('encryptedWallet and jsonWalletPassword found.',jsonWalletPassword);
        // FIX1?: catch the signer here?
        // let signer;
        try {
            signer = await ethers.Wallet.fromEncryptedJson(encryptedWallet, jsonWalletPassword)
            console.warn('SIGNER GLOBAL HERE ***')
            
        } catch (error) {
             console.warn(error.message, 'ERROR WALLET!'); 
            fixedToast.fire({ icon: 'error', title: error.message });
            sessionStorage.removeItem('password')
            return false
        }
        // return signer; // Return the signer here

    }

}


} 
else {
// Handle unbackedWallet
console.warn('2- YES unbackedWallet', unbackedWallet)
const walletData = JSON.parse(unbackedWallet);
try{ 
signer = ethers.Wallet.fromPhrase(walletData);
setTimeout(() => {
    console.warn('ADDING REMEMBER TO BACKUP WALLET TO HEADERNOTES ****************^^^^^^^^^^')
        headerNotes.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show headerNotes">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Alert!</strong> Remember to backup your wallet.
                <button type="button" class="btn btn-primary" onclick="backup()">Backup Now</button>
            </div>
            `;
    }, 5000);
}
catch (error) { console.warn(error.message, 'ERROR WALLET!'); localStorage.removeItem('unbackedWallet'); }


}

} // fin chatETHPrivKey
else {
// Handle chatETHPrivKey
console.warn('1- YES chatETHPrivKey', chatETHPrivKey)
try { 
    signer = await new ethers.Wallet(chatETHPrivKey) 

}
catch (error) { 
    console.log(error.message);  
        document.getElementById("loader").style.display = "none";//flex
        lockscreen.style.display='flex';
 }
}


    /////////////////////////////
    // 2- SHOW QR WITH DID LINK
    /////////////////////////////

    console.warn('EVM ADDRESS (getSigner): ', signer.address)
    setAddress(signer.address)
    let balance= await checkERC20Balance(signer.address) 
    let gasBalance= await checkGasBalance(signer.address) 
    // <svg  class="rounded rounded-circle " width="40px"  height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onclick="event.stopPropagation();openModalId('#defaultTokenModal')" style=" position: absolute; left: 0; "> <path fill='#d17c78' d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
    userData.innerHTML = `		
        <a id="" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${optionsList[0].ERC20_TOKEN_ADDRESS }">Balance: ${balance}
            </a>
            <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path  fill='#d17c78' d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> 
    <br>
    <div id="miniversion">
    <a  target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${signer.address}">gas: ${gasBalance}
        </a>
    </div>
    `;

 
    await loadDID( signer)
    
    return signer	
 
}

// checkGasBalance
// checkERC20Balance
// loadDID
// setAddress
// toChecksumAddress
// createXMPTchat

    // async function getSigner(){
    //             console.warn('*** getSigner() INSIDE GENERAL.JS ***')
            
    //             let signer;
    // // 1- GET  PRIV KEY(IF not CREATE IT)
    // const chatETHPrivKey = localStorage.getItem('chatETHPrivKey');
    // if (!chatETHPrivKey) {
    //     console.warn('No chatETHPrivKey found. Checking for unbackedWallet.');
    
    // // 2- NO PRIV KEY, IS UNBACKEDWALLET?
    //     const unbackedWallet = localStorage.getItem('unbackedWallet');
    //     if (!unbackedWallet) {
    //         console.warn('No unbackedWallet found. Checking for encryptedWallet.');
    
    // // 3-  NO UNBACKED WALLET, is JSONWALLET?
    //         const encryptedWallet = localStorage.getItem('encryptedWallet');
    //         if (!encryptedWallet) {
    //             console.warn('No encryptedWallet found.');
    //             // CREATE UNBACKED WALLET
    //             try { signer = await ethers.Wallet.createRandom() }
    //             catch (error) { console.log(error.message); 
    //             fixedToast.fire('Error', error.message, "error"); }
    //             console.warn('RANDOM WALLET CREATED!:', signer.address, 'mnemonic:', signer.mnemonic.phrase, 'privkey:', signer.privateKey)
    //             localStorage.setItem('unbackedWallet', JSON.stringify(signer.mnemonic.phrase))
                
    //             setTimeout(() => {
    //             console.warn('ADDING REMEMBER TO BACKUP WALLET TO HEADERNOTES ^^^^^^^^^^')
    
    //                 headerNotes.innerHTML = `
    //                     <div class="alert alert-warning alert-dismissible fade show headerNotes">
    //                         <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    //                         <strong>Alert!</strong> Remember to backup your wallet.
    //                         <button type="button" class="btn btn-primary" onclick="backup()">Backup Now</button>
    //                     </div>
    //                     `;
    //             }, 5000);
            
    //             // return signer; // Return the signer here
    
    //         } else {
    //             // Handle encryptedWallet
    //             console.warn('3- encryptedWallet found. Checking for jsonWalletPassword.');
    //             const jsonWalletPassword = sessionStorage.getItem('password');
    //             if (!jsonWalletPassword) {
    //                 console.warn('No jsonWalletPassword found.');
    
    //                 // 1. get and form address from json wallet
    //                 let addr =JSON.parse(encryptedWallet).address;
    //                 const checksumAddress = toChecksumAddress(`0x${addr}`);
    
    //                 // 2. shot it into qr
    //                 setAddress(checksumAddress)
                    
    //                 // 3. display UI in lock mode
    //                 document.getElementById("loader").style.display = "none";//flex
    //                 lockscreen.style.display='flex'
    
    //                 return false
    
    //             } else {
    //                 // Handle encryptedWallet and jsonWalletPassword
    //                 console.log('encryptedWallet and jsonWalletPassword found.',jsonWalletPassword);
    //                 // FIX1?: catch the signer here?
    //                 // let signer;
    //                 try {
    //                     signer = await ethers.Wallet.fromEncryptedJson(encryptedWallet, jsonWalletPassword)
    //                     console.warn('SIGNER GLOBAL HERE ***')
                        
    //                 } catch (error) {
    //                      console.warn(error.message, 'ERROR WALLET!'); 
    //                     fixedToast.fire({ icon: 'error', title: error.message });
    //                     sessionStorage.removeItem('password')
    //                     return false
    //                 }
    //                 // return signer; // Return the signer here
    
    //             }
    
    //         }
    
    
    //     } 
    //     else {
    //         // Handle unbackedWallet
    //     console.warn('2- YES unbackedWallet', unbackedWallet)
    //     const walletData = JSON.parse(unbackedWallet);
    //     try{ 
    //         signer = ethers.Wallet.fromPhrase(walletData);
    //         setTimeout(() => {
    //             console.warn('ADDING REMEMBER TO BACKUP WALLET TO HEADERNOTES ****************^^^^^^^^^^')
    //                 headerNotes.innerHTML = `
    //                     <div class="alert alert-warning alert-dismissible fade show headerNotes">
    //                         <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    //                         <strong>Alert!</strong> Remember to backup your wallet.
    //                         <button type="button" class="btn btn-primary" onclick="backup()">Backup Now</button>
    //                     </div>
    //                     `;
    //             }, 5000);
    //     }
    //     catch (error) { console.warn(error.message, 'ERROR WALLET!'); localStorage.removeItem('unbackedWallet'); }
    
    
    //     }
    
    // } // fin chatETHPrivKey
    // else {
    //     // Handle chatETHPrivKey
    //     console.warn('1- YES chatETHPrivKey', chatETHPrivKey)
    //         try { 
    //             signer = await new ethers.Wallet(chatETHPrivKey) 
    
    //         }
    //         catch (error) { 
    //             console.log(error.message);  
    //                 document.getElementById("loader").style.display = "none";//flex
    //                 lockscreen.style.display='flex';
    //          }
    // }
     
    
    
    
    //             return signer
                
             
    // }
    
    
            /*********************************************************************************************
            .)  BAKCUP
            **********************************************************************************************/
            function backupWallet(mnemonic) {
                console.log('now, (is this used?) backupWallet()', mnemonic)
                //////////////////////
                // CREATE WALLET
                Swal.fire({
                    title: dictionary[globalLang]["createpasswordtoencryptwallet"],
                    input: 'password',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'create',
                    showLoaderOnConfirm: true,
                    // preConfirm: (login) => { },
                    backdrop: true,
    
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to set a password to create your wallet!'
                        }
                    },
    
                    allowOutsideClick: () => {
                        const popup = Swal.getPopup()
                        popup.classList.remove('swal2-show')
                        setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake') })
                        setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake') }, 500)
                        return false
                    },
    
                })
                    .then(async (result) => {
                        if (result.isConfirmed) {
                            // console.log('PASSWORD RESULT:',result.value)
    
                            await makeBackup(result.value, mnemonic)
                            return result.value
                        }
                    })
    
    
            }
    
    
            async function makeBackup(pwd, mnemonic) {
    
    // console.log('MAKE BACKUP address:', signer.address)
    console.log('MAKE BACKUP mnemonic:', mnemonic)
    
    
    // WRITE YOUR MNEMONIC PHRASE
    displayMnemonic.innerHTML = ` <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='40px' width='40px' fill="currentColor"> <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>Write down your mnemonic phrase to access your wallet in the future! :</h3> <div class="alert alert-warning alert-dismissible fade show"> <strong>${mnemonic}</strong> </div> `
    
    
    // CREATING ENCRYPTED LOCAL WALLET
    displayMnemonic.innerHTML += ` <div  id="loaderCW"  > <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> creating encrypted wallet ... </div> `
    
    // SAVE TO LOCALSTORAGE (encrypted?)
    console.log('password: ', pwd)
    try {
        // wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
        wallet = ethers.Wallet.fromPhrase(mnemonic)
    }
    catch{
        console.warn(error)
    }
    const promisseJSON = wallet.encrypt(pwd);
    promisseJSON.then((encryptedWallet) => {
        console.log(encryptedWallet)
        console.log('WALLET ENCRYPTED')
    
        // loaderCW
        document.getElementById('loaderCW').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    </svg>
    
    <div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
    Wallet encrypted and saved into localstorage
    </div>
    </div>
    `
    
    
        localStorage.setItem('encryptedWallet', encryptedWallet)
        console.log(' ENCRYPTED JSONWALLET SAVED INTO LOCALSTORAGE')
        //   localStorage.setItem('encryptedAddress', wallet.address)
        console.log(' ENCRYPTED ADDRESS SAVED INTO LOCALSTORAGE')
    
        setTimeout(() => {
            const checkbox = document.getElementById('mnemonicBackedup');
            // const button = document.getElementById('closeWalletBkp');
            const button = document.getElementById('closeBackupmodal');
    
            mnemonicBackedup.disabled = false;
            // closeBackupmodal
            // Add an event listener to the checkbox to track its state
            checkbox.addEventListener('change', function () {
                // If the checkbox is checked, enable the button; otherwise, disable it
                button.disabled = !this.checked;
                mnemonicBackedup.disabled = true;
                console.log('close mnemonic activated')
    
                // NOW DELETE unbackedWallet
                localStorage.removeItem('unbackedWallet')
    
            });
            // init();
        }, 1000);
    
    
    });
    
    
    setTimeout(() => {
        openModalId('#walletBackp')
    
    }, 50);
    
    }
        /*********************************************************************************************
            .)  QR
            **********************************************************************************************/
            async function showqr(addr) {
                const qrColor = getComputedStyle(document.body).getPropertyValue('--qr');
    
                var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    
                // let qrSize
                if (isMobile.matches) {
                    console.log("Mobile screen detected");
                    qrSize = 310;
                    window.scrollTo(0, 0);
    
    
                } else {
                    // Code for larger screens
                    console.log("Not a mobile screen");
                    qrSize = 370
    
                }
    
                //QR
                // width: `${qrSize}`, height: `${qrSize}`, type: "png", data: addr, image: `./logo4.png`,
                const qrCode = new QRCodeStyling({
                    width: `${qrSize}`, height: `${qrSize}`, type: "png", data: addr, image: `./LOGOSTEALTHCHATv3.png`,
                    dotsOptions: { color: `${qrColor}`, type: "extra-rounded" },
                    backgroundOptions: { color: "var(--qrbackground)", },
                    imageOptions: { crossOrigin: "anonymous", margin: 0 }
                });
                qrCode.append(document.getElementById("canvas"));
                console.log('qr code APPENDED')
                document.querySelector('.main-wrap').style.backgroundImage = 'none';
                loader.style.display= 'none'
    
            }
    
    
                async function loadDID( signer){
                    // let did = `did:ius:${signer.address}`
                    let did = signer.address
    
                        // IF. READ DID 
                        console.log('💬 READ YOUR DID:', did)
                        let rdid =  await readDIDRecord(did);
                        if(rdid.data==null){
                            console.warn('DID NULL, creatre ONE')
                            let avatar = '';
                            let alias = signer.address;
                            let privData = '';
                            let cid = '';
                            try {
                                const result = await createDIDRecord(did, avatar, alias, privData, cid, signer);
                                if (result) {
                                    console.log('The DID record was created successfully.');
                                } else {
                                    console.warn('Failed to create the DID record.');
                                }
                            } catch (error) {
                                console.error('An error occurred while creating the DID record:', error);
                            }
    
                        } else {
                            console.warn(`DID EXISTENT!:  ${rdid.data.id}`);
    
                            // CHECK if avatar
                            let avtr = rdid.data.avatar;
                            if (avtr) {
                                let avatar = JSON.parse(avtr);
                                document.getElementById('avatarIMG').src = avatar;
                                document.getElementById('aliasAvatar').src = avatar;
                            } else {
                                console.log('Avatar data is empty');
                            }
    
                            // ACTIVATE BUTTON TO MINT OR UPDATE
                            document.getElementById('mintOrUpdate').disabled = false;
    
                        }
                }
    
                async function fetchDID(did) {
                                try {
                                    const didresult = await readDIDRecord(did);
    
                                    if (didresult.data != null) {
                                        console.log(did + ' HAS A RECORD!!!');
                                        return didresult
                                    } else {
                                        console.log(did + ' DOESN\'T HAVE A RECORD :(');
                                        return
                                    }
                                } catch (error) {
                                    console.error('An error occurred while fetching the DID record:', error);
                                }
                            }
     
    
    function displayQR(data) {
        console.log('displayQR(data)')
                const qrCode = new QRCodeStyling({
                    width: 500, height: 500, type: "png", data: data, image: `id5.svg`,
                    dotsOptions: { color: "#1568B0", type: "extra-rounded" },
                    backgroundOptions: { color: "var(--qrbackground)", },
                    imageOptions: { crossOrigin: "anonymous", margin: 3 }
                });
                qrCode.append(document.getElementById("canvas"));
                // canvas.classList.add('animate')
    
    
    
    
            }
    
            function setAddress(userAddress) {
                console.log('setAddress()',userAddress)
    
                // v1
                // var currentURL = window.location.href;
                var baseUrl = window.location.protocol + '//' + window.location.host + '/';
                // var baseUrl = 'https://192.168.43.129:4343' + '/';
                // var baseUrl = 'https://iusnaturalis.web.app' + '/';
                // let did = `did:ius:${userAddress}`
                let did = userAddress;
                const parameters = { chat: did };
                const urlParams = createURLParams(parameters);
                const url = `${baseUrl}?${urlParams}`;
    
                // 3- SHOW QR
                canvas.innerHTML = '';
                showqr(url);
                
            // 	// var isFullscreen = false;
            // 	var body = document.querySelector('body');
            // var lastTapTime = 0;
            // var isFullscreen = false;
    
                    canvas.onclick = function (e) {
                    console.log('CHATWALLET: clicked on QR')
                    var currentTime = new Date().getTime();
                    var tapLength = currentTime - lastTapTime;
                    if (tapLength < 500 && tapLength> 0) {
                        toggleFullscreen();
                        }
                        lastTapTime = currentTime;
                        }
    
                // let shortAddr = userAddress.substring(0, 6) + "..." + userAddress.substring(38, 42);
                let shortAddr = shortAddressETH(userAddress)
                var preElement = document.getElementById('yourAddress');
                preElement.setAttribute('address', userAddress);
    
                yourAddress.innerHTML = `${shortAddr} <svg id='copyAddress' onclick="event.stopPropagation();copy2clipboard('${userAddress}')" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path  fill='currentColor' d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg> <svg id='shareAddress' onclick="event.stopPropagation();copy2clipboard('${url}')" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill='currentColor'  d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>`;
                console.log(`Your address: ${userAddress} `)
                console.log(`Your did: ${did} `)
            }
    
    
            /*********************************************************************************************
            .)  URL
            **********************************************************************************************/
            // Function to create URL parameters from an object
            function createURLParams(params) {
                console.log('createURLParams', params)
    
                const keys = Object.keys(params);
                const encodedParams = keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
                return encodedParams.join('&');
            }
    
                /*********************************************************************************************
            .) QR SCAN
            **********************************************************************************************/
            async function scanAddress() {
                console.log('SCANNING FOR A NEW USER ADDRESS')
                var audioContext = new AudioContext();
    
                // open modal
                openModalId('#scanModal')
                document.getElementById('scanResult').innerHTML = ''
                setTimeout(() => {
                    var videoElem = document.getElementById("qrScanVideo");
                    window.qrScanner = new QrScanner(videoElem, result => qrscanned(result), {
                        highlightScanRegion: true,
                        highlightCodeOutline: true,
                    });
    
                    qrScanner.setInversionMode('invert');
                    qrScanner.start();
    
                }, 1000);
    
            }
    
            async function qrscanned(result) {
                console.log('scanned decoded qr code:', result.data)
                x1 = result.data;
                document.getElementById('scanResult').innerHTML = ` <div class="success-message"> <svg viewBox="0 0 76 76" class="success-message__icon icon-checkmark"> <circle cx="38" cy="38" r="36"/> <path fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.7,40.9l10.9,10.9l28.7-28.7"/> </svg> <h1 class="success-message__title">SCANED!</h1> <div class="success-message__content"> <p>${result.data}</p> </div> </div> `
                qrScanner.stop();
                qrScanner.destroy();
                qrScanner = null;
                playBeep();
                await setTimeout(() => {
                    closeModalId('#scanModal')
                }, 1500);
                console.log('KEEP DOING SOMETHING', result.data)
    
                // SEARCH FOR chat
                const url = new URL(result.data);
                const urlParams = new URLSearchParams(url.search);
                const chatValue = urlParams.get('chat');
                if (chatValue !== null) {
                    console.log(`Value of chat parameter: ${chatValue}`);
                    // address2.value = chatValue;
                    Toast.fire({ icon: 'info', title: 'CHAT WITH:', text: chatValue });
                    // close nav
                    plToggle()
                    // NOW SETUP THE CHAT AND OPEN IT
                    // await chatWith(chatValue)
    
                        //  CREATE AND RESOLVE DID
                        // let did = `did:ius:${chatValue}`
                        let did = chatValue;
    
                        let didData = await fetchDID(did)
                        console.log( 'didData', didData)
    
                        if (didData.data.alias || null) {
                        console.log('alias is not null', didData.data.alias);
                        } 
                        else {
                            console.log('user Doesnt have a did')
                        }
    
                    
                    let contact = { address: chatValue, username: null, avatar: null, did: did }
                                SaveContactsToLocalStorage(contact);
                                await chatWith(chatValue)
    
    
                    // const swiperEl = document.getElementById('troqContainer');
                    // swiperEl.swiper.slideNext();
    
                } else {
                    console.log('chat parameter not found in the URL');
                }
    
    
            }
    
    
    
    
            async function selectChat(el) {
                console.warn('selectChat()')
                const address = el.dataset.address;
                console.log('CLICKED CONTACT (selectChat()):', address);
                var imgElement = el.querySelector("img");
                let imgSrc = imgElement.getAttribute("src");
                console.log('imgSrc: ',imgSrc.length)
                
                // 0- remove newmessage class
                        document.getElementById(address).classList.remove('newmessage');
    
                // 1- close navbar
                plToggle()
    
                // 2- chat with address funciton 
                let currentChat = document.body.getAttribute('currentChat');
                console.warn('CURRENTCHAT', currentChat)
                
                // if(currentChat==address)?alreadyChatting==true
                let alreadyChatting = (currentChat === address) ? true : false;
    
                // INTENTO FIX DUPLICA Y MULTIPLICA MENSAJES
                if (alreadyChatting) {
                    // Do something if alreadyChatting is true
                    console.log('already chatting with this contact')
                    openChat()
                } else {
                    // Do something else if alreadyChatting is false
                    console.log('start chatting with new contact')
                    // await deleteChat()
                    
                    
                    // ...
                    // if not in contacts store it, else do nothing
                    let contact = { address: el.dataset.address }
                    console.warn('CONTACTO POR URL!',contact)
                    SaveContactsToLocalStorage(contact);
                    // ...
    
    
    
                    await chatWith(address,imgSrc)
                    // await deleteChat()
                    await updateBadge()
                    // add contact to agenda if its not already
    
                }
            }
    
    
            document.getElementById("closeScanModal").onclick = () => {
                qrScanner.stop();
                closeModalId('#scanModal')
                qrScanner.destroy();
                qrScanner = null;
    
            }
    
    
            
    
            async function updateBadge() {
                // console.log('updateBadge()')
                var ulElement = document.getElementById('cwContacts');
                var newMessageElements = ulElement.getElementsByClassName('newmessage');
                var count = newMessageElements.length;
                if (count === 0) {
                    // console.log('updateBadge(): No elements with class "newmessage" found.');
                    document.getElementById('chatBadge').style.display = 'none'
                    document.getElementById('chatBadge').innerText = ''
                } else {
                    console.log('Number of elements with class "newmessage":', count);
                    document.getElementById('chatBadge').style.display = 'inline'
                    document.getElementById('chatBadge').innerText = `${count}`
                }
    
            }
    
    
            /*********************************************************************************************
            .) NEWQRCHAT
            **********************************************************************************************/
            async function createXMPTchat(signer){
                console.log('createXMPTchat()')
     
    
                const iusnaturalisxmtp = await Client.create(signer)
                const conversations = iusnaturalisxmtp.conversations
        
                // get eth address for chat
                 userAddress = signer.address;
                console.log('Your chat Address (eth) : ',userAddress)
    
                window.iusnaturalisxmtp = iusnaturalisxmtp;// make GLOBAL
                window.chats= iusnaturalisxmtp.conversations
                window.userAddress= userAddress
    
                return iusnaturalisxmtp
            }
    
            async function  getChatAddresses(){
                const allConversations = await iusnaturalisxmtp.conversations.list()
                console.warn('YOU HAVE ', allConversations.length, "ADDRESSES AVAILABLE IN XMTP at getChatAddresses()")
    
                const peerAddressesArray = [];
    
                allConversations.forEach(async (conversation, index) => {
                    peerAddressesArray.push(conversation.peerAddress);
                    console.log('allConversations foerEach')
                    // ADD ADDRESS TO AGENDA IN UI
                            // Here
    
                })
                paa = peerAddressesArray;
                console.log('peerAddressesArray(paa) DECLARED!',peerAddressesArray)
                
    
            }
            
    
            async function createGroupChat(){
                console.log('createGroupChat()')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "This is not yet implemented!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                    });
            }
    
            async function chatWith(toAddr ,imgsrc) {
                console.warn('chatWith()', toAddr)
    
                console.log('ESTABLISHING NEW CHAT WITH', toAddr)
                headerNotes.innerHTML = ``
    
                document.getElementById("chatBox").innerHTML='';//clear chat window
                console.log('clear chatBox window')
    
                // return 
    
                let userAddress  =document.getElementById('yourAddress').getAttribute('address');
    
            console.log(toAddr, userAddress)
            if (toAddr == userAddress) {
                console.warn('CANCELING chatwith() because CANNOT WITH SELF ADDRESS')
                Toast.fire('CANNOT CHAT WITH SELF ADDRESS', '', "warning");
                localStorage.removeItem('toAddress')// detele "TO" address from localStorage
                return
            }
    
            
            // GOT TO CHAT TAB
            console.log(' doing openChat')
            openChat()
            console.warn('------- PREPARING CHAT ----------');
            localStorage.setItem('toAddress', toAddr)
            
            loadContacts()
            updateBadge()
    
    
             
    
           
            if (imgsrc != null) {
                try {
                    // Validate if imgsrc is a valid URL
                    new URL(imgsrc);
                    console.log('YES IMAGE SOURCE: Valid URL', imgsrc);
                    avatar = imgsrc;  // Assign if valid
                } catch (e) {
                    console.log('Invalid image source URL', imgsrc);
                    avatar = 'anonym.jpg';  // Use a default image if invalid
                }


            }  else {
    
            let did = toAddr;
            const didresult = await readDIDRecord(did);
            const avtr = didresult.data.avatar;
           
            if (avtr && avtr.trim() !== '') {
            console.log('Avatar found in DID record');
            avatar = JSON.parse(avtr);
            } else {
            console.log('NO IMAGE SOURCE or avatar data is empty');
            avatar = "./anonym.jpg";
            }
    }
    
            // add address in UI
            let htmlData = `<address>${toAddr} <svg id="" onclick="event.stopPropagation();customcopy2clipboard('${toAddr}')" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path  fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" ></path></svg> </address><br><p>no info available</p>`;
            let shortAddr = toAddr.substring(0, 6) + "..." + toAddr.substring(38, 42);
    
            chatAddress.innerHTML = `<div class="" id="peerAddr" data-address="${toAddr}" >
                <img src='${avatar}' alt="avatar" class="rounded rounded-circle img-thumbnail" width='40px' id='avatarImage'  onclick="event.stopPropagation();openCard('${toAddr}','${avatar}')">
                <strong onclick="event.stopPropagation();openCard('${toAddr}','${avatar}')">${shortAddr}</strong>
                </div>`;
    
    
            // -------------------
    
            actionButtons.innerHTML = `
            <button type="button" id="peerSend" class="btn btn-approve" style="display: none;"
                    onclick="event.stopPropagation(); openSend('${toAddr.toString()}')" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                    SEND</button>
    
                    <button type="button" id="peerReceive" class="btn btn-reject" style="display: none;"
                    onclick="event.stopPropagation(); openSend('${toAddr.toString()}')"  disabled>
                    <svg height="16" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                        <path fill="currentColor"
                            d="m 506.43491,498.16358 c -7,10.1 -19.1,15.4 -31.2,13.5 l -416.000001,-64 c -9.7,-1.5 -18.2,-7.4 -23,-16 -4.8,-8.6 -5.4,-18.9 -1.6,-28 l 49.7,-119.6 -74.1,-68.5 c -9.70000029,-8.9 -12.9000003,-22.9 -8.1000003,-35.2 4.8,-12.3 16.7000003,-20.3 29.9000003,-20.3 h 83.600001 c 4,0 7.8,1.5 10.7,4.2 l 182.9,167.6 c 6.3,5.8 16,5.6 22,-0.4 6,-6 6.4,-15.7 0.7,-22 l -180.7,-203.4 44.2,-88.300001 c 5.3,-10.5999996 15.9,-17.39999965 27.7,-17.69999965 11.8,-0.3 22.8,5.90000005 28.7,16.09999965 l 256,448.000001 c 6.1,10.7 5.5,23.9 -1.4,34 z"
                            id="path992" />
                        </svg>
                    RECEIVE</button>
                <button class="honorloanbutton btn btn-secondary" onclick="sendHonorloanRequest(${toAddr.toString()})"
                    style='display:none'>Loan
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" style=" fill: #7cfc00; ">
                        <path
                            d="M80 104c0-22.1-17.9-40-40-40S0 81.9 0 104v56 64V325.5c0 25.5 10.1 49.9 28.1 67.9L128 493.3c12 12 28.3 18.7 45.3 18.7H240c26.5 0 48-21.5 48-48V385.1c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3 0 0-15.2-15.2-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32 15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1L98.7 309.5c-12-12-18.7-28.3-18.7-45.3V224 144 104zm480 0v40 80 40.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2 32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32-15.2 15.2 0 0-25.3 25.3c-21 21-32.8 49.5-32.8 79.2V464c0 26.5 21.5 48 48 48h66.7c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9V224 160 104c0-22.1-17.9-40-40-40s-40 17.9-40 40z">
                        </path>
                    </svg> 
                </button>
                `
         
                // activate buttons
            peerSend.style.display = 'inline';
            peerReceive.style.display = 'inline'
            peerSend.disabled = false;
            peerReceive.disabled = false;
    
            // ------------------------------------
            // AVOID REOPENING COMS WITH ADDRESESS
            // SACAR/ si lo saco falla...
            const allConversations = await iusnaturalisxmtp.conversations.list()
            console.log('available addresses:', allConversations.length)
            const customAddressToCheck = toAddr; // Replace this with the address you want to check
            let addressExists = false;
            for (const conversation of allConversations) {
                if (conversation.peerAddress === customAddressToCheck) {
                    addressExists = true;
                    cc = conversation
                    break; // Exit the loop early if the address is found
                }
            }
     
    
    
    if (addressExists) {
        console.warn(`YOU DO HAVE A CHAT HISTORY WITH ${customAddressToCheck} `);
        console.log('USER: ', userAddress)
        let h = await cc.messages()
    
        // CREATE THIS FUNCTON ==> loadChatHistory(h)
        for (let i = 0; i < h.length; i++) {
            // console.log('recipient address: ', h[i].recipientAddress)
    
            if (h[i].senderAddress === userAddress) {
                // console.log('YOU')
                let timestamp = simplifyDate(h[i].sent)
                document.getElementById('chatBox').innerHTML += `<div><strong class='who'>You:</strong> ${h[i].content}<span class="timestamp">  ${timestamp} &check; </span></div>`;
    
    
            } else {
                // console.log('NOT YOU')
                let timestamp = simplifyDate(h[i].sent)
                let shortAddr = h[i].senderAddress.substring(38, 42);
    
                document.getElementById('chatBox').innerHTML += `<div><strong class='who notyou'>${shortAddr}:</strong> ${h[i].content}<span class="timestamp">  ${timestamp} &check; </span></div>`;
            }
    
        }
    
    
        console.log('history:', history)
    } else {
        console.warn(`YOU DONT HAVE A CHAT HISTORY WITH ${customAddressToCheck} `);
    
    }
    // FIN AVOID REOPENING COMS WITH ADDRESESS
    // ------------------------------------
    
    // CREATE CHAT (client was already created)
    conversation = await iusnaturalisxmtp.conversations.newConversation(toAddr)
    console.log('conversation:', conversation)
    console.warn('------- READY TO CHAT 💬 ----------');
    
    // ADD ATTRIBUTE TO BODY(fix dup messg)
    document.body.setAttribute('currentChat', toAddr);
    
        // ACTIVATE CHAT BUTTONS
        document.getElementById('chatTextInput').disabled = false;
    document.getElementById('send-button').disabled = false;
    
    // FOCUS ON INPUT
    document.getElementById('chatTextInput').focus();
        // -----------
    
    
    var chatBox = document.getElementById("chatBox");
    let shortTo = toAddr.substring(38, 42);
    
    // Listen for new messages in the conversation
    for await (const message of await conversation.streamMessages()) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // Ensure two-digit format
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two-digit format
        const timestamp = `${hours}:${minutes}`;
        console.log('logMSG:', message)
        let preferedWallet = localStorage.getItem('preferedWallet');
        if (!preferedWallet) { console.log('NO PREFERED WALLET SET') }
        if (preferedWallet) { const values = preferedWallet.split(',').map(item => item.trim()); userAddress = values[1]; }
        if (message.senderAddress === userAddress) {
            console.log('YOU')
            chatBox.innerHTML += `<div><strong class='who'>You:</strong> ${message.content}<span class="timestamp">  ${timestamp} &check; </span></div>`;
        }
        if (message.senderAddress == toAddr) {
            console.log('OTHER', shortTo)
            mm = message;
            // let timestamp = message
            // chatBox.innerHTML += `<div><strong class='who'>${shortTo}:</strong> ${message.content} </div>`;
            document.getElementById('chatBox').innerHTML += `<div><strong class='who notyou'>${shortTo}:</strong> ${message.content}<span class="timestamp">  ${timestamp} &check; </span></div>`;
    
    
        }
        // if (message.contentType.sameAs(ContentTypeMultiplyNumber)) {
        // 	return message.content; // 21
        // }
        console.log(`[${message.senderAddress}]: ${message.content}`)
        chatBox.scrollTop = chatBox.scrollHeight;
    
    }
    }
    
            /*********************************************************************************************
            .) CONTACTS MANAGEMENT
            **********************************************************************************************/
    
    
            async function addUnknownContact(addr, msg) {
                console.warn('addUnknownContact()', addr, msg)
    
                // add unknown contact to  localstorage and check each time against the list if we add it or not into the contacts tab
                let shortAddr = addr.substring(0, 6) + "..." + addr.substring(38, 42);
                let shortMsg = msg.substring(0, 16);
    
    
                let unknownContacts = JSON.parse(localStorage.getItem('unknowncontacts')) || [];
                a = addr
                var index = unknownContacts.findIndex(existingUnknownContacts => existingUnknownContacts === addr);
    
                if (index === -1) {
                    console.log('PUSH UnknownContact to localstorage')
                    unknownContacts.push(addr);
    
                    document.getElementById('cwContacts').innerHTML += `
                        <li data-address="${addr}"  id="${addr}" class='newmessage'> 
                            <a onclick="event.stopPropagation();selectChat((this.parentElement))" >  
                                <img src="./anonym.jpg" alt="Avatar" class="rounded-circle"> 
                                    <span>${shortMsg} <span>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"width="18" height="16" >
                                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                                            
                                            
                                            </a> 
                                            </li> `
                                            // <i class="fa-solid fa-trash"></i>
    
                } else {
                    console.log('OVERWRITE ALREADY EXISTENT  UnknownContact!.');
    
                    // Search for the element with the specified ID
                    var elementToModify = document.getElementById(addr);
    
                    // Check if the element exists
                    if (elementToModify) {
                        // Add a new class to the element
                        elementToModify.classList.add('newmessage');
                        elementToModify.querySelector("span").innerText = shortMsg
    
                    } else {
                        // If the element with the specified ID is not found, you may want to handle that case
                        console.warn("Element with ID '" + addr + "' not found");
                        document.getElementById('cwContacts').innerHTML += ` 
                        <li data-address="${addr}" id="${addr}"  class='newmessage'> 
                        <a onclick="event.stopPropagation();selectChat((this.parentElement))" >  
                            <img src="./anonym.jpg" alt="Avatar" class="rounded-circle"> 
                            <span>${shortMsg} <span>
                                </a> </li> `
                                // <i class="fa-solid fa-trash"></i>
                    }
    
    
                }
    
                // CAMBIAR POR SaveContactsToLocalStorage??
                localStorage.setItem('unknowncontacts', JSON.stringify(unknownContacts));
    
    
            }
    
            async function addknownContact(addr, msg) {
                console.log('addknownContact()', addr, msg)
    
                let shortAddr = addr.substring(0, 6) + "..." + addr.substring(38, 42);
                let shortMsg = msg.substring(0, 16);
                var elementToModify = document.getElementById(addr);
                if (elementToModify) {
                    elementToModify.classList.add('newmessage');
                    elementToModify.querySelector("span").innerText = shortMsg
                }
    
            }
    
    
            async function loadHistory(){
        console.log('loadHistory()')
    
        // 1 check ist not in your agenda
    
        let chatList = await iusnaturalisxmtp.conversations.list()
                // c = chatList;
                let chatLength = chatList.length;
                console.log(chatLength, "addresses in history.")
    
                // Using a for loop
                for (let i = 0; i < chatLength; i++) {
                    // console.log(chatList[i].peerAddress);
                    // peerAddresses.push(chatList[i].peerAddress);
    
                    // addUnknownContact(chatList[i].peerAddress, chatList[i].createdAt.toString())
                    addHistoryContact(chatList[i].peerAddress, chatList[i].createdAt.toString())
    
        // paa.forEach((el, i) => {
        // 			addHistoryContact(paa[i], paa[i])
    
                }
    
    
    }
    
    
    async function loadContacts() {
                console.log('loadContacts()')
                let contct = document.getElementById('cwContacts')
                contct.innerHTML = ''
                let cwContacts = JSON.parse(window.localStorage.getItem('contacts'));
                if (!cwContacts) {
                    console.warn('YOU HAVE', 0, 'CONTACTS in LOCALSTORAGE at loadContacts()')
    
                }
                    if (cwContacts) {
                    console.warn('YOU HAVE', cwContacts.length, 'CONTACTS in LOCALSTORAGE at loadContacts()')
                const promises = [];
                cwContacts.forEach((el, index) => {
                    // is username set?
                    if (el.username || null) {
                        console.log('✅ contact\' s username is not null');
                        contactInfo = `<span>${el.username} <span>`;
                    } else {
                        console.log('❌ contact\' s username is null');
                        let shortAddr = el.address.substring(0, 6) + "..." + el.address.substring(38, 42);
                        contactInfo = `<span>${shortAddr} <span>`;
                    }
    
                    // let did = `did:ius:${el.address}`;
                    let did = el.address;
    
                    // Add each asynchronous operation to the promises array
                    promises.push(
                        new Promise((resolve, reject) => {
                            readDIDRecord(did)
                                .then(didresult => {
                                    if (didresult.data != null) {
                                        console.log(did + ' HAS A RECORD!!!');
                                        // d=didresult
                                        let avtr = didresult.data.avatar;
                                        if (avtr) {
                                            let avatar = JSON.parse(avtr);
                                            document.getElementById(did).src = avatar;
                                            // Now you can use the avatar object
                                        } else {
                                            // Handle the case where avtr is empty
                                            console.log('Avatar data is empty');
                                        }
                                    } else {
                                        console.log(did + ' DOESN\'T HAVE A RECORD :(#1464)');
                                    }
                                    resolve(); // Resolve the promise once the operation is done
                                })
                                .catch(error => {
                                    console.warn('Warn on DID record:', error);
                                    reject(error); // Reject the promise if an error occurs
                                });
                        })
                    );
    
        contct.innerHTML += `<li data-address="${el.address}" id="${el.address}" class=''> 
                                <a onclick="event.stopPropagation();selectChat((this.parentElement))">  
                                    <img id ="${did}" src="./anonym.jpg" alt="Avatar" class="rounded-circle"> 
                                        ${contactInfo} 
                                        <svg onclick="event.stopPropagation();editContact('${el.address}')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20" height="25" class='right'>
                                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/>
                                            </svg>
                                            </a> 
                                            </li>`;
                                            // <i class="fa-solid fa-trash"></i>
    });
    
    // Execute all promises concurrently
    Promise.all(promises)
        .then(() => {
            console.log('All DID record processing completed.');
        })
        .catch(error => {
            console.error('Error while processing DID records:', error);
        });
    
    
                }
    
            }// fin loadContacts
    
    
    
            function saveContacts(){
                console.log('saveContacts()')
    
        // Retrieve the contacts from localStorage
        const contacts = localStorage.getItem('contacts');
    
        if (!contacts) {
            console.error('No contacts found in localStorage.');
            return;
        }
    
        // Create a Blob from the contacts data
        const blob = new Blob([contacts], { type: 'application/json' });
    
        // Create a link element
        const link = document.createElement('a');
    
        // Set the download attribute with the filename
        link.download = 'contacts.json';
    
        // Create a URL for the Blob and set it as the href attribute
        link.href = window.URL.createObjectURL(blob);
    
        // Append the link to the body (it won't be visible)
        document.body.appendChild(link);
    
        // Programmatically click the link to trigger the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
        Toast.fire({ icon: 'success', title: 'Contacts saved into JSON file!', text:''});
    
    
    }
    
    function importContacts() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = function(event) {
            importJSONContacts(event);
        };
        
        input.click();
    }
    
    
    function importJSONContacts(event) {
        const file = event.target.files[0]; // Get the selected file
    
        if (!file) {
            console.error('No file selected.');
            return;
        }
    
        const reader = new FileReader();
    
        reader.onload = function(e) {
            const content = e.target.result;
    
            try {
                // Parse the JSON content to ensure it's valid
                const contacts = JSON.parse(content);
    
                // Save the parsed JSON into localStorage
                localStorage.setItem('contacts', JSON.stringify(contacts));
    
                console.log('Contacts successfully loaded into localStorage.');
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };
    
        // Read the file as text
        reader.readAsText(file);
        Toast.fire({ icon: 'success', title: 'Contacts imported!', text:''});
    
    }
    
    // Example usage: Attach the function to an input element
    // document.getElementById('fileInput').addEventListener('change', loadContacts);
    
                                    // <button  class="btn btn-primary" onclick="event.stopPropagation();loadContacts()">Import</button>
                                    // function importContacts()
            /*********************************************************************************************
            .) OLD QRCHAT
            **********************************************************************************************/
            async function xmtp(wallet) {
    
            let to = localStorage.getItem('toAddress')
            if (!to) {
                console.log('NO "TO" ADDRESS')
                const xmtp = await Client.create(wallet)
                console.log('XMTP CLIENT CREATED: ', xmtp)
                // xm = xmtp;
                return
            }
            else {
                console.log('YES "TO" ADDRESS')
                const xmtp = await Client.create(wallet)
                localStorage.setItem('chatxmtp', xmtp)
                // await chatWith(to)
            }
    
    
    
    }
    
    document.getElementById("chatTextInput").addEventListener("keydown", function (event) {
        console.log('Pressed ENTER')
    if (event.key === "Enter") {
        var userInput = this.value.trim(); // Trim whitespace from input
        if (userInput !== "") {
            console.log("User input:", userInput);
            // Do something with the user input here
            sendMessage(event);
        }
        // var userInput = this.value;
        // console.log("User input:", userInput);
        // // Do something with the user input here
        // sendMessage();
        event.preventDefault(); // Prevents the default behavior of the Enter key (submitting a form)
    }
    });
    
    document.getElementById("chatTextInput").addEventListener("blur", function (event) {
    var userInput = this.value.trim(); // Trim whitespace from input
    if (userInput !== "") {
        console.log("User input:", userInput);
        // Do something with the user input here
        sendMessage(event);
    }
    // var userInput = this.value;
    // console.log("User input:", userInput);
    // // Do something with the user input here
    // sendMessage();
    });
    
    async function sendMessage() {
    console.log('sendMessage()')
    event.preventDefault();
    
    var userInput = document.getElementById("chatTextInput").value;
    var chatBox = document.getElementById("chatBox");
    var message = document.createElement("div");
    
    if (userInput.trim() !== "") {
        // The input value is not empty
        console.log("Input is not empty");
    } else {
        // The input value is empty
        console.log("Input is empty");
        return
    }
    
     
    
    document.getElementById("chatTextInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    if(conversation){
        console.log('CONVESATION AVAILABLE NOW: ', conversation)
    } else {
        console.log('NO AVAILABLE CONVESATION: ')
        
    }
    await conversation.send(`${userInput}`);// Send a message
    // unfocus
    document.getElementById('chatTextInput').blur();
    
    // event.preventDefault(); // Prevents the default behavior of the Enter key (submitting a form)
    
    }
    
    
    
    
    function setToAddress() {
    var toaddr = document.getElementById("toAddr").value;
    
    console.log('setting TO adddress: ', toaddr)
    
    // if (ethers.utils.isAddress(toaddr)) {
    if (ethers.isAddress(toaddr)) {
        console.log('VALID ADDRESS')
        document.getElementById("invalid-address-alert").style.display = "none";
        localStorage.setItem('toAddress', toaddr)
        document.getElementById('results').innerHTML += `<br>TO address: ${toaddr}  <button class="btn btn-secondary" onclick="clearChat()">Clear</button>`
    
    
    } else {
        console.log('INVALID ADDRESS')
        document.getElementById("invalid-address-alert").style.display = "block";
    
    }
    
    
    }
    
     
    
    function customcopy2clipboard(text) {
    console.log('customcopy2clipboard()', text)
    
    let textLink = `<a href="${text}">${text}</a>`;
    
    if (window.clipboardData && window.clipboardData.setData) {
        console.log('Copied to Clipboard', text, "success");
    
        document.getElementById('innerAddress').innerHTML = '<path fill="currentColor"  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/><p>Copied!</p>'
    
        setTimeout(() => {
            document.getElementById('innerAddress').innerHTML = ' <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>'
        }, 1000);
        return window.clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            console.log('Copied to Clipboard', text, "success");
            document.getElementById('innerAddress').innerHTML = '<path fill="currentColor"  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/><p>Copied!</p>'
    
            setTimeout(() => {
                document.getElementById('innerAddress').innerHTML = ' <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>'
            }, 1000);
    
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
    
    
    }
    
    
    async function addUser() {
    console.log('ADDING NEW USER ADDRESS')
    }
    
    
    
    // EDIT CONTACT
    // el.address
    async function editContact(addr) {
    console.log('editContact()')
    const inputValue = '';
    
    const { value: userName } = await Swal.fire({
        title: "Enter a name for this address",
        input: "text",
        inputLabel: "contact name",
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });
    if (userName) {
    
        // let contact = { address: addr, username: userName, avatar: null, did: null }
        // SaveContactsToLocalStorage(contact)
        await updateUsername(addr, userName)
    
        await loadContacts()
        console.log('Contact Updated', userName)
        // Swal.fire(`Your IP address is ${userName}`);
    }
    
    
    }
    
    
    function updateContactList(contact) {
    // Retrieve existing contacts from localStorage
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    // Check if the contact already exists in the list
    var existingContactIndex = contacts.findIndex(function (existingContact) {
        return existingContact.address === contact.address;
    });
    
    if (existingContactIndex !== -1) {
        // If the contact exists, update its details
        contacts[existingContactIndex] = contact;
    } else {
        // If the contact doesn't exist, add it to the list
        contacts.push(contact);
    }
    
    // Save the updated contact list back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    
    
    // SAVE CONTACTS 
    function SaveContactsToLocalStorage(contact) {
                console.log('SaveContactsToLocalStorage()')
                var a = [];
                a = JSON.parse(localStorage.getItem('contacts')) || [];
    
                // Check if the address already exists
                var isDuplicate = a.some(existingContact => existingContact.address === contact.address);
    
                if (!isDuplicate) {
                    console.warn('CONTACT IS ALREDY HERE, DUPLICATE!')
                    a.push(contact);
                    localStorage.setItem('contacts', JSON.stringify(a));
                }
                else {
                    console.warn('Address already exists in your contacts, skipping save.');
                    // updateContactList(contact)
                }
            }
    
            function RemoveContactFromLocalStorage(address) {
        console.log('RemoveContactFromLocalStorage()');
        
        // Get the current contacts from local storage
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
        // Filter out the contact with the specified address
        var updatedContacts = contacts.filter(contact => contact.address !== address);
    
        // Save the updated contacts back to local storage
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        
        console.log('Contact removed successfully.');
        Toast.fire({ icon: 'warning', title: 'Contact removed successfully!', text:''});
        loadContacts()
    }
    
    
    
    
    function addToAgenda(){
                console.log('addToAgenda()')
                // check if contact is already in your agenda
    
            }
    
        async	function updateUsername(ethAddress, newUsername) {
        console.log('updateUsername()');
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        
        // Find the contact by address and update the username
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].address === ethAddress) {
                contacts[i].username = newUsername;
                localStorage.setItem('contacts', JSON.stringify(contacts));
                console.log(`Username updated for contact with address ${ethAddress}`);
                Toast.fire({ icon: 'success', title: 'Contact updated!', text:''});
    
                return;
            }
            else{
                console.log(`Contact with address ${ethAddress} not present`);
    
            }
        }
        
        console.log(`Contact with address ${ethAddress} not found`);
                    // let contact = { address: ethAddress, username: newUsername, avatar: null, did: null }
                    let contact = { address: ethAddress, username: newUsername,  did: null }
                    SaveContactsToLocalStorage(contact)
    }
    
    // Example usage
    // let ethAddress = '0x123...'; // Replace with actual Ethereum address
    // let newUsername = 'NewUsername'; // Replace with the new username you want to set
    
    // updateUsername(ethAddress, newUsername);
            
    
    
            async function chatHistory(addr) {
    
                let conversation = await iusnaturalisxmtp.conversations.newConversation(addr)
                const messages = await conversation.messages()
    
                for (const message of messages) {
                    console.log(message.content);
                }
            }
    
    
    
    
    function simplifyDate(dateString) {
    // Create a new Date object
    var date = new Date(dateString);
    
    // Get current date
    var currentDate = new Date();
    
    // Define months array for formatting
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Format the date
    var formattedDate;
    if (date.toDateString() === currentDate.toDateString()) {
        // If the date is today, display only time
        var hours = date.getHours();
        var minutes = date.getMinutes().toString().padStart(2, '0');
        var seconds = date.getSeconds().toString().padStart(2, '0');
        formattedDate = hours + ':' + minutes + ':' + seconds;
    } else {
        // If the date is not today, display day, month, and year
        formattedDate = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }
    
    return formattedDate;
    }
    
    // // Example usage:
    // var dateString = "Wed May 01 2024 01:17:42 GMT-0300 (Argentina Standard Time)";
    // console.log(simplifyDate(dateString)); // Output: "01 May 2024"
    
    
    function openCard(toAddr ,avtr) {
    console.log(' openCard()', toAddr, avtr)
    let a= toAddr;
    let b= avtr;
    console.log('OPENCARD DATA a:',a)
    console.log('OPENCARD DATA b:',b)
    let avatar = "./anonym.jpg"
    let htmlData = `<address>${toAddr} <svg id="innerAddress" onclick="event.stopPropagation();customcopy2clipboard('${toAddr}')" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"> <path  fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" ></path></svg> </address><br><p>no more info available</p>`;
    let shortAddr = toAddr.substring(0, 6) + "..." + toAddr.substring(38, 42);
    // -----------
    
        Swal.fire({ imageUrl: avtr, 
                imageWidth: 300, 
                imageHeight: 300, 
                imageAlt: 'Avatar image', 
                html: htmlData,
                showDenyButton: true,
                showCancelButton: false,
                showCloseButton: true, 
                confirmButtonText: 'trust',
                denyButtonText: 'Block',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
    },
    }).then((result) => {
    if (result.isConfirmed) {
        // Swal.fire('Saved into your trusted contacts!', '', 'success')
        editContact(toAddr)
    
    
    } else if (result.isDenied) {
        // Swal.fire('Address blocked', '', 'info')
        RemoveContactFromLocalStorage(toAddr)
    
    }
    })
    // ---
    }
    
    
    
    var cwContacts = document.getElementById('cwContacts');
    
    cwContacts.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent the default context menu
    
    // Check if the right-click was on an li element
    if (e.target.tagName === 'LI') {
        // Increment your counter or perform any other action
        console.log('Right-clicked on li element');
    }
    });
    
    async function initChatClient(wallet) {
    console.warn(`
    ******************
    initChatClient()
    ******************
    `)
    // Create the client with your wallet. This will connect to the XMTP development network by default
    // const xmtp = await Client.create(wallet)
    const xmtp = await Client.create(wallet, { env: "dev", })
    
    // REGISTER CODECS
    
    // Support on-chain transaction references in your app built with XMTP
    // https://xmtp.org/docs/build/messages/transaction
    xmtp.registerCodec(new TransactionReferenceCodec());
    
    
    
    // const iusnaturalisxmtp = await Client.create(wallet)
    iusnaturalisxmtp = xmtp;//make global
    console.warn('iusnaturalisxmtp SET TO GLOBAL')
    // Listen for new conversations
    const stream = await iusnaturalisxmtp.conversations.stream()
    console.log('STREAM:', stream)
    
    //  registerCodecs(xmtp)
    await listExistingConversations(iusnaturalisxmtp)
    return xmtp
    }
    
    
    // -----------------
    // LISTEN TO ALLLLLL INCOMING!
    async function listenAllNewAddresses() {
    console.log('listenAllNewAddresses()')
    
    for await (const message of await iusnaturalisxmtp.conversations.streamAllMessages()) {
        if (message.senderAddress === iusnaturalisxmtp.address) {// This message was sent from me
            continue
        }
    
        document.getElementById('chatBadge').style.display = 'inline'
        document.getElementById('chatBadge').innerText = '!'
        console.log(`New message from ${message.senderAddress}: ${message.content}`)
        Toast.fire({ icon: 'info', title: `New message from ${message.senderAddress}`, text: message.content});
    
        
        try{
            await playButtonClickSound()
                        // addToAgenda()
    
        }
        catch (error) {
                console.error('Error getting did:', error.message);
            }
    
    // ########################
    // CHAT CODES
    // ########################
    // paymentReceived
    if (message.content.includes("paymentReceived0x21")) {
        console.log("You received a payment from: ", message.senderAddress);
    
    
            // Swal.fire({ title: "Your gas is being payed by your peer!", width: 600, padding: "3em", background: "lightgreen ", backdrop: ` rgba(0,123,123,0.4) url("./nyan-cat.gif") left top no-repeat ` });
        Swal.fire({
                        icon: "success",
                        title: `Received!🤑`,
                        html:`<span class ="tx"> Here is the tx  <a href="asd" target="_blank">Link</a> ✨✨✨</span>`
                    });
            
        }	
    
    
    // peerGasPaymentAccept
        if (message.content.includes("peerGasPaymentAccepted0x21")) {
            Swal.fire({ title: "Your gas is being payed by your peer!", width: 600, padding: "3em", background: "lightgreen ", backdrop: ` rgba(0,123,123,0.4) url("./nyan-cat.gif") left top no-repeat ` });
    
            setTimeout(() => {
                Swal.fire("Done!", "", "success");
                closeModalId('#walletSend')
            }, 3000);
        }
    
        // peerGasPaymentRequest
        if (message.content.includes("peerGasPaymentReques0x20")) {
            console.log("You received a peerGasPamentRequest from: ", message.senderAddress);
            conversation = await iusnaturalisxmtp.conversations.newConversation(message.senderAddress)
            Swal.fire({
                title: "Do you have some gas?",
                text: "your peer is asking you to pay for the gas",
                icon: "question",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: ` <i class="fa fa-thumbs-up"></i> Yes! `,
                denyButtonText: ` <i class="fa fa-thumbs-down"></i>  Decline`,
                cancelButtonText: `  Ignore`
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire({ title: `You are paying for the gas for ${message.senderAddress} (it is being automaticalle discounted from your gas balance)!`, width: 600, padding: "3em", color: "#716add", background: "#fff ", backdrop: ` rgba(0,0,123,0.4) url("./nyan-cat.gif") left top no-repeat ` });
                    await conversation.send(`user accepted to pay for the gas! <pre style="display: none;">peerGasPaymentAccepted0x21</pre>`);// Send a message
                    setTimeout(() => {
                        Swal.fire("Gas payed!(FAKE...)", "", "success");
                    }, 5000);
                } else if (result.isDenied) {
                    Swal.fire("You decline to pay for the gas", "", "info");
                }
            });
        }
        else { console.log("(DIRTYFIX)The message does not contain the text: 'can you pay for the gas?'"); }
    
        // CHECK IF ADDRESS IS ALREADY IN YOUR CONTACTS (LOCALSTORAGE)
        var storedContacts = [];
        let storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
        // Find index of the message with the same address
        var index = storedContacts.findIndex(existingContact => existingContact.address === message.senderAddress);
    
        if (index === -1) {
            console.log('THIS ADDRESS IS NOT IN YOUR CONTACT LIST.. Adding new UNKNOWN (and unvalidated) contact.');
            addUnknownContact(message.senderAddress, message.content)
        } 
        else {
            console.log('YES: THIS ADDRES IS IN YOUR CONTACT LIST')
            console.log('OVERWRITE last msg, INDEX:', storedContacts[index], index)
            addknownContact(message.senderAddress, message.content)
    
        }
    
        updateBadge()
    }
    }
    
    
     
    
    
    async function listExistingConversations(xmtp) {
    console.warn('listExistingConversations() NO USADO?????')
    // List existing conversations
    const allConversations = await xmtp.conversations.list()
    console.log('AVAILABLE CHATS:', allConversations.length)
    const peerAddressesArray = [];
    
    allConversations.forEach(async (conversation, index) => {
        peerAddressesArray.push(conversation.peerAddress);
        
        // QUITAR SOLO PARA PRUEBA
        console.warn('listenNewChats() OMITED HERE')
        // await listenNewChats(conversation.peerAddress)
    })
    paa = peerAddressesArray;
    console.warn('!!!!! paa DECLARED !!!!!!!!!')
    
    }
    
    
    
    async function deleteChat() {
    console.warn('DELETING CHAT')
    // clear URL
    removeParam('chat');
    // remove body's ATTRIBUTE
    document.body.removeAttribute('currentChat');
    
    // remove "TO" address from localStorage
    localStorage.removeItem('toAddress')
    
    // GOT TO CHAT TAB
    // openChat()
    closeSearch()
    
    //clear UI
    chatAddress.innerHTML = ''
    document.getElementById('chatBox').innerHTML=`<div class="container"> <div class="row justify-content-center"> <div class="col-10"> <div id="svg-container"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> <image href="./LOGOSTEALTHCHAT.png" width="100%" height="100%"></image> </svg> <button type="button" id="" class="btn btn-primary " style="display: inline;" onclick="event.stopPropagation(); openChat()"> CHAT </button> </div> </div> </div> </div> `
    // DEACTIVATE BUTTONS
    document.getElementById('chatTextInput').disabled = true;
    document.getElementById('send-button').disabled = true;
    
    
    }
    
    // center.onclick = function (e) {
    // console.log('GO TO MAIN')
    // const swiperEl = document.getElementById('troqContainer');
    // swiperEl.swiper.slidePrev();
    // }
    
    function removeParam(key) {
    var url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.replaceState({}, '', url);
    }
    
    
    
    
    async function createAlias(addr) {
    // const formattedAddress = ethers.utils.getAddress(addr);
    console.log('CREATE AN ALIAS FOR THIS ADDRESS', addr)
    // console.log('CREATE AN ALIAS FOR THIS ADDRESS',formattedAddress)
    
    // TEST
    // await iusnaturalisxmtp.registerCodec(new ContentTypeMultiplyNumberCodec());
    
    // const numbersToMultiply = { a: 3, b: 7 };
    
    // await conversation.send(numbersToMultiply, {
    // contentType: ContentTypeMultiplyNumbers,
    // });
    
    }
    
    
    // ----------------------------------
    // CHECK VALID ADDRESS
      
    
            async function isValidETHAddress(address) {
                // return ethers.utils.isAddress(address);
                return ethers.isAddress(address);
            }
            
            function isValidHex(address) {
                // Regular expression to check if a string is a valid hexadecimal
                const hexRegex = /^[0-9a-fA-F]+$/;
                return hexRegex.test(address);
            }
    
            function isValidStarkNetAddress(address) {
                // Remove the '0x' prefix if it exists
                const normalizedAddress = address.startsWith('0x') ? address.slice(2) : address;
    
                // Check if the address is a valid hexadecimal string and has the correct length
                return isValidHex(normalizedAddress) && normalizedAddress.length === 64;
            }
    
            async function getAddressType(address) {
                console.log('getAddressType()')
        // Check if it's a valid Ethereum address
        const isValidETH = await isValidETHAddress(address);
        if (isValidETH) {
            return 'ETH';
        }
        
        // Check if it's a valid StarkNet address
        const isValidStarkNet = isValidStarkNetAddress(address);
        if (isValidStarkNet) {
            return 'StarkNet';
        }
    
        // If neither, it's invalid
        return 'Invalid';
    }
    
        async function addAddress() {
        console.log('addAddress()')
    
                let addressToAdd = Swal.fire({
                    title: dictionary[globalLang]["addAddress"],
                    input: 'text',
                    inputAttributes: { autocapitalize: 'off' },
                    showCancelButton: true,
                    confirmButtonText: 'ok',
                    showLoaderOnConfirm: true,
                    preConfirm: (login) => { },
                    backdrop: true,
                    inputValidator: async (value) => {
                        if (!value) {
                            return 'You need to set a password to create your wallet!'
                        }
    
    
                        //  ADDR VERIFICATION
                        const isValid = await getAddressType(value);
    
                        if (isValid) {
                            console.log(`Address ${value} is valid.`);
    
                            Toast.fire({ icon: 'success', title: 'CHAT WITH:', position: 'center', text: value });
    
                                // ---------------------
                                // ANALIZE ADDRESS
                                if (isValid === 'ETH') {
                                    console.log('Perform action for Ethereum address');
                                    let contact = { address: value, username: null, avatar: null, did: null }
                                    SaveContactsToLocalStorage(contact)
                                    // chatWith(toAddr ,imgsrc)
                                    // get avatar if available or get it async
                                    await chatWith(value)
                                    await deleteChat()
                            
                                } 
                                // ---------------
                                else if (isValid === 'StarkNet') {
                                    console.log('Perform action for StarkNet address');
                                let did = `did:starkid:${value}`
                                let didData = await fetchDID(did)
                                console.log( 'didData', didData)
                                if (didData.data.alias || null) {
                                console.log('alias is not null', didData.data.alias);
                                let contact = { address: didData.data.alias, username: null, avatar: null, did: did }
                                SaveContactsToLocalStorage(contact);
                                await chatWith(didData.data.alias)
                                await deleteChat()
    
                            } else {
                                console.log('alias is null');
    
                    }
    
                                } else {
                                    console.warn('Invalid address');
                                }
    
                        } else {
                            console.log(`Address ${value} is not valid.`);
                            return 'Address is not valid!'
    
                        }
    
                    },
    
                    allowOutsideClick: () => {
                        const popup = Swal.getPopup()
                        popup.classList.remove('swal2-show')
                        setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake') })
                        setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake') }, 500)
                        return false
                    },
                })
                    .then(async (result) => {
                        if (result.isConfirmed) {
                            console.log('result.isConfirmed:')
                            // await decryptWallet(result.value)
                            return result.value
                        }
                    })
                console.log('addressToAdd:', addressToAdd)
    
                // close nav
                plToggle()
    
            }
    
    
            /*********************************************************************************************
            .)  Show Password Toggle
            **********************************************************************************************/
     
            // function storePasswordInSession(password) {
            // 	sessionStorage.setItem("password", password);
            // }
    
    // 	async function checkRememberPassword() {
    // 		console.log('checkRememberPassword')
    // 		const form = document.getElementById('passwordForm');
    // 		const passwordInput = document.getElementById('password');
    // 		const rememberPassword = document.getElementById('rememberPassword').checked;
    // 		const rememberPasswordwithBiometry = document.getElementById('rememberWithBiometry').checked;
    
    //     // Trigger validation
    //     if (!form.checkValidity()) {
    //         form.classList.add('was-validated');
    //         document.getElementById('rememberPassword').checked = false; // Uncheck the checkbox if validation fails
    //         document.getElementById('rememberWithBiometry').checked = false; // Uncheck the checkbox if validation fails
    //     } else {
    
    
    // 		if (rememberPasswordwithBiometry) {
    //             // Execute your function when the checkbox is checked and password is valid
    //             console.warn("Remember password with BIOMETRY activated .");
                
    // 			// let password =  passwordInput.value 
    // 			let password = document.getElementById('password').value;
    // 			let  walletAddress  =document.getElementById('yourAddress').getAttribute('address');
    
    // 			try {
    // 				await storePasswordWithBiometrics(password, walletAddress) 
    // 			} catch (error) {
    // 				console.error("Password cannot be stored with Biometrics:", error);
    // 				document.getElementById('rememberWithBiometry').checked = false
    // 			}
    
    
    //         } else {
    //             console.log("Remember password with BIOMETRY deactivated.");
    // 			// BORRAR CREDENCIALES!
    //         }
    
    //         if (rememberPassword) {
    //             console.warn("Remember password with SESSION_STORAGE activated.");
    // 			let password = document.getElementById('password').value;
                
    // 			try {
    // 				// await storePasswordInSession(password)
    // 			sessionStorage.setItem("password", password);
    
    // 			} catch (error) {
    // 				console.error("Password cannot be stored with Biometrics:", error);
    // 				document.getElementById('rememberWithBiometry').checked = false
    // 			}
    //         } else {
    //             console.log("Remember password with SESSION_STORAGE deactivated.");
    // 			sessionStorage.removeItem("password");
    
    //         }
    
    //     }
    // }
    
    
     function showPassToggle(){
     console.log('showPassToggle()')
    
    var ShowPasswordToggle = document.querySelector("[type='password']");
    ShowPasswordToggle.onclick = function () {
      document.querySelector("[type='password']").classList.add("input-password");
      document.getElementById("toggle-password").classList.remove("d-none");
    
      const passwordInput = document.querySelector("[type='password']");
      const togglePasswordButton = document.getElementById("toggle-password");
    
      togglePasswordButton.addEventListener("click", togglePassword);
      function togglePassword() {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          togglePasswordButton.setAttribute("aria-label", "Hide password.");
        } else {
          passwordInput.type = "password";
          togglePasswordButton.setAttribute(
            "aria-label",
            "Show password as plain text. Warning: this will display your password on the screen."
          );
        }
      }
    };
    
    }
    
    
    
    
    // -------
    
    // 2. Store the Password Securely Using Biometrics
    async function storePasswordWithBiometrics(password, walletAddress) {
        console.log('storePasswordWithBiometrics: ', password, walletAddress)
        const passwordBuffer = new TextEncoder().encode(password);
    
        const publicKey = {
            challenge: new Uint8Array(32), // Dummy challenge
            rp: { name: "Web3 App" },
            user: {
                id: new TextEncoder().encode(walletAddress),
                name: walletAddress,
                displayName: "User with Wallet " + walletAddress
            },
            pubKeyCredParams: [{ alg: -7, type: "public-key" }],
            authenticatorSelection: {
                authenticatorAttachment: "platform",
                userVerification: "required"
            },
            timeout: 60000,
            attestation: "direct"
        };
    
        // Create a new biometric credential
        const credential = await navigator.credentials.create({ publicKey });
    
        // Encrypt the password with the public key (or just store it if using symmetric encryption)
        const encryptedPassword = btoa(String.fromCharCode(...passwordBuffer));
        localStorage.setItem('encryptedPassword', encryptedPassword);
        localStorage.setItem('credentialID', btoa(String.fromCharCode(...new Uint8Array(credential.rawId))));
    }
    
    
    
    // 3. Recall the Password Using Biometrics
    async function recallPasswordWithBiometrics(walletAddress) {
        const credentialID = Uint8Array.from(atob(localStorage.getItem('credentialID')), c => c.charCodeAt(0));
    
        const publicKey = {
            challenge: new Uint8Array(32), // Dummy challenge
            allowCredentials: [{
                id: credentialID,
                type: "public-key"
            }],
            timeout: 60000,
            userVerification: "required"
        };
    
        const assertion = await navigator.credentials.get({ publicKey });
    
        // Retrieve and decrypt the password
        const encryptedPassword = localStorage.getItem('encryptedPassword');
        const password = atob(encryptedPassword);
    
        console.warn('password:', password)
        return password;
    }
    
    // -------
    
            let currentStep = 1;
            let mnemonicPhrase = ""; // This should be generated and set when creating the wallet
            const displayMnemonic = document.getElementById('displayMnemonic');
    
            
            async function prevStep() {
                currentStep--;
                showStep(currentStep);
            }
    
    
                async function nextStep() {
                console.log('nextStep: ', currentStep);
                
                if(currentStep==1){
                    console.log('check password and remember options')
    
                    const form = document.getElementById('passwordForm');
                    const passwordInput = document.getElementById('password');
                    const rememberPassword = document.getElementById('rememberPassword').checked;
                    const rememberPasswordwithBiometry = document.getElementById('rememberWithBiometry').checked;
    
                // Trigger validation
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                    document.getElementById('rememberPassword').checked = false; // Uncheck the checkbox if validation fails
                    document.getElementById('rememberWithBiometry').checked = false; // Uncheck the checkbox if validation fails
                    return
                } else {
    
                    let password = document.getElementById('password').value;
    
                    if (rememberPasswordwithBiometry) {
                        // Execute your function when the checkbox is checked and password is valid
                        console.warn("Remember password with BIOMETRY activated .");
                        
                        // let password =  passwordInput.value 
                        let password = document.getElementById('password').value;
                        let  walletAddress  =document.getElementById('yourAddress').getAttribute('address');
    
                        try {
                            await storePasswordWithBiometrics(password, walletAddress) 
                        } catch (error) {
                            console.error("Password cannot be stored with Biometrics:", error);
                            document.getElementById('rememberWithBiometry').checked = false
                            return
    
                        }
    
    
                    } else {
                        console.log("Remember password with BIOMETRY deactivated.");
                        // BORRAR CREDENCIALES BIOMETRICAS
                        localStorage.removeItem("encryptedPassword");
                        localStorage.removeItem("credentialID");
    
                    }
    
                    if (rememberPassword) {
                        console.warn("Remember password with SESSION_STORAGE activated.");
                        // let password = document.getElementById('password').value;
                        
                        try {
                            // await storePasswordInSession(password)
                        sessionStorage.setItem("password", password);
    
                        } catch (error) {
                            console.error("Password cannot be stored with SESSION_STORAGE:", error);
                            document.getElementById('rememberPassword').checked = false
                            return
    
                        }
                    } else {
                        console.log("Remember password with SESSION_STORAGE deactivated.");
                        sessionStorage.removeItem("password");
    
                    }
    
                    // remember to delete this later in the code
                    sessionStorage.setItem("tempPassword", password);
    
                }
                } 
     
    
    
                currentStep++;
                showStep(currentStep);
            }
    
            async function getMnemonic() {
                // Replace this with actual mnemonic generation logic
                // return "example mnemonic phrase generated by your wallet";
                // const unbackedWallet = localStorage.getItem('unbackedWallet');
                // let mnemonicPhrase = JSON.parse(unbackedWallet)
                // return mnemonicPhrase
                const unbackedWallet = localStorage.getItem('unbackedWallet');
    
                    if (unbackedWallet) {
                        try {
                            let mnemonicPhrase = JSON.parse(unbackedWallet);
                            return mnemonicPhrase;
                        } catch (e) {
                            console.error('Error parsing JSON from localStorage:', e);
                            // Handle parsing error or provide fallback
                            return null; // or some default value
                        }
                    } else {
                        console.warn('unbackedWallet is not present in localStorage.');
                        // Handle the case when unbackedWallet is not found
                    // let pass = 	sessionStorage.getItem("tempPassword");
                    // const encryptedWallet = localStorage.getItem('encryptedWallet');
                    // let wallet =  await ethers.Wallet.fromEncryptedJson(encryptedWallet, pass)
                    // let mnemonic = wallet.mnemonic.phrase;
                    // return mnemonic
    
                    try {
                        let pass = 	sessionStorage.getItem("tempPassword");
                        const encryptedWallet = localStorage.getItem('encryptedWallet');
                        let wallet =  await ethers.Wallet.fromEncryptedJson(encryptedWallet, pass)
                        let mnemonic = wallet.mnemonic.phrase;
                        return mnemonic
                        // return mnemonicPhrase;
                        } catch (e) {
                            console.error('Error parsing  encryptedWallet:', e);
                            // Handle parsing error or provide fallback
                            return null; // or some default value
                        }
                    // return ethers.Wallet.fromEncryptedJson(encryptedWallet, pass)
                        // return null; // or some default value
                    }
                // return JSON.parse(unbackedWallet)
            }
    
     
    async function showStep(step) {
        switch (step) {
           
    
                                case 1:
               
                        displayMnemonic.innerHTML = `
                            <form id="passwordForm" class="needs-validation" novalidate>
                                <label for="password" class="form-label">SET YOUR Password</label>
                                <div class="input-group">
                                    <input type="password" id="password" class="form-control rounded" required>
                                    <button id="toggle-password" type="button" class="d-none"
                                        aria-label="Show password as plain text. Warning: this will display your password on the screen.">
                                    </button>
                                    <div class="invalid-feedback">
                                        Please enter your password.
                                    </div>
                                </div>
                                <br>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="rememberPassword" checked>
                                    <label class="form-check-label" for="rememberPassword">Remember me</label>
                                </div>
                                    <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="rememberWithBiometry" >
                                    <label class="form-check-label" for="rememberWithBiometry">Use your device biometrics to store password</label>
                                </div>
                                <button class="btn btn-primary" type="button" onclick="nextStep()">Next</button>
                            </form>
                        `;
                        showPassToggle()
                        // toggleRememberPassword()
                        break;
    
    
            case 2:
                mnemonicPhrase = await getMnemonic(); // Generate or retrieve the mnemonic phrase
               randomIndices = generateRandomIndices(mnemonicPhrase.split(" ").length); // Generate indices once
                displayMnemonic.innerHTML = `
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='40px' width='40px' fill="currentColor">
                            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                        </svg>
                        Write down your mnemonic phrase to access your wallet in the future!
                    </h3>
                    <div class="alert alert-warning alert-dismissible fade show">
                        <strong>${mnemonicPhrase}</strong>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="prevStep()" >Prev</button>
                    <button class="btn btn-primary" onclick="nextStep()">Next</button>
                `;
                break;
            case 3:
            // let mnemonicPhrase = await getMnemonic(); // Generate or retrieve the mnemonic phrase
    console.log('mnemonic in step 3:', mnemonicPhrase)
                displayMnemonic.innerHTML = `
                    <form id="mnemonicForm" class="needs-validation" novalidate>
                        <h3>Verify your mnemonic phrase</h3>
                        <div id="mnemonicVerification">
                            ${generateVerificationFields(mnemonicPhrase)}
                        </div>
                    <button class="btn btn-primary" type="button" onclick="prevStep()" >Prev</button>
    
                        <button class="btn btn-primary" type="submit">Verify</button>
                    </form>
                `;
    
                const mnemonicForm = document.getElementById('mnemonicForm');
                mnemonicForm.addEventListener('input', verifyMnemonic, false); // Verify on each input
                mnemonicForm.addEventListener('submit', function(event) {
    
                    const isValid = verifyMnemonic(); // Call the function to check if all words are correct
    
                    if (!mnemonicForm.checkValidity() || !isValid) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        event.preventDefault();
                        // Action to perform when all mnemonic words are correct
                        console.log("All words are correct!"); // Example action: log a message
    
                        Toast.fire({ icon: 'success', title: 'All words are correct'});
    
                     
    
                        // You can replace the console log with any other action, such as:
                        let tempPass = sessionStorage.getItem("tempPassword");
                        encryptAndStoreWallet(tempPass)
                        // mnemonicPhrase unbackedWallet or encryptedWallet?
                        // - Navigating to the next step
                        // - Displaying a success message
                        // - Storing the information in local storage
                        // - Triggering an API call
    
                        // For example, to move to the next step:
                        nextStep();
    
    
    
                    }
    
                    mnemonicForm.classList.add('was-validated');
    
                }, false);
                break;
            default:
                displayMnemonic.innerHTML = `
                <h3>✅ Mnemonic phrase backup completed! </h3>
                <button class="btn btn-secondary center"  onclick="closeModalId('#walletBackp')">Close</button>
                `;
                sessionStorage.removeItem("tempPassword");
    
                
        }
    }
    
    async function encryptAndStoreWallet(password){
    console.log('encryptAndStoreWallet()')
                        // recreate unbacked wallet
                        const unbackedWallet = localStorage.getItem('unbackedWallet');
                        const walletData = JSON.parse(unbackedWallet);
    
                        let wallet = ethers.Wallet.fromPhrase(walletData); 
                        
                        // now encrypt the json wallet and save it lo localstorage
                            let encSigner = await wallet.encrypt(password)
                        // }
                        // catch (error) { console.warn(error.message, 'ERROR 2 WALLET!');  }
                        
                        localStorage.setItem('encryptedWallet',encSigner )
                        
                        // Now delete unbackedWallet and create encryptedWallet/encryptedJsonWallet
                        console.log('unbackedWallet deleted from localStorage')
                        localStorage.removeItem('unbackedWallet')
    }
    
    
    function generateRandomIndices(length) {
        // Generate a unique set of indices
        const indices = new Set();
        while (indices.size < 3) {
            indices.add(Math.floor(Math.random() * length));
        }
        return Array.from(indices);
    }
    
    function generateVerificationFields(mnemonic) {
        const words = mnemonic.split(" ");
        let verificationFields = "";
    
        randomIndices.forEach(index => {
            verificationFields += `
                <div class="form-group">
                    <label for="word${index}">Enter word #${index + 1}</label>
                    <input type="text" id="word${index}" class="form-control" required>
                    <div class="invalid-feedback">
                        Please enter the correct word.
                    </div>
                </div>
            `;
        });
    
        return verificationFields;
    }
    
    function verifyMnemonic() {
                console.log('verifyMnemonic()')
    
        const words = mnemonicPhrase.split(" ");
        let allCorrect = true;
    
        randomIndices.forEach(index => {
            const input = document.getElementById(`word${index}`);
            if (input) {
                if (input.value.trim() !== words[index]) {
                    allCorrect = false;
                    input.classList.add("is-invalid");
                    // Toast.fire({ icon: 'error', title: 'Please verify the mnemonic phrase again' });
    
                } else {
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            } else {
                allCorrect = false;
                    Toast.fire({ icon: 'error', title: 'allCorrect = false' });
    
            }
        });
    
        // Toast.fire({ icon: 'info', title: `allCorrect = ${allCorrect}`});
    
        return allCorrect;
    }
    
     
    
            /*********************************************************************************************
            .)  SETTINGS
            **********************************************************************************************/
            async function getPasswordWithModal(){
                console.warn('getPasswordWithModal()')
                return  Swal.fire({
                        title: dictionary[globalLang]["unlockWallet"],
                        showCancelButton: false,
                        showDenyButton: true,
                        
                        confirmButtonText: 'Enter',
                        denyButtonText: `Cancel`,
    
                        showLoaderOnConfirm: true,
                        // backdrop: true,
    
                        input: 'password',
                        inputAttributes: { autocapitalize: 'off' },
                        backdrop: true,
                        html:  `				
                        <br>
                        <input type="checkbox" id="rememberPassword" name="rememberPassword" checked> 
                        <label for="rememberPassword">Remember password</label> 
                        `,
                        footer: '<a href="/docs/index.html#" target="_blank" rel="noopener noreferrer">Docs</a>',
                        preConfirm: (value) => {
                            if (!value) {
                                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> A password is required')
                            }
        
                },
            allowOutsideClick: () => { const popup = Swal.getPopup(); popup.classList.remove('swal2-show'); setTimeout(() => { popup.classList.add('animate__animated', 'animate__headShake'); }); setTimeout(() => { popup.classList.remove('animate__animated', 'animate__headShake'); }, 500); return false; },
            })
            .then(async (result) => {
            if (result.isConfirmed) {
     
                        const password = result.value;
                        const rememberCheckbox = Swal.getPopup().querySelector('#rememberPassword');
                        console.log('password entered!',result.value);
                        // console.log('rememberPasswordCheckboxentered!',rememberCheckbox.value);
                        console.log('checked?',rememberCheckbox.checked);
                        
                        return {password, rememberCheckbox}
                    }
                    if (result.isDenied) {
                        console.log('cancelled');
                        return false
    
                    }
    
                    // return result.value
    
            })
    
            }
            
            async function settings() {
                console.log('settings()')
                openModalId('#settingsModal')
    
            }
    
    
    
            /*********************************************************************************************
            .)  BACKUP
            **********************************************************************************************/
    
            async function backup(mnemonicPhrase) {
                console.warn('backup()')
                // openModalId('#walletBackp')
                // closeModalId('#settingsModal')
    
                // REMOVE HEADER ALERT 
                headerNotes.innerHTML = ``
    
                // -----------------
                // get mnemonicphrase
                // -----------------
    
                //  IS UNBACKEDWALLET?
                const unbackedWallet = localStorage.getItem('unbackedWallet');
                if (!unbackedWallet) {
                    console.warn('No unbackedWallet found. Checking for encryptedWallet.');
    
                // 3-  NO UNBACKED WALLET, is JSONWALLET?
                    const encryptedWallet = localStorage.getItem('encryptedWallet');
                    if (!encryptedWallet) {
                        console.warn('No encryptedWallet found.');
                                
                    } else {
                        // console.warn('3- YES JSON WALLET')
                        console.warn('YES encryptedWallet found. Checking for jsonWalletPassword.');
                        const jsonWalletPassword = sessionStorage.getItem('password');
                        if (!jsonWalletPassword) {
                            console.warn('No password found.');
                            console.error('No password found.');
    
                            // return
    
                        } else {
                            console.warn('encryptedWallet and jsonWalletPassword found.');
                            // THIS IS FOR JUST BACKING UP THE MNEMONIC(as the unbacked wallet was already backed up)
                            // GET password to decript the wallet
                            // --------------------------------------------------------
                        }
                            closeModalId('#settingsModal')
    
                            let getPassword = await getPasswordWithModal()
                            if (!getPassword) {
                                console.log("Password retrieval failed.");
                                return
                            } else {
                                console.log("Password retrieved successfully.");
                                console.log('PASSWORDDDDDD: ', getPassword)
                                gp =getPassword
                            }
    
                            //  return
                            openModalId('#walletPassword')
    
                            //  let password= getPassword.value.backupPassword.value;
                             let password= getPassword.password;
                             let encryptedjson = localStorage.getItem('encryptedWallet');
                                let ew = JSON.parse(encryptedjson);
                                console.log('pub key of wallet in localstorage:', ew.address);
                            let wallet;
                                try {
                                         wallet =  await ethers.Wallet.fromEncryptedJson(encryptedjson, password)
                                        w=wallet
                                    
                                    } 
                                    catch (error) {
                                        console.error('Error during wallet decryption:', error);
                                        // Toast.fire('Error', error.message, "error");
                                    backedWalletMnemonic.innerHTML = `
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Error!</strong> Something went wrong. Please try again.
                                    </div>
    
                                    `
    
                                    return null;
                                    // return null;
                                    }
    
                                    const rememberPasswordCheckbox = getPassword.rememberCheckbox
    
                                    if (rememberPasswordCheckbox.checked) {
                                            sessionStorage.setItem("password", password);
            
                                            } else {
                                            sessionStorage.removeItem("password");
            
                                            }
                                            
                                    console.warn('MNEMONIC: ', wallet.mnemonic.phrase)
    
                                    backedWalletMnemonic.innerHTML = `
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='40px' width='40px' fill="currentColor">
                                                <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                                            </svg>
                                            Write down your mnemonic phrase to access your wallet in the future!
                                        </h3>
                                        <div class="alert alert-warning alert-dismissible fade show">
                                            <strong>${wallet.mnemonic.phrase}</strong>
                                        </div>
                                        <button class="btn btn-secondary center"  onclick="closeModalId('#walletPassword')">Close</button>
                                    
                                    `;
                                    // class="alert alert-danger alert-dismissible fade show"
                            return 
                            // --------------------------------------------------------
                        
                        // }
    
                    }
                } else {
                    // Handle unbackedWallet
                console.warn('2- YES unbackedWallet', unbackedWallet)
                openModalId('#walletBackp')
                closeModalId('#settingsModal')
                showStep(currentStep);
    
                }
    
                // -----------------
            // Initialize the first step
            // showStep(currentStep);
    
    
                return
    
            }
    
            async function restoreWallet() {
                console.warn('restoreWallet()')
                openModalId('#walletRestore')
                closeModalId('#settingsModal')
    
    
    
                // DETECT IF ARE WORDS OR PRIVATE KEYS
                const input = document.getElementById("seedTextarea").value.trim();
                const privateKeyRegex = /^0x[a-fA-F0-9]{64}$/;
                const seedPhraseRegex = /^(\b[A-Za-z]+\b\s){11}(\b[A-Za-z]+\b)$/;
    
                seedTextarea.addEventListener('input', function (evt) {
                    console.log(this.value);
    
                    // IF PRIVATE KEY
                    if (privateKeyRegex.test(this.value)) {
                        console.warn("Private Key Detected");
                        seedTextarea.classList.add("is-valid");
                    }
    
                    // IF SEEDPHRASE
                    // else if (seedPhraseRegex.test(this.value)) {
                        else if (seedPhraseRegex.test(this.value.trim())) {
    
                        let cntwrds = countWords(this.value)
    
                        if (cntwrds >= 12) {
                            console.warn("Seed Phrase complete!");
                            setWalletRestore.disabled = true;
                            seedTextarea.classList.add("is-valid");
                            // HERE
                        setWalletRestore.disabled = false;
    
    
                        } else {
                            console.warn("less than 12 words");
                            setWalletRestore.disabled = false;
                            setWalletRestore.disabled = true;
    
                        }
                    }
    
                    else{
                        console.warn("not valid");
                        seedTextarea.classList.remove("is-valid");
    
                    }
    
            
                });
            }
    
    
    
            function successAnim(){
    
                function PathLoader(el) {
                    this.el = el;
                    this.strokeLength = el.getTotalLength();
                    // set dash offset to 0
                    this.el.style.strokeDasharray =
                    this.el.style.strokeDashoffset = this.strokeLength;
                }
    
                PathLoader.prototype._draw = function (val) {
                    this.el.style.strokeDashoffset = this.strokeLength * (1 - val);
                }
    
                PathLoader.prototype.setProgress = function (val, cb) {
                    this._draw(val);
                    if(cb && typeof cb === 'function') cb();
                }
    
                PathLoader.prototype.setProgressFn = function (fn) {
                    if(typeof fn === 'function') fn(this);
                }
    
                var body = document.body,
                    svg = document.querySelector('svg path');
    
                if(svg !== null) {
                    svg = new PathLoader(svg);
                    
                    setTimeout(function () {
                        document.body.classList.add('active');
                        svg.setProgress(1);
                    }, 200);
                }
    
                document.addEventListener('click', function () {
                    
                    if(document.body.classList.contains('active')) {
                        document.body.classList.remove('active');
                        svg.setProgress(0);
                        return;
                    }
                    document.body.classList.add('active');
                    svg.setProgress(1);
                });
            }
    
    
            function countWords(str) {
                let lngth = str.trim().split(/\s+/).length;
                console.log('countWords:', lngth)
                return lngth;
            }
    
    
    
            // not usded?
            async function restoreSeed() {
                console.warn('restoreSeed()')
    
                // check if password is set
                // #seedPassword
                const passwordInput = document.getElementById('seedPassword');
        
                    // Check if the input is empty
                    if (passwordInput.value.trim() === '') {
                        passwordInput.classList.add('is-invalid');
                        passwordInput.classList.remove('is-valid');
                        return
                    } else {
                        passwordInput.classList.remove('is-invalid');
                        passwordInput.classList.add('is-valid');
                    }
    
                // CREATE WALLET:
                    let seed = seedTextarea.value.trimStart().trimEnd();
                    let wallet
                    try {
                         wallet = await ethers.Wallet.fromPhrase(seed);
                        
                    } catch (error) {
                        
                    }
                    w =wallet
                    
                    
                    // ..............................................
                    // if selected save password to sessionStorage
                    let password= passwordInput.value.trim();
                    let rememberPasswordCheckbox = document.getElementById('wrememberPassword')
                    console.log('password entered!');
                    
                    if (rememberPasswordCheckbox.checked) {
                        console.log("password checked");
                        sessionStorage.setItem("password", password);
                        
                    } else {
                        console.log("password NOT checked");
                        sessionStorage.removeItem("password");
                        
                    }
                    
                    // now encrypt the json wallet and save it lo localstorage
                    let encWallet = await wallet.encrypt(password)
                    console.log('encWallet:',encWallet)
                    localStorage.setItem('encryptedWallet',encWallet )
                    await localStorage.removeItem('unbackedWallet')
                    console.log('unbackedWallet deleted from localStorage')
                    
                    
                    // RECREATE THE SIGNER
                    // return
                    // let decryptedWallet = ethers.Wallet.fromEncryptedJson()
                    // let signer = wallet.connect
                    closeModalId('#walletRestore')
                    seedTextarea.value = ''
                    console.log('signer:! ', wallet)
                    
                    headerNotes.innerHTML = ``
                    setAddress(wallet.address)
                    await loadDID(wallet)
                    syncBalance()
    
    
                    // remove xmtp from localstorage
                    const prefix = 'xmtp/dev/';
                    for (let i = localStorage.length - 1; i >= 0; i--) {
                        const key = localStorage.key(i);
                        if (key && key.startsWith(prefix)) {
                            localStorage.removeItem(key);
                        }
                    }
                    await initstealth(wallet)
                    // return
                    // return
    
                    // ...
    
    
            }
    
    
    
    
            /*********************************************************************************************
            .)   MANAGE DID
            **********************************************************************************************/
            async function fetchDIDRecord(did) {
                                    try {
                                      const didresult = await readDIDRecord(did);
                                      
                                      if (didresult.data) {
                                        console.log(`${did} HAS A RECORD!!!`);
                                        
                                        const avtr = didresult.data.avatar;
                                        if (avtr) {
                                          const avatar = JSON.parse(avtr);
                                        //   document.getElementById(did).src = avatar;
                                          return avatar
                                        } 
                                        // else {
                                        //   console.log('Avatar data is empty');
                                        // }
                                      } else {
                                        console.log(`${did} DOESN'T HAVE A RECORD `);
                                      }
                                    } catch (error) {
                                      console.warn('Warn on DID record:', error);
                                      throw error;
                                    }
                                  }
            // id: string; // avatar: string; // alias: string; // privData: string; // cid: string; // publicKey: PublicKey;
                async function createDIDRecord(did, avatar, alias, privData, cid, signer) {
                console.log('Now you have the signer, do whatever you need with it:', signer);
                const db = new Polybase({ defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID", });
                const data = [did, avatar, alias, privData, cid];
                db.signer(async (data) => {
                    const signature = await signer.signMessage(data);//FIXED!
                    return { h: 'eth-personal-sign', sig: signature, };
                });
    
                const collectionReference = db.collection("STARKID");
                await collectionReference.create(data);
    
            }
    
    
            async function readDIDRecord(id) {
                const db = new Polybase({
                    defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID",
                });
    
                const collectionReference = db.collection("STARKID");
                const record = await collectionReference.record(id).get();
                const { data } = record; // or const data = record.data
                const resultRecord = record.get();
                console.log('resultRecord:', resultRecord)
                return resultRecord
            }
    
            async function deleteDID(did, signer) {
                console.log('deleteDID()')
    
                const db = new Polybase({
                    defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID",
                });
    
                db.signer(async (did) => {
                    console.log('data:', did)
                    const signature = await signer.signMessage(did);
                    return { h: 'eth-personal-sign', sig: signature, };
                });
                try {
                    const recordData = await db
                        .collection("STARKID")
                        .record(did)
                        .call("deleteDID");
                } catch (error) {
                    console.error("An error occurred:", error);
                }
                return true
    
            }
    
    
            async function updateAvatarDID(did, newdata, signer) {
                console.log('updateDID()')
    
                const db = new Polybase({
                    defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID",
                });
    
                // const newdatab = [did, newdata];
    
                db.signer(async (newdata) => {
                    console.log('data:', newdata)
                    const signature = await signer.signMessage(newdata);
                    return { h: 'eth-personal-sign', sig: signature, };
                });
                try {
                    const recordData = await db
                        .collection("STARKID")
                        .record(did)
                        .call("updateAvatar", [newdata]);
                    console.log("recordData:", recordData);
                    console.warn('suscesfully updated DID')
                    Toast.fire({ icon: 'success', title: 'suscesfully updated DID' });
                    
    
                } catch (error) {
                    console.error("An error occurred:", error);
                    fixedToast.fire('Error', error.message, "error");
    
                }
                return true
    
    
            }
    
    
            async function updateAliasDID(did, newdata, signer) {
                console.log('updateDID()')
    
                const db = new Polybase({
                    defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID",
                });
    
                // const newdatab = [did, newdata];
    
                db.signer(async (newdata) => {
                    console.log('data:', newdata)
                    const signature = await signer.signMessage(newdata);
                    return { h: 'eth-personal-sign', sig: signature, };
                });
                try {
                    const recordData = await db
                        .collection("STARKID")
                        .record(did)
                        .call("updateAlias", [newdata]);
                    console.log("recordData:", recordData);
                } catch (error) {
                    console.error("An error occurred:", error);
                }
                return true
    
    
            }
    
    
    
            async function updatePrivDataDID(did, newdata, signer) {
                console.log('updateDID()')
    
                const db = new Polybase({
                    defaultNamespace: "pk/0x97eab0841786aeae14135af5e26750626e46e2e15a412b6a319dd2ce7f323c805d67fcfb0f8ea1f27959e486e11e49926fbf4b1c2b9252daa20283e200e3b1b3/STARKID",
                });
    
                // const newdatab = [did, newdata];
    
                db.signer(async (newdata) => {
                    console.log('data:', newdata)
                    const signature = await signer.signMessage(newdata);
                    return { h: 'eth-personal-sign', sig: signature, };
                });
                try {
                    const recordData = await db
                        .collection("STARKID")
                        .record(did)
                        .call("updatePrivData", [newdata]);
                    console.log("recordData:", recordData);
                } catch (error) {
                    console.error("An error occurred:", error);
                }
                return true
    
    
            }
    
    
    
    
            // --------------------------------------
            //    ENCRYPT FUNCITON
            async function encryptPrivkey(privkey, pubkey, toEncrypt) {
                console.log('encryptPrivkey()', toEncrypt)
                // 0. coniverte en estring la eth priv key
                const secretMessage = EthCrypto.cipher.stringify(toEncrypt);
                console.log('ethPrivKeyString: ', secretMessage)
    
                // 1.
                const signature = EthCrypto.sign(privkey, EthCrypto.hash.keccak256(secretMessage));
                console.log('signature: ', signature)
    
                // 2.
                const payload = { message: secretMessage, signature };
    
                // 3.
                const encrypted = await EthCrypto.encryptWithPublicKey(pubkey, JSON.stringify(payload));
    
                console.log('Alice encrypted ETH private key to store in registry:', encrypted)
    
                // 4.
                // we convert the object into a smaller string-representation
                const encryptedString = EthCrypto.cipher.stringify(encrypted);
                console.log('Alice encrypted ETH private key to store in registry STRING: ', encryptedString)
                // return encryptedString
                return encryptedString
    
            }
    
              // -----------------------------------
            // DECRYPT
            async function decryptPrivData(privkey, pubkey, toDecrypt) {
                console.log('encryptPrivkey()', toDecrypt)
    
                // ---------------
                // DECRYPTING
                // we parse the string into the object again
                const encryptedObject = EthCrypto.cipher.parse(toDecrypt);
    
                const decrypted = await EthCrypto.decryptWithPrivateKey(privkey, encryptedObject);
                const decryptedPayload = JSON.parse(decrypted);
                console.log('DECRYPRED✅!!!', decryptedPayload)
                // check signature
                const senderAddress = EthCrypto.recover(decryptedPayload.signature, EthCrypto.hash.keccak256(decryptedPayload.message));
                console.log('ETH Private key stored  by  ' + senderAddress + '<br>is: ' + decryptedPayload.message);
                // result.innerHTML = '<br><br>✅✅✅ STARKNET Private key DECRYPTED  ✅✅✅  by  ' + senderAddress + ' is: <br> ' + decryptedPayload.message
    
                return [decryptedPayload.message, senderAddress]
                 
    
            }
     
    
     
    
            /*********************************************************************************************
            .)   UPDATE IMAGE AVATA
            **********************************************************************************************/
    
            avatarIMG.onclick = function (e) {
                console.log('avatarIMG clicked')
                e.preventDefault()
    
                openModalId('#didManagerModal')
                // loadCroppedImg()
    
            };
    
            changeAvatar.onclick = function (e) {
                console.log('aliasAvatar clicked')
                e.preventDefault()
    
                loadCroppedImg()
    
            };
    
            async function compressImage(imageSrc, maxSizeKB) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = function () {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
    
                        // Calculate new dimensions to maintain aspect ratio
                        const MAX_WIDTH = 800;
                        const MAX_HEIGHT = 600;
                        let width = img.width;
                        let height = img.height;
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
    
                        // Set canvas dimensions
                        canvas.width = width;
                        canvas.height = height;
    
                        // Draw image on canvas
                        ctx.drawImage(img, 0, 0, width, height);
    
                        // Convert canvas to Blob and compress to target size
                        canvas.toBlob(function (blob) {
                            // Check if compressed image is within target size
                            if (blob.size / 1024 <= maxSizeKB) {
                                // Resolve with the compressed data URL
                                resolve(canvas.toDataURL());
                            } else {
                                // Reject if compressed image size exceeds target size
                                reject('Compressed image size exceeds the specified limit');
                            }
                        }, 'image/jpeg', 0.7); // Adjust the quality factor (0.7 here) to achieve desired compression level
                    };
                    img.src = imageSrc;
                });
            }
    
    
    
            async function loadCroppedImg() {
                console.log('loadCroppedImg()');
    
                // openModalId('#createDIDModal')
                // fileCreateItemFile => avatarIMGfile 
    
                await avatarIMGfile.click();
                let previewsrc;
    
                avatarIMGfile.onchange = async function () {
                    if (avatarIMGfile.files.length == 1) {
                        const data = this.files[0];
                        const name = data.name;
    
                        // Read the file and get its base64 data
                        let reader = new FileReader();
                        reader.readAsDataURL(data);
    
                        reader.onload = async function () {
                            previewsrc = reader.result;
    
                            // Compress the image
                            const compressedDataUrl = await compressImage(previewsrc, 100); // 100KB limit
    
                            // Display the image in a SweetAlert2 popup
                            Swal.fire({
                                html: `
                            <img id="preview" src="${compressedDataUrl}" style="display:none">
                            <div>
                                <img id="cropperjs" src="${compressedDataUrl}">
                            </div>
                        `,
                                allowOutsideClick: () => {
                                    const popup = Swal.getPopup();
                                    popup.classList.remove('swal2-show');
                                    setTimeout(() => {
                                        popup.classList.add('animate__animated', 'animate__headShake');
                                    });
                                    setTimeout(() => {
                                        popup.classList.remove('animate__animated', 'animate__headShake');
                                    }, 500);
                                    return false;
                                },
                                willOpen: () => {
                                    const image = document.querySelector('#cropperjs');
                                    // const cropper = new Cropper(image, {
                                        cropper = new Cropper(image, {
                                        // aspectRatio: '4:3',
                                          aspectRatio: 1/1,
                                        viewMode: 1,
                                        crop: throttle(function () {
                                            const croppedCanvas = cropper.getCroppedCanvas();
                                            // console.log('croppedCanvas:', croppedCanvas);
                                            
                                            const preview = document.querySelector('#preview');
                                            preview.src = croppedCanvas.toDataURL();
    
                                            let cropperinfo = cropper.getContainerData()
                                            // console.log("cropperinfo:",cropperinfo)
                                        }, 25),
                                    });
                                },
                                preConfirm: () => {
                                    const popup = Swal.getPopup();
                                    if (popup) {
                                        const previewElement = popup.querySelector('#preview'); // Assuming preview is the ID of the image element
                                        if (previewElement instanceof HTMLImageElement) {
                                            return previewElement.src;
                                        }
                                    }
                                },
                            }).then(async  function (result) {
                                avatarIMG.src = result.value;
                                aliasAvatar.src = result.value;
                                let b64 = JSON.stringify(result.value);
                                console.log('b64 image:', b64);
                                localStorage.setItem('avatar', b64);
                                avatarIMG.style.display = 'block';
                                // Toast.fire('Avatar added', '', "success");
    
    
                                // ...........................................................................................
                                // 3.RECORD TO ZKROLLUP DB
                                // ..........................................................................................
    
                                let avatar = localStorage.getItem('avatar');
                                let cid = '';
    
                                // ------------------------------------
                                // GET SIGNER
                                let presigner = await getSigner()
                                let provider = new ethers.JsonRpcProvider(`${optionsList[0].API}`); //v5
                                let signer = presigner.connect(provider);
                                console.log('SIGNER!:', signer);
                                // let did = `did:ius:${signer.address}`
                                let did = signer.address;
                                console.log('DID: ', did)
    
                                // ---------------
    
                                try {
                                    console.log('creating did RECORD, signer', signer)
                                    await updateAvatarDID(did, avatar, signer) 
                                } catch (error) {
                                    console.error('An error occurred while creating DID record:', error);
                                    return
                                }
    
                                // REMOVE FROM LOCALSTORAGE
                                 localStorage.removeItem('avatar');
                                console.warn('AVATAR REMOVED FROM LOCALSTORAGE!🚫')
    
    
                            });
                        };
                    }
                };
            }
    
    
    
    
    
            /*********************************************************************************************
            .)  MINT OR UPDATE
            **********************************************************************************************/
    
            async function mintOrUpdate() {
                console.log('mintOrUpdate()')
    
                openModalId('#didMinterModal')
    
                return
                // Example CID to register
                const cid = "QmYwAPJzv5CZsnAztbqiXLypCQzqJGdUJwHThYro4Mwdd2";
    
                // Call the function
                await registerOnchainDID(cid);		
    
            }
    
    
            async function registerOnchainDID(cid) {
    
                const provider = new ethers.JsonRpcProvider(optionsList[0].API);
                let chatETHPrivKey = localStorage.getItem('chatETHPrivKey');
                let signer = await new ethers.Wallet(chatETHPrivKey) 
                const contractAddress = optionsList[0].REGISTRY_CONTRACT_ADDRESS
                const contractABI = [
                    "function registerDID(string memory _cid) public",
                    "event DIDRegistered(bytes32 indexed didHash, string cid)"
                ];
    
    
                const connectedSigner = await signer.connect(provider);
    
                // Create contract instance
                const contract = new ethers.Contract(contractAddress, contractABI, connectedSigner);
    
    
                    try {
                        // Call the registerDID function
                        const tx = await contract.registerDID(cid);
    
                        console.log("Transaction sent:", tx.hash);
    
                        // Wait for the transaction to be mined
                        const receipt = await tx.wait();
                        console.log("Transaction mined:", receipt);
    
                        Swal.fire({
                                icon: "success",
                                title: "Done",
                                text: "Tx succesfull!",
                                footer: `<a target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/tx/${receipt.hash}">Tx link</a>`
                            });
    
    
                    } catch (error) {
                        console.error("Error registering DID:", error);
                        console.error("Error message:", error.error.message);
                        e= error;
                    }
                }
    
    
                async function updateOnchainDID(cid) {
    
                    const provider = new ethers.JsonRpcProvider(optionsList[0].API);
                    let chatETHPrivKey = localStorage.getItem('chatETHPrivKey');
                    let signer = await new ethers.Wallet(chatETHPrivKey) 
                    const contractAddress = optionsList[0].REGISTRY_CONTRACT_ADDRESS
                    const contractABI = [
                        "function registerDID(string memory _cid) public",
                        "event DIDRegistered(bytes32 indexed didHash, string cid)"
                    ];
    
    
                    const connectedSigner = await signer.connect(provider);
    
                    // Create contract instance
                    const contract = new ethers.Contract(contractAddress, contractABI, connectedSigner);
    
    
                        try {
                            // Call the registerDID function
                            const tx = await contract.registerDID(cid);
    
                            console.log("Transaction sent:", tx.hash);
    
                            // Wait for the transaction to be mined
                            const receipt = await tx.wait();
                            console.log("Transaction mined:", receipt);
    
                            Swal.fire({
                                    icon: "success",
                                    title: "Done",
                                    text: "Tx succesfull!",
                                    footer: `<a target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/tx/${receipt.hash}">Tx link</a>`
                                });
    
    
                        } catch (error) {
                            console.error("Error registering DID:", error);
                        }
                    }
    
    
    
    
                async function getDID() {
                    const provider = new ethers.JsonRpcProvider(optionsList[0].API);
                    let chatETHPrivKey = localStorage.getItem('chatETHPrivKey');
                    let signer = await new ethers.Wallet(chatETHPrivKey) 
                    const contractAddress = optionsList[0].REGISTRY_CONTRACT_ADDRESS
                    const contractABI = [ "function cids(address) view returns (string)" ];
                    
                    // Create contract instance
                    const contract = new ethers.Contract(contractAddress, contractABI, provider);
                    
                    // Address to query
                    let addressToQuery = signer.address;
                    try {
                        // Call the cids function
                        const cid = await contract.cids(addressToQuery);
                        console.log("CID:", cid);
                        
                    } catch (error) {
                        console.error("Error querying CID:", error);
                    }
                }
    
    
    
    
    
            /*********************************************************************************************
            .)  BALANCE
            **********************************************************************************************/
    
            async function syncBalance() {
                console.log('syncBalance()')
                let  addr  =document.getElementById('yourAddress').getAttribute('address');
                let balance= await checkERC20Balance(addr) 
                let gasBalance= await checkGasBalance(addr) 
                userData.innerHTML = `			
                <a id="" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${optionsList[0].ERC20_TOKEN_ADDRESS }">Balance: ${balance}</a>
                <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path fill="currentColor" d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> 
                <br>
                <a id="miniversion" target="_blank" rel="noopener noreferrer" href="${optionsList[0].EXPLORER}/address/${addr}">gas: ${gasBalance}</a>
                `;
                
    
             
            }
    
    
    
            async function syncTokenBalance(){
                console.log('syncTokenBalance()')
    
                let explorer =preferredToken.explorers[0].url
                let tokenAddress =preferredToken.contractAddr
                let userAddress= addr
    
    
                // <svg  class="rounded rounded-circle " width="40px"  height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onclick="event.stopPropagation();openModalId('#defaultTokenModal')" style=" position: absolute; left: 0; "> <path fill='#d17c78' d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg> 
            userData.innerHTML = ` 
            <a id="" target="_blank" rel="noopener noreferrer" href="${explorer}/address/${tokenAddress }">Balance: ${balance} </a> <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path  fill='#d17c78' d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> <br> <div id="miniversion"> <a  target="_blank" rel="noopener noreferrer" href="${explorer}/address/${userAddress}">gas: ${gasBalance} </a> </div> `;
        
            }
    
    
            async function getRandomProvider(){
    
                let isCurrentProvider = localStorage.getItem('currentProvider');
    
                    if (isCurrentProvider !== null) {
                        console.log('currentProvider exists:', isCurrentProvider);
                    } else {
                        console.log('currentProvider does not exist');
                    }
    
    
                    // get index
                    let preferredIndex = localStorage.getItem('preferredTokenIndex');
                    if (preferredIndex === null) {
                    preferredIndex = 0;
                    } else {
                    preferredIndex = parseInt(preferredIndex, 10); // Convert the stored value to an integer
                    }
    
                    // get token data
                    let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
                    let preferredToken = storedData[preferredIndex];
    
                    // get random provider
                const length = preferredToken.rpcs.length;
                const randomnumber = Math.floor(Math.random() * length);
                const selectedProvider = preferredToken.rpcs[randomnumber];
                console.log('selectedProvider:', selectedProvider, 'from ' , length , 'providers.');
    
                localStorage.setItem('currentProvider',selectedProvider )
                return selectedProvider
            } 
    
    
    
            async function checkGasBalance(walletAddress) {
                console.log('checkGasBalance() of ', walletAddress)
    
                     // Retrieve selector index  from localStorage
                     let preferredIndex = localStorage.getItem('preferredTokenIndex');
                    if (preferredIndex === null) {
                    preferredIndex = 0;
                    } else {
                    preferredIndex = parseInt(preferredIndex, 10); // Convert the stored value to an integer
                    }
    
                     // Retrieve the stored data from localStorage
                     let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
                    // If the preferred index is within the range of stored tokens, return the corresponding token details
                    if (storedData[preferredIndex]) {
                         preferredToken = storedData[preferredIndex];
                        //  pref= preferredToken
                    } else {
                        console.log('some problem in checkERC20Balance')
                    return
                }
    
                const length = preferredToken.rpcs.length;
                const randomnumber = Math.floor(Math.random() * length);
                const selectedProvider = preferredToken.rpcs[randomnumber];
                console.log('selectedProvider:', selectedProvider);
                let provider;
                try { provider = await new ethers.JsonRpcProvider(selectedProvider); } 
                catch (error) { console.warn('error creating provider', error) }
                console.log('provider to check gas :', provider);
                try {
                    const balance = await provider.getBalance(walletAddress);
                    console.log(`GAS bal (crudo) : ${balance} GAS`);
    
                    const gasBalance = ethers.formatEther(balance);
                    console.log(`GAS Balance : ${gasBalance} GAS`);
                    // console.log(`GAS Balance of ${optionsList[0].ERC20_TOKEN_ADDRESS}: ${gasBalance} GAS`);
    
                    return gasBalance;
                } catch (error) {
                    console.error('Error checking balance:', error.reason);
                    return null;
                }
            }
    
    
            async function checkERC20Balance(userAddress) {
                console.log('checkERC20Balance() of ', userAddress)
    
                     // Retrieve selector index  from localStorage
                let preferredIndex = localStorage.getItem('preferredTokenIndex');
                    if (preferredIndex === null) {
                    preferredIndex = 0;
                    } else {
                    preferredIndex = parseInt(preferredIndex, 10); // Convert the stored value to an integer
                    }
    
                     // Retrieve the stored data from localStorage
                     let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
                    // If the preferred index is within the range of stored tokens, return the corresponding token details
                    if (storedData[preferredIndex]) {
                         preferredToken = storedData[preferredIndex];
                         pref= preferredToken
                    } else {
                        console.log('some problem in checkERC20Balance')
                    return
                }
    
                const length = preferredToken.rpcs.length;
                const randomnumber = Math.floor(Math.random() * length);
                const selectedProvider = preferredToken.rpcs[randomnumber];
                console.log('selectedProvider:', selectedProvider);
                let provider;
                try { provider = await new ethers.JsonRpcProvider(selectedProvider); } 
                catch (error) { console.warn('error creating provider', error) }
                console.log('provider*?:', provider);
                p=provider
    
                let contractAddr = preferredToken.contractAddr
                const tokenContract = await new ethers.Contract(contractAddr, erc20Abi, provider);
                t=tokenContract;
                const formattedAddress = ethers.getAddress(userAddress);
                let balance;
                try { balance = await tokenContract.balanceOf(formattedAddress); } 
                catch (error) {
                    if (error.message.includes('Failed to fetch')) { console.warn('Error getting balance: Network or fetch issue. refetch?'); } 
                    else { console.warn('Error getting balance:', error); }
                }
                b=balance
                const decimals = await tokenContract.decimals();
                    console.log('decimals:',decimals)
                    d=decimals
                    let formatedBalance = ethers.formatUnits(balance, decimals);
                    console.warn(`ERC-20 Balance of ${preferredToken.tokenName}: ${formatedBalance} `);
                    return formatedBalance
                try {
                    return formatedBalance
                } catch (error) {
    
                    console.error('Error checking balance:', error);
                    return null;
                }
                 
        }
    
    
    
        async function checkNetwork() {
                console.log('CHEKGINS NETWORK!')
                let provider = await new ethers.JsonRpcProvider(`${optionsList[0].API}`);
                var selectElement = document.getElementById('userData');
                try {
                    const blockNumber = await provider.getBlockNumber();
                    console.log('Connected to network. Latest block number:', blockNumber);
                    selectElement.style.color = 'green';
                    return true
                } catch (error) {
                    console.error('Error connecting to network:', error.message);
                    selectElement.style.color = 'red';
    
                    return false
                }
    
            }
    
    
    
            function addField() {
                console.log("addField()")
          const fieldContainer = document.getElementById('additionalFields');
          const newField = document.createElement('div');
          newField.classList.add('mb-2');
          newField.innerHTML = '<input type="text" class="form-control" placeholder="Enter text">';
          fieldContainer.appendChild(newField);
        }
    
    
    
        function lock(){
        console.log('lock()')
            document.getElementById("loader").style.display = "none";//flex
                    lockscreen.style.display='flex'
                    closeModalId('#settingsModal')
                    document.querySelector(".sidebar").classList.remove("isOpen");		
                    document.querySelector(".overlay").classList.remove("overlayisOpen");	
                    sessionStorage.removeItem('password')	
        }
    
    
    
        // DEFAULT TOKEN
        
        /*********************************************************************************************
      .) TOKEN
      **********************************************************************************************/
      async function loadToken(addr){
          console.warn('loadToken()')
       
          const storedTokenType = localStorage.getItem('selectedTokenType');
          data.innerHTML = ''
         
          // if eth
           if (storedTokenType === 'eth') {
             console.warn('LOADING ETHEREUM ')
                // erc20Options.style.display = 'block';
                // - hide gas balance
            }
            // else if erc-20
            else if (storedTokenType === 'erc20') {
            console.log('LOADING ERC20 ')
                    // ..............................
                    // Carga el token
                    // ..............................
                    let preferredToken = await recallStoredToken();
                    if (preferredToken) {
                        console.warn('Preferred Token*:', preferredToken);
                        // You can now use preferredToken.tokenName, preferredToken.chainName, etc.
                    } else {
                        console.warn('No preferred token stored or index out of range.');
                        Toast.fire({ title: "No prefered token set!", text: "No preferred token stored or index out of range.", icon: "warning" });
                        
                    }
    
                    if (!addr) {
                        console.warn('No address provided to loadToken function');
                            addr  =document.getElementById('yourAddress').getAttribute('address');
                    }
    
                    // Continue with the rest of your function if addr is provided
                    console.log(`Loading token for address: ${addr}`);
    
    
                    // SELECT RANDOM PROVIDER
                    let selectedProvider =  await getRandomProvider()
                 
                    
                    // GET PROVIDER
                    let provider;
                    try { provider = await new ethers.JsonRpcProvider(selectedProvider); } 
                    catch (error) { 
                        console.warn('error creating provider', error) 
                        // store current provider  and store it to filter it before selecting a new one
                    }
    
                    // CHECK GAS
                    let gasBalance
                    try {
                    const balance = await provider.getBalance(addr);
                    b=balance
                    console.log(`GAS bal (crudo) : ${balance} GAS`);
                    //  gasBalance = ethers.formatEther(balance);
                     gasBalance = Math.round(ethers.formatEther(balance)* 1000000) / 1000000; // Rounds to 6 decimal places
    
                    //  gasBalance = ethers.formatEther(balance).toFixed(5)
    
                    console.log(`GAS Balance : ${gasBalance} GAS`);
                } catch (error) {
                    console.error('Error checking gas  balance:', error.reason);
                    return null;
                }
    
                    // LOAD CONTRACT
                    let contractAddr = preferredToken.contractAddr
                    const tokenContract = await new ethers.Contract(contractAddr, erc20Abi, provider);
    
    
                    // CHECK TOKEN BALANCE
                    let balance;
                    try { balance = await tokenContract.balanceOf(addr); } 
                    catch (error) {
                        if (error.message.includes('Failed to fetch')) { console.warn('Error getting balance: Network or fetch issue. refetch?'); } 
                        else { console.warn('Error getting balance:', error); }
                    }
                    console.warn('erc20Balance:',balance);
    
                    const decimals = await tokenContract.decimals();
                    console.log('decimals:',decimals)
                    let erc20Balance = ethers.formatUnits(balance, decimals);
                    console.warn(`ERC-20 Balance of ${preferredToken.tokenName}: ${erc20Balance} `);
    
    
                    let explorer =preferredToken.explorers[0].url
                    let tokenAddress =preferredToken.contractAddr
                    let tokenName =preferredToken.tokenName
                    let userAddress= addr
                    // <svg  class="rounded rounded-circle " width="40px"  height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onclick="event.stopPropagation();openModalId('#defaultTokenModal')" style=" position: absolute; left: 0; "> <path fill='#d17c78' d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
                    userData.innerHTML = ` <a id="" target="_blank" rel="noopener noreferrer" href="${explorer}/address/${tokenAddress }">Balance: ${erc20Balance} ${tokenName}</a> <svg class='hoverIcon' xmlns="http://www.w3.org/2000/svg"  width="18" height="16" viewBox="0 0 512 512" id='reloadBalance'  onclick="event.stopPropagation();reloadBalance()"> <path  fill='#d17c78' d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg> <br> <div id="miniversion"> <a  target="_blank" rel="noopener noreferrer" href="${explorer}/address/${userAddress}">gas: ${gasBalance} </a> </div> `;
                    
                    // ..............................
                    // FIN Carga el token
                    // ..............................
            }
    
    
        }
      function addToken() {
          closeModalId('#defaultTokenModal')
          openModalId('#addNewTokenModal')
        }
    
        // "https://chainid.network/chains_mini.json"
          // "https://chainid.network/chains.json"
    
        const autoCompleteJS = new autoComplete({
            data: {
                src: async () => {
                console.log('AUTOCOMPLETE')
              try {
                document
                  .getElementById("autoComplete")
                  .setAttribute("placeholder", "Loading...");
                const source = await fetch( "https://chainid.network/chains.json" );
                // const source = await fetch( "js/chainsv1.json" );
                const data = await source.json();
                document
                  .getElementById("autoComplete")
                  .setAttribute("placeholder", autoCompleteJS.placeHolder);
                return data;
              } catch (error) {
                return error;
              }
            },
            keys: ["name", "chainId"],
            cache: true,
            filter: (list) => {
              const filteredResults = Array.from(
                new Set(list.map((value) => value.match))
              ).map((token) => {
                return list.find((value) => value.match === token);
              });
    
              return filteredResults;
            }
          },
          placeHolder: "Search for name or chainID!",
          resultsList: {
            element: (list, data) => {
              const info = document.createElement("p");
              if (data.results.length > 0) {
                info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
              } else {
                info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
              }
              list.prepend(info);
            },
            noResults: true,
            maxResults: 65,
            tabSelect: true,
            // searchEngine: "loose"
            searchEngine: "strict"
          },
          resultItem: {
            element: (item, data) => {
              item.style = "display: flex; justify-content: space-between;";
              item.innerHTML = `
                          <span class="hoverable" style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; cursor: pointer;">
                                ${data.match}
                            </span>
                            <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
                                ${data.key}
                            </span>`;
            },
            highlight: true,
          },
          events: {
            input: {
              focus: () => {
                if (autoCompleteJS.input.value.length) {
                console.log('autoCompleteJS value', autoCompleteJS.input.value)
                  autoCompleteJS.start();
                }
              }
            }
          }
        });
    
        
    
        autoCompleteJS.input.addEventListener("selection", function (event) {
          console.warn('SELECT: ', event.detail.selection)
          selectionResult.style.display='block'
          const feedback = event.detail;
          let resultado = event.detail.selection.value;
          r=resultado;
          // localStorage.setItem('chainFeedback', JSON.stringify(feedback))
          localStorage.setItem('chainResult', JSON.stringify(event.detail.selection))
          f = feedback
          autoCompleteJS.input.blur();
          const selection = feedback.selection.value[feedback.selection.key];
    
          // ----
          // const httpsRpcAddresses = feedback.results[0].value.rpc.filter((address) =>
          const httpsRpcAddresses = resultado.rpc.filter((address) =>
            address.startsWith("https://") && !address.includes("${INFURA_API_KEY}")
          );
          const rpclength = httpsRpcAddresses.length;
          const randomnumber = Math.floor(Math.random() * rpclength);
          const selectedProvider = httpsRpcAddresses[randomnumber];
          console.log('selectedProvider:', selectedProvider);
    
                document.getElementById("selectionResult").innerHTML = `
               <strong>Chain:</strong> ${resultado.chain}
               <br><strong>Name:</strong> ${resultado.name}
                <br><strong>chainId:</strong> ${resultado.chainId}
                <br><strong>Short:</strong> ${resultado.shortName}
                <br><strong>Explorers[${resultado.explorers.length}]:</strong> ${resultado.explorers[0].url}
                <br><strong>Gas token:</strong> ${resultado.nativeCurrency.name}
                <br> <strong>RPC [${rpclength}]:</strong> ${httpsRpcAddresses[randomnumber]}
                <br><strong>Native Currency:</strong> ${resultado.nativeCurrency.symbol}`;
    
          autoCompleteJS.input.value = selection;
          console.warn('selection REDULT: ', selection)
          console.log("feedback: ",feedback);
          console.warn("resultado: ", resultado);
          
    
          erc20SetContract.style.display = 'inline'
    
    
        });
    
    
    
        const action = (action) => {
          console.log('action()')
          const title = document.querySelector("h5");
          const selection = document.querySelector(".selection");
    
          if (action === "dim") {
            title.style.opacity = 1;
            // mode.style.opacity = 1;
            selection.style.opacity = 1;
          } else {
            title.style.opacity = 0.3;
            // mode.style.opacity = 0.2;
            selection.style.opacity = 0.1;
          }
        };
    
        ["focus", "blur"].forEach((eventType) => {
          autoCompleteJS.input.addEventListener(eventType, () => {
            if (eventType === "blur") {
              action("dim");
            } else if (eventType === "focus") {
              action("light");
            }
          });
        });
    
    
    
              
    
        /*********************************************************************************************
      .) DOMContentLoaded
      **********************************************************************************************/
    
        // DEFAULT TOKEN
    
        document.addEventListener('DOMContentLoaded', function () {
            console.warn('listen DOMContentLoaded')
          const erc20Option = document.getElementById('erc20Option');
          const erc20Options = document.getElementById('erc20Options');
          const addErc20Address = document.getElementById('addErc20Address');
          const erc20Selector = document.getElementById('erc20Selector');
          const removeErc20Address = document.getElementById('removeErc20Address');
          const infoErc20Address = document.getElementById('infoErc20Address');
    
    
        // Retrieve the stored token type from localStorage
        const storedTokenType = localStorage.getItem('selectedTokenType');
    
          // If a token type was previously selected, set it accordingly
        if (storedTokenType) {
            document.querySelector(`input[name="tokenType"][value="${storedTokenType}"]`).checked = true;
          
            if (storedTokenType === 'inactive') {
              console.warn('inactive selected (wallet is off)')
    
            }
            if (storedTokenType === 'erc20') {
              console.warn('ERC20 selected')
              erc20Options.style.display = 'block';
    
            }
    
            // ETHEREUM
           else if (storedTokenType === 'eth') {
                // erc20Options.style.display = 'block';
                console.warn('ETHEREUM selected')
                // - hide gas balance
    
            }
    
    
    
        }
    
          // Show or hide ERC-20 options based on the selected radio button
          document.querySelectorAll('input[name="tokenType"]').forEach( function (input) {
            input.addEventListener('change', async function () {
              console.log('tokenType CHANGED!')
              localStorage.setItem('selectedTokenType', input.value);
    
              if (erc20Option.checked) {
                erc20Options.style.display = 'block';
    
              } else {
                erc20Options.style.display = 'none';
              }
              try {
                await loadToken()
              } catch (error) {
                console.warn(error)
              }
              Toast.fire({ title: "Token loaded!", text: "The Token has been loaded.", icon: "success" });
    
            });
          });
    
    
    
          
    //   ------------------------------------
    // .) REMOVE TOKEN
    //   ------------------------------------
    
          removeErc20Address.addEventListener('click',  function () {
    
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
    
    
                
                const selectedOption = erc20Selector.options[erc20Selector.selectedIndex];
                    if (selectedOption) {
                      // Retrieve the stored data from localStorage
                      let index = selectedOption.value
                      let i = Number(index)
                      let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
                      console.log(storedData[i].contractAddr)
                      
                      // remove token from localStorage
                      removeToken(storedData[i].contractAddr)
                      
                      // Remove from select
                      selectedOption.remove();
    
    
    
                    }else {
                    console.log('DOES NOT EXSITS')
                }
    
                    closeModalId('#defaultTokenModal')
                    Toast.fire({ title: "Deleted!", text: "Token has been deleted.", icon: "success" });
                    localStorage.setItem('preferredTokenIndex', 0);
                     loadToken()
              }
            });
    
    
         
          });
    
    //   ------------------------------------
    // .) INFO TOKEN
    //   ------------------------------------
          // Show information about the selected ERC-20 contract
          infoErc20Address.addEventListener('click', function () {
           
            const selectedOption = erc20Selector.options[erc20Selector.selectedIndex];
            let index = selectedOption.value
            let i = Number(index)
            
            if (selectedOption) {
                    // Retrieve the stored data from localStorage
              let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
              console.log(storedData[i])
              alert(`Info: ${JSON.stringify(storedData[i])}`);
    
            }
          });
          
        });
    
    
    
      /*********************************************************************************************
      .) FIN DOMContentLoaded
      **********************************************************************************************/
    
        
    
    
        async function createProv() {
            console.log('createProv()')
          // let feedback = JSON.parse(localStorage.getItem('chainFeedback'))
          let result = JSON.parse(localStorage.getItem('chainResult'))
          const httpsRpcAddresses = result.value.rpc.filter((address) => address.startsWith("https://") && !address.includes("${INFURA_API_KEY}"));
          // const httpsRpcAddresses = feedback.results[0].value.rpc.filter((address) => address.startsWith("https://") && !address.includes("${INFURA_API_KEY}"));
          const length = httpsRpcAddresses.length;
          const randomnumber = Math.floor(Math.random() * length);
          const selectedProvider = httpsRpcAddresses[randomnumber];
          console.log('selectedProvider:', selectedProvider);
          let provider = await new ethers.JsonRpcProvider(selectedProvider);
          console.log('provider:', provider);
          return provider
        }
    
    
    
        async function checkContract(addr) {
          console.log('checkContract()')
          let provider;
          try {
            provider = await createProv();
            const network = await provider.getNetwork();
            console.log('network:', network);
            // return
          } catch (error) {
            console.error('Could not create provider:', error);
            document.getElementById('validLink').innerHTML = `<br>❌ Could not create provider`
          }
    
          const tokenContract = await new ethers.Contract(addr, erc20Abi, provider);
          console.log('tokenContract:', tokenContract)
    
          let result = await JSON.parse(localStorage.getItem('chainResult'))
          let explorerLink = `<a target="_blank" rel="noopener noreferrer" href="${result.value.explorers[0].url}/address/${addr}">${addr}</a>`;
          document.getElementById('validLink').innerHTML = `<br>${explorerLink}`
    
          const symbol = await tokenContract.symbol();
          console.log("Token Symbol:", symbol);
          document.getElementById('validLink').innerHTML += `<br>Token Symbol: ${symbol}`
          document.getElementById('validLink').setAttribute('symbol', symbol);
          document.getElementById('validLink').setAttribute('address', addr);
    
          let ts = await tokenContract.totalSupply()
          console.log('TOTAL SUPPLY: ', ts)
          document.getElementById('validLink').innerHTML += `<br>Total Supply: ${ts}`
    
          return
    
        }
    
    
    
    
    
    
        // Function to validate Ethereum address
        function isValidEthAddress(address) {
          const pattern = /^0x[a-fA-F0-9]{40}$/;
          return pattern.test(address);
        }
    
    
        const { isAddress } = ethers;
    
        // Event listener for the input field
        document.getElementById('contractAddress').addEventListener('input', function () {
          const address = this.value;
    
          // Check if the address is valid
          if (isAddress(address)) {
    
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            addERC20contract.style.display = 'inline'
    
            // Call your function here when the address is valid
            checkContract(address)
          } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
            addERC20contract.style.display = 'none'
    
          }
        });
    
        
        function addConctract() {
          console.log('addConctract() ')
          // Retrieve and parse existing chain data from localStorage
          let storedResult = JSON.parse(localStorage.getItem('chainResult')) || { results: [] };
    
          // Get the relevant elements and their values
          const tokenName = document.getElementById('validLink').getAttribute('symbol');
          const chainName = storedResult.value.name;
          const chainId = storedResult.value.chainId;
          const contractAddr = document.getElementById('contractAddress').value;
          const rpcs = storedResult.value.rpc.filter((address) => address.startsWith("https://") && !address.includes("${INFURA_API_KEY}"));
          const explorers = storedResult.value.explorers;
        //   const nativeToken =
    
          // Create a new chain entry
          const newToken = {
            tokenName,
            chainName,
            chainId,
            contractAddr,
            rpcs,
            explorers
          };
    
          storeToken(newToken)
    
          // repopupulate select
         populateSelectInput()
    
    
        }
    
    
        // STORE TOKEN 
        function storeToken(token) {
          console.log('storeToken()')
          var tkn = [];
          tkn = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
          // Check if the address already exists
          var isDuplicate = tkn.some(existingToken => existingToken.contractAddr === token.contractAddr);
    
          if (!isDuplicate) {
            console.warn('NEW TOKEN!')
            tkn.push(token);
            localStorage.setItem('ERC20_TOKENS', JSON.stringify(tkn));
          }
          else {
            console.warn('Token already exists , skipping save.');
            return
          }
    
          // REMOVE chainFeedback and clear UI
          localStorage.removeItem('chainResult');
          console.warn('chainResult removed from localStorage')
    
            // set prefered token index to this token
          const length = document.getElementById('erc20Selector').length;
          let newindex = length -1;
            localStorage.setItem('preferredTokenIndex', newindex);
    
            // CLEAR UI
            document.getElementById("autoComplete").value = "";
            document.getElementById("contractAddress").value = "";
            document.getElementById("selectionResult").innerHTML = "";
            document.getElementById("validLink").innerHTML = "";
            document.getElementById("selectionResult").style.display = "none";
            document.getElementById("contractAddress").classList.remove('is-valid');
            
            closeModalId('#addNewTokenModal')
    
              Toast.fire({ title: "Token added!", text: "A new Token has been added.", icon: "success" });
    
        }
    
        function removeToken(contractAddr) {
            console.log('removeToken()');
            var tkn = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
            // Filter out the token with the matching contractAddr
            var newTkn = tkn.filter(existingToken => existingToken.contractAddr !== contractAddr);
    
            if (newTkn.length === tkn.length) {
              console.warn('Token not found , skipping removal.');
              return;
            }
    
            localStorage.setItem('ERC20_TOKENS', JSON.stringify(newTkn));
    
            // REMOVE chainFeedback and clear UI
            localStorage.removeItem('chainResult');
    
            // // set prefered token index to this token
    
            // // CLEAR UI
            // document.getElementById("autoComplete").value = "";
            // document.getElementById("contractAddress").value = "";
            // document.getElementById("selectionResult").innerHTML = "";
            // document.getElementById("validLink").innerHTML = "";
    
            // closeModalId('#')
    
            
        }
    
    
     
    
    
        function populateSelectInput(selectId) {
          console.log('populateSelectInput()')
          // Retrieve the stored data from localStorage
          let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
          // DEFAULT TOKEN
          // Check if no tokens are stored, and add a default token if necessary
          if (storedData.length === 0) {
            console.log('There are no tokens (ERC20_TOKENS)  in localstorage')
            
                const defaultToken = {
                tokenName: "USDC",
                chainName: "Arbitrum Sepolia",
                chainId: 421614,
                contractAddr: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",  // Example contract address
                rpcs: ["https://sepolia-rollup.arbitrum.io/rpc"],   // Example RPC endpoint
                explorers: [{ "name": "Arbitrum Sepolia Rollup Testnet Explorer", "url": "https://sepolia-explorer.arbitrum.io", "standard": "EIP3091" }] // Example explorer
              };
          
            // const defaultToken = {
            //   tokenName: "TROK",
            //   chainName: "Arbitrum Sepolia",
            //   chainId: 421614,
            //   contractAddr: "0x3723A0d04ABDFA902d47426973E0cb49C2fC3B86",  // Example contract address
            //   rpcs: ["https://sepolia-rollup.arbitrum.io/rpc"],   // Example RPC endpoint
            //   explorers: [{ "name": "Arbitrum Sepolia Rollup Testnet Explorer", "url": "https://sepolia-explorer.arbitrum.io", "standard": "EIP3091" }] // Example explorer
            // };
            storedData.push(defaultToken);
            localStorage.setItem('ERC20_TOKENS', JSON.stringify(storedData));
          }
    
          // Retrieve the preferred selection from localStorage or default to 0
          let preferredIndex = localStorage.getItem('preferredTokenIndex');
          preferredIndex = preferredIndex !== null ? parseInt(preferredIndex, 10) : 0;
    
          // Find the select element
    
          // Set default value if no argument is passed
            selectId = selectId || 'erc20Selector';
            const selectElement = document.getElementById(selectId);
    
     
          // Clear the existing options
          selectElement.innerHTML = '';
     
          // Populate the select input with the stored data
          storedData.forEach((token, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${token.tokenName} ${token.chainName} (${token.chainId})`;
            if (preferredIndex === index) {
              option.selected = true; // Set the preferred item as selected
            }
            selectElement.appendChild(option);
        
            
            
          });
        }
    
    
    
    
    
        // Event listener to store the selected option
          document.getElementById('erc20Selector').addEventListener('change', async function () {
          console.warn('erc20MainSelector() changed!')
          let selectedIndex = this.value;
          localStorage.setItem('preferredTokenIndex', selectedIndex);
    
          // borrar contenedor
          data.innerHTML = ''
    
          await loadToken()
           
    
        });
    
    
    
    
        function recallStoredToken() {
          // Retrieve the preferred token index from localStorage
          let preferredIndex = localStorage.getItem('preferredTokenIndex');
    
          // Set the default index to 0 if no preferred index is stored
          if (preferredIndex === null) {
            preferredIndex = 0;
          } else {
            preferredIndex = parseInt(preferredIndex, 10); // Convert the stored value to an integer
          }
    
          // Retrieve the stored data from localStorage
          let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
          // If the preferred index is within the range of stored tokens, return the corresponding token details
          if (storedData[preferredIndex]) {
            return storedData[preferredIndex];
          } else {
            // Handle the case where the index is out of range
            return null;
          }
        }
    
    
    
    
        /*********************************************************************************************
            .)  SEND / RECEIVE TOKENS ERC20
            **********************************************************************************************/
    
    
    
            async function openSend(addr) {
                console.warn('openSend', addr)
    
                if (addr) {
                    console.log('there is address', addr)
                }
                else {
                    console.log('there is not addr')
                }
    
    
                // // open modal
                openModalId('#walletSend')
                
                // get recipient address
                document.getElementById("recipientAddress").value = addr;
                
                // fill token selector (tokenType)
                // populateSelectInput('tokenType');
    
                // get token balance
    
                
    
    
            }
    
    
    
            document.getElementById('tokenType').addEventListener('change', function() {
                console.log('TOKEN TYPE CHANGED')
    
                const selectedType = this.value;
        const erc20Selector = document.getElementById('erc20Selector');
    
    
    
        const erc20Details = document.getElementById('erc20Details');
        if (this.value === 'erc20') {
            erc20Details.classList.remove('d-none');
        } else {
            erc20Details.classList.add('d-none');
        }
    });
    
    
    /////////////
    // 1. SEND
    /////////////
    
    document.getElementById('sendTransactionBtn').addEventListener('click', async function(event) {
    console.log('CLICKED sendTransactionBtn')
    
        const recipientAddress = document.getElementById('recipientAddress').value;
        
        // disable button until gas estimation is loaded
        document.getElementById('confirmTransactionBtn').disabled = true
        document.getElementById('confirmTransactionBtn').innerHTML = `<div class="dots-container"> <span class="dot">.</span> <span class="dot">.</span> <span class="dot">.</span> </div> `
    
    
        const amountInput = document.getElementById('amount');
        const amount = document.getElementById('amount').value;
        
        if (!amountInput.value) {
          amountInput.classList.add('is-invalid');
          event.preventDefault();
          return
        } else {
          amountInput.classList.remove('is-invalid');
          // Proceed with your logic here (e.g., sending the transaction)
        }
    
        
    
        const tokenType = document.getElementById('tokenType').value;
    
        let transactionDetails = `Recipient: ${recipientAddress}\nAmount: ${amount} ${tokenType === 'eth' ? 'ETH' : 'Tokens'}`;
        if (tokenType === 'erc20') {
            const contractAddress = document.getElementById('erc20ContractAddress').value;
            transactionDetails += `\nERC-20 Contract: ${contractAddress}`;
        }
    
        document.getElementById('transactionDetails').innerText = transactionDetails;
    
        // Switch to confirmation tab
        const tab = new bootstrap.Tab(document.getElementById('confirmation-tab'));
        tab.show();
    
    
        let  addr  =document.getElementById('yourAddress').getAttribute('address');
        let  toAddress  =document.getElementById('peerAddr').getAttribute('data-address')
    
    // ----------------
    let preferredIndex = localStorage.getItem('preferredTokenIndex');
                    // Set the default index to 0 if no preferred index is stored
                    if (preferredIndex === null) {
                    preferredIndex = 0;
                    } else {
                    preferredIndex = parseInt(preferredIndex, 10); // Convert the stored value to an integer
                    }
    
                     // Retrieve the stored data from localStorage
                     let storedData = JSON.parse(localStorage.getItem('ERC20_TOKENS')) || [];
    
                    // If the preferred index is within the range of stored tokens, return the corresponding token details
                    if (storedData[preferredIndex]) {
                         preferredToken = storedData[preferredIndex];
                         pref= preferredToken
                    } else {
                        console.log('some problem in checkERC20Balance')
                    // Handle the case where the index is out of range
                    // storedData[0];
                    return
                }
    
                const length = preferredToken.rpcs.length;
                const randomnumber = Math.floor(Math.random() * length);
                const selectedProvider = preferredToken.rpcs[randomnumber];
                console.log('selectedProvider:', selectedProvider);
                let provider;
                try { provider = await new ethers.JsonRpcProvider(selectedProvider); } 
                catch (error) { console.warn('error creating provider', error) }
                
                
                console.log('PREPARING CONTRACT ...:');
                let contractAddr = preferredToken.contractAddr
                const tokenContract = await new ethers.Contract(contractAddr, erc20Abi, provider);
                console.log('CONTRACT READY!');
                console.log('GETTING ERC20 BALANCE ...');
                document.getElementById('transactionDetails').innerHTML += `<br><span id="txbal"> ERC-20 balance:  <div class="dots-container"> <span class="dot">.</span> <span class="dot">.</span> <span class="dot">.</span> </div> </span> `;
    
                const formattedAddress = ethers.getAddress(userAddress);
                let balance;
                try {
                 balance = await tokenContract.balanceOf(formattedAddress);
                } 
                catch (error) {
                document.getElementById('txbal').innerHTML = `❌ Error getting ERC-20 balance: ${error.reason}, using provider ${selectedProvider}`;
    
                    if (error.message.includes('Failed to fetch')) { console.warn('Error getting balance: Network or fetch issue. refetch?'); } 
                    else { console.warn('Error getting balance:', error); }
                }
    
                const decimals = await tokenContract.decimals();
                console.log('decimals:',decimals);
    
                let formatedBalance = ethers.formatUnits(balance, decimals);
                console.log('formatedBalance:',formatedBalance);
                
                console.warn(`ERC-20 Balance of ${preferredToken.tokenName}: ${formatedBalance} `);
    
                document.getElementById('txbal').innerHTML = `ERC-20 balance: ✅ ${formatedBalance}`;
                document.getElementById('transactionDetails').innerHTML += `<br><span id="estgas"> Estimating gas 
                    <div class="dots-container"> <span class="dot">.</span> <span class="dot">.</span> <span class="dot">.</span> </div> 
                    </span> `;
    
    
                let signer = await getSigner() 
                let s = signer.connect(provider);//signer(wallet connected to provider)
                const cws = await tokenContract.connect(s);// connect tokenContract to signer(contract with signer)
    
                const amountToSend = ethers.parseUnits(amountInput.value, decimals);  // 18 is the number of decimals for Ether
                console.log('amountToSend:',amountToSend);
    
                const txGasEstimage = await cws.transfer.estimateGas(toAddress, amountToSend);
                console.log(`Estimated Gas: ${txGasEstimage.toString()}`);
                document.getElementById('estgas').innerHTML = `Estimated gas: ⛽${txGasEstimage} `;
    
    // --------------------
                const feeData = await provider.getFeeData();
                    const gasPrice = feeData.gasPrice;
                    if (!gasPrice) {
                        throw new Error('Gas price is not available');
                    }
                    console.log(`Gas Price: ${ethers.formatUnits(gasPrice, 'gwei')} gwei`);
    
                    // Calculate the total gas cost in ETH
                    const gasCostInEth = gasPrice * txGasEstimage;
                    const gasCostInEthFormatted = ethers.formatUnits(gasCostInEth, 'ether');
                    console.log(`Gas Cost in ETH: ${gasCostInEthFormatted}`);
                    // 0.00067340854877952
                    // Get the ETH to USD conversion rate
                    const ethUsdPrice = await getEthUsdPrice();
                    console.log(`ETH to USD: $${ethUsdPrice}`);
    
                    // Convert gas cost to USD
                    const gasCostInUsd = parseFloat(gasCostInEthFormatted) * ethUsdPrice;
                    console.log(`Estimated Gas Cost in USD: $${gasCostInUsd.toFixed(6)}`);
    
                    // txbuilder.style.display = 'none';
                    document.getElementById('estgas').innerHTML += `(Gas Cost in USD: 💵 $${gasCostInUsd.toFixed(6)})`
    
    
                        // disable button until gas estimation is loaded
                    document.getElementById('confirmTransactionBtn').disabled = false
                    document.getElementById('confirmTransactionBtn').innerHTML = `Confirm`
    
                // ---------------------
    
    
        ///////////////////////////////////////
        // 2. CONFIRM
        // - do the tx
        ///////////////////////////////////////
        document.getElementById('confirmTransactionBtn').addEventListener('click', async function() {
            console.log('confirmTransactionBtn CLICKED!')
    
        // Switch to confirmation tab
        // const tab = new bootstrap.Tab(document.getElementById('result-tab'));
        // tab.show();
    
        //  Show result tab
        const resultTab = new bootstrap.Tab(document.getElementById('result-tab'));
        resultTab.show();
    
        // make this modal unclosable
    
        document.getElementById('resultMessage').innerHTML = `<span id="makingtx"> Making transaction ( do not close this modal)
                    <div class="dots-container"> <span class="dot">.</span> <span class="dot">.</span> <span class="dot">.</span> </div> 
             </span>`;
    
            //  ---------------------------
            // SEND
                try {
                        // Attempt to send the transaction
                        const tx = await cws.transfer(toAddress, amountToSend, { txGasEstimage });
    
                        console.log(`Transaction hash: ${tx.hash}`);
                        document.getElementById('resultMessage').innerHTML = `<span class ="tx">Transaction hash:  ${tx.hash} ✅</span>`;
                        document.getElementById('resultMessage').innerHTML += `<span class ="txdone">waiting for confirmation
                    <div class="dots-container"> <span class="dot">.</span> <span class="dot">.</span> <span class="dot">.</span> </div> 
                             </span>`;
    
                        // Wait for the transaction to be mined
                        const receipt = await tx.wait();
                        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
                        document.getElementById('resultMessage').innerHTML = `<span class ="tx">Transaction was mined in block ${receipt.blockNumber} ✅</span>`;
    
                        // -------------
                        let preferredToken = await recallStoredToken();
                        let tokenName =preferredToken.tokenName;
                        let tokenExplorer =preferredToken.explorers[0].url
                        let txLink = `${tokenExplorer}/tx/${tx.hash}`;
                        console.log(`Transaction link: ${txLink}`);
                        document.getElementById('resultMessage').innerHTML += `✅<br><span class ="tx"> SUCCESS 🎉🎉🎉!!! Here is the tx  <a href="${txLink}" target="_blank">Link</a> ✨✨✨</span>`
    
                        // -------------
                        //close modal and reset its UI
                        closeModalId("#walletSend")
    
                        // -------------
                        // display success 
                        Swal.fire({
                        icon: "success",
                        title: `Sent ${amount} ${tokenName}!💸`,
                        html:`<span class ="tx">Transaction was mined in block ${receipt.blockNumber} ✅</span><br><span class ="tx"> Here is the tx  <a href="${txLink}" target="_blank">Link</a> ✨✨✨</span>`
                    });
    
                    // ------------------------------
                    // send tx information via chat
                    const conversation = await iusnaturalisxmtp.conversations.newConversation(toAddress)
                    // let message = `sent you ${amount} ${tokenName}`
                    let message = `sent you ${amount} ${tokenName}<pre style="display: none;">paymentReceived0x21</pre> `
    
                    await conversation.send(`${message}`, { })
                    // <button onclick="event.stopPropagation();addCoin(${optionsList[GLOBALCHAIN].TOKEN_NAME})"></button>
                
                    // UPDATE BALANCE
                    await loadToken(addr)
    
    
                    // -------------------------------
                        // display received success in peer user
                    // 	Swal.fire({
                    // 	icon: "success",
                    // 	title: `Received 0.01 usd!🤑`,
                    // 	html:`<span class ="tx"> Here is the tx  <a href="asd" target="_blank">Link</a> ✨✨✨</span>`
                    // });
    
                    // footer: '<a href="#">tx</a>'
                        
                    } catch (error) {
                        // Handle insufficient funds error
                        if (error.code === 'INSUFFICIENT_FUNDS') {
                            console.error('Insufficient funds for the transaction.');
                            document.getElementById('resultMessage').innerHTML = `<br><span class ="tx"> Error: Insufficient funds for the transaction. 🚫</span>`;
                            document.getElementById('transactionDetails').innerHTML = `<br><span class ="tx"> Error: Insufficient funds for the transaction. 🚫</span>`;
                        } else {
                            // Handle any other errors
                            console.error(`Transaction failed: ${error.message}`);
                            document.getElementById('resultMessage').innerHTML += `<br><span class ="tx"> Error: ${error.message} 🚫</span>`;
                            document.getElementById('transactionDetails').innerHTML = `<span class ="tx"> Error: ${error.message} 🚫</span>`;
    
                        }
    
                        const tab = new bootstrap.Tab(document.getElementById('confirmation-tab'));
                        tab.show();
    
                    }
    
                     
    // resultMessage
    
            return
        
            
            // const recipientAddress = document.getElementById('recipientAddress').value;
            // const amount = document.getElementById('amount').value;
            // const tokenType = document.getElementById('tokenType').value;
            
    
    });
    
        // return cws
    });
    
    
    
    
    
    
    document.getElementById('cancelTransactionBtn').addEventListener('click', function() {
        // Switch back to form tab if cancelled
        const formTab = new bootstrap.Tab(document.getElementById('form-tab'));
        formTab.show();
    });
    
    
    
    
    
    // Function to get ETH to USD conversion rate from CoinGecko
    async function getEthUsdPrice() {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        return data.ethereum.usd;
    }
    
    