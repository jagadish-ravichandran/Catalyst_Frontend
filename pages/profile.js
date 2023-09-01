import Link from "next/link";
import styles from "@/styles/Profile.module.css";

export default function Profile() {
	return (
		<>
			<div className={styles.navbar}>
				<div>
					<Link href="/">Home</Link>
				</div>
				<div>
					<Link href="/coupons">Coupons</Link>
				</div>
				<div>
					<Link href="/contact">Contact</Link>
				</div>
				<div className={styles.profile}>Profile</div>
			</div>
		</>
	);
}
