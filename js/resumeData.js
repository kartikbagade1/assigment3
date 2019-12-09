function loadData()
{
    
   
            this.displayData();
 
}

//loading firebase data
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://kartikdataapp.firebaseio.com/resume.json", true ); // false for synchronous request
xmlHttp.send( null );

function displayData()
{
    var resumeObject;
    //parsing xmlHttpRequest response string to JSON 
    resumeObject = JSON.parse(xmlHttp.response);
    //veryfy resonse on consle
    var skillLength=resumeObject.skill.length;
    console.log("Arrr ===>=>"+skillLength);
    //display values on HTML page
    document.getElementById("name").innerHTML = resumeObject.name;
    document.getElementById("email").innerHTML = resumeObject.email+"@gmail.com";
    document.getElementById("pNumber").innerHTML = "+91-"+resumeObject.number;
    document.getElementById("address").innerHTML = resumeObject.addresses;
    document.getElementById("objective").innerHTML = resumeObject.objectives;

    //skill display
    //for (i = 0; i <= skillLength-1; i++) {
       // for (i = 0; i <= resumeObject.skill[i].length-1; i++) {
     //       console.log(resumeObject.skill[i][j])
       // }
   // }
}

