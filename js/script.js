function ContentManager(annonces) {

    this.annonces = annonces;

}


ContentManager.prototype.generateAnnonces = function() {


    // let box = ["first-box", "second-box", "third-box", "fourth-box"];
    let j = 0;
    let k = 0;
    //for (let i = 0; i < box.length; i++) {
    let divelement = document.getElementById("section");
    if (divelement) {
        let strhtml = "<h1>Nos offres</h1>";
        for (let i = 0; i < this.annonces.length / 2; i++) {
            //let strhtml = "";
            //let divelement = document.getElementById(box[i]);
            //console.log(this.annonces[i].title);

            strhtml += `<div  class="center">`;

            for (j; j < k + 2; j++) {
                if (this.annonces[j]) {
                    let url = this.annonces[j].statut == "V" ? "./vendre.html?pno=" + this.annonces[j].no + "" : "./louer.html?pno=" + this.annonces[j].no + ""

                    strhtml += `
            <a href="` + url + `">
                <figure>
                    <img src="./asset/small/${this.annonces[j].images[0]}" alt="image">
                    <figcaption>
                        <h3>${this.annonces[j].title}</h3>
                        <p>
                        ${this.annonces[j].description.substr(0, 120)}
                        </p>
                    </figcaption>
                </figure>
            </a>
        
            `;
                }
            }
            k += 2;
            strhtml += `</div>`;

            // divelement.innerHTML = strhtml;
        }

        divelement.innerHTML = strhtml;
    }

}







ContentManager.prototype.generateVendreAnnonces = function(pno = 0) {
    let strHtml = "";
    let element = document.getElementById("vendre");
    //let vstatus = "";

    if (element) {
        /*   vstatus = "V";
           else {
               vstatus = "L";
               element = document.getElementById("louer");
           }*/

        for (let i = 0; i < this.annonces.length; i++) {

            if ((this.annonces[i].statut == "V") && (pno == 0 || pno == this.annonces[i].no)) {


                strHtml += `<div id="images">`;
                for (let j = 1; j < this.annonces[i].images.length; j++) {


                    strHtml += `<img alt="image" src="./asset/anonces/${this.annonces[i].images[j]}" />`;

                }
                strHtml += `</div>`;
                strHtml += `<div id = "resume" >
                        <h2> ${this.annonces[i].title} - ${this.annonces[i].local} </h2> <h2> ${this.annonces[i].prix} </h2> </div>
                        <div id = "description">
                        <h2 > Description </h2> <h3> ${this.annonces[i].piece} Pièces / ${this.annonces[i].surface} m² </h3> <p> ${this.annonces[i].description} </p> </div> `;


            }
        }

        element.innerHTML = strHtml;
    }



}



ContentManager.prototype.generateLouerAnnonces = function(pno = 0) {
    let strHtml = "";
    let element = document.getElementById("louer");
    //let vstatus = "";

    if (element) {
        /*   vstatus = "V";
           else {
               vstatus = "L";
               element = document.getElementById("louer");
           }*/

        for (let i = 0; i < this.annonces.length; i++) {

            if ((this.annonces[i].statut == "L") && (pno == 0 || pno == this.annonces[i].no)) {


                strHtml += `<div id="images">`;
                for (let j = 1; j < this.annonces[i].images.length; j++) {


                    strHtml += `<img alt="image" src="./asset/anonces/${this.annonces[i].images[j]}"/>`;

                }
                strHtml += `</div>`;
                strHtml += `<div id = "resume" >
                        <h2> ${this.annonces[i].title} - ${this.annonces[i].local} </h2> <h2> ${this.annonces[i].prix} </h2> </div>
                        <div id = "description">
                        <h2 > Description </h2> <h3> ${this.annonces[i].piece} Pièces / ${this.annonces[i].surface} m² </h3> <p> ${this.annonces[i].description} </p> </div> `;


            }
        }

        element.innerHTML = strHtml;
    }

}

// Function search

function search(){
    lesannonces.searchElement();
}

ContentManager.prototype.searchElement = function() {

    
    let elt = document.getElementById("search");
    if (elt){
        elt = elt.value;
        elt = elt.charAt(0).toUpperCase() + elt.slice(1);

        let aside = document.getElementById("aside");
        let cleanTheAside = "";
        aside.innerHTML = cleanTheAside;

        let nbrAnnonces = 0;
        for (let i=0; i<this.annonces.length; i++){
            if (this.annonces[i].local.includes(elt) ){
                nbrAnnonces++;
                console.log(nbrAnnonces);
            }
        }

        let divelement = document.getElementById("section");
        let strhtml = `<h1>Nos offres dans : ${elt}</h1>`;

        let j=0;
        let k = 0;
        for (let i=0; i< this.annonces.length/2; i++){
            strhtml += `<div  class="center">`;
            for (j; j < k + 2; j++) {
                if (this.annonces[j].local.includes(elt)) {
                    let url = this.annonces[j].statut == "V" ? "./vendre.html?pno=" + this.annonces[j].no + "" : "./louer.html?pno=" + this.annonces[j].no + "";
                    strhtml += `
                    <a href="` + url + `">
                        <figure>
                            <img src="./asset/small/${this.annonces[j].images[0]}" alt="">
                            <figcaption>
                                <h3>${this.annonces[j].title}</h3>
                                <p>
                                ${this.annonces[j].description.substr(0, 120)}
                                </p>
                            </figcaption>
                        </figure>
                    </a>`;
                }
            }
            k += 2;
            strhtml += `</div>`;
            


        }

        divelement.innerHTML = strhtml;      

        
        
    }    

}

