console.log(`Link OK`);

var cislo=0;

let zvyscislo = (cislo) => {
    cislo = $(`.count`).text();
    console.log("nacteno:"+ cislo);
    cislo++;
    console.log(cislo);
    $(`.count`).text(cislo)
}

let snizcislo = (cislo) => {
    cislo = $(`.count`).text();
    cislo--;
    $(`.count`).text(cislo);
}

$(`.plus`).click(() => {
    zvyscislo();
});

$(`.minus`).click(()=>{
    snizcislo();
})