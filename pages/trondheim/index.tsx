import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getVarriantdayByCity } from 'src/functions/getFolderAndFiles';

export const getStaticProps: GetStaticProps = async () => {
  let variantDays = null;

  variantDays = await getVarriantdayByCity('trondheim');

  return {
    props: {
      variantDays: variantDays,
    },
  };
};

const Oslo: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  variantDays,
}) => {
  return (
    <div>
      <h1>Variantdager for Trondheim</h1>
      <ul>
        {variantDays &&
          variantDays.map((day: string) => {
            return (
              <li key={day}>
                <Link href={`/trondheim/${day}`}>{day}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Oslo;
