import SimpleList from "./SimpleList.js";
import Product from "./Product.js";

var inventory = new SimpleList(new Array(20));
var tagArticle = document.querySelector('#articleReport');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let code = Number(document.querySelector('#code').value);
    let name = document.querySelector('#name').value;
    let cost = Number(document.querySelector('#cost').value);
    let stock = Number(document.querySelector('#stock').value);
    let description = document.querySelector('#description').value;
    let position = Number(document.querySelector('#position').value);

    if (inventory.add(new Product(code, name, cost, stock, description), position))
        alert('Producto agregado correctamente');
    else
        alert('Posición no válida, por favor introduzca una nueva');
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productFound');
    let code = Number(document.querySelector('#queryByCode').value);
    let objReturned = inventory.query(code).toString();

    tagDiv.innerHTML = "";
    if (objReturned != "-1")
        tagDiv.innerHTML = objReturned;
    else
        alert('No se ha podido encontrar el producto, por favor pruebe con otro código');
});
//Button delete
document.querySelector('#btnDelete').addEventListener('click', () => {
    let code = Number(document.querySelector('#deleteByCode').value);
    if (inventory.delete(code))
        alert('Producto eliminado correctamente');
    else
        alert('Producto no encontrado');
});
//Button create report
document.querySelector('#btnCreateReverseReport').addEventListener('click', () => {
    tagArticle.innerHTML = inventory.report;
});