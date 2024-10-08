
/**
 * Тип данных платежа - который определяет объект с двумя свойствами: `payment` и `address`.
 * `payment` - это строковое свойство, представляющее способ оплаты.
 * `address` - это строковое свойство, представляющее адрес доставки.
 */
export type TPaymentData = {
	payment: string;
	address: string;
};

/**
 * Тип данных контактной информации который определяет объект с двумя свойствами: `phone` и `email`.
 * `phone` - это строковое свойство, представляющее контактный телефон покупателя.
 * `email` - это строковое свойство, представляющее адрес эллектронной почты покупателя.
 */
export type TContactsData = {
	phone: string;
	email: string;
};

/**
 * Тип данных заказа - который определяет объект с двумя свойствами: `items` и `email`.
 * `items` - это коллекция строковых свойств, представляющих идентификаторы продуктов.
 * `total` - это числовое свойство, представляющее общую стоимость заказа.
 * 
 * `payment` и `address` - это наследуемые объекты TPaymentData.
 * `phone` и `email` - это наследуемые объекты TContactsData.
 */
export type TOrderType = {
	items: string[];
	total: number;
} & TPaymentData &
	TContactsData;
