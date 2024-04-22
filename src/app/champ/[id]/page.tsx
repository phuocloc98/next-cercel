type CHAMPS = { id: number; name: string }[];

export async function generateStaticParams() {
  const champs: CHAMPS = await fetch(
    'https://raw.githubusercontent.com/phuocloc98/lol-champ/main/champ.json'
  ).then((res) => res.json());

  return champs.map((champs) => ({
    id: champs.name
  }));
}

export default async function Champion() {
  return <h1>Hello Worlds</h1>;
}
