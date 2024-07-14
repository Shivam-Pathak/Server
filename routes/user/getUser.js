const User = require('../../models/user/userSchema');

async function getUser(req, res) {
    try {
        // Fetch user data
        const response = await User.find();

        if (response.length === 0)
            console.log('No users found.');
        else
            return res.status(200).send(response);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).send({ status: 500, message: 'Internal server error' });
    }
}

module.exports = getUser;
