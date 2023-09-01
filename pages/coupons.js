import styles from "@/styles/Coupons.module.css";
import Link from "next/link";

export default function Coupons() {
	return (
		<>
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
		</>
	);
}
