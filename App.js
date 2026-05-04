// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Shanthi", email: "Shanthi@gmail.com" },
                        { id: 2, name: "Swaroop", email: "Swaroop@gmail.com" },
                        { id: 3, name: "Mahesh", email: "Mahi1818@gmail.com" },
                        { id: 4, name: "kushal", email: "kushal15@gmail.com" },
                        { id: 5, name: "pavan", email: "pavan21@gmail.com" },
                        { id: 6, name: "partheev", email: "partheev444@gmail.com" },
                        { id: 7, name: "lakshmikanth", email: "lakshmikanth18@gmail.com" },
                        { id: 8, name: "vivek", email: "vivek180@gmail.com" },
                        { id: 9, name: "rohith", email: "rohith26@gmail.com" },
                        { id: 10, name: "sathwik", email: "sathwik97@gmail.com" },
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
