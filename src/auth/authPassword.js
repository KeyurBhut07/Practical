const bcrypt = require('bcrypt');
const logger = require('../../config/logger');

const hashPassword = async (password) => {
    try {
        const saltround = 10;
        const hasingPass = await bcrypt.hash(password, saltround);
        return hasingPass
    } catch (error) {
        logger.error(error);
    }
}

const comparPassword = (password , hasingPass) => {
    return bcrypt.compare(password , hasingPass)
}

module.exports = {hashPassword , comparPassword}