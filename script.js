
function start() {
    //question n°1
    $("#qs11")[0].checked=false;
    $("#qs12")[0].checked=false;
    $("#qs13")[0].checked=false;
    $("#qs14")[0].checked=false;
    $("#qs15")[0].checked=false;
    $("#qs16")[0].checked=false;

    //questio n°2
    $("#q2")[0].value=0;
    //question n°3
    $("#qs31")[0].checked=false;
    $("#qs32")[0].checked=false;
    $("#qs33")[0].checked=false;
    $("#qs34")[0].checked=false;
    $("#c3")[0].value='';

    //question n°4
    $("#qs41")[0].checked=false;
    $("#qs42")[0].checked=false;
    $("#qs43")[0].checked=false;
    $("#qs44")[0].checked=false;
    $("#c4")[0].value='';

    //question n°5
    $("#qs51")[0].checked=false;
    $("#qs52")[0].checked=false;
    $("#qs53")[0].checked=false;
    $("#qs54")[0].checked=false;
    $("#c5")[0].value='';

    //question n°6
    $("#qs61")[0].checked=false;
    $("#qs62")[0].checked=false;
    $("#qs63")[0].checked=false;
    $("#qs64")[0].checked=false;
    $("#c6")[0].value='';

    //question n°7
    $("#qs71")[0].checked=false;
    $("#qs72")[0].checked=false;
    $("#qs73")[0].checked=false;
    $("#c7")[0].value='';


    //question n°8
    //Molecular Level
    $("#q827")[0].checked=false;
    $("#q828")[0].checked=false;
    $("#q829")[0].checked=false;
    $("#q830")[0].checked=false;
    $("#q831")[0].checked=false;
    $("#q832")[0].checked=false;

    //Subcellular Level
    $("#q826")[0].checked=false;

    //Trace Analysis
    $("#q81")[0].checked=false;
    $("#q82")[0].checked=false;
    $("#q83")[0].checked=false;
    $("#q84")[0].checked=false;

    //Morphology Analysis
    $("#q85")[0].checked=false;
    $("#q86")[0].checked=false;

    //Single Circuit Building
    $("#q87")[0].checked=false;
    $("#q88")[0].checked=false;
    $("#q89")[0].checked=false;
    $("#q810")[0].checked=false;
    $("#q811")[0].checked=false;
    $("#q812")[0].checked=false;
    $("#q813")[0].checked=false;

    //Circuit Building
    $("#q814")[0].checked=false;
    $("#q815")[0].checked=false;

    //Single Cell In Silicio Experiments
    $("#q816")[0].checked=false;

    //Small Cell In Silicio Experiments
    $("#q817")[0].checked=false;

    //Brain Area Circuit In Silicio Experiments
    $("#q818")[0].checked=false;
    $("#q819")[0].checked=false;

    //Model Validation
    $("#q820")[0].checked=false;
    $("#q821")[0].checked=false;
    $("#q822")[0].checked=false;
    $("#q823")[0].checked=false;
    $("#q824")[0].checked=false;

    //Highly Integrated Workflows
    $("#q825")[0].checked=false;

    //question n°9
    $("#qs91")[0].checked=false;
    $("#check1")[0].checked=false;
    $("#check2")[0].checked=false;
    $("#check5")[0].checked=false;
    $("#check6")[0].checked=false;
    $("#qs92")[0].checked=false;

    //question n°10
    $("#q10")[0].value='';
    //question n°11
    $("#qs111")[0].checked=false;
    $("#qs112")[0].checked=false;
    $("#qs113")[0].checked=false;
    $("#qs114")[0].checked=false;
    $("#qs115")[0].checked=false;
    $("#qs116")[0].checked=false;
    $("#qs117")[0].checked=false;
    $("#qs118")[0].checked=false;
    $("#qs119")[0].checked=false;
    $("#qs1110")[0].checked=false;
    $("#qs1111")[0].checked=false;

    //question n°12
    $("#qs121")[0].checked=false;
    $("#qs122")[0].checked=false;

    //question n°13
    $("#q13")[0].value='';


}

function end(){
  if(window == top){
    document.getElementById('outside').style.display='block';
    document.getElementById('inside').style.display='none';
  }else{
    document.getElementById('outside').style.display='none';
    document.getElementById('inside').style.display='block';}
}

function closeWindow() {
  //netscape.security.PrivilegeManager.enablePrivilege(”UniversalBrowserWrite”);
  window.open('','_parent','');
  window.close();
}

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


