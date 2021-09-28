const { Service } = require("egg");

class TableService extends Service {
    async getReport (param) {
        const { app } = this
        console.log(param.name);
        const report = await app.mysql.select('report', {
            where: {
                    id:param.id
                }
            })
        return { data:report }
    }
    async addReport (param) {
        const { app } = this
        const { name, money } = param
        const row = {
            name,
            money,
            create_date:this.app.mysql.literals.now
        };
        const result = await app.mysql.insert('report', row);
        const insertSuccess = result.affectedRows === 1;

        console.log('insertSuccess', insertSuccess);
        return { data:row,state:insertSuccess }
    }
    async updateReport (param) {
        const { id, name, money } = param
        const row = {
            id,
            name,
            money,
            create_date:this.app.mysql.literals.now
        }
        const result = await this.app.mysql.update('report', row);
        console.log(result);
        const updateSuccess = result.affectedRows === 1;
        return {data:{},state:updateSuccess}
    }
    async deleteReport (id) {
        console.log(typeof id);
        const result = await this.app.mysql.delete('report', { id:id.id })
        console.log(result);
        const deleteSuccess = result.affectedRows === 1
        const msg = result.message
        return {data:{},msg, state:deleteSuccess}
    }
}
module.exports = TableService