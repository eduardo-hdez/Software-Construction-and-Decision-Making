const users =[
    {name: "eduardo-hdez", description: "Computer Science and Technology"},
    {name: "elias-franco", description: "Robotics and Digital Systems Engineering"},
];

module.exports = class Users {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    save() {
        users.push(this);
    }
    static fetchAll() {
        return users;
    }
};
