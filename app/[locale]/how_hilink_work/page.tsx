import { unstable_setRequestLocale } from 'next-intl/server';

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <div>How_hilink_work</div>;
};

export default page;
