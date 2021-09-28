const { Controller } = require("egg");

class HomeController extends Controller {
    async index(){
        const { ctx, app } = this
        const result = await app.mysql.select("report", {})
        console.log(result);
        let data = {
            param:ctx.request.body,
            res:result
        }
        ctx.body = data
    }
    async get () {
        const { ctx, app } = this
        const param = ctx.request.body
        console.log(param);
        const user = await ctx.service.table.getReport(param)
        ctx.body = user
    }
    async add () {
        console.log('this.ctx.request.body',this.ctx.request.body,'this.ctx.params', this.ctx.params);
        const param = this.ctx.request.body
        const addUser = await this.ctx.service.table.addReport(param)
        this.ctx.body = addUser
    }
    async update () {
        const param = this.ctx.request.body
        const updateUser = await this.ctx.service.table.updateReport(param)
        this.ctx.body = updateUser
    }
    async delete () {
        const id = this.ctx.request.body
        console.log('id', id);
        const deleteUser = await this.ctx.service.table.deleteReport(id)
        this.ctx.body = deleteUser
    }
}
module.exports = HomeController