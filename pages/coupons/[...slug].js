import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Coupons.module.css";
import structureData from "@/utils/structureData";
import { useRouter } from "next/router";
import Image from "next/image";
import hotel_images_json from "@/constants/hotel_images.json";
export async function getServerSideProps(context) {
	const slug = context.params.slug;

	const category = slug[0].toUpperCase();
	const id = slug[1];

	let final_content;

	if (category === "HOTEL") {
		final_content = JSON.parse(context.req.cookies.HOTEL)[id];
	} else {
		let response = await axios.get(
			"https://vamsipanchada.pythonanywhere.com/detail/?id=8965&location=CHENNAI"
		);
		let result = structureData(response.data);
		final_content = result[category][id];
	}

	return {
		props: {
			coupon: final_content,
		},
	};
}

export function Navbar() {
	return (
		<div className={styles.navbar}>
			<div>
				<Link href="/">Home</Link>
			</div>
			<div className={styles.coupon}>Coupons</div>
			<div>
				<Link href="/contact">Contact</Link>
			</div>
			<div>
				<Link href="/profile">Profile</Link>
			</div>
		</div>
	);
}

function CouponContainer(props) {
	let content = props.obj;
	const router = useRouter();

	let img_location;

	if (Object.keys(hotel_images_json).includes(content.name)) {
		img_location = hotel_images_json[content.name];
		console.log(img_location);
	} else {
		img_location = `/static/images/merchants/${content.name}.jpg`;
	}

	return (
		<>
			<button
				style={{ position: "relative", left: "100px" }}
				onClick={() => router.back()}
				type="button"
				class="btn btn-secondary"
			>
				<i class="bi bi-arrow-bar-left"></i>
				Back
			</button>
			<div className={styles.couponContainer}>
				<div>
					<Image
						width={500}
						height={500}
						class="card-img-top"
						src={img_location}
						alt="Card image cap"
						loading="lazy"
						style={{
							width: "200px",
							height: "150px",
						}}
					></Image>
				</div>
				<div className={styles.firstColumn}>
					<h3 style={{ color: "green" }}>
						Coupon Activated{" "}
						<i className="bi bi-cart-check-fill"></i>
					</h3>
					<p>Use this coupon code at checkout !</p>
					<div>
						{content.coupon_code} <i class="bi bi-clipboard"></i>
					</div>

					<button type="button" class="btn btn-primary">
						Redeem Now
					</button>
				</div>

				<div className={styles.secondColumn}>
					<div> {content.desc}</div>
					<div> It expires in {content.expires_in}</div>
					<div> It is available only in {content.name}</div>
				</div>
			</div>
		</>
	);
}

export default function CouponCode(props) {
	return (
		<>
			<Navbar></Navbar>
			<CouponContainer obj={props.coupon}></CouponContainer>
		</>
	);
}
