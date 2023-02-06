function DomID(id){
     var element = document.getElementById(id);
     return element;
}

document.getElementById("vi").onclick = function(){
     DomID("hd-name").innerHTML = "TẬP ĐOÀN V-TRIP VIỆT NAM";
     DomID("hd-datngay").innerHTML = "Đặt ngay:";
     DomID("hd-goi").innerHTML = "GỌI: 0978.697.385";
     DomID("ctg-tksx").innerHTML = "THIẾT KẾ - SẢN XUẤT – THI CÔNG";
     

     DomID("ctg-blv").innerHTML = "Bàn Làm Việc";
     const nodeList = document.querySelectorAll(".test");
     for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = "Bàn làm việc";
     }

     DomID("banhop1").innerHTML = "Bàn Họp";
     const nodeList2 = document.querySelectorAll(".banhop");
     for (let i = 0; i < nodeList2.length; i++) {
          nodeList2[i].innerHTML = "Bàn họp";
     }

     DomID("bancf1").innerHTML = "Bàn Cà Phê";
     const nodeList3 = document.querySelectorAll(".bancf");
     for (let i = 0; i < nodeList3.length; i++) {
          nodeList3[i].innerHTML = "Bàn";
     }

     DomID("qlt1").innerHTML = "Quầy Lễ Tân";
     const nodeList4 = document.querySelectorAll(".qlt");
     for (let i = 0; i < nodeList4.length; i++) {
          nodeList4[i].innerHTML = "Quầy lễ tân";
     }

     const nodeList5 = document.querySelectorAll(".ke");
     for (let i = 0; i < nodeList5.length; i++) {
          nodeList5[i].innerHTML = "Kệ";
     }
     DomID("ketop").innerHTML = "Kệ Văn Phòng";

     DomID("gvp1").innerHTML = "Ghế Văn Phòng";
     const nodeList6 = document.querySelectorAll(".gvp");
     for (let i = 0; i < nodeList6.length; i++) {
          nodeList6[i].innerHTML = "Ghế văn phòng";
     }

     DomID("bght1").innerHTML = "Bàn Ghế Hội Trường";
     const nodeList7 = document.querySelectorAll(".bght");
     for (let i = 0; i < nodeList7.length; i++) {
          nodeList7[i].innerHTML = "Bàn ghế hội trường";
     }

     const nodeList1 = document.querySelectorAll(".card-text");
     for (let i = 0; i < nodeList1.length; i++) {
          nodeList1[i].innerHTML = "Giá: liên hệ";
     }

     // footer

     document.getElementById("ft-1").innerHTML = "VỀ CHÚNG TÔI";
     document.getElementById("ft-2").innerHTML = "Đào tạo nguồn nhân lực chất lượng dựa trên nền tảng công nghệ và trải nghiệm, nghiên cứu ứng dụng khoa học và chuyển giao tri thức đáp ứng nhu cầu xã hội, hội nhập quốc tế và phát triển bền vững.";

     document.getElementById("ft-3").innerHTML = "TẬP ĐOÀN V-TRIP VIỆT NAM";
     document.getElementById("ft-4").style.display = "block";
     document.getElementById("ft-5").style.display = "none";

     document.getElementById("ft-kt").innerHTML = "KẾT NỐI";


}