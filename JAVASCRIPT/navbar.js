const menu = [
    {title: "HOME", link: "/"},
    {title: "ABOUT", link: "/about"},
    {title: "CV", link: "/cv"},
    {title: "WORK", link: "/work"}
]
function initialiseMenu(){

//  <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>


    const header= document.querySelector("header")

    const nav = document.createElement("nav");
    const div = document.createElement("div");
    const ul =  document.createElement("ul");
    nav.classList+="navbar navbar-dark navbar-expand-md sticky-top";
    const logoLink = document.createElement("a");
    logoLink.innerText="DIVESH NAIR"
    logoLink.href="/"
    logoLink.classList.add("navbar-brand")
    const button =document.createElement("button");
    button.classList.add("navbar-toggler")
    button.type="button";
    button.dataset.toggle ="collapse";
    button.dataset.target = "#navbarNav"
    button.setAttribute('aria-controls',"navbarNav")
    button.setAttribute('aria-expanded',false)
    button.setAttribute('aria-label',"Toggle navigation")

    div.classList+="collapse navbar-collapse" 
    div.id="navbarNav";
    ul.classList+="navbar-nav pull-md-right";
    
    // ul.id="links"
    // ul.classList.add("links")

    const nameDiv = document.createElement("div")
    const h1 = document.createElement("h1");


    h1.appendChild(logoLink)
    
    nameDiv.appendChild(h1)
    nameDiv.classList.add("NameSection")
    nav.appendChild(nameDiv)
    
    for(let element of menu){
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.classList.add("nav-link")
        a.innerText = element.title
        a.href = element.link;
        li.appendChild(a)
        ul.appendChild(li);   
    }
    nav.appendChild(ul);
    header.appendChild(nav);
};

document.addEventListener('DOMContentLoaded',initialiseMenu());
