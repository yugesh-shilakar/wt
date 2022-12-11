 // alert
 function show_alrt(){
    alert("This is Alert");
}

// confirm
function show_confirm(){
    let confom = confirm("Do you want to continue?");
    if(confom == true){
        document.write("You pressed OK");
    }
    else{
        document.write("You pressed Cancel");
    }
}

//prompt
function show_prompt(){
    let name = prompt("Enter your name");
    document.write("Hello "+name);
}