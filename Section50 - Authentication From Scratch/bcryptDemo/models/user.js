const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
    },
});

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    if (!foundUser) {
        return false;
    }
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
};

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);