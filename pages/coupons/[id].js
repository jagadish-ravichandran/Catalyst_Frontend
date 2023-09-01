import axios from "axios";
import Link from "next/link";
import styles from "@/styles/Coupons.module.css";
export async function getServerSideProps(context) {
	const id = context.params.id;

	//get data related to this coupon id
	// merchant name, offer rate, coupon code
	// let result = await axios.get()

	return {
		props: {
			coupon: {
				name: "dominos",
				offer_rate: "30%",
				coupon_code: "45532C",
				expires_in: "2023-09-10",
			},
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
					<p>Copy and use in merchant site</p>
				</div>

				<div className={styles.secondColumn}>
					<div> Flat {content.offer_rate} in all</div>
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
