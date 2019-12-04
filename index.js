let client = new jso.JSO({
  providerID: "HBP",
  client_id: "9d55e588-19c9-4fce-b72d-3820a0eddee0",
  redirect_uri: "https://cnr-ibf-pa.github.io/External_Survey/", // The URL where you is redirected back, and where you perform run the callback() function.
  authorization: "https://services.humanbrainproject.eu/oidc/authorize",
})  

function init() {

  try {
    client.callback();
  } catch (e) {
    console.warn('Issue decoding the token');
  }

const USER_API = 'https://services.humanbrainproject.eu/idm/v1/api/user/me';
var auth = client.getToken();

auth.then((session) => {
var header = {'headers' : {Authorization: 'Bearer ' + session.access_token}};


$.ajax({
    url: USER_API,
    headers: {
        'Authorization':'Bearer ' + session.access_token,
        'Content-Type':'application/json'
    },
    method: 'GET',
    success: function(data){
        console.log(data.id);      
    document.getElementById("hbp-user-id").innerHTML = data.id;
    }
});
}); 
    return auth;
}


function find_answer(checkboxes){
        var vals = "";

        for (var i=0, n=checkboxes.length;i<n;i++) {
            if (checkboxes[i].checked){
                vals +='\n'+checkboxes[i].value;
            }
        }
        if (vals) vals = vals.substring(1);
        return vals;
    }

function postContactToGoogle() {
      //Question n°1
    var radios = document.getElementsByName('q1');
    var q1=getValueRadio(radios);
    if(q1=='other'){
      q1=$('#other').val();
    }
    //Question n°2
    var slider = document.getElementById("q2");
        var output = slider.value;
        slider.oninput = function() {
      output = this.value;
    }
    //Question n°3
    var r3 = document.getElementsByName('q3');
    var q3=getValueRadio(r3);
    var c3 = $('#c3').val();
    //Question n°4
    var r4 = document.getElementsByName('q4');
    var q4=getValueRadio(r4);
    var c4 = $('#c4').val();

    //Question n°5
    var r5 = document.getElementsByName('q5');
    var q5=getValueRadio(r5);
    var c5 = $('#c5').val();

    //Question n°6
    var r6 = document.getElementsByName('q6');
    var q6=getValueRadio(r6);
    var c6 = $('#c6').val();

    //Question n°7
    var r7 = document.getElementsByName('q7');
    var q7=getValueRadio(r7);
    var c7 = $('#c7').val();

    //Question n°8
    //Molecular Level
    var check1 = document.getElementsByName('MLevel');
    var MLevel=find_answer(check1);
    //Subcellular Level
    var check2 = document.getElementsByName('SLevel');
    var SLevel=find_answer(check2);
    //Trace Analysis
    var check3 = document.getElementsByName('TAnalysis');
    var TAnalysis=find_answer(check3);
    //Morphology Analysis
    var check4 = document.getElementsByName('MAnalysis');
    var MAnalysis=find_answer(check4);
    //Single Circuit Building
    var check5 = document.getElementsByName('CSBuilding');
    var CSBuilding=find_answer(check5);
    //Circuit Building
    var check6 = document.getElementsByName('CBuilding');
    var CBuilding=find_answer(check6);
    //Single Cell In Silicio Experiments
    var check7 = document.getElementsByName('SingleCSE');
    var SingleCSE=find_answer(check7);    
    //Small Cell In Silicio Experiments
    var check8 = document.getElementsByName('SmallCSE');
    var SmallCSE=find_answer(check8);     
    //Brain Area Circuit In Silicio Experiments
    var check9 = document.getElementsByName('BACSE');
    var BACSE=find_answer(check9); 
    //Model Validation
    var check10 = document.getElementsByName('MValidation');
    var MValidation=find_answer(check10);  
    //Highly integrated workflow
    var check11 = document.getElementsByName('HIW');
    var HIW=find_answer(check11);

    //Question n°9
    var checkq9 = document.getElementsByName('question9');
    var question9=find_answer(checkq9);

    //Question n°10
    var q10 = $('#q10').val();

    //Question n°11
    var checkq11 = document.getElementsByName('question11');
    var question11=find_answer(checkq11);

    //Question n°12
    var radio12 = document.getElementsByName('q12');
    var q12=getValueRadio(radio12);

    //Question n°13
    var q13 = $('#q13').val();

    //UserID
    var userId=$('#hbp-user-id').val();

    //Question n°8 split
    //Molecular_Level
    var ML1=document.getElementById("q827").onchange = function() {var ML1=checkMenu("q827"); return ML1;};
    var ML2=document.getElementById("q828").onchange = function() {var ML2=checkMenu("q828"); return ML2;};
    var ML3=document.getElementById("q829").onchange = function() {var ML3=checkMenu("q829"); return ML3;};
    var ML4=document.getElementById("q830").onchange = function() {var ML4=checkMenu("q830"); return ML4;};
    var ML5=document.getElementById("q831").onchange = function() {var ML5=checkMenu("q831"); return ML5;};
    var ML6=document.getElementById("q832").onchange = function() {var ML6=checkMenu("q832"); return ML6;};
    //Subcellular Level
    var SM1=document.getElementById("q826").onchange = function() {var SM1=checkMenu("q826"); return SM1;};
    //TraceAnalysis
    var TA1=document.getElementById("q81").onchange = function() {var TA1=checkMenu("q81"); return TA1;};
    var TA2=document.getElementById("q82").onchange = function() {var TA2=checkMenu("q82"); return TA2;};
    var TA3=document.getElementById("q83").onchange = function() {var TA3=checkMenu("q83"); return TA3;};
    var TA4=document.getElementById("q84").onchange = function() {var TA4=checkMenu("q84"); return TA4;};
    //Morphology Analysis
    var MA1=document.getElementById("q85").onchange = function() {var MA1=checkMenu("q85"); return MA1;};
    var MA2=document.getElementById("q86").onchange = function() {var MA2=checkMenu("q86"); return MA2;};
    //Single Circuit Building
    var SCB1=document.getElementById("q87").onchange = function() {var SCB1=checkMenu("q87"); return SCB1;};
    var SCB2=document.getElementById("q88").onchange = function() {var SCB2=checkMenu("q88"); return SCB2;};
    var SCB3=document.getElementById("q89").onchange = function() {var SCB3=checkMenu("q89"); return SCB3;};
    var SCB4=document.getElementById("q810").onchange = function() {var SCB4=checkMenu("q810"); return SCB4;};
    var SCB5=document.getElementById("q811").onchange = function() {var SCB5=checkMenu("q811"); return SCB5;};
    var SCB6=document.getElementById("q812").onchange = function() {var SCB6=checkMenu("q812"); return SCB6;};
    var SCB7=document.getElementById("q813").onchange = function() {var SCB7=checkMenu("q813"); return SCB7;};
    //Circuit Building
    var CB1=document.getElementById("q814").onchange = function() {var CB1=checkMenu("q814"); return CB1;};
    var CB2=document.getElementById("q815").onchange = function() {var CB2=checkMenu("q815"); return CB2;};
    //Single Cell In Silicio Experiments
    var SCISE1=document.getElementById("q816").onchange = function() {var SCISE1=checkMenu("q816"); return SCISE1;};
    //Small Cell In Silicio Experiments
    var SmCISE1=document.getElementById("q817").onchange = function() {var SmCISE1=checkMenu("q817"); return SmCISE1;};
    //Brain Area Circuit In Silicio Experiments
    var BACISE1=document.getElementById("q818").onchange = function() {var BACISE1=checkMenu("q818"); return BACISE1;};
    var BACISE2=document.getElementById("q819").onchange = function() {var BACISE2=checkMenu("q819"); return BACISE2;};
    //Model Validation
    var MV1=document.getElementById("q820").onchange=function(){var MV1=checkMenu("q820"); return MV1;};
    var MV2=document.getElementById("q821").onchange=function(){var MV2=checkMenu("q821"); return MV2;};
    var MV3=document.getElementById("q822").onchange=function(){var MV3=checkMenu("q822"); return MV3;};
    var MV4=document.getElementById("q823").onchange=function(){var MV4=checkMenu("q823"); return MV4;};
    var MV5=document.getElementById("q824").onchange=function(){var MV5=checkMenu("q824"); return MV5;};
    //Highly integrated workflow
    var HIW1=document.getElementById("q825").onchange=function(){var HIW1=checkMenu("q825"); return HIW1;};
    //NSG
    var NSG=document.getElementById("check1").onchange=function(){var NSG=checkMenu("check1"); return NSG;};
    //JURECA
    var jureca=document.getElementById("check2").onchange=function(){var jureca=checkMenu("check2"); return jureca;};
    //pizDaint
    var pizD=document.getElementById("check5").onchange=function(){var pizD=checkMenu("check5"); return pizD;};
    //marconi
    var marconi=document.getElementById("check6").onchange=function(){var marconi=checkMenu("check6"); return marconi;};
    
    var F_ML=document.getElementById("qs111").onchange=function(){var F_ML=checkMenu("qs111"); return F_ML;};
    var F_SM=document.getElementById("qs112").onchange=function(){var F_SM=checkMenu("qs112"); return F_SM;};
    var F_TA=document.getElementById("qs113").onchange=function(){var F_TA=checkMenu("qs113"); return F_TA;};
    var F_MA=document.getElementById("qs114").onchange=function(){var F_MA=checkMenu("qs114"); return F_MA;};
    var F_SCB=document.getElementById("qs115").onchange=function(){var F_SCB=checkMenu("qs115"); return F_SCB;};
    var F_CB=document.getElementById("qs116").onchange=function(){var F_CB=checkMenu("qs116"); return F_CB;};
    var F_SCISE=document.getElementById("qs117").onchange=function(){var F_SCISE=checkMenu("qs117"); return F_SCISE;};
    var F_SmCISE=document.getElementById("qs118").onchange=function(){var F_SmCISE=checkMenu("qs118"); return F_SmCISE;};
    var F_BACISE=document.getElementById("qs119").onchange=function(){var F_BACISE=checkMenu("qs119"); return F_BACISE;};
    var F_MV=document.getElementById("qs1110").onchange=function(){var F_ML=checkMenu("qs1110"); return F_ML;};
    var F_HIW=document.getElementById("qs1111").onchange=function(){var F_HIW=checkMenu("qs1111"); return F_HIW;};

    
    $.ajax({
      url:"https://docs.google.com/forms/d/e/1FAIpQLScFXH_d30T8hw2yBSfigGywzv2UpUcN9BqfUdOtiG69XX-iWQ/formResponse",
      data:{"entry_587568546":q1,"entry_1167509473":output,"entry_1156354609":q3,"entry_1899290130":c3,"entry_1722887222":q4,
      "entry_155614927":c4,"entry_449077188":q5,"entry_905444161":c5,"entry_1976011584":q6,"entry_1828737890":c6,
      "entry_180333328":q7,"entry_871783456":c7,"entry_1693291241":MLevel,"entry_2037577938":SLevel,"entry_850321543":TAnalysis,
      "entry_196612701":MAnalysis,"entry_340839207":CSBuilding,"entry_1600241950":CBuilding,"entry_210607341":SingleCSE,
      "entry_1067961165":SmallCSE,"entry_597633461":BACSE,"entry_2010265622":MValidation,"entry_1449786897":HIW,
      "entry_17035143":question9,"entry_191531459":q10,"entry_1834085899":question11,"entry_514700957":q12,
      "entry_1641591589":q13,"entry_842154194":userId,"entry_717184075":ML1,"entry_464770575":ML2,"entry_1566746255":ML3,
      "entry_1911509855":ML4,"entry_1065085873":ML5,"entry_1863260336":ML6,"entry_1913919192":SM1,"entry_452269751":TA1,
      "entry_1450206951":TA2,"entry_477100591":TA3,"entry_1761938093":TA4,"entry_327690400":MA1,"entry_1952646707":MA2,
      "entry_459518937":SCB1,"entry_331063060":SCB2,"entry_131983045":SCB3,"entry_436303741":SCB4,"entry_1847116799":SCB5,
      "entry_871928451":SCB6,"entry_631239213":SCB7,"entry_81766860":CB1,"entry_688575088":CB2,"entry_726476328":SCISE1,
      "entry_2131065365":SmCISE1,"entry_884256587":BACISE1,"entry_1704655576":BACISE2,"entry_346730992":MV1,"entry_54534745":MV2,
      "entry_363719983":MV3,"entry_840494516":MV4,"entry_1006444071":MV5,"entry_1691163079":NSG,"entry_1556173154":jureca,
      "entry_1527194443":pizD,"entry_152105565":marconi,"entry_825970456":F_ML,"entry_1973597846":F_SM,"entry_389249447":F_TA,
      "entry_275038741":F_MA,"entry_569020820":F_SCB,"entry_2060872419":F_CB,"entry_1738577912":F_SCISE,"entry_1692693658":F_SmCISE,
      "entry_1545394113":F_BACISE,"entry_1064567374":F_MV,"entry_650601249":F_HIW,"entry_650664193":HIW1},
      type:"POST",dataType:"xml",statusCode: {0:function() { 
        window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
      });
    }

function WhereIs(){
  if(window != top){
    init();
    }
}
$(document).ready(function () {
    WhereIs();
});

