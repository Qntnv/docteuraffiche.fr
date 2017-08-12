angular.module('drAfficheApp', ['ngRoute','ngMaterial', 'ngAnimate', 'angularTypewrite'])

// Système de routage
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) { 
        $routeProvider
        .when('/', {
            templateUrl: 'views/default.html',
            controller: 'MainCtrl'
        })
        .when('/conges', {
            templateUrl: 'views/conges.html',
            controller: 'MainCtrl'
        })
        .when('/bags', {
            templateUrl: 'views/bags.html',
            controller: 'MainCtrl'
        })
        .when('/fermeture-exceptionnelle', {
            templateUrl: 'views/fermeture-exceptionnelle.html',
            controller: 'MainCtrl'
        })
        .when('/travaux', {
            templateUrl: 'views/travaux.html',
            controller: 'MainCtrl',
        })
        .when('/cb', {
            templateUrl: 'views/CB.html',
            controller: 'cardsCtrl'
        })
        .when('/animaux', {
            templateUrl: 'views/animaux.html',
            controller: 'MainCtrl'
        })
        .when('/cheques', {
            templateUrl: 'views/cheques.html',
            controller: 'MainCtrl'
        })
        .when('/cessation', {
            templateUrl: 'views/cessation.html',
            controller: 'MainCtrl'
        })
        .when('/inventaire', {
            templateUrl: 'views/inventaire.html',
            controller: 'MainCtrl'
        })
        .when('/demenagement', {
            templateUrl: 'views/demenagement.html',
            controller: 'MainCtrl'
        })
        .when('/horaire-exceptionnel', {
            templateUrl: 'views/horaire-exc.html',
            controller: 'MainCtrl'
        })
        .when('/surveillance', {
            templateUrl: 'views/surveillance.html',
            controller: 'MainCtrl'
        })
        .when('/tickets-restaurant', {
            templateUrl: 'views/tickets-restaurant.html',
            controller: 'MainCtrl'
        })
        .when('/vols', {
            templateUrl: 'views/vols.html',
            controller: 'MainCtrl'
        })
        .when('/liquidation', {
            templateUrl: 'views/liquidation.html',
            controller: 'MainCtrl'
        })
        .when('/berightback', {
            templateUrl: 'views/berightback.html',
            controller: 'MainCtrl'
        })
        .when('/horsservice', {
            templateUrl: 'views/horsservice.html',
            controller: 'MainCtrl'
        })
        .when('/fermer-porte', {
            templateUrl: 'views/fermer-porte.html',
            controller: 'MainCtrl'
        })
        .when('/vitrine', {
            templateUrl: 'views/vitrine.html',
            controller: 'MainCtrl'
        })
        .when('/peinture', {
            templateUrl: 'views/peinture.html',
            controller: 'MainCtrl'
        })
        .when('/verres', {
            templateUrl: 'views/verres.html',
            controller: 'MainCtrl'
        })
        .when('/ferie', {
            templateUrl: 'views/mai.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
])
  
//MainCtrl == main controller for the whole app
.controller('MainCtrl', ['$scope', '$route', '$routeParams', '$location', '$anchorScroll', '$timeout', 
  function MainCtrl($scope, $route, $routeParams, $location, $anchorScroll, $timeout) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    $scope.typetext = ['Commerçants', 'Artisans', 'Boulangers', 'Coiffeurs', 'Restaurateurs','Fleuristes','Bar-tabac', 'Avec Docteur Affiche,'];

    $scope.motifs = [
        {url: 'conges', name: 'Fermeture pour congés',  tooltip:'Vous pourrez sélectionner les dates', tools:'fullDates', tags:'fermeture', badge:'Succès'},
        {url: 'fermeture-exceptionnelle', name: 'Fermeture exceptionnelle',  tooltip:'Vous pourrez sélectionner les horaires', tools:'fullHours', tags:'fermeture', badge:'Succès'},
        {url: 'cessation', name: 'Fermeture définitive',  tooltip:'Vous pourrez sélectionner la date', tools:'oneDate', tags:'fermeture', badge:''},
        {url: 'inventaire', name: 'Fermeture pour inventaire',  tooltip:'Vous pourrez sélectionner la date de réouverture', tools:'oneDate', tags:'fermeture', badge:''},
        {url: 'travaux', name: 'Fermeture pour travaux', tooltip:'Vous pourrez sélectionner les dates', tools:'fullDates', tags:'fermeture', badge:''},
        {url: 'demenagement', name: 'Déménagement',  tooltip:'Vous pourrez indiquer la nouvel emplacement et la date', tools:'dateAddress', tags:'divers fermeture', badge:''},
        {url: 'liquidation', name: 'Liquidation avant fermeture',  tooltip:'Tout est prêt', tools:'default', tags:'fermeture', badge:''},
        {url: 'horaire-exceptionnel', name: 'Horaire exceptionnel',  tooltip:'Vous pourrez sélectionner l\'horaire', tools:'hoursAndType', tags:'fermeture', badge:''},
        {url: 'berightback', name: 'Absence momentanée',  tooltip:'Vous pourrez sélectionner l\'heure', tools:'brb', tags:'fermeture absence', badge:'Succès'},
        {url: 'cb', name: 'Paiement CB', tooltip:'Vous pourrez sélectionner le montant minimum', tools:'cbSelect', tags:'paiement', badge:'Succès'},
        {url: 'tickets-restaurant', name: 'Tickets restaurant',  tooltip:'Vous sélectionnez la date', tools:'yearDate', tags:'paiement', badge:'Succès'},
        {url: 'cheques', name: 'Chèques non acceptés',  tooltip:'Tout est prêt ;)', tools:'default', tags:'paiement'},
        {url: 'bags', name: 'Déposer les sacs à l\'accueil',  tooltip:'Tout est prêt ;)', tools:'default', tags:'sécurité'},
        {url: 'vols', name: 'Perte ou vol',  tooltip:'Tout est prêt ;)', tools:'default', tags:'sécurité'},
        {url: 'surveillance', name: 'Vidéosurveillance', tooltip:'Tout est prêt ;)', tools:'default', tags:'sécurité', badge:'Succès'},
        {url: 'fermer-porte', name: 'Fermer la porte', tooltip:'Tout est prêt ;)', tools:'default', tags:'divers'},
        {url: 'horsservice', name: 'Equipement hors service', tooltip:'Vous pourrez choisir le type d\'équipement si besoin', tools:'outoforder', tags:'sécurité divers', badge:'Nouveau !'},
        {url: 'vitrine', name: 'Vitrine en cours', tooltip:'Tout est prêt :)', tools:'default', tags:'divers'},
        {url: 'verres', name: 'Ne pas sortir avec les verres', tooltip:'Tout est prêt :)', tools:'default', tags:'divers' , badge:'Nouveau !'},
        {url: 'peinture', name: 'Peinture fraîche', tooltip:'Tout est prêt :)', tools:'default', tags:'divers'},
        {url: 'animaux', name: 'Animaux non admis', tooltip:'Tout est prêt ;)', tools:'default', tags:'divers'}
                ];
    
    $scope.minDate = new Date ();

    $scope.cbAmount = 10;
    $scope.optionsHidden = {
        hide:true 
    };
    $scope.affiche = 'sélectionnez une affiche';
    $scope.toolsView = {
        view: 'null'
    };

    $scope.radio = { choice:'ouvrirons', ferie: 'fermés'}
    //scroll to the collapse after clicking the green button
    $scope.gotoCollapse = function() {
        setTimeout(function () {
    $('html, body').animate({
        scrollTop: $("#collapseAffiches").offset().top
        }, 800);
        }, 250);
    };  
  //main function to adapt the editor view to the selected affiche
    $scope.choixaffiche = function(nouvelleaffiche, toolSelection) {
    $scope.affiche = nouvelleaffiche;
    $scope.toolsView.view = toolSelection;
    $scope.optionsHidden.hide = false;
    console.log('affiche : ' + $scope.affiche);
    console.log('toolsView.view :' + $scope.toolsView.view);

//make editor visible
    $scope.selectAffiche = $scope.affiche;
    
//prevent the collapse row from collapsing
    $('#collapseAffiches2').collapse('hide');   

    //set Début date to current day
    var newStartDate = new Date(+$scope.minDate);
    //newStartDate.setDate(newStartDate.getDate());
    //$scope.myStartDate = newStartDate;
    //set Fin date to 2 weeks from now
    //var newEndDate = new Date(+$scope.minDate);
    //newEndDate.setDate(newEndDate.getDate() + 14);
    //$scope.myEndDate = newEndDate;

    //scroll to the editor after 250ms
    setTimeout(function () {$scope.gotoEditor() }, 250);
};
 
    //scroll to the editor
    $scope.gotoEditor = function() {
    $('html, body').animate({
        scrollTop: $(".toolbar").offset().top
        }, 800);
    };

    $scope.cbs =  [ 
            {name:'Visa', id:'toggleVisa', img:'./img/visa.png'},
            {name:'Mastercard', id:'toggleMC', img:'./img/mastercard.png'},
            {name:'Amex', id:'toggleAmex', img:'./img/amex.png'},
        ];
            $scope.selection = {
            ids: {"toggleVisa": true, "toggleAmex":true, "toggleMC":true}
        };

$('.datepicker').datepicker({
    format: "dd MM yyyy",
    startDate: $scope.minDate,
    maxViewMode: 2,
    todayBtn: "linked",
    language: "fr",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    disableTouchKeyboard: true,
});

$scope.data = { cb1: false };

$scope.equipement ='Cet équipement ';

    $scope.items = [
        {name:'Visa', id:'toggleVisa', img:'./img/visa.png'},
        {name:'Mastercard', id:'toggleMC', img:'./img/mastercard.png'},
        {name:'Amex', id:'toggleAmex', img:'./img/amex.png'},
        ];
        
    $scope.selected = [];

    $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
        list.splice(idx, 1);
    }
    else {
        list.push(item);
    }
    };

    $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
};

