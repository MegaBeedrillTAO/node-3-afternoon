function create(req, res){
    const dbInst = req.app.get('db');
    const { name, description, price, image_url } = req.body;
    dbInst.createProduct( [name, description, price, image_url] )
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
}

function getOne(req, res){
    const dbInst = req.app.get('db');
    const { id } = req.params;
    dbInst.readProduct(id)
    .then( product => res.status(200).send( product ) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
    } );
}

function getAll(req, res){
    const dbInst = req.app.get('db');
    dbInst.readProducts()
    .then( products => res.status(200).send( products ) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
    } );
}

function update(req, res){
    const dbInst = req.app.get('db');
    const { params, query } = req;
    dbInst.updateProduct([ params.id, query.desc ])
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
    } );
}

function deleteProductFunc(req, res){
    const dbInst = req.app.get('db');
    const { id } = req.params;
    dbInst.deleteProduct(id)
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
}

module.exports ={
    create,
    getOne,
    getAll,
    update,
    deleteProductFunc
}