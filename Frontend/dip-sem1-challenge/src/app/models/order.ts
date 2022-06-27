export class Order {
  _id: string;
  CustID: string;
  ProdID: string;
  OrderDate: string;
  Quantity: number;
  ShipDate: string;
  ShipMode: string;
  constructor(
    _id: string,
    CustID: string,
    ProdID: string,
    OrderDate: string,
    Quantity: number,
    ShipDate: string,
    ShipMode: string
  ) {
    this._id = _id;
    this.CustID = CustID;
    this.ProdID = ProdID;
    this.OrderDate = OrderDate;
    this.Quantity = Quantity;
    this.ShipDate = ShipDate;
    this.ShipMode = ShipMode;
  }
}

export interface IOrder {
  _id?: string;
  CustID: string;
  ProdID: string;
  OrderDate: string;
  Quantity: number;
  ShipDate: string;
  ShipMode: string;
  TotalValue?: number;
  GST?: number;
}
