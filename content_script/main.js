document.querySelector("#my_btn").addEventListener('click',function(){
    localStorage.removeItem("codeforces");
});

document.querySelector('#submit').addEventListener('click',function(){
    var level=document.querySelector('#selector').value;
    var contest_number=document.querySelector('#contest_number').value;
    document.querySelector('#contest_number').value="";

    localStorage.setItem("codeforces","https://codeforces.com/contest/"+contest_number+"/problem/"+level);
});