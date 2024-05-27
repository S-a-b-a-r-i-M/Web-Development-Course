export default class Flight
{
    constructor(name,tot_tickets,price)
    {
        this.name=name;
        this.tot_tickets=tot_tickets;
        this._price=price;// _ IS USED TO REFER PRIVATE VARIABLE
    }

    takeof()
    {
        console.log(`flight ${this.name} is ready to take off`);
    }

    //WRITING SET AND GET FOR PRICE
    get price()
    {
        return this._price;
    }

    set price(price)
    {   
        if(price>5000)//THIS IS THE BENEFIT OF SET WE CAN VALIDATE THE VALUE BEFORE ASSIGNING
            price=5000;
        this._price=price;
    }
}

export function totFlights()
{
    console.log("We have 22 national flights and 5 international flights");
}