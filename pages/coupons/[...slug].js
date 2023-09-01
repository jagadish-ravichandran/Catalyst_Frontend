import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Coupons.module.css";
import structureData from "@/utils/structureData";

export async function getServerSideProps(context) {
	const slug = context.params.slug;

	const category = slug[0].toUpperCase();
	const id = slug[1];

	let response = await axios.get(
		"https://vamsipanchada.pythonanywhere.com/detail/?id=8965&location=CHENNAI"
	);

	let result = structureData(response.data);

	let final_content = result[category][id];

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
	
	return (
		<>
			<div className={styles.couponContainer}>
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
