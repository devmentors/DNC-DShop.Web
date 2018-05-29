export class ProductsQueryModel {
	priceFrom?: number;
	priceTo?: number;

	constructor(priceFrom?: number, priceTo?: number) {
		this.priceFrom = priceFrom || null;
		this.priceTo = priceTo || null;
	}

	createFromExisting(): ProductsQueryModel {
		return new ProductsQueryModel(this.priceFrom, this.priceTo);
	}
}