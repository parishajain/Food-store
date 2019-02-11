//communicating behind the scenes
//this object "createXmlHttpRequestObject" helps us in communicating with the server
var xmlHttp= createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
    var xmlHttp;
    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
   
        }
    }
    if(!xmlHttp)
        alert("can't create that object hoss");
    else
        return xmlHttp;
    
}
function process(){
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
          food = encodeURIComponent(document.getElementById("userInput").value);
         xmlHttp.open("GET","foodstore.php?food=" + food, true); //open method creates the type of request we want
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
       }else{
       
           setTimeout('process()', 1000);
       }   
}
//first thing you do is to check is your object ready to communicate
//

//whenever i get response 

function handleServerResponse(){
    if(xmlHttp.readyState==4){
        if(xmlHttp.status==200)//200 means that the communication went ok
        {
            xmlResponse= xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement;//document element is the root element of xml
            message= xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
            setTimeout('process()', 1000);
            
           }
        else{
            alert("something went wrong!");
         }
       
       }
}








