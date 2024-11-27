// form fill krny k bad btn press kia to resume open hogi then page load hoga ye woi load h. ye woi load h

let myName = localStorage.getItem("name");

window.addEventListener("load", () => {
  let desig = localStorage.getItem("desig");
  let Phone = localStorage.getItem("Phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let lang = localStorage.getItem("lang");
  let lang2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let comlocation = localStorage.getItem("comlocation");
  let jobTitle = localStorage.getItem("jobTitle");
  let achv1 = localStorage.getItem("achv1");
  let achv2 = localStorage.getItem("achv2");
  let achv3 = localStorage.getItem("achv3");
  let picture = localStorage.getItem("profile_pic");

  let resName: any = document.getElementById("resName")
  resName.textContent = myName

  let resDesig: any = document.getElementById("resDesig")
  resDesig.textContent = desig

  let resPhone: any = document.getElementById("resPhone")
  resPhone.textContent = Phone

  let resEmail: any = document.getElementById("resEmail")
  resEmail.textContent = email

  let resAdd: any = document.getElementById("resAdd")
  resAdd.textContent = add

  let resPass1: any = document.getElementById("resPass1")
  resPass1.textContent = pass1

  let resDeg: any = document.getElementById("resDeg")
  resDeg.textContent = deg

  let resUni: any = document.getElementById("resUni")
  resUni.textContent = uni

  let resPass2: any = document.getElementById("resPass2")
  resPass2.textContent = pass2

  let resDeg2: any = document.getElementById("resDeg2")
  resDeg2.textContent = deg2
  
  let resUni2: any = document.getElementById("resUni2")
  resUni2.textContent = uni2

  let resSkill1: any = document.getElementById("resSkill1")
  resSkill1.textContent = skill1

  let resSkill2: any = document.getElementById("resSkill2")
  resSkill2.textContent = skill2

  let resSkill3: any = document.getElementById("resSkill3")
  resSkill3.textContent = skill3

  let resSkill4: any = document.getElementById("resSkill4")
  resSkill4.textContent = skill4

  let resLan1: any = document.getElementById("resLan1")
  resLan1.textContent = lang

  let resLan2: any = document.getElementById("resLan2")
  resLan2.textContent = lang2

  let resStartYear: any = document.getElementById("resStartYear")
  resStartYear.textContent = styear

  let resEndYear: any = document.getElementById("resEndYear")
  resEndYear.textContent = endyear

  let resCompany: any = document.getElementById("resCompany")
  resCompany.textContent = company

  let resCompanyLocation: any = document.getElementById("resCompanyLocation")
  resCompanyLocation.textContent = comlocation

  let resJobTitle: any = document.getElementById("resJobTitle")
  resJobTitle.textContent = jobTitle

  let resAch1: any = document.getElementById("resAch1")
  resAch1.textContent = achv1

  let resAch2: any = document.getElementById("resAch2")
  resAch2.textContent = achv2

  let resAch3: any = document.getElementById("resAch3")
  resAch3.textContent = achv3

  let resImg: any = document.getElementById("resImg")
  resImg.src = picture

});

//------------------------print btn-----------------------------------------------------------

let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
  window.print();
});

//------------------------print btn-----------------------------------------------------------
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", ()=>{
  window.history.back()
})

//------------------------share Link btn-----------------------------------------------------------
let share_btn = document.getElementById("share_btn");
let anc = document.getElementById("anc")
let userName;
if(myName){
  userName = myName.toLowerCase().replace(/\s+/g , "-")
}else{
  userName = "user"
}
let baseUrl = "http://127.0.0.1:5500/resume/index.html"
let uniqueUrl = `${baseUrl}?/${myName}`   //?= if user name is present then baseurl k sath username ajyga if not then user ajayga likha hua

share_btn?.addEventListener("click", ()=>{
 anc?.setAttribute("href", uniqueUrl)
})

//------------------------copy Link btn-----------------------------------------------------------
let copy_btn = document.getElementById("copy_btn");

copy_btn?.addEventListener("click", ()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert("copy successful")
  });
})





//window is builtin object= windo ko bolna  hky hmy print method use krna h

//.toggle is a method- it adds the hide property of css in ref-sec phr jb hm 1 clik krey to hide class add hogi to wo hide hojyga
//again click c hide clas hat jaygi or hide cheez seen hojygi
//toggle= adds n removes classes
