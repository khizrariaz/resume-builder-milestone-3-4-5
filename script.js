"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let Phone = document.getElementById("Phone");
let email = document.getElementById("email");
let add = document.getElementById("add");
let pass1 = document.getElementById("pass1");
let deg = document.getElementById("deg");
let uni = document.getElementById("uni");
let pass2 = document.getElementById("pass2");
let deg2 = document.getElementById("deg2");
let uni2 = document.getElementById("uni2");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let skill4 = document.getElementById("skill4");
let lang = document.getElementById("lang");
let lang2 = document.getElementById("lang2");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let comlocation = document.getElementById("comlocation");
let jobTitle = document.getElementById("jobTitle");
let achv1 = document.getElementById("achv1");
let achv2 = document.getElementById("achv2");
let achv3 = document.getElementById("achv3");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("Phone", Phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg", deg.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("comlocation", comlocation.value);
    localStorage.setItem("jobTitle", jobTitle.value);
    localStorage.setItem("achv1", achv1.value);
    localStorage.setItem("achv2", achv2.value);
    localStorage.setItem("achv3", achv3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result; //conversion of img into string/text
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    // window.location.href ="./resume/index.html"
    window.location.href = "resume/index.html";
});
//preventDefault= submit hony c roko
//localStorage= cv k data jo k k user ne iput kia h usko lacal strg p save kro taky refresh hony p data delete na ho.
