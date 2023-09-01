import Link from "next/link";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
	return (
		<>
			<div className={styles.navbar}>
				<div>
					<Link href="/">Home</Link>
				</div>
				<div>
					<Link href="/coupons">Coupons</Link>
				</div>
				<div className={styles.contact}>Contact</div>
				<div>
					<Link href="/profile">Profile</Link>
				</div>
			</div>
		</>
	);
}
