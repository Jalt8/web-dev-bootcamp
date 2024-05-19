const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

hashPassword('123456')
    .then((hash) => {
        verifyPassword('1234566', hash)
            .then((result) => console.log(result));
    });
