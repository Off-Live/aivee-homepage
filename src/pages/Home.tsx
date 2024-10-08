/**
 * This code was generated by Builder.io.
 */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import InvitationSection from "../components/InvitationSection";
import ContactMatchSection from "../components/ContactMatchSection";
import GoogleCalSection from "../components/GoogleCalSection";
import CallToAction from "../components/CallToAction";

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [typeform, setTypeform] = useState('');

  useEffect(() => {
    const ust = searchParams.get('ust');
    const typeform_url = ust !== null 
      ? `https://emkd1hav7wo.typeform.com/to/SlakC6t7#ref=${searchParams.get('ust')}`
      : `https://emkd1hav7wo.typeform.com/to/SlakC6t7`;
    setTypeform(typeform_url)
    localStorage.setItem('typeform_url', typeform_url)
  }, [searchParams])

  return (
    <Layout>
      <HeroSection typeform={typeform} />
      <FeatureSection />
      <InvitationSection />
      <ContactMatchSection />
      <GoogleCalSection />
      <CallToAction typeform={typeform} />
    </Layout>
  );
};

export default Home;
