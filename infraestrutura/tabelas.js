const conexao = require("./conexao");

class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaDoadores();
    }

    criarTabelaDoadores() {
        const sql = `CREATE TABLE IF NOT EXISTS DOADORES(
            id int NOT NULL AUTO_INCREMENT,
            ordem varchar(12) NOT NULL,
            nomeDaOrdem varchar(60),
            classeDeCusto varchar(20),
            descricaoClasseDeCusto varchar(80),
            denominacaoDoLancamento varchar(80),
            codigoDoLancamento varchar(12),
            textoBreveDoLancamento varchar(80),
            quantidadeDoLancamento decimal(13,4),
            unidadeDeMedida varchar(8),
            valorDoLancamento decimal(13,2),
            linhaDeLancamento int,
            dataDoLancamento date,
            documentoDeReferencia varchar(20),
            fornecedor varchar(20),
            documentoDeCompra varchar(20),
            classificacao varchar(20),
            tuc varchar(3),
            codigoAneel varchar(25),
            uar varchar(6),
            codigoODI varchar(20),
            tipologia varchar(10),
            subtipologia int,
            tipoObra int,
            tipoDeInstalacao int,
            tipoDeAtividade int,
            macroArea int,
            dataDeEntradaEmOperacao date,
            justificativaCOM varchar(40),
            justificativaCA varchar(40),
            tipoDeDocumento varchar(10),

            PRIMARY KEY(id))`;

        this.conexao.query(sql,(erro,results)=>{
            if(erro){
                console.log(erro);
            }else{
                
                console.log('Tabelas criada com sucesso');
                console.log(results);
            }
        });

    }
}

module.exports = new Tabelas