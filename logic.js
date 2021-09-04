var varea, tracoBe, genericoSap, nrPilar, vl, nv, btn, btn4, cont, cont1, nrSapatas, btn1, btn2, btn3, res, com, selT,
    selT1, lar, es, esAr, traco, nrA, tracoReb, vltraco, vlArg, massa, espReb, rebfinal, blocoMetro, metro, larS, comS,
    altS, sapata, sapataVl, cP, lP, aP, cV, lV, aV, trV, nrV;


function inicializacoes() {

    btn = document.getElementById("btn1");
    btn1 = document.getElementById("btn3");
    btn2 = document.getElementById("btn2");
    varea = document.getElementById("area");
    com = document.getElementById("comprimento");
    lar = document.getElementById("largura");
    es = document.getElementById("espessura");
    esAr = document.getElementById("espessuraArg");
    tracoReb = document.getElementById("tracoR");
    vltraco = document.getElementById("traco");
    traco = new Array();
    tracoBe = new Array();
    espReb = document.getElementById("espessuraR");
    comS = document.getElementById("comSapata");
    larS = document.getElementById("larSapata");
    altS = document.getElementById("altSapata");
    btn3 = document.getElementById("btn4");
    selT = document.getElementById("tracoAl");
    nrSapatas = document.getElementById("NumeroSapata");
    btn4 = document.getElementById("btn5");
    nrPilar = document.getElementById("NumeroPilar");
    selT1 = document.getElementById("tracoPi");
    cP = document.getElementById("comPilar");
    lP = document.getElementById("larPilar");
    aP = document.getElementById("altPilar");
    genericoSap = new Array();
    blocoMetro = 12.5;
    metro = 100;
    vl = 0;
}

function validacoes(ac) {

    if (ac.value == "" ||typeof ac.value== NaN )
        alert("inroduza um Numero");

}

function eventos() {


    btn.addEventListener("click", function() {

        calcularArea();

    });

    btn2.addEventListener("click", function() {

        calcularArea();
        validacoes(vltraco);
        try {
            calculoArgamassa();
        } catch (TypeErrorException) { alert("nao foi possivel encontrar os dados \nnao tivemos dados suficientes para processar"); };

    });

    btn1.addEventListener("click", function() {
        calcularArea();
        validacoes(tracoReb);
        calculoReboco();
    });

    btn3.addEventListener("click", function() {
        cont = nrSapatas.value;
        if (vl < cont){
            nrdSapatas(vl, selT, comS.value, larS.value, altS.value);
            zerar();
        }
            
        else
            calculosBet("saida3");

    });

    btn4.addEventListener("click", function() {
        cont1 = nrPilar.value;

        if (vl < cont1){
            nrdSapatas(vl, selT1, cP.value, lP.value, aP.value);
           
            
        }
           
        else
            calculosBet("saida4");

    });


}

function calculosBet(nv) {
    let areia = 0,
        cimento = 0,
        pedra = 0;
    for (var i = 0; i < cont; i++) {
        cimento = cimento + genericoSap[i].precocim;
        areia = areia + genericoSap[i].precoAreia;
        pedra = pedra + genericoSap[i].precoPedra;
    }
   
    document.getElementById(nv).innerHTML = "o total de pedra e de <br> " + pedra + " Valor da areia e de <br> " + areia + "\n Valor de cimento e de " + cimento;
    vl = 0;



}


function nrdSapatas(n, va, x, y, z) {

    genericoSap[vl] = calculosBetao(va, x, y, z);
    zerar();
    vl++;
   
}

function zerar(){
    
    comS.innerHTML = " ";
    larS.innerHTML = " ";
    altS.innerHTML = " ";
    }


function calcularArea() {
    try {
        nrA = Math.ceil(varea.value * blocoMetro);
    } catch (NumberFormatException) {

        alert("Introduza um Numero");
    }

    if (typeof(nrA.value).isNumber == true)

        document.getElementById("saida").innerHTML = nrA + " Blocos";
    else
        document.getElementById("saida").innerHTML = " Introduza um Numero";

}

function calculoArgamassa() {

    vlArg = calculosArg();

    massa = vlTracos();
    /* alert("Valor da argamassa " + vlArg);
     alert("Valor da massa de cimento do traco " + massa.cim);
     alert("Valor da areia do traco " + massa.areia);
     alert(vlArg + "calculo argamassa");
     alert(calcCimento() + " sacos de cimento");
     alert(calcAreia() + " metros cubicos de areia");*/
    document.getElementById("saida1").innerHTML = calcCimento() + " Sacos de Cimento \n" + calcAreia() + " Metros Cubicos de Areia  ";


}

function calculoReboco() {
    rebfinal = traco[tracos(tracoReb.value)];


    alert(Math.ceil((rebfinal.cim * areaaReboco()) / 50) + " nr de cimento reboco");
    alert(Math.ceil((rebfinal.areia * areaaReboco()) * 1000) / 1000 + " qtd de areia reboco");
}

function calcCimento() {
    return Math.ceil((massa.cim * vlArg * varea.value) / 50);
}


function calcAreia() {
    return Math.ceil(massa.areia * vlArg * varea.value * 1000) / 1000;
}

function calculosArg() {
    return (((com.value / metro + 2 * esAr.value / metro) * (lar.value / metro + 2 * esAr.value / metro) - com.value / metro * lar.value / metro) * es.value / metro) * blocoMetro;
}


function vlTracos() {


    return traco[tracos(vltraco.value)];
}

function tracos(tr) {


    switch (tr) {

        case "1:1":
            return 0;
        case "1:1,5":
            return 1;
        case "1:2":
            return 2;
        case "1:2,5":
            return 3;
        case "1:3":
            return 4;
        case "1:4":
            return 5;
        case "1:5":
            return 6;
        case "1:6":
            return 7;
        case "1:7":
            return 8;
        case "1:8":
            return 9;


    }
}

function obj(cimento, area) {
    var cim, areia;
    var traco1 = {
        cim: cimento,
        areia: area

    };

    return traco1;
}

function obj1(cimento, area, pe) {
    var cim, areia, pe;
    var tracoB = {
        cim: cimento,
        areia: area,
        pedra: pe
    };

    return tracoB;
}

function criarTraco() {

    traco[0] = obj(800, 0.670);
    traco[1] = obj(640, 0.800);
    traco[2] = obj(535, 0.890);
    traco[3] = obj(460, 0.950);
    traco[4] = obj(400, 0.060);
    traco[5] = obj(320, 1.070);
    traco[6] = obj(270, 1.110);
    traco[7] = obj(230, 1.140);
    traco[8] = obj(200, 1.170);
    traco[9] = obj(180, 0.190);

}

function criarTracoB() {
    tracoBe[0] = obj1(310, 0.515, 0.770);
    tracoBe[1] = obj1(145, 0.730, 0.970);
    tracoBe[2] = obj1(370, 0.615, 0.615);
}

function trSa(sa) {
    switch (sa) {

        case "1:2:3":
            return 0;
        case "1:6:8":
            return 1;
        case "1:2:2":
            return 2;
    }

}

function areaaReboco() {
    return varea.value * (espReb.value / metro);
}

function calcularVolume(com, la, al) {
    return com * la * al;
}


function calculosBetao(se, x, y, z) {

    sapata = tracoBe[trSa(se.value)];
    sapataVl = calcularVolume(x, y, z);
    /*alert(sapata.areia * sapataVl + " Areia");
    alert(sapata.cim * sapataVl / 50 + " Sacos de Cimento");
    alert(sapata.pedra * sapataVl + " Pedras");*/
    return objectoGenerico(sapata.cim * sapataVl / 50, sapata.areia * sapataVl, sapata.pedra * sapataVl)
}

function objectoGenerico(com, lar, al) {
    var precocim, precoAreia, precoPedra;
    var elemento = {
        precocim: com,
        precoAreia: lar,
        precoPedra: al
    };

    return elemento;
}


function main() {
    inicializacoes();
    criarTraco();
    criarTracoB();
    eventos();

}
main();