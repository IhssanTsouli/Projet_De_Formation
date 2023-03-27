class BaseDAO {
    constructor() {
      this.table = undefined;
      this.Entity = undefined;
      
    }

    create(entity){
        this.table.create(entity);
    }

    deleteEntity(id){
        let entity = this.table.find(id);
        entity.destroy();
    }

    update(entity){
        this.table.update(entity);
    }

    findById(id){
        let dataRow = this.table.find(id);
        let entity = new this.Entity(dataRow);
        return entity;
    
    }

    findAll(){
        var data;
        let dataRows = this.table.all();
        data = this.convertDataRowsToListObjects(dataRows);
        return data;
    }
}
