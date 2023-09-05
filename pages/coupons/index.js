import styles from "@/styles/Coupons.module.css";
import Link from "next/link";
import Image from "next/image";
import category_json from "@/constants/merchant_category.json";
import hotel_images_json from "@/constants/hotel_images.json";
import { useEffect, useState } from "react";
import axios from "axios";
import structureData from "@/utils/structureData";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
	let response = await axios.get(
		"https://vamsipanchada.pythonanywhere.com/detail/?id=8965&location=CHENNAI"
	);

	let coupons_list = structureData(response.data);

	return {
		props: coupons_list,
	};
}

export function Navbar() {
	return (
		<div className={styles.navbar}>
			<div id={styles.productName}>Catalyst</div>
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

	let img_location;

	if (props.category == "HOTEL") {
		img_location = hotel_images_json[content.name];
	} else {
		img_location = `/static/images/merchants/${content.name}.jpg`;
	}
	return (
		<>
			<div class="card w-20">
				<Image
					width={500}
					height={500}
					class="card-img-top"
					src={img_location}
					alt="Card image cap"
					loading="lazy"
					style={{
						width: "200px",
						height: "150px",
					}}
				/>
				<div class="card-body">
					<h5 class="card-title">{content.name}</h5>
					<p class="card-text">{content.desc}!</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Expires on 2023-11-20</li>
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
	const router = useRouter();

	async function PushNotication() {
		let response = await axios.get(
			"https://vamsipanchada.pythonanywhere.com/newoffer/?user_id=8965"
		);

		// console.log(response.data);

		let merchant_data = {
			id: Object.keys(response.data.COUPON)[0],
			name: Object.values(response.data.MERCHANT_NAME)[0],
			category: Object.values(response.data.MERCHANT_CATEGORY)[0],
			coupon_code: Object.values(response.data.COUPON)[0],
			desc: Object.values(response.data.DESC)[0],
		};

		// console.log(merchant_data);

		setCookie("NEW_OFFER", merchant_data);

		const onClickURL = `/coupons/new_offer/${merchant_data.id}`;
		// console.log(onClickURL);

		toast(`New Offer from ${merchant_data.name}!`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "dark",
			onClick: () => router.push(onClickURL),
		});
	}

	useEffect(() => {
		let merchant_categories = Object.keys(props);
		setCategories(merchant_categories);

		console.log(typeof props.HOTEL);

		setCookie("HOTEL", props.HOTEL);
		setTimeout(PushNotication, 1000);
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
