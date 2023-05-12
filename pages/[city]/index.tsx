import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  getAllCities,
  getAllVariantdagerByCity,
} from 'src/functions/getVariantdag';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
  const cities = await getAllCities();
  const paths = cities.map((city) => ({
    params: { city },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { city } = params!;
  let variantDays = null;
  if (typeof city === 'string') {
    variantDays = await getAllVariantdagerByCity(city);
  }
  return {
    props: {
      variantDays: variantDays,
    },
  };
};
const City: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  variantDays,
}) => {
  const { asPath } = useRouter();
  const city = asPath.replaceAll('/', '');

  return (
    <div>
      <h1>Variantdager for {city}</h1>
      <ul>
        {variantDays &&
          variantDays.map((day: string) => {
            return (
              <li key={day}>
                <Link href={`${city}/${day}`}>{day}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default City;
