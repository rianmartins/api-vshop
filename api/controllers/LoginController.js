/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: async (req, res) => {
        var users = await Usuario.find();
        return res.json(users);
    }

};

