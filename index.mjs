const logo = document.getElementById("logo");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const input = document.getElementById("phone_number");
const button = document.getElementById("btn");

const mtn = [
    "0803", "0806", "0814", "0810", "0813", "0814", "0703", "0706", "0816", "0903", "0906", "0913", "0916"
  ]

 const glo = [
    "0805", "0705", "0811", "0807", "0915", "0815", "0905"
  ]

  const airtel = [
    "0701", "0708", "0802", "0808", "0812", "0902", "0907", "0901", "0904"
  ]

  const ninemobile = [
    "0809", "0817", "0818", "0908", "0909"
  ]


input.addEventListener("input", (e) => {
  var value = e.target.value;
  console.log(value)

  if (value.startsWith("+234")) {
    value = value.replace(/^.{4}/g, '0');
    console.log(value)
  } else if (value.slice(0, 3) === "234") {
    value = value.replace(/^.{3}/g, '0');
    console.log(value)
  }

  const begin = [
    "080", "081", "090", "091", "070"
  ]

  if (begin.includes(value.slice(0, 3))) {
    text.innerHTML = "select from: 0803, 0809, 0901"
    console.log("suggestion")
  } else if (value.length < 3) {
    text.innerHTML = " "
  }



  
 


  if (mtn.includes(value.slice(0, 4))) {
    console.log("MTN");
    logo.src =
      "https://www.mtn.ng/wp-content/themes/mtn-theme/images/mtn-new-logo.svg";
  }

  else if (glo.includes(value.slice(0, 4))) {
    console.log("GLO");
    logo.src = "https://brandcom.ng/wp-content/uploads/2020/11/Glo-Logo.jpg";

  }

  else if (airtel.includes(value.slice(0, 4))) {
    console.log("AIRTEL");
    logo.src = "https://nigerialogos.com/logos/airtel/airtel.svg";
  }

  else if (ninemobile.includes(value.slice(0, 4))) {
    console.log("NINEMOBILE");
    logo.src = "https://nigerialogos.com/logos/9mobile/9mobile.svg";
  } else if (value.length < 3) {
    logo.src = " "
  }
});


button.addEventListener("click", () => {
    checkArray(input.value)
})

 function checkArray(value)  
{  
    text2.innerHTML = " "
  
  for(var i=0; i < mtn.length; i++)  
{  
    
    var name = mtn[i];  
    if(name ==  value.slice(0,4)){  
        window.location.href="https://www.altschoolafrica.com/schools/engineering" 
      break;  
    } else {
        text2.innerHTML = "Restricted to mtn users only"
    }  
  } 
}






// || ("0705") || ("0805") || ("0811") || ("0815") || ("0905") || ("0815")
// || ("0810") || ("0813") || ("0814")|| ("0816")|| ("0903") || ("0703") || ("0706") ||("0903") || ("0906") || ("0913") || ("0916")