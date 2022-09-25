var div = document.createElement("div");
div.innerHTML = `<input type="text" class="searchbox" placeholder="Search" id="txt"><br>
<button type="button" class="searchbutton" onclick="foo()"> Search</button>
<div id="first"></div>
<div id="pages"></div> 
<div id="authors"></div>
<div id="pr"></div>
<div id="characters"></div>`;

div.style.textAlign="center";
document.body.append(div);


async function foo(){
     //create variable for book number and to be pushed into txt id for searchbox
      let number = document.getElementById("txt").value
      console.log(number)

  
    // First 3 line codes to fetch  the data  
    let res = await fetch(`https://anapioficeandfire.com/api/books/${number}`)
    let result = await res.json()
    console.log(result)

       

     var books = document.getElementById("first").innerHTML= `Name of the book is:${result.name} and its ISBN: ${result.isbn}`;
     var books = document.getElementById("pages").innerHTML= `Number of Pages in this book:${result.numberOfPages}`;
     var books = document.getElementById("authors").innerHTML= `Author of the book is:${result.authors}`;
     var books = document.getElementById("pr").innerHTML= `Publisher:${result.publisher} and the released date: ${result.released}`;
     var books = document.getElementById("characters").innerHTML= `Characters:${result.characters}`;


     console.log(books)

}


// )
