require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan raise noble pudding half arena equal gauge'; 
let testAccounts = [
"0x6661f02f1b5cfd51266c25d48357887f3de99d118ab1f5558352630c486c2783",
"0x7561fb712d5d38ac05e9f8a9f5c16156d517d650c68e6e69dbe79495a0a101df",
"0x758bfdd16db398000e48dcc16a150faeab7c4cf8e37c1ad4ada9d3ad06e09851",
"0x59c4ba950b4871c33402bc39aa2f224b2a0d7d99b08a14d0c0a184d7653f7b3e",
"0xe5c2506161b4754fd6af4dd94ad5e71228fb6c742d1abfe40d9feba323badbe2",
"0xb801748f8641db45e1c9e2e1bda786da7f9e15dff8eb48d7e02f0aca2798f48d",
"0x50b9b6aa0be5e0d2c7ea29eced35a175ab0af69f88eae6303931192dd34a734c",
"0x6f6e65e80ed6e4f9286c230a7eb14441cee7992cff0b04dc105881e719bdbebb",
"0xe2fe8e0b36c2ef89b01e6879f2b1bc2087fab03d3d55600e802e942f3337fb5d",
"0x34df37df1e3a8ba2b01ce4af82baa8bbac8d7e890667778b3c9753099fbc480e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

