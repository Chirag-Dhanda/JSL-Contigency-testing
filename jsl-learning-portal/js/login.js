const users = [

        {
            email: "superadmin@jsl.com",
            password: "admin",
            role: "superadmin",
            department: "Corporate",
            name: "Corporate HR"
        },
    
        {
            email: "hr.admin@jsl.com",
            password: "admin",
            role: "admin",
            department: "HR",
            name: "HR Head"
        },
    
        {
            email: "production.manager@jsl.com",
            password: "admin",
            role: "manager",
            department: "Production",
            name: "Production Manager"
        },
    
        {
            email: "production.user@jsl.com",
            password: "admin",
            role: "user",
            department: "Production",
            name: "Production Employee"
        }
    
    ];
    
    document.getElementById("loginForm").addEventListener("submit", function(e){
    
        e.preventDefault();
    
        const email = document.getElementById("email").value;
    
        const password = document.getElementById("password").value;
    
        const foundUser = users.find(user =>
            user.email === email &&
            user.password === password
        );
    
        if(foundUser){
    
            sessionStorage.setItem(
                "user",
                JSON.stringify(foundUser)
            );
    
            window.location.href = "dashboard/dashboard.html";
    
        }
    
        else{
    
            alert("Invalid Email or Password");
    
        }
    
    });