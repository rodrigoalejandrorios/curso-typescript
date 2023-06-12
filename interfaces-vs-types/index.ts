// price
// paymentMethod
// nameClient

// templateName
// format

// productName
// clientAddress
// quantity

type PaymentMethodType = "debito" | "credito" | "efectivo";
interface IPaymentMethod {
  paymentMethod: "debito" | "credito" | "efectivo";
}

interface IProductoBase {
  price: number;
  paymentMethod: PaymentMethodType;
  nameClient: string;
}

type ProductoBaseType = {
  price: number;
  paymentMethod: PaymentMethodType;
  nameClient: string;
};

//Herencia

interface IFisica extends IProductoBase {
  productName: string;
  clientAddress: string;
  quantity: number;
}

type VirtualType = ProductoBaseType & {
  templateName: string;
  format: 'jpg' | 'png' | 'pdf';
};

class ProductoVirtual implements VirtualType {
    price: number = 500;
    paymentMethod: PaymentMethodType = 'efectivo';
    nameClient: string = 'Rodrigo';
    templateName: string = 'folleto1';
    format: "jpg" | "png" | "pdf" = 'pdf';
}

class ProductoFisico implements IFisica {
    price: number = 500;
    paymentMethod: PaymentMethodType = 'efectivo';
    nameClient: string = 'Rodrigo';
    productName: string = 'folleto';
    quantity: number = 1000;
    clientAddress: string = 'Street 101';
}