window.onload = function(){
    const h1 = document.createElement("h1");
        const textoH1 = document.createTextNode("Modelo de objetos del document");

        h1.appendChild(textoH1);

        document.body.appendChild(h1);

        const h2 = document.createElement("h2");
        const textoH2 = document.createTextNode("Problema");

        h2.appendChild(textoH2);

        document.body.appendChild(h2);

        const ol = document.createElement("ol");
        const li = document.createElement("li");
        const a = document.createElement("a");
           a.setAttribute("href" , "https://microsoft.com");
        const textoa = document.createTextNode("Ir a microsoft");
                 
         
        ol.appendChild(li);
        li.appendChild(a);
        a.appendChild(textoa);

        document.body.appendChild(ol);
}