$scope.quietbody = true;

// create affiche with pdfmake.js
$scope.meta = {
    orientation:'landscape',
    pageSize:'A4'
}

$scope.goPdf = function(choice) {

        var headertext = $('#affiche-header').text();
        var maintext = $('#affiche-body').text();
        var secondtext = $('#affiche-secondary-body').text();
        var fontFactor = 1;

        if ($scope.meta.pageSize === 'A5') {
            fontFactor = 1.5;
        } else { fontFactor = 1 };

        if ($scope.quietbody === true ) {
        var quiettext = $('#affiche-quiet-body').text();
        console.log('quiettext: ' + quiettext)
        } else {
            quiettext = '';
        }

        var headerFont = Math.ceil(50/fontFactor, 1);
        var mainFont = Math.ceil(46/fontFactor, 1);
        var secondaryFont = Math.ceil(22/fontFactor, 1);
        var quietFont = Math.ceil(16/fontFactor, 1);
        
        var docDefinition = {
        // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
        pageMargins: [ 30, 50, 30, 60 ],
        // variable as selected by the user
        pageSize: $scope.meta.pageSize,
        // orientation of the page as selected by the user
        pageOrientation: $scope.meta.orientation,
        footer: {
                image: 'footerImage',
                alignment: 'center',
                width: 90,
                margin: [0,0,0,0]
        },
        //affiche body creation
        content: [
            { text: headertext, style: 'header' },
            { text: maintext, style: 'main' },
            { text: ' ', fontSize: 10},
            { text: secondtext, style: 'secondarytext' },
            { text: quiettext, style: 'quiettext' },
        ],
        //styles definition
        styles: {
            header: {
            fontSize: headerFont,
            bold: true,
            alignment: 'center'
            },
            main: {
            fontSize: mainFont,
            bold: false,
            alignment: 'center',
            },
            secondarytext: {
            fontSize: secondaryFont,
            bold:false,
            alignment: 'center'
            },
            quiettext: {
            fontSize: quietFont,
            italics: true,
            alignment: 'center'
            },
        },
        images: {
        footerImage: 'data:image/png;base64,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cA5QG1ikVsINHFR1SQREoHwCcsLlj0EdWiAnXIdRUhtFQARqR0BOuHZDVkqD5YRLwa5KRUAEmk5ATrjpI5xN/+SEs+GoUkRABESgBwE54R44tOMg4HoxS29HO4ApWAREQATiEJATjkNJaVwrYf12tI4NERABEeiCgJxwF/BalNW1EpYTbtFBoK6KgAhkT0BOOHumTSxRTriJo6o+iYAIlE5ATrj0IahFA+SEazFMaqQIiEDdCMgJ123EymmvnHA53FWrCIhAwwnICTd8gDPqHv/Jus10/NioKEwEREAEYhLQJBoTVMuTyQm3/ABQ90VABPIhICecD9emlSon3LQRVX9EQAQqQUBOuBLDUPlGyAlXfojUQBEQgToSkBOu46gV32Y54eKZq0YREIEWEJATbsEgZ9BFOeEMIKoIERABETAJyAmbRLRvI/BfWyDC5naEK1gEREAERCAGgar8AL9rko/RBSUpkYAu4kqEr6pFQATqT0CTaP3HsMweaCVcJn3VLQIiUHsCRU+iWvHW/pDp1YEsj6FjUfoxvWpQgAiIQBsJHIpO/77pHddKuOkjrP6JgAiIgAhUloCccGWHpjYN0zFUm6FSQ0VABKpGIMtbiXH6ptvRcSjVKw1f7nP9g4d69UStFQEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERiE2A//SiH1T0P7+I3cAGJ1wafRvi6V9UvCdrrKi2jv28oEPJqkcg6piPiu+2R1U/J/Luf7f8lD8FgV2R50OovyOvnLMDTMpg/pem70OvQfwvXBS3PwPRouKzHI89Ud8MaAFW3CK7D309o0X9rXpXo475qPimnxNR/a/6+FaufaujRadCN0MvQa9C/4B+Ai0EFW0noEJOSjYbg8DbbRE1CuPFxWjoioq0+Wdox5vQSdDa0JLQNtCiEM0Xn/V4nIL6Js6qtVp/RqE5f4QWz6FZvODgReeBOZStItMR8B3zLNEX34Zzwtf/dMRbmouT7C8hTgB3QpyE94b2h06DpkPPQpyUi7RbUNnvLBXy6pJtGm+Jq0sQ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La9C73Tki4p3ZFOwCNSWQNQxHxVf247HbHhj+q+VcMwRV7LMCfBlnh2gRaADocHQhlBgUfFBOn2KQFMIRB3zUfFN4eDqR9v77+KicBFIRYAOl1/beQH6M7QeFLao+HBabYtAEwhEHfNR8U1g4OtD2/vvY6M4ERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABEegQ+H9DRePPztiELQAAAABJRU5ErkJggg==',
      }
    };

    if (choice === 'toprint') {
    pdfMake.createPdf(docDefinition).print();
        } else {
    pdfMake.createPdf(docDefinition).download('Docteur Affiche.pdf');
        };
}

}])
.controller('cardsCtrl', ['$scope', '$routeParams', 
    function BookCtrl($scope, $routeParams) {
    this.name = 'cardsCtrl';
    this.params = $routeParams;
    
}])
.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    $mdDateLocaleProvider.shortMonths = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil','aout', 'sep', 'oct', 'nov', 'dec'];
    $mdDateLocaleProvider.days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    $mdDateLocaleProvider.shortDays = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];
    $mdDateLocaleProvider.formatDate = function(date) {
    return date ? moment(date).format('DD/MM/YYYY') : null;
    };  
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('green');
});

//simple function for filters styling on selection
var currentfilter = $('.filters ul li').eq(1);
$('.filters li').click(function() {
    $(currentfilter).removeClass("filterselected");
    currentfilter = $(this);
    $(currentfilter).addClass("filterselected");
});

//wickedpicker options
var options = { 
        now: "12:00", // hh:mm 24 hour format only, defaults to current time 
        twentyFour: true, //Display 24 hour format, defaults to false 
        upArrow: 'wickedpicker__controls__control-up', //The up arrow class selector to use, for custom CSS 
        downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS 
        close: 'wickedpicker__close', //The close class selector to use, for custom CSS 
        hoverState: 'hover-state', //The hover state class to use, for custom CSS 
        title: "Sélectionner l\'heure", //The Wickedpicker's title, 
        showSeconds: false, //Whether or not to show seconds, 
        secondsInterval: 1, //Change interval for seconds, defaults to 1  , 
        minutesInterval: 15, //Change interval for minutes, defaults to 1 
        beforeShow: null, //A function to be called before the Wickedpicker is shown 
        show: null, //A function to be called when the Wickedpicker is shown 
        clearable: false, //Make the picker's input clearable (has clickable "x") 
    };
    $('.timepicker').wickedpicker(options);
var timepickers = $('.timepicker').wickedpicker(); 
