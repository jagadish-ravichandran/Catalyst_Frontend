import styles from "@/styles/Coupons.module.css";
import Link from "next/link";
import Image from "next/image";
import category_json from "@/constants/merchant_category.json";
import { useEffect, useState } from "react";

export async function getServerSideProps(props) {
	// get hotel suggestions from backend
	// let hotels = await axios.get("/hotels");

	// // get travel suggestions from backend
	// let travels = await axios.get("/travels");

	// // get travel suggestions from backend
	// let restaurants = await axios.get("/restaurants");
	console.log(category_json.category);
	//get coupons from all

	return {
		props: {
			food: [
				{
					id: 1,
					name: "dominos",
					offer: 30,
					expires: "2023-09-20",
				},
				{
					id: 2,
					name: "pizzahut",
					offer: 20,
					expires: "2023-09-15",
				},
			],

			shopping: [
				{
					id: 1,
					name: "saravana_stores",
					offer: 50,
					expires: "2023-09-12",
				},
			],
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

function Card(props) {
	let content = props.obj;

	let img_location = `/static/images/merchants/${content.name}.jpg`;
	return (
		<>
			<div class="card w-20">
				<Image
					width={500}
					height={500}
					class="card-img-top"
					src={img_location}
					alt="Card image cap"
					loading="eager"
					style={{
						width: "200px",
						height: "200px",
					}}
				/>
				<div class="card-body">
					<h5 class="card-title">{content.name}</h5>
					<p class="card-text">
						Hurry up! There is {content.offer}% on all!
					</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						Expires on {content.expires}
					</li>
				</ul>
				<div class="card-body">
					<a href="#" class="card-link">
						Avail The Offer
					</a>
				</div>
			</div>
		</>
	);
}

function MerchantContainer(props) {
	let merchants = props.merchants;
	let category = props.category;
	return (
		<>
			<h1>{category}</h1>
			<div className={styles.merchantContainer}>
				{merchants.map((item) => {
					return <Card key={item.id} obj={item}></Card>;
				})}
			</div>
		</>
	);
}

export default function Coupons(props) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let merchant_categories = Object.keys(props);
		setCategories(merchant_categories);
	}, []);
	return (
		<>
			<Navbar></Navbar>

			{categories.map((each_cat) => {
				return (
					<MerchantContainer
						category={each_cat}
						merchants={props[`${each_cat}`]}
					></MerchantContainer>
				);
			})}
		</>
	);
}
