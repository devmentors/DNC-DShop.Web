export class ProductsQueryModel {
	priceFrom: number;
	priceTo: number;

	constructor(priceFrom?: number, priceTo?: number) {
		this.priceFrom = priceFrom || 0;
		this.priceTo = priceTo || 0;
	}

	createFromExisting(): ProductsQueryModel {
		return new ProductsQueryModel(this.priceFrom, this.priceTo);
	}
}