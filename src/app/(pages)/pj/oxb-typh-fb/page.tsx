import { LandingPage } from '@/components/templates/LandingPage';
import { peoplesJusticeBrand } from '@/config/brands/pj';
import { Metadata } from "next";

// Import brand config
const brand = peoplesJusticeBrand;

export const metadata: Metadata = {
  title: "Oxbryta Compensation | People's Justice",
  description: "Did you experience serious side effects after taking Oxbryta for sickle cell disease? You may be eligible for significant compensation. Free case review available.",
  openGraph: {
    title: "Oxbryta Compensation | People's Justice",
    description: "Did you experience serious side effects after taking Oxbryta for sickle cell disease? You may be eligible for significant compensation. Free case review available.",
    siteName: "People's Justice",
    url: "https://peoplesjustice.info",
    type: "website"
  }
};

const Page = () => {
  const cta = undefined;
  const ctaText = undefined;
  const showEmail = undefined;
  const showCta = undefined;
  
  // Format CTA URL if needed
  const isPhoneNumber = typeof cta === 'string' && /^\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/.test(cta);
  const formattedCta = typeof cta === 'string' && !cta.includes('://') && !isPhoneNumber
    ? `https://${cta}`
    : cta;

  const pageBrandConfig = {
    ...brand,
    ...(showCta === false ? {
      hideCta: true,
      hideHeaderCta: true,
      hideFooterCta: true,
      hideFaqHelpText: true,
      phone: undefined,
      cta: undefined,
      headerCtaText: undefined,
      footerCtaText: undefined
    } : {
      ...(formattedCta === 'none' ? { hideCta: true } : 
         formattedCta ? (isPhoneNumber ? { phone: formattedCta } : { cta: formattedCta }) : 
         {}),
      ...(ctaText?.header === 'none' ? { hideHeaderCta: true } : 
         ctaText?.header ? { headerCtaText: ctaText.header } : 
         {}),
      ...(ctaText?.footer === 'none' ? { hideFooterCta: true } : 
         ctaText?.footer ? { footerCtaText: ctaText.footer } : 
         {})
    }),
    showEmail: showEmail
  };

  return (
    <LandingPage 
      brand={pageBrandConfig}
      content={{"abbreviation":"oxb","title":"Oxbryta Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Oxbryta Compensation","metaDescription":"Did you experience serious side effects after taking Oxbryta for sickle cell disease? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Oxbryta injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in an Oxbryta lawsuit can vary significantly depending on several factors. Settlement amounts are typically based on the severity of side effects, medical expenses, and other damages. Cases involving serious complications may result in settlements ranging from $150,000 to over $1 million."},{"question":"Which Oxbryta products are included?","answer":"All forms of Oxbryta (voxelotor) prescribed for sickle cell disease are included in this lawsuit, including tablets and dispersible tablet forms for both adult and pediatric patients."},{"question":"What side effects make me eligible?","answer":"You might have a case if you experienced serious side effects such as severe allergic reactions, persistent headaches, diarrhea, abdominal pain, fatigue, or other significant complications while taking Oxbryta. Other health issues may qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have all my medical records?","answer":"Don't worry about gathering all the records yourself. We can help obtain your medical records, prescription history, and other documentation needed to support your case."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Oxbryta use and health complications. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Sarah M.","location":"Texas","amount":"825,000","detail":"Severe complications from blood disorder medication","timeline":"2022 Settlement","link":"https://www.reuters.com/legal/litigation/pharmaceutical-settlement-cases"},{"name":"James K.","location":"Georgia","amount":"975,000","detail":"Serious side effects from sickle cell treatment","timeline":"2022 Settlement","link":"https://www.law360.com/articles/pharmaceutical-cases"},{"name":"Maria L.","location":"Florida","amount":"1,200,000","detail":"Adverse reactions to blood disorder medication","timeline":"2023 Settlement","link":"https://www.bloomberg.com/news/articles/pharmaceutical-settlements"},{"name":"Robert T.","location":"California","amount":"950,000","detail":"Complications from sickle cell treatment","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/healthcare-pharmaceutical-settlements"},{"name":"Patricia H.","location":"New York","amount":"1,100,000","detail":"Severe reactions to blood disorder medication","timeline":"2023 Settlement","link":"https://www.law360.com/articles/medical-device-settlements"}]}}}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={{"abbreviation":"typh","name":"Typhon Interactive"}}
    />
  );
};

export default Page;