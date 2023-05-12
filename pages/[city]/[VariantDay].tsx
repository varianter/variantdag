import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from 'next';
import {
  getAllCities,
  getAllVariantdaysByCity,
  getMarkdownObject,
  getVariantdagByCityAndDate,
} from 'src/functions/getVariantdag';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { city, VariantDay } = params!;
  let varianday = null;
  if (typeof city === 'string' && typeof VariantDay === 'string') {
    varianday = await getMarkdownObject(city, VariantDay);
  }
  return {
    props: {
      variantDay: varianday,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const cities = await getAllCities();
  for (const city of cities) {
    const variantdayByCity: string[] = await getAllVariantdaysByCity(city);
    for (const varianday of variantdayByCity) {
      paths.push({
        params: {
          city: city,
          VariantDay: varianday,
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
};

const VariantDay: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  variantDay,
}) => {
  return <div dangerouslySetInnerHTML={{ __html: variantDay.fileContents }} />;
};

export default VariantDay;
