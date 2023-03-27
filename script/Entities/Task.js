class Task extends Entity{
    constructor({ Id = '', Nom = '', Description = ''} = {}) {
        super({ Id, Nom, Description});
    
        this.Id = Id;
        this.Nom = Nom;
        this.Description = Description;
    }
}