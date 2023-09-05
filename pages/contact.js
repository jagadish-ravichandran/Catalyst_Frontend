import Link from "next/link";
import styles from "@/styles/Contact.module.css";

function NavBar() {
	return (
		<div className={styles.navbar}>
			<div id={styles.productName}>Catalyst</div>
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
	);
}

function ContactForm() {
	return (
		<>
			<div>
				<form className={styles.form}>
					<p>Contact Us</p>
					<input placeholder="Name" name="name" />
					<input placeholder="Email" name="email" />
					<textarea
						placeholder="Your Message"
						name="message"
						rows="10"
					></textarea>
					<input type="submit" />
				</form>
			</div>
		</>
	);
}

export default function Contact() {
	return (
		<>
			<NavBar></NavBar>
			<ContactForm></ContactForm>
		</>
	);
}
