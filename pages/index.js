import { urls } from '../utils/constants';

export default function Home(props) {
  const { name } = props.data;

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export async function getServerSideProps() {
  let data = null;
  try {
    const res = await fetch(urls.apiData)
    data = await res.json()
  } catch (error) {
    console.log('Data fetching error');
    console.log(error);
  }
  return { props: { data } }
}