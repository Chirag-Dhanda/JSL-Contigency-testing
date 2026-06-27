const user = JSON.parse(
    sessionStorage.getItem("user")
);

const sidebar = document.getElementById("sidebarMenu");

const menus = {

    superadmin:[
        "Dashboard",
        "Departments",
        "Admins",
        "Managers",
        "Users",
        "Analytics",
        "Settings"
    ],

    admin:[
        "Dashboard",
        "Managers",
        "Employees",
        "Reports",
        "Learning"
    ],

    manager:[
        "Dashboard",
        "My Team",
        "Progress",
        "Assessments"
    ],

    user:[
        "Dashboard",
        "Company Overview",
        "My Department",
        "Workflow",
        "SAP Learning",
        "Certificates"
    ]

};

menus[user.role].forEach(menu=>{

    sidebar.innerHTML +=
    `<li>${menu}</li>`;

});