function checkingBox(){
	var chbox;
	chbox = document.getElementById('check_one');

	var checked = "Is checked";
	var notchacked = "Is Not cheked";


	if (chbox.checked){
		document.getElementById("result_1").innerHTML=checked; 
	}else{
		document.getElementById("result_1").innerHTML=notchacked;
	}
}
function checkingBox2(){
	var chbox;
	chbox = document.getElementById('check_two');

	var checked = "Is checked";
	var notchacked = "Is Not cheked";


	if (chbox.checked){
		document.getElementById("result_2").innerHTML=checked; 
	}else{
		document.getElementById("result_2").innerHTML=notchacked;
	}
}

var element1 = document.getElementById("first_text");
var element2 = document.getElementsByClassName("changable_texts");

function changeSingle(element){
	element.innerHTML = "First changed";
}
function changeMultiply(elements){
	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "Multiply changing";
	}
}
function clickOnEl (element){
	element.innerHTML = "Changed on click";
}

function addingVirus(){
var terminal = document.getElementById('add_link');
var spanVirus = document.createElement('div');
var br = document.createElement('br');

spanVirus.innerHTML = '<h3>Virus Added</h3>';

terminal.appendChild(br);
terminal.appendChild(spanVirus);

}
function clearingVirus(){
	var terminal = document.getElementById('add_link');
	
	while (terminal.lastChild) {
    terminal.removeChild(terminal.lastChild);
	}
}

function chagingSelect(){
	var result= document.getElementById('result_selection');
	var current =document.getElementById('myselect').selectedIndex;
	var options = document.getElementById('myselect').options;

	result.innerHTML = options[current].text ;
}

function changeRange(){
	var range = document.getElementById('range_id');
	var writespan = document.getElementById('range_result_numbers');
	var block = document.getElementById('ch_block');
	writespan.innerHTML = range.value;
	block.style.width= range.value+'%';
}
function changeBorRad(){
	var br_r_tl = document.getElementById('br_r_tl').value;
	var br_t_tl = document.getElementById('br_t_tl');
	var br_r_tr = document.getElementById('br_r_tr').value;
	var br_t_tr = document.getElementById('br_t_tr');
	var br_r_br = document.getElementById('br_r_br').value;
	var br_t_br = document.getElementById('br_t_br');
	var br_r_bl = document.getElementById('br_r_bl').value;
	var br_t_bl = document.getElementById('br_t_bl');


	var generator_result = document.getElementById('generator_result');

	br_t_tl.value = br_r_tl;
	br_t_tr.value = br_r_tr;
	br_t_br.value= br_r_br;
	br_t_bl.value = br_r_bl;


	generator_result.style.borderRadius = br_r_tl + "px "+ br_r_tr + "px " + br_r_br + "px "+ br_r_bl + "px ";

}
var modal = document.querySelector('.modal_my');
var overflow = document.createElement('div');
function openWin() {
        overflow.className = "overflow";
        document.body.appendChild(overflow);
        var height = modal.offsetHeight;
        modal.style.marginTop = - height / 2 + "px";
        modal.style.top = "50%";

        
}

if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
                if (this.parentNode) {
                        this.parentNode.removeChild(this);
                }
        };
}

overflow.onclick = function () {
        modal.style.top = "-100%";
        overflow.remove();
} 