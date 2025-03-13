import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ClientShowcase from '@/components/ClientShowcase';
import PricingCTA from '@/components/PricingCTA';
import BrandShowcase from '@/components/BrandShowcase';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <ClientShowcase />
      <PricingCTA />
      <BrandShowcase />
    </Layout>
  );
};

export default Home;