function CleanSearch(){
    let elt = document.getElementById("search");
    if (elt){
        elt.value = "";
    }
}

// End search




let lesannonces = new ContentManager([{
        no: 1,
        title: "Appartement",
        prix: "705000€",
        statut: "V",
        description: "Dans le quartier très prisé de Saint germain des prés, rue du Dragon, magnifique 2 Pièces de 40,7m² au 1er étage composé d'un séjour avec cuisine équipée américaine, deux salles de douche, une chambre, une buanderie, wc séparé et de nombreux placards.Une cave de 6 m² complète ce bien.Ce bien vous séduira par sa localisation, et son calme.",
        images: ["small-photo1_1.jpg", "photo1_1.jpg", "photo1_2.jpg", "photo1_3.jpg"],
        local: "Paris",
        surface: "40",
        piece: "2"
    },
    {
        no: 2,
        title: "Maison",
        prix: "1500€",
        statut: "L",
        description: "THIAIS Centre Ville Dans une résidence, à taille humaine, récente de standing, calme, proche des commerces et des transports, Century 21ARRS Immo vous présente en exclusivité cet appartement de 3 pièces situé au 1er étage avec balcon. Il se compose d'une entrée desservant d'un côté la cuisine ouverte sur le séjour avec accès au balcon sans vis à vis. Pour la partie nuit, un couloir avec rangement dessert les deux chambres avec placards, la salle d'eau et les WC. Un parking et une cave complète l'ensemble. ",
        images: ["small-photo2_1.jpg", "photo2_1.jpg", "photo2_2.jpg", "photo2_3.jpg"],
        local: "THIAIS",
        surface: "65",
        piece: "3"
    },
    {
        no: 3,
        title: "Villa Luxe",
        prix: "550000€",
        statut: "V",
        description: "L'entrée distribue une cuisine (avec son cellier - accès garage) et un bel espace de vie disposant d'un accès de plain pied à la terrasse et au jardin. Le rez-de-chaussée propose également 2 chambres ayant chacune un accès de plain pied au jardin, une salle de bain ainsi que des WC séparés. Les combles aménagés vous permettent de profiter de 2 belles chambres et d'une salle d'eau avec WC. Vous pourrez également aménager la dernière partie des combes pour créer une 5ème chambre. Enfin, vous pourrez vous prélasser dans le jardin arboré et sans vis-à-vis d'environ 500 m². Nous vous attendons pour les visites ! Prix: 549000.0 euros, Honoraires charge vendeur.",
        images: ["small-photo3_1.jpg", "photo3_1.jpg", "photo3_2.jpg", "photo3_3.jpg"],
        local: "Ile de france",
        surface: "120",
        piece: "4"
    },
    {
        no: 4,
        title: "Magnifique Appartement",
        prix: "5500€",
        statut: "L",
        description: "Rez-de-jardin: Entrée, 2 chambres dont une avec salle de bains, salle d'eau, WC indépendant, placards, buanderie, garage.1er étage: Salon, salle à manger, cuisine aménagée,3 chambres, salles de bains avec WC, salle d'eau, placards, terrasses.Chauffage au gaz - Isolation performante - Double vitrage - VMC.Mandat N° 1443. Loyer CC: 5 490 euros. Loyer HC: 5 490 euros. Provision sur charges 0 euros/mois, régularisation annuelle. Dépôt de garantie 5 490 euros. Honoraires de 3 750 euros TTC à la charge du locataire comprenant 750 euros pour l'état des lieux. Bail code civil nous consulter.",
        images: ["small-photo4_1.jpg", "photo4_1.jpg", "photo4_2.jpg", "photo4_3.jpg"],
        local: "Ile de france",
        surface: "250",
        piece: "5"
    },
    {
        no: 5,
        title: "Maison",
        prix: "400000€",
        statut: "V",
        description: "La résidence est située dans le quartier niçois de Saint Sylvestre, à deux pas de la Villa Arson. Cette réalisation proche du centre-ville de Nice est en plein coeur d'un quartier idéal pour vivre. Tous les commerces, écoles, services, sports, tramway sont à moins de 5 minutes à pied. D'architecture moderne, cette résidence, propose des appartements idéalement agencés, certains en duplex, avec de belles terrasses et/ou jardin pour tous. Villas sur le toit en dernier étage avec de magnifiques espaces extérieurs. Garages fermés en sous-sols et les accès sont sécurisés.",
        images: ["small-photo5_1.jpg", "photo5_1.jpg", "photo5_2.jpg", "photo5_3.jpg"],
        local: "Nice",
        surface: "100",
        piece: "4"
    },
    {
        no: 6,
        title: "Maison Luxe",
        prix: "1700€",
        statut: "L",
        description: "Jolie maison entièrement meublée dans un beau lotissement au calme, près des accès autoroute et du centre commercial Bay 2. Au rez-de-chaussée vous découvrirez un agréable espace de vie comprenant un séjour, une salle à mangé puis un cuisine de plus de 33m² au total ainsi qu'un sas avec WC et de nombreux rangement. La cuisine puis la salle à mangé donne accès à une terrasse et un jardin paysagé sans vis à vis. A l'étage elle vous offre un dégagement avec placard desservant trois chambres dont une de plus de 13m² toutes avec rangements ainsi qu'une salle de bains avec WC. Place de parking extérieur libre. Loyer CC: 1 700 euros Dépôt de garantie: 3 340 euros Honoraires: 1 049.49 euros.",
        images: ["small-photo6_1.jpg", "photo6_1.jpg", "photo6_2.jpg"],
        local: "Marseille",
        surface: "80",
        piece: "5"
    },
    {
        no: 7,
        title: "Apartement",
        prix: "1700€",
        statut: "L",
        description: "située dans la centre ville ,calme, proche des commerces et des transports.Dans le quartier très prisé de Saint germain des prés, rue du Dragon, magnifique 2 Pièces de 40,7m² au 1er étage composé d'un séjour avec cuisine équipée américaine, deux salles de douche, une chambre, une buanderie, wc séparé et de nombreux placards.Une cave de 6 m² complète ce bien.Ce bien vous séduira par sa localisation, et son calme. ",
        images: ["small-photo7_1.jpg", "photo6_2.jpg", "photo1_2.jpg"],
        local: "Paris",
        surface: "80",
        piece: "5"
    },
    {
        no: 8,
        title: "Apartement",
        prix: "350000€",
        statut: "V",
        description: "Tous les commerces, écoles, services, sports, tramway sont à moins de 5 minutes à pied. D'architecture moderne, cette résidence, propose des appartements idéalement agencés, certains en duplex, avec de belles terrasses et/ou jardin pour tous. Villas sur le toit en dernier étage avec de magnifiques espaces extérieurs. Garages fermés en sous-sols et les accès sont sécurisés.",
        images: ["small-photo8_1.jpg", "photo8_2.jpg", "photo8_3.jpg"],
        local: "Ile de france",
        surface: "80",
        piece: "5"
    },
    {
        no: 9,
        title: "Appartement de luxe",
        prix: "1700€",
        statut: "L",
        description: "Jolie maison entièrement meublée dans un beau lotissement au calme, près des accès autoroute et du centre commercial Bay 2. Au rez-de-chaussée vous découvrirez un agréable espace de vie comprenant un séjour, une salle à mangé puis un cuisine de plus de 33m² au total ainsi qu'un sas avec WC et de nombreux rangement. La cuisine puis la salle à mangé donne accès à une terrasse et un jardin paysagé sans vis à vis. A l'étage elle vous offre un dégagement avec placard desservant trois chambres dont une de plus de 13m² toutes avec rangements ainsi qu'une salle de bains avec WC. Place de parking extérieur libre. Loyer CC: 1 700 euros Dépôt de garantie: 3 340 euros Honoraires: 1 049.49 euros.",
        images: ["small-photo7_1.jpg", "photo6_2.jpg"],
        local: "Marseille",
        surface: "80",
        piece: "5"
    },
    {
        no: 10,
        title: "Logement ",
        prix: "350000€",
        statut: "V",
        description: "Jolie maison entièrement meublée dans un beau lotissement au calme, près des accès autoroute et du centre commercial Bay 2. Au rez-de-chaussée vous découvrirez un agréable espace de vie comprenant un séjour, une salle à mangé puis un cuisine de plus de 33m² au total ainsi qu'un sas avec WC et de nombreux rangement. La cuisine puis la salle à mangé donne accès à une terrasse et un jardin paysagé sans vis à vis. A l'étage elle vous offre un dégagement avec placard desservant trois chambres dont une de plus de 13m² toutes avec rangements ainsi qu'une salle de bains avec WC. Place de parking extérieur libre. Loyer CC: 1 700 euros Dépôt de garantie: 3 340 euros Honoraires: 1 049.49 euros.",
        images: ["small-photo8_1.jpg", "photo8_2.jpg", "photo8_3.jpg"],
        local: "Ile de france",
        surface: "80",
        piece: "5"
    }

]);

function getParameterURL() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars.pno;
}

lesannonces.generateAnnonces();

lesannonces.generateVendreAnnonces(getParameterURL());
lesannonces.generateLouerAnnonces(getParameterURL());



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgElements = document.querySelectorAll("#images>img");
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
imgElements.forEach(img => {

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
    }
});



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}