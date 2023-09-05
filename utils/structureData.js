function structureData(data) {
	let merchant_categories = Object.values(data["MERCHANT_CATEGORY"]);
	let merchant_names = Object.values(data["MERCHANT_NAME"]);
	let coupons = Object.values(data["coupon"]);
	let desc = Object.values(data["desc"]);

	let result = {
		HOTEL: [],
		FOOD: [],
		TRAVEL: [],
		SHOPPING: [],
		PUB: [],
	};

	for (let i = 0; i < merchant_categories.length; i++) {
		switch (merchant_categories[i]) {
			case "FOOD":
				result["FOOD"].push({
					name: merchant_names[i],
					coupon_code: coupons[i],
					desc: desc[i],
				});
				continue;

			case "PUB":
				result["PUB"].push({
					name: merchant_names[i],
					coupon_code: coupons[i],
					desc: desc[i],
				});
				continue;

			case "SHOPPING":
				result["SHOPPING"].push({
					name: merchant_names[i],
					coupon_code: coupons[i],
					desc: desc[i],
				});
				continue;

			case "TRAVEL":
				result["TRAVEL"].push({
					name: merchant_names[i],
					coupon_code: coupons[i],
					desc: desc[i],
				});
				continue;

			case "HOTEL":
				result["HOTEL"].push({
					name: merchant_names[i],
					coupon_code: coupons[i],
					desc: desc[i],
				});
				continue;

			default:
				continue;
		}
	}

	return result;
}

export default structureData;
