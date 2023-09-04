import Link from "next/link";
import styles from "@/styles/Profile.module.css";
import Image from "next/image";

const UserData = {
	name: "John Doe",
	phone: "+91XXXXXXXXX",
	email: "johndoe@gmail.com",
	location: "Delhi",
};

function NavBar() {
	return (
		<>
			<div className={styles.navbar}>
				<div id={styles.productName}>Catalyst</div>
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

function Grid() {
	return (
		<div className={styles.grid}>
			<div>
				<i class="bi bi-phone"></i>
				{UserData.phone}
			</div>
			<div>
				<i class="bi bi-mailbox"></i>
				{UserData.email}
			</div>
			<div>
				<i class="bi bi-pin"></i>
				{UserData.location}
			</div>
		</div>
	);
}

function ProfileContainer() {
	return (
		<>
			<div className={styles.container}>
				<Image
					width={200}
					height={200}
					src="/static/images/user/profile.png"
				></Image>
				<div className={styles.name}>{UserData.name}</div>

				<Grid></Grid>
			</div>
		</>
	);
}
export default function Profile() {
	return (
		<>
			<NavBar></NavBar>
			<ProfileContainer></ProfileContainer>
		</>
	);
}
