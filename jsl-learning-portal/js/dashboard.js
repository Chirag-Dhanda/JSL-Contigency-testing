/*==========================================
        DASHBOARD
==========================================*/

const user = JSON.parse(

    sessionStorage.getItem("user")

);

if(!user){

    window.location.href="../index.html";

}

document.getElementById("welcomeName").innerHTML=

`${getGreeting()}, ${user.name}`;

document.getElementById("departmentName").innerHTML=

user.department;

document.getElementById("roleName").innerHTML=

capitalize(user.role);

document.getElementById("currentDate").innerHTML=

getCurrentDate();

// Sidebar

const sidebar=document.getElementById("sidebarMenu");

const menu=getRolePermissions(user.role);

menu.forEach(item=>{

    const li=document.createElement("li");

    li.innerHTML=item;

    sidebar.appendChild(li);

});

// Logout Button

const logoutBtn=document.getElementById("logoutBtn");

logoutBtn.addEventListener("click",logout);

const roleContainer = document.getElementById("roleWidgets");

let cards = [];

switch(user.role){

case "superadmin":

cards = [

"Departments",

"Admins",

"Managers",

"Users",

"Analytics",

"Reports"

];

break;

case "admin":

cards = [

"Employees",

"Managers",

"Learning Content",

"Reports",

"Department Workflow",

"SAP Module"

];

break;

case "manager":

cards = [

"My Team",

"Assign Learning",

"Progress",

"Assessments"

];

break;

default:

cards = [

"My Department",

"Company Overview",

"Plant Workflow",

"SAP Learning",

"Assessment",

"Certificates"

];

}

cards.forEach(card=>{

roleContainer.innerHTML += `

<div class="workspace-card">

<i class="fa-solid fa-folder-open"></i>

<h3>${card}</h3>

</div>

`;

});

/*==============================
DEPARTMENT CARD
==============================*/

const departmentContainer = document.getElementById("departmentCards");

const department = user.department;

const departmentData = {

HR:{

icon:"fa-users",

desc:"Employee lifecycle, payroll, recruitment and SAP HCM."

},

IT:{

icon:"fa-server",

desc:"Infrastructure, SAP Basis, security and applications."

},

Finance:{

icon:"fa-coins",

desc:"Financial accounting, cost control and reporting."

},

Production:{

icon:"fa-industry",

desc:"Manufacturing process, SAP PP and production planning."

},

Quality:{

icon:"fa-microscope",

desc:"Inspection, audits, SAP QM and quality assurance."

},

Warehousing:{

icon:"fa-warehouse",

desc:"Inventory, goods receipt and SAP MM."

},

Security:{

icon:"fa-shield-halved",

desc:"Plant security, visitor management and emergency response."

}

};

if(user.role==="superadmin"){

Object.keys(departmentData).forEach(dep=>{

departmentContainer.innerHTML+=`

<div class="department-card">

<i class="fa-solid ${departmentData[dep].icon}"></i>

<h3>${dep}</h3>

<p>${departmentData[dep].desc}</p>

</div>

`;

});

}

else{

departmentContainer.innerHTML=`

<div class="department-card">

<i class="fa-solid ${departmentData[department].icon}"></i>

<h3>${department}</h3>

<p>${departmentData[department].desc}</p>

</div>

`;

}