// test net privatekey 
// cTVw1fKgo8TsPNUFkMBK7sW5HJCH23D6g1y1fMTFrQ4CoernK6Gk

var bitcore =require('bitcore-explorers/node_modules/bitcore-lib');
let privateKeyWIF = 'cTVw1fKgo8TsPNUFkMBK7sW5HJCH23D6g1y1fMTFrQ4CoernK6Gk'

let privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF)
var address = privateKey.toAddress();

console.log('address: ' + address);

// testnet address miKDZGLH8nfzvESgPZZy9mQUY6zks2poU8

var Insight = require('bitcore-explorers').Insight;

var insight = new Insight();

address = '19UoUmYisL67bjLGPVcXrwP5FJcFbMV5CL'

insight.getUnspentUtxos(address, function(err, utxos){
    if(err){
        console.log(err)

    }else{
        console.log(utxos);
    }
})