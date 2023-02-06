function DomID(id) {
     var element = document.getElementById(id);
     return element;
}

document.getElementById("eng").onclick = function () {
     DomID("hd-name").innerHTML = "V-TRIP VIET NAM GROUP";
     DomID("hd-datngay").innerHTML = "Book now:";
     DomID("hd-goi").innerHTML = "CALL: 0978.697.385";
     DomID("ctg-tksx").innerHTML = "DESIGN – PRODUCTION – EXECUTION";

     DomID("ctg-blv").innerHTML = "Working Desk";
     const nodeList = document.querySelectorAll(".test");
     for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = "Model:";
     }

     DomID("banhop1").innerHTML = "Conference Tables";
     const nodeList2 = document.querySelectorAll(".banhop");
     for (let i = 0; i < nodeList2.length; i++) {
          nodeList2[i].innerHTML = "Model:";
     }

     DomID("bancf1").innerHTML = "Coffee Tables";
     const nodeList3 = document.querySelectorAll(".bancf");
     for (let i = 0; i < nodeList3.length; i++) {
          nodeList3[i].innerHTML = "Model:";
     }

     DomID("qlt1").innerHTML = "Reception Desks";
     const nodeList4 = document.querySelectorAll(".qlt");
     for (let i = 0; i < nodeList4.length; i++) {
          nodeList4[i].innerHTML = "Model:";
     }


     const nodeList5 = document.querySelectorAll(".ke");
     for (let i = 0; i < nodeList5.length; i++) {
          nodeList5[i].innerHTML = "Model:";
     }
     DomID("ketop").innerHTML = "Office Shelves";

     DomID("gvp1").innerHTML = "Office Chairs";
     const nodeList6 = document.querySelectorAll(".gvp");
     for (let i = 0; i < nodeList6.length; i++) {
          nodeList6[i].innerHTML = "Model:";
     }

     DomID("bght1").innerHTML = "Hall Tables And Chairs";
     const nodeList7 = document.querySelectorAll(".bght");
     for (let i = 0; i < nodeList7.length; i++) {
          nodeList7[i].innerHTML = "Model:";
     }

     
     const nodeList1 = document.querySelectorAll(".card-text");
     for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].innerHTML = "Call for price!";
     }

    

     
     // footer
     document.getElementById("ft-1").innerHTML = "ABOUT US";
     document.getElementById("ft-2").innerHTML = "Training of high-quality human resources based on basis of experience and technology, researching scient application and transferring knowledge so as to meet the social demand, international integration and sustainable development.";

     document.getElementById("ft-3").innerHTML = "V-TRIP VIETNAM GROUP";
     document.getElementById("ft-4").style.display = "none";
     document.getElementById("ft-5").style.display = "block";

     document.getElementById("ft-kt").innerHTML = "CONNECTION";




    



}



