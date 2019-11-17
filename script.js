function checkMenu(id){
          var r81=document.getElementById(id);
          if($("#"+id).is(':checked')) {
          
          r81=r81.value;
         // console.log(r81);
        } else {
          r81="";
        //  console.log(r81);
        }
      return r81;
      }

function getValueRadio(radios){
for (var i = 0, length = radios.length; i < length; i++)
{
  console.log(radios[i].checked)
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
  var q1=radios[i].value;
  // only one radio can be logically checked, don't check the rest
  return q1;
  break;
 }
}
}

function printChecked(items){

    var selectedItems=[];
    for(var i=0; i<items.length; i++){
      if(items[i].type=='checkbox' && items[i].checked==true)
        selectedItems.push(items[i].value+"\t");
    }
    return selectedItems;
  }   

function myFunction() {

         window.onscroll = function() { myFunction()};
            var header = document.getElementById("myHeader");
            var sticky = header.offsetTop;
            
         if (window.pageYOffset > sticky) {
             header.classList.add("sticky");
         } else {
             header.classList.remove("sticky");
         }
}

function getOption(v){
        const range = document.querySelector('input.inputImage ');
        const div = document.querySelector('.moji');
        const mojis = ['😄 excellent','🙂 good','😐 fair','😣 bad','🤢 very bad'];
        div.textContent = mojis[v.value];
        return v.value;
}
        
function show1(){
  document.getElementById('shcompany').style.display ='none';
  document.getElementById("other").value = ""; 
}
function show2(){
  document.getElementById('shcompany').style.display = 'block';
}
function hide(){
         document.getElementById('menu').style.display ='none';
         document.getElementById("check1").checked = false;
         document.getElementById("check2").checked = false;
         document.getElementById("check3").checked = false;
         document.getElementById("check4").checked = false;
         document.getElementById("check5").checked = false;
         document.getElementById("check6").checked = false;
}
function show(){
         document.getElementById('menu').style.display = 'block';
}
function formSubmitted(status) {
           $('#genericForm').hide();//matches your form name or whatever you want to disappear post-submission
           $("#bottone").hide();
           //$("#bottone").attr('value', 'Recorded');
           $("#output").show();
            document.getElementById('output').innerHTML = status; //displays in item with the 'output' id
}

function find_answer(checkboxes){
   		var vals = "";
		for (var i=0, n=checkboxes.length;i<n;i++) {
    		if (checkboxes[i].checked){
        		//vals.push(checkboxes[i].value);
        		vals +=', '+checkboxes[i].value;
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

    // Question 14
    var checkq14 = document.getElementsByName('prova');
    var vals=find_answer(checkq14);

	console.log("Opzioni val:",vals);


    $.ajax({
      url:"https://docs.google.com/forms/d/e/1FAIpQLScrkqvArLDFhmdaOfO-3KnlLxk3GxARuQnO107fQE1Qbp8fdg/formResponse",
      data:{"entry_2141102757":q1,"entry_1729822952":output,"entry_45035854":q3,"entry_441286483":c3,"entry_640263239":q4,"entry_1649417599":c4,"entry_2061316548":q5,"entry_2109633509":c5,"entry_1375495796":q6,"entry_2068203809":c6,"entry_833030924":q7,"entry_1771949641":c7,"entry_1103050806":MLevel,"entry_598021954":SLevel,"entry_1908334161":TAnalysis,"entry_192619608":MAnalysis,"entry_890913335":CSBuilding,"entry_2123397204":CBuilding,"entry_1756343296":SingleCSE,"entry_238455488":SmallCSE,"entry_1337809265":BACSE,"entry_1445287737":MValidation,"entry_482587187":HIW,"entry_447457858":question9,"entry_1374176472":q10,"entry_397120109":question11,"entry_1425954529":q12,"entry_1297381760":q13,"entry_1866933738":userId,"entry_1938312107":vals},
      type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
      });
    }