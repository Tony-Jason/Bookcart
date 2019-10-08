export class Info{
    id : number;
    name : string;
    author : string;
    price : number;
    desc : string;
    image : string;
    constructor(id:number,name:string,author:string,price:number,desc:string,image:string){
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.desc = desc;
        this.image = image;
    }
}