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
    //Trace Analysis
    var x1=document.getElementById("q81").onchange = function() {var x1=checkMenu("q81"); return x1;};
        var x2=document.getElementById("q82").onchange = function() {var x2=checkMenu("q82"); return x2;};
        var x3=document.getElementById("q83").onchange = function() {var x3=checkMenu("q83"); return x3;};
        var x4=document.getElementById("q84").onchange = function() {var x4=checkMenu("q84"); return x4;};
        //Morphology Analysis
        var x5=document.getElementById("q85").onchange = function() {var x5=checkMenu("q85"); return x5;};
        var x6=document.getElementById("q86").onchange = function() {var x6=checkMenu("q86"); return x6;};
        //Single Circuit Building
        var x7=document.getElementById("q87").onchange = function() {var x7=checkMenu("q87"); return x7;};
        var x8=document.getElementById("q88").onchange = function() {var x8=checkMenu("q88"); return x8;};
        var x9=document.getElementById("q89").onchange = function() {var x9=checkMenu("q89"); return x9;};
        var x10=document.getElementById("q810").onchange = function() {var x10=checkMenu("q810"); return x10;};
        var x11=document.getElementById("q811").onchange = function() {var x11=checkMenu("q811"); return x11;};
        var x12=document.getElementById("q812").onchange = function() {var x12=checkMenu("q812"); return x12;};
        var x13=document.getElementById("q813").onchange = function() {var x13=checkMenu("q813"); return x13;};
        //Circuit Building
        var x14=document.getElementById("q814").onchange = function() {var x14=checkMenu("q814"); return x14;};
        var x15=document.getElementById("q815").onchange = function() {var x15=checkMenu("q815"); return x15;};
        //Single Cell In Silicio Experiments
        var x16=document.getElementById("q816").onchange = function() {var x16=checkMenu("q816"); return x16;};
        //Small Cell In Silicio Experiments
        var x17=document.getElementById("q817").onchange = function() {var x17=checkMenu("q817"); return x17;};
        //Brain Area Circuit In Silicio Experiments
        var x18=document.getElementById("q818").onchange = function() {var x18=checkMenu("q818"); return x18;};
        var x19=document.getElementById("q819").onchange = function() {var x19=checkMenu("q819"); return x19;};
        //Model Validation
        var x20=document.getElementById("q820").onchange = function() {var x20=checkMenu("q820"); return x20;};
        var x21=document.getElementById("q821").onchange = function() {var x21=checkMenu("q821"); return x21;};
        var x22=document.getElementById("q822").onchange = function() {var x22=checkMenu("q822"); return x22;};
        var x23=document.getElementById("q823").onchange = function() {var x23=checkMenu("q823"); return x23;};
        var x24=document.getElementById("q824").onchange = function() {var x24=checkMenu("q824"); return x24;};
        //Highly integrated workflow
        var x25=document.getElementById("q825").onchange = function() {var x25=checkMenu("q825"); return x25;};

         //Question n°9
        var ck1=document.getElementById("check1").onchange = function() {var ck1=checkMenu("check1"); return ck1;};
        var ck2=document.getElementById("check2").onchange = function() {var ck2=checkMenu("check2"); return ck2;};
        var ck3=document.getElementById("check3").onchange = function() {var ck3=checkMenu("check3"); return ck3;};
        var ck4=document.getElementById("check4").onchange = function() {var ck4=checkMenu("check4"); return ck4;};
        var ck5=document.getElementById("check5").onchange = function() {var ck5=checkMenu("check5"); return ck5;};
        var ck6=document.getElementById("check6").onchange = function() {var ck6=checkMenu("check6"); return ck6;};

        //Question n°10
        var q10 = $('#q10').val();

        //Question n°11
        var x111=document.getElementById("q111").onchange = function() {var x111=checkMenu("q111"); return x111;};
        var x112=document.getElementById("q112").onchange = function() {var x112=checkMenu("q112"); return x112;};
        var x113=document.getElementById("q113").onchange = function() {var x113=checkMenu("q113"); return x113;};
        var x114=document.getElementById("q114").onchange = function() {var x114=checkMenu("q114"); return x114;};
        var x115=document.getElementById("q115").onchange = function() {var x115=checkMenu("q115"); return x115;};
        var x116=document.getElementById("q116").onchange = function() {var x116=checkMenu("q116"); return x116;};
        var x117=document.getElementById("q117").onchange = function() {var x117=checkMenu("q117"); return x117;};
        var x118=document.getElementById("q118").onchange = function() {var x118=checkMenu("q118"); return x118;};
        var x119=document.getElementById("q119").onchange = function() {var x119=checkMenu("q119"); return x119;};

        //Question n°12
        var radio12 = document.getElementsByName('q12');
        var q12=getValueRadio(radio12);

    //Question n°13
    var q13 = $('#q13').val();

    //UserID
    var userId=$('#hbp-user-id').val();

    // Question 14
    

var checkboxes = document.getElementsByName('prova');
var vals = [];
for (var i=0, n=checkboxes.length;i<n;i++) 
{
    if (checkboxes[i].checked) 
    {
        vals.push(checkboxes[i].value);
        //vals +=','+checkboxes[i].value;
    }
}
//if (vals) vals = vals.substring(1);

console.log("Opzioni val:",vals);


    $.ajax({
      url:"https://docs.google.com/forms/d/e/1FAIpQLScrkqvArLDFhmdaOfO-3KnlLxk3GxARuQnO107fQE1Qbp8fdg/formResponse",
      data:{"entry_2141102757":q1,"entry_1729822952":output,"entry_45035854":q3,"entry_441286483":c3,"entry_640263239":q4,"entry_1649417599":c4,"entry_2061316548":q5,"entry_2109633509":c5,"entry_1375495796":q6,"entry_2068203809":c6,"entry_833030924":q7,"entry_1771949641":c7,"entry_1908334161":x1,"entry_491272519":x2,"entry_386221295":x3,"entry_1711301941":x4,"entry_192619608":x5,"entry_2086986626":x6,"entry_890913335":x7,"entry_313339579":x8,"entry_1668410825":x9,"entry_572756319":x10,"entry_198595091":x11,"entry_378476496":x12,"entry_1207390033":x13,"entry_2123397204":x14,"entry_595520121":x15,"entry_1756343296":x16,"entry_238455488":x17,"entry_1337809265":x18,"entry_297988817":x19,"entry_1445287737":x20,"entry_2141138135":x21,"entry_196451915":x22,"entry_1762721501":x23,"entry_1238689566":x24,"entry_482587187":x25,"entry_447457858":ck1,"entry_815162296":ck2,"entry_2004029264":ck3,"entry_85407962":ck4,"entry_893281708":ck5,"entry_1850984242":ck6,"entry_1374176472":q10,"entry_397120109":x111,"entry_912700608":x112,"entry_1986947402":x113,"entry_992125622":x114,"entry_1039401184":x115,"entry_1666614169":x116,"entry_267059975":x117,"entry_1870959345":x118,"entry_714425370":x119,"entry_1425954529":q12,"entry_1297381760":q13,"entry_1866933738":userId,"entry_1938312107":{vals[0],vals[1],vals[2]}},
      type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
      });
    }