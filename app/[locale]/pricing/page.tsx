import { unstable_setRequestLocale } from 'next-intl/server';

const Pricing = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <div>Price</div>;
};

export default Pricing;
