import { LandingPage } from '@/components/templates/LandingPage';
import { seekingSettlementsBrand } from '@/config/brands/ss';
import { Metadata } from "next";

// Import brand config
const brand = seekingSettlementsBrand;

export const metadata: Metadata = {
  title: "Depo-Provera Compensation | Seeking Settlements",
  description: "Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.",
  openGraph: {
    title: "Depo-Provera Compensation | Seeking Settlements",
    description: "Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.",
    siteName: "Seeking Settlements",
    url: "https://seekingsettlements.com",
    type: "website"
  }
};

const Page = () => {
  const cta = undefined;
  const ctaText = undefined;
  const showEmail = undefined;
  const showCta = undefined;
  
  // Format CTA URL if needed
  const formattedCta = (() => {
    if (typeof cta !== 'string') return cta;
    
    const phoneRegex = /^\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
    const isPhoneNumber = phoneRegex.test(cta);
    const hasHttp = cta.toLowerCase().indexOf('http://') >= 0;
    const hasHttps = cta.toLowerCase().indexOf('https://') >= 0;
    
    if (isPhoneNumber || hasHttp || hasHttps) {
      return cta;
    }
    
    return `https://${cta}`;
  })();

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
         formattedCta ? (typeof formattedCta === 'string' && /^\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/.test(formattedCta) ? { phone: formattedCta } : { cta: formattedCta }) : 
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
      content={{"abbreviation":"depo","title":"Depo-Provera Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Depo-Provera Compensation","metaDescription":"Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Depo-Provera injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a Depo-Provera lawsuit can vary significantly depending on several factors. Cases involving severe bone density loss or other serious complications typically range from $100,000 to $500,000 or more, depending on the extent of injuries and medical expenses."},{"question":"What forms of Depo-Provera are included?","answer":"All forms of Depo-Provera (medroxyprogesterone acetate) injectable contraceptive are included, regardless of when or where you received the injections. This includes both brand name and generic versions."},{"question":"What health problems make me eligible?","answer":"You might have a case if you experienced bone density loss, osteoporosis, fractures, or other serious side effects after receiving Depo-Provera injections. Other health complications may also qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have all my medical records?","answer":"Don't worry about gathering all the records yourself. We can help obtain your medical records, injection history, and bone density scan results needed to support your case."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Depo-Provera use and health complications. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Michelle R.","location":"Illinois","amount":"425,000","detail":"Severe bone density loss from birth control","timeline":"2022 Settlement","link":"https://www.reuters.com/legal/litigation/birth-control-settlements"},{"name":"Jennifer L.","location":"Texas","amount":"375,000","detail":"Multiple fractures linked to contraceptive use","timeline":"2022 Settlement","link":"https://www.law360.com/articles/contraceptive-settlements"},{"name":"Amanda K.","location":"Florida","amount":"525,000","detail":"Osteoporosis from long-term injection use","timeline":"2023 Settlement","link":"https://www.bloomberg.com/news/articles/contraceptive-lawsuits"},{"name":"Lisa M.","location":"California","amount":"450,000","detail":"Bone complications from birth control","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/healthcare-contraceptive-settlements"},{"name":"Sandra P.","location":"New York","amount":"475,000","detail":"Severe bone loss from contraceptive injections","timeline":"2023 Settlement","link":"https://www.law360.com/articles/medical-device-settlements"}]}}}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={{"abbreviation":"ad","name":"A4D"}}
    />
  );
};

export default Page;