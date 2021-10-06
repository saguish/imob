const express = require('express');
const multer = require('multer');

const conexao = require('./infraestrutura/conexao')

const plan = require('./model/lerCJ74');

const upload = multer({dest: 'uploads/'});

const app = express();

app.use(express.urlencoded({ extended: true }));



// conexao.connect( (err)=>{
//   if(err){
//     console.log('erro ao conectar banco de dados');
//   }else{
//     const tabela = require('./infraestrutura/tabelas');
//     tabela.init(conexao);
//     console.log('conexao estabelecida com sucesso');
    
//   }
// })

plan()




 

app.post('/profile', upload.single('arquivo'), function (req, res, next) {
    // req.file is the `avatar` file
    // const arquivo = req.body;
    // if (!arquivo){
    //     console.log("please upload file SERGIO");
    // }else{
    //     console.log('passei certo')
    //     res.send(arquivo);
    // }
    // // req.body will hold the text fields, if there were any
  })



app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
});
