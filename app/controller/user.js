const { Controller } = require("egg");

class UserController extends Controller {
    index () {
        const { ctx, app,  query } = this
        // ctx.body = query
    }

}
module.exports = UserController