//Nivell 01
/*function colorin(x) {
    x.style.color = "#94db11";
 
  }

*/

//Nivell 02

const container = document.querySelector(".rating");
var items = container.querySelectorAll(".rating-items");
var cuerpo = document.querySelector("body");

container.onclick = (e) => {
  const elClass = e.target.classList;
  if (!elClass.contains("active")) {
    items.forEach((item) => item.classList.remove("active"));
    console.log(e.target.getAttribute("date-rate"));
    document.getElementById("display").innerHTML = e.target.getAttribute(
      "date-rate"
    );
    elClass.add("active");

    cuerpo.onclick = (o) => {
      console.log("Limpia resultado");
      const elClassb = o.target.classList;
      if (!elClassb.contains("active")) {
        location.reload();
        return false;
        /*items.forEach(
            item => item.classList.remove('active')
        );
        document.getElementById("display").innerHTML = "";*/
      }
    };
  }
};
