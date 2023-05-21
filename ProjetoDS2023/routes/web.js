const express = require("express");
const dbConnection = require("../config/database");
const router = express.Router();

// index - Mostra uma lista de todos recursos
router.get("/produto", (req, res) => {
    dbConnection.executeSQLQuery(`SELECT P.id,
                                        TP.descricao,
                                        P.nome,
                                        P.preco
                                 FROM Produto P
                                 JOIN TipoProduto TP ON P.TipoProduto_id = TP.id
                                 ORDER BY P.id`).then(result => {
        res.render("Produto/index", { result: result.rows });
    });
});

// create - Mostrar um formulário para criar um novo recurso
router.get("/produto/create", (req, res) => {
    res.render("Produto/create");
});

// store - Salvar uma nova informação dentro do banco
router.post("/produto", (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const TipoProduto_id = req.body.TipoProduto_id;
    const ingredientes = req.body.ingredientes;
    const timestamp = (new Date()).toISOString().slice(0, 19).replace('T', ' ');
    const dataAtualizacao = timestamp;
    const dataCriacao = timestamp;
    dbConnection.executeSQLQuery(`INSERT INTO Produto VALUES (null, ?, ?, ?, ?, ?, ?);`, [nome,
        preco,
        TipoProduto_id,
        ingredientes,
        dataAtualizacao,
        dataCriacao
    ]).then(() => {
        res.redirect("/produto");
    });
});

// show - Mostrar uma página com todos os dados de um recurso
router.get("/produto/:produtoId", (req, res) => {
    dbConnection.executeSQLQuery(`SELECT * FROM Produto WHERE Produto.id = ?`, [req.params.produtoId]).then(result => {
        res.render("Produto/show", { result: result.rows[0] });
    });
});

// edit - Mostra um formulário para edição
router.get("/produto/:produtoId/edit", (req, res) => {
    dbConnection.executeSQLQuery(`SELECT * FROM Produto WHERE Produto.id = ?`, [req.params.produtoId]).then(result => {
        //res.send(result.rows[0]);
        res.render("Produto/edit", { result: result.rows[0] });
    });
});

// update - Atualiza uma informação existente
router.put("/produto/:produtoId", (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const TipoProduto_id = req.body.TipoProduto_id;
    const ingredientes = req.body.ingredientes;
    const timestamp = (new Date()).toISOString().slice(0, 19).replace('T', ' ');
    const dataAtualizacao = timestamp;
    dbConnection.executeSQLQuery(`UPDATE Produto
                                  SET nome = ?,
                                      preco = ?,
                                      TipoProduto_id = ?,
                                      ingredientes = ?,
                                      dataAtualizacao = ?
                                  WHERE Produto.id = ?`, [nome,
        preco,
        TipoProduto_id,
        ingredientes,
        dataAtualizacao,
        req.params.produtoId
    ]).then(() => {
        res.redirect("/produto");
    });
});

// destroy - Remove um recurso existente
router.delete("/produto/:produtoId", (req, res) => {
    dbConnection.executeSQLQuery(`DELETE FROM Produto WHERE Produto.id = ?`, [req.params.produtoId]).then( () => {
        res.redirect(300, "/produto");
    });
});



// index de TipoProduto
router.get("/tipoproduto", (req, res) => {
    dbConnection.executeSQLQuery("SELECT * FROM TipoProduto").then(result => {
        res.render("TipoProduto/index", { result: result.rows });
    });
});
// create de TipoProduto
router.get("/tipoproduto/create", (req, res) => {
    res.render("TipoProduto/create");
});
// store de TipoProduto
router.post("/tipoproduto", (req, res) => {
    const descricao = req.body.descricao;
    const timestamp = (new Date()).toISOString().slice(0, 19).replace('T', ' ');
    const dataAtualizacao = timestamp;
    const dataCriacao = timestamp;
    dbConnection.executeSQLQuery(`INSERT INTO TipoProduto VALUES (null, ?, ?, ?);`, [descricao,
        dataAtualizacao,
        dataCriacao
    ]).then(() => {
        res.redirect("/tipoproduto");
    });
});
// show de TipoProduto

// edit de TipoProduto

// update de TipoProduto

// destroy de TipoProduto





// index de Recurso
router.get("/recurso", (req, res) => {
    res.render("Recurso/index");
});



module.exports = router;