const {Profile} = require("../model");
const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({where: {id: req.get('profile_id') || 0}});
        if (!profile) return res.status(401).end();
        req.profile = profile;
        next();
    } catch (error) {
        console.error('Error to get the profile:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = getProfile;
