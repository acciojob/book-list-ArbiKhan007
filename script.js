//your JS code here. If required.
const container=document.querySelector(".form-group");

const mainHeading=document.createElement("h1");
mainHeading.textContent="MyBookList";
mainHeading.classList.add("main_heading");

const titleLabel=document.createElement("label");
titleLabel.textContent="Title";
titleLabel.classList.add("label");

const authorLabel=document.createElement("label");
authorLabel.textContent="Author";
authorLabel.classList.add("label");

const isbnLabel=document.createElement("label");
isbnLabel.textContent="ISBN#";
isbnLabel.classList.add("label");

const titleInput=document.createElement("input");
titleInput.classList.add("input");
titleInput.id="title";
const authorInput=document.createElement("input");
authorInput.classList.add("input");
authorInput.id="author";
const isbnInput=document.createElement("input");
isbnInput.classList.add("input");
isbnInput.id="isbn";

const addBookBtn=document.createElement("button");
addBookBtn.textContent="Add Book";
addBookBtn.classList.add("btn");
addBookBtn.id="submit";

addBookBtn.addEventListener("click", ()=>{
	const newRow=document.createElement("tr");
	const rowTitle=document.createElement("td");
	const rowAuthor=document.createElement("td");
	const rowIsbn=document.createElement("td");
	rowTitle.textContent=titleInput.value;
	rowAuthor.textContent=authorInput.value;
	rowIsbn.textContent=isbnInput.value;
	newRow.append(rowTitle, rowAuthor, rowIsbn);
	resultTable.append(newRow);
});

const resultTable=document.createElement("table");
resultTable.classList.add("table", "table-striped");

const tableHead=document.createElement("thead");
const headRow=document.createElement("tr");
const resultTitle=document.createElement("th");
resultTitle.textContent="Title";
const resultAuthor=document.createElement("th");
resultAuthor.textContent="Author";
const resultIsbn=document.createElement("th");
resultIsbn.textContent="ISBN#";

const tableBody=document.createElement("tbody");
tableBody.id="book-list";

headRow.append(resultTitle, resultAuthor, resultIsbn);
tableHead.append(headRow);
resultTable.append(tableHead, tableBody);

container.append(mainHeading, titleLabel, titleInput, authorLabel,
				authorInput, isbnLabel, isbnInput, addBookBtn, resultTable);
