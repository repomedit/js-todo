function newElement(){
    let text = document.getElementById("task").value;
    let liste = document.getElementById("list");

    if(!isEmpty(text)){
        let newItem = document.createElement("li");
        newItem.innerText = text;
        liste.appendChild(newItem);
        showToast("Listeye eklendi.");
        newItem.addEventListener("click", ()=>{
            newItem.remove(newItem);
        });
    } else {
        showToast("Listeye boş ekleme yapamazsınız!");
    }
}

function removeItem(item){
    item.remove(item);
}

function isEmpty(text){
    let tmp = text.replaceAll(" ", "");
    let result= false; 
    (tmp.length>0) ? result = false : result = true;
    return result;
}

function showToast(text) {
    
    let toast = document.getElementById("liveToast");
    let toastBody = document.getElementById("toastBody");

    toastBody.innerHTML = text;
    toast.className = "show";
  
    
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

function closeToast() {
    let toast = document.getElementById("liveToast");
    toast.className = toast.className.replace("show", ""); 
}