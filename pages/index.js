import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main>
				<div className={styles.navbar}>
					<div className={styles.home}>Home</div>
					<div>
						<Link href="/coupons">Coupons</Link>
					</div>
					<div>
						<Link href="/contact">Contact</Link>
					</div>
					<div>
						<Link href="/profile">Profile</Link>
					</div>
				</div>
				<div className={styles.content}>
					<div>Coupons for you !</div>
				</div>
			</main>
		</>
	);
}
