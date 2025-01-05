const codeIp=document.querySelector("#room-code-input")
const joinBtn=document.querySelector("#join-btn")
const input=document.querySelector("#input-code")
if(codeIp){
    codeIp.addEventListener("input", 
        function(){
            input.innerHTML=codeIp.value
        }
    )
}
joinBtn.addEventListener("click",
    function(){
        const roomCode = codeIp.value 
        joinRoom(roomCode)
    }
)
function joinRoom(roomCode){
    if(roomCode.toUpperCase()=="ABCD"){
        alert("join success")
        return
    }
    alert("join fail")
}