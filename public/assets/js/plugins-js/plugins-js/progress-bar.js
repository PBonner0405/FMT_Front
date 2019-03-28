$(document).ready(function () {
    var clube = $('ul#filtro li a#clube');
    var temporada = $('ul#filtro li a#temporada');
    var selecao = $('ul#filtro li a#selecao');
    var carreira = $('ul#filtro li a#carreira');

    var progressNeymar = $('.neymar .progressBar span');
    var progressRonaldo = $('.ronaldo .progressBar span');
    var progressMessi = $('.messi .progressBar span');
    var progressIbra = $('.ibrahimovic .progressBar span');

    var numberPercentNeymar = $('.neymar .progressBar span i');
    var numberPercentRonaldo = $('.ronaldo .progressBar span i');
    var numberPercentMessi = $('.messi .progressBar span i');
    var numberPercentIbra = $('.ibrahimovic .progressBar span i');

    var numberGolsNeymar = $('.neymar .progressBar b');
    var numberGolsRonaldo = $('.ronaldo .progressBar b');
    var numberGolsMessi = $('.messi .progressBar b');
    var numberGolsIbra = $('.ibrahimovic .progressBar b');

    function carreiraLOad() {
        var neymar = 40.2;
        var ronaldo = 89;
        var messi = 81.4;
        var ibra = 73.6;

        var neymarGols = 201;
        var ronaldoGols = 446;
        var messiGols = 407;
        var ibraGols = 368;

        carreira.parent().addClass('active');

        progressNeymar.height(neymar + '%');
        progressRonaldo.height(ronaldo + '%');
        progressMessi.height(messi + '%');
        progressIbra.height(ibra + '%');

        numberPercentNeymar.text(neymar + '%');
        numberPercentRonaldo.text(ronaldo + '%');
        numberPercentMessi.text(messi + '%');
        numberPercentIbra.text(ibra + '%');

        numberGolsNeymar.text(neymarGols + ' gols');
        numberGolsRonaldo.text(ronaldoGols + ' gols');
        numberGolsMessi.text(messiGols + ' gols');
        numberGolsIbra.text(ibraGols + ' gols');
    }

    carreiraLOad();

    clube.click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        var neymar = 15;
        var ronaldo = 54.4;
        var messi = 72.6;
        var ibra = 17.2;

        var neymarGols = 75;
        var ronaldoGols = 272;
        var messiGols = 363;
        var ibraGols = 83;

        progressNeymar.height(neymar + '%');
        progressRonaldo.height(ronaldo + '%');
        progressMessi.height(messi + '%');
        progressIbra.height(ibra + '%');

        numberPercentNeymar.text(neymar + '%');
        numberPercentRonaldo.text(ronaldo + '%');
        numberPercentMessi.text(messi + '%');
        numberPercentIbra.text(ibra + '%');

        numberGolsNeymar.text(neymarGols + ' gols');
        numberGolsRonaldo.text(ronaldoGols + ' gols');
        numberGolsMessi.text(messiGols + ' gols');
        numberGolsIbra.text(ibraGols + ' gols');
    });


    selecao.click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        var neymar = 8;
        var ronaldo = 10.2;
        var messi = 8.8;
        var ibra = 10;

        var neymarGols = 40;
        var ronaldoGols = 51;
        var messiGols = 44;
        var ibraGols = 50;

        progressNeymar.height(neymar + '%');
        progressRonaldo.height(ronaldo + '%');
        progressMessi.height(messi + '%');
        progressIbra.height(ibra + '%');

        numberPercentNeymar.text(neymar + '%');
        numberPercentRonaldo.text(ronaldo + '%');
        numberPercentMessi.text(messi + '%');
        numberPercentIbra.text(ibra + '%');

        numberGolsNeymar.text(neymarGols + ' gols');
        numberGolsRonaldo.text(ronaldoGols + ' gols');
        numberGolsMessi.text(messiGols + ' gols');
        numberGolsIbra.text(ibraGols + ' gols');
    });

    carreira.click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        carreiraLOad();
    });
});