type CHAMPS = { id: number; name: string }[];

export async function generateStaticParams() {
  const champs = await fetch(
    'https://raw.githubusercontent.com/phuocloc98/lol-champ/main/champ.json'
  );
  const data = champs as unknown as CHAMPS;
  return data.map((champs) => ({
    id: champs.name
  }));
}

export default async function Champion() {
  return <h1>Hello Worlds</h1>;
}
