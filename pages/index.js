import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div id={styles.productName}>Catalyst</div>
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
		</>
	);
}

const styling = {
	productName: {
		fontSize: "80px",
		fontFamily: "Rajdhani",
	},

	productQuote1: {
		fontFamily: "PT Sans",
		fontSize: "20px",
	},

	productQuote2: {
		fontFamily: "Josefin Sans",
		fontSize: "20px",
		width: "50vw",
	},
};

function Container() {
	return (
		<>
			<div className={styles.outer}>
				<div className={styles.innerOne}>
					<div style={styling.productName}>Catalyst</div>
					<div style={styling.productQuote1}>
						UNLEASH THE POWER OF SAVINGS!
					</div>
					<div>powered by endosers.ai</div>
				</div>
				<div className={styles.innerTwo}>
					<Image
						src="/static/images/home/coupon_icon.png"
						width={300}
						height={300}
					></Image>
					<div style={styling.productQuote2}>
						Coupons are the keys that unlock the doors to savings,
						turning every purchase into a treasure hunt for the best
						deals!
					</div>
				</div>
			</div>
		</>
	);
}
export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<Container></Container>
		</>
	);
}
