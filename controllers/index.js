/*
    Describe: Classe para controle das rotas do index.
    Authors: 
        - Daniel Borba Varela dos Santos
        - Bruno Henrique de Borba
    Created: 27/10/2019
    Updated: 27/10/2019
*/

//native libs
const fs = require('fs');
const path = require('path');

const Keytool = require('node-keytool');

const lerCert = async (req, res, next) => {
    
    try {
  
        //*****implementacao*****
        var store = Keytool('controllers/keystore', '123', {debug: false, storetype: 'JKS'});

        // store.list((a,b)=>{
        //     //*****retorno*****
        //     res.render('index', { title: 'Sistemas Seguros', result: b });
        // });

        var printlist = function printlist(err, res) {
            if (err) {
                console.log('Error listing keystore content', err);
                return;
            }
        
            console.log('Keystore type: ' + res.storetype + ' Provider: ' + res.provider + ' (' + res.certs.length + ' certificates)');
            for (var certidx = 0; certidx < res.certs.length; certidx++) {
                var resobj = res.certs[certidx];
                console.log('#' + certidx, resobj.certtype, '(' + resobj.issued + ')', resobj.alias, resobj.algorithm, resobj.fingerprint);
            }
        };
        
        store.list(function(err, res) {
            printlist(err, res);
        });

        res.render('index', { title: 'Sistemas Seguros', result: "a" });

    } catch (error) {
        var texto = "Erro: "+error.message;
        res.render('index', { title: 'Error Sistemas Seguros', result: texto });
    }

};

module.exports = {
    lerCert:lerCert
}