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