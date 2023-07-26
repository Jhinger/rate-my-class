import type { DELIVERY } from "@prisma/client";

export default function getDelivery(delivery: DELIVERY) {
	const map = {
		INPERSON: "In Person",
		ONLINE: "Online",
	};

	return map[delivery];
}
