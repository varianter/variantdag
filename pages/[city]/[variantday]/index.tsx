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
} from 'src/functions/getVariantdag';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Agenda, AgendaDetails } from '@components';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { city, variantday } = params!;
  const program = await import(`program/${city}/${variantday}/program.ts`);
  const data = { program: program.program }; // Assuming the `program` object has a `default` property
  let mdxSource = null;
  if (typeof city === 'string' && typeof variantday === 'string') {
    const variantDay = await getMarkdownObject(city, variantday);
    mdxSource = await serialize(variantDay, { scope: data });
  }

  return { props: { source: mdxSource, city, variantday } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const cities = await getAllCities();
  for (const city of cities) {
    const variantdayByCity: string[] = await getAllVariantdaysByCity(city);
    for (const variantday of variantdayByCity) {
      paths.push({
        params: {
          city,
          variantday,
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
};

const components = { Agenda, AgendaDetails };

const VariantDay: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  city,
  variantday,
}) => {
  return (
    <div>
      <MDXRemote {...source} components={components} />
      <Link href={`/${city}/${variantday}.ics`}>Legg til i kalender</Link>
    </div>
  );
};

export default VariantDay;
