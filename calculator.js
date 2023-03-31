function bclick(val){
    document.getElementById("inputText").value+=val
}
function equalto(val)
{
    var text=document.getElementById("inputText").value
    var result=eval(text)
    document.getElementById("inputText").value=result+" "
}
function dclear(val)
{
    document.getElementById("inputText").value=" "
}
function back() {
    var data=document.getElementById("inputText")
    data.value=data.value.slice(0,-1)
}