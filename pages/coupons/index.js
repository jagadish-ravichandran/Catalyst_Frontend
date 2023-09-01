import styles from "@/styles/Coupons.module.css";
import Link from "next/link";
import Image from "next/image";
import category_json from "@/constants/merchant_category.json";
import { useEffect, useState } from "react";
import axios from "axios";
import structureData from "@/utils/structureData";

export async function getServerSideProps(props) {
	let response = await axios.get(
		"https://vamsipanchada.pythonanywhere.com/detail/?id=8965&location=CHENNAI"
	);

	return {
		props: structureData(response.data),
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
	let card_id = props.id;
	let redirect_page = `coupons/${props.category.toLowerCase()}/${card_id}`;
	let expires = `2023-09-${Math.round(Math.random() * 30)}`;

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
						height: "150px",
					}}
				/>
				<div class="card-body">
					<h5 class="card-title">{content.name}</h5>
					<p class="card-text">Hurry up! {content.desc}!</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Expires on {expires}</li>
				</ul>
				<div class="card-body">
					<a href={redirect_page} class="card-link">
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
				{merchants.map((item, idx) => {
					return (
						<Card
							category={category}
							id={idx}
							key={idx}
							obj={item}
						></Card>
					);
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

			<div className={styles.destination}>Destination : Chennai</div>

			{categories.map((each_cat, idx) => {
				return (
					<MerchantContainer
						key={idx}
						category={each_cat}
						merchants={props[`${each_cat}`]}
					></MerchantContainer>
				);
			})}
		</>
	);
}
