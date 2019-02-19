chrome.contextMenus.create({
    title: "Next Question",
    contexts:["all"],
    id: "done",
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "done") {
        // chrome.tabs.query({currentWindow: true, active: true})
            // .then((tabs) => {

            // var oldUrl=(tabs[0].url);
            // console.log(oldUrl);

            var oldUrl="";
            if(localStorage.getItem("codeforces")===null ){
                var v=prompt("Enter Current Contest Number");
                if(v===null) return;
                
                oldUrl="https://codeforces.com/contest/"+v+"/problem/B";
                localStorage.setItem("codeforces",oldUrl);
            }else{

                oldUrl=localStorage.getItem("codeforces");
                // alert(oldUrl); 
            }
            // alert(oldUrl);
            
            var str=oldUrl.split('/');
            // // console.log(str);
            var num=parseInt(str[4])-1;
            // // console.log(num);
            var newUrl=str[0]+'/'+str[1]+'/'+str[2]+'/'+str[3]+'/'+num+'/'+str[5]+'/'+str[6];
            // alert(newUrl);
            localStorage.setItem("codeforces",newUrl);
            function onUpdated(tab) {
                console.log(`Updated tab: ${tab.id}`);
              }
              
              function onError(error) {
                console.log(`Error: ${error}`);
              }
              
              var updating = chrome.tabs.update(null,{url: newUrl});
            //   updating.then(onUpdated, onError);
        // });
        
    }
});

chrome.commands.onCommand.addListener(function(command) {
    if(command==="Next-Question"){
        // chrome.tabs.query({currentWindow: true, active: true})
            // .then((tabs) => {

            // var oldUrl=(tabs[0].url);
            // console.log(oldUrl);

            var oldUrl="";
            if(localStorage.getItem("codeforces")===null ){
                var v=prompt("Enter Current Contest Number");
                if(v===null) return;
                
                oldUrl="https://codeforces.com/contest/"+v+"/problem/B";
                localStorage.setItem("codeforces",oldUrl);
            }else{

                oldUrl=localStorage.getItem("codeforces");
                // alert(oldUrl); 
            }
            // alert(oldUrl);
            
            var str=oldUrl.split('/');
            // // console.log(str);
            var num=parseInt(str[4])-1;
            // // console.log(num);
            var newUrl=str[0]+'/'+str[1]+'/'+str[2]+'/'+str[3]+'/'+num+'/'+str[5]+'/'+str[6];
            // alert(newUrl);
            localStorage.setItem("codeforces",newUrl);
            function onUpdated(tab) {
                console.log(`Updated tab: ${tab.id}`);
              }
              
              function onError(error) {
                console.log(`Error: ${error}`);
              }
              
              var updating = chrome.tabs.update(null,{url: newUrl});
            //   updating.then(onUpdated, onError);
    }
});