let users = [
    {
        id: 1,
        name: 'Василий',
        role: 'user'
    },
    {
        id: 5,
        name: 'Анвар',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Игорь',
        role: 'user'
    },
    {
        id: 3,
        name: 'Елена',
        role: 'user'
    },
    {
        id: 4,
        name: 'Владислав',
        role: 'user'
    },
    {
        id: 6,
        name: 'Виталий',
        role: 'user'
    },
    {
        id: 8,
        name: 'Николай',
        role: 'admin'
    },
    {
        id: 9,
        name: 'Светлана',
        role: 'user'
    },
    {
        id: 7,
        name: 'Андраник',
        role: 'user'
    },
    {
        id: 11,
        name: 'Джеймс',
        role: 'admin'
    },
    {
        id: 10,
        name: 'Гульнара',
        role: 'user'
    }
]

function isAdmin(id) {
    const userById = users.find(user => user.id == id);
    if (userById !== undefined && userById.role === 'admin') {
        return true;
    } else return false;
}

function getNames(arr) {
    return arr.map(elem => elem.name)
}

function splitUsersByRole(arr) {
    let admins = []
    let users = []
    for (item of arr) {
        switch (item.role) {
            case 'admin':
                admins.push(item.id)
                break;
            case 'user':
                users.push(item.id)
                break;
            default: break;
        }
    }
    return [admins, users];
}

function splitUsersByRoleUpdated(arr, ...roles) {
    const obj = {};
    roles.forEach(roleItem => {
        obj[roleItem] = [];
    });
    arr.forEach(user => {
        if (obj[user.role]) {
            obj[user.role].push(user.id);
        }
    });

    console.log(obj);
}

splitUsersByRoleUpdated(users, "user", "admin", "support")

