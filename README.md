stealthChat
=========

A sovereign chat integrated with a wallet that maximizes privacy and reduces transaction traceability.

[Demo](https://)

# INSTALL
```
nvm use 20
yarn                              
```

# RUN
```
yarn parcel src/index.html  --port 6161 --https
```
<!-- yarn parcel  src/test.html  src/p2pencrypt.html src/stealth.html  --port 6161 --https -->

## Description
This project integrates Ethereum address-based chat functionality with a self-custodial burner wallet, allowing users to connect and conduct transactions with enhanced privacy. Stealth addresses are employed to ensure that every transaction remains secure and untraceable, providing a private communication and transaction experience for peers

## How its made
We began by forking a well-crafted UI from the Codrops repository to serve as the foundation of our interface. 
Next, we integrated the XMTP open protocol to enable secure chat communication. 
Ethers.js was used to develop a self-custodial burner wallet, allowing peers to initiate sovereign chat sessions. All transactions are conducted using stealth addresses to ensure privacy.