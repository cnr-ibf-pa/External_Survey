
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
var authorization = client.getToken();
	
console.log(authorization)
	
authorization.then((session) => {
var header = {'headers' : {Authorization: 'Bearer ' + session.access_token}};
//document.getElementById("hbp-token").innerHTML = session.access_token;
	
console.log(header);
	
$.ajax({
    url: USER_API,
    headers: {
        'Authorization':'Bearer ' + session.access_token,
        'Content-Type':'application/json'
    },
    method: 'GET',
    success: function(data){
	    console.log(data.id);
        //document.getElementById("hbp-user-data").innerHTML = JSON.stringify(data);
	document.getElementById("hbp-user-id").innerHTML = data.id;
    }
});
}); 
	 return authorization;
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
    var q6=getValueRadio(r5);
    var c6 = $('#c6').val();

    //Question n°7
    var r7 = document.getElementsByName('q7');
    var q7=getValueRadio(r5);
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

    
    $.ajax({
      url:"https://docs.google.com/forms/d/e/1FAIpQLScFXH_d30T8hw2yBSfigGywzv2UpUcN9BqfUdOtiG69XX-iWQ/formResponse",
      data:{"entry_587568546":q1,"entry_1167509473":output,"entry_1156354609":q3,"entry_1899290130":c3,"entry_1722887222":q4,"entry_155614927":c4,"entry_449077188":q5,"entry_905444161":c5,"entry_1976011584":q6,"entry_1828737890":c6,"entry_180333328":q7,"entry_871783456":c7,"entry_1693291241":MLevel,"entry_2037577938":SLevel,"entry_850321543":TAnalysis,"entry_196612701":MAnalysis,"entry_340839207":CSBuilding,"entry_1600241950":CBuilding,"entry_210607341":SingleCSE,"entry_1067961165":SmallCSE,"entry_597633461":BACSE,"entry_2010265622":MValidation,"entry_1449786897":HIW,"entry_17035143":question9,"entry_191531459":q10,"entry_1834085899":question11,"entry_514700957":q12,"entry_1641591589":q13,"entry_842154194":userId,"entry_717184075":ML1,"entry_464770575":ML2,"entry_1566746255":ML3},
      type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
      });
    }


function WhereIs(){
  if(window != top){
    init();
  }
}
WhereIs();

