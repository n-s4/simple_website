import Ailment from "./components/ailment.jsx"

async function getData() {
	const res = await fetch('https://mhw-db.com/ailments/')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<>
		{data.map((ailment) => {
		 return (
			<Ailment
				name={ailment.name}
				description={ailment.description}
			/>
		)})}
		</>
	)
}