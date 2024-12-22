// var flag = 0;
// var btn = document.querySelector(".answer button");

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         btn.innerHTML = "Yes";
//         btn.style.color = "white";
//         btn.style.backgroundColor = "red";
//         flag = 1;
//     }
//     else{
//         btn.innerHTML = "No";
//         btn.style.color = "rgb(49, 63, 48)";
//         btn.style.backgroundColor = "rgb(192, 251, 190)";
//         flag = 0;
//     }
// }); 


var buttons = document.querySelectorAll(".answer button");
buttons.forEach(function(button) {
    var flag = 0;
    button.addEventListener("click", function() {
	
        if (flag === 0 ) {
            button.innerHTML = "Yes";
            button.style.color = "white";
            button.style.backgroundColor = "red";
            flag = 1;
            i=1;
        } else {
            button.innerHTML = "No";
            button.style.color = "rgb(49, 63, 48)";
            button.style.backgroundColor = "rgb(192, 251, 190)";
            flag = 0;
        }
    });
});

buttons.forEach((e)=>{
	e.addEventListener("click",(b)=>{
		console.log(b.id);
		if(b.innerHTML=="NO"){
		b.value=1;
		
		console.log("value 1");
		
		}
		else{
			b.value=0;
			console.log("value 0");
		}
	})
	
	
})