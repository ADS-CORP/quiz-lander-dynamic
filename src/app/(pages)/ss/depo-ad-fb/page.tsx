import { LandingPage } from '@/components/templates/LandingPage';
import { seekingSettlementsBrand } from '@/config/brands';
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
    
    // Convert to string and check for protocols first
    const ctaStr = String(cta);
    const hasHttp = ctaStr.startsWith('http://');
    const hasHttps = ctaStr.startsWith('https://');
    const hasTel = ctaStr.startsWith('tel:');
    
    if (hasTel) {
      return ctaStr; // Already has tel: protocol
    }
    
    // More lenient phone number regex that accepts various formats
    const phoneRegex = /^[+]?[(]?[0-9]{1,3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4}$/;
    const isPhoneNumber = phoneRegex.test(ctaStr.replace(/D/g, ''));
    
    if (isPhoneNumber) {
      const cleanNumber = ctaStr.replace(/D/g, '');
      return 'tel:' + cleanNumber; // Add tel: protocol and strip non-digits
    } else if (hasHttp || hasHttps) {
      return ctaStr; // Already has http(s) protocol
    } else if (ctaStr.includes('.')) {
      return 'https://' + ctaStr; // Likely a domain name
    }
    return ctaStr; // Return as is for other cases
  })();
  
  // Helper function to safely check string equality
  const isEqual = (a: any, b: string) => typeof a === 'string' && a === b;

  // Helper function to safely get string property
  const getStringProp = (obj: any, prop: string) => {
    if (obj && typeof obj === 'object' && prop in obj) {
      return String(obj[prop]);
    }
    return undefined;
  };

  // Helper function to check if value is falsy
  const isFalsy = (value: any): boolean => {
    return value === false || value === 'false' || !value;
  };

  const pageBrandConfig = {
    ...brand,
    ...(isFalsy(showCta) ? {
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
         formattedCta ? (typeof formattedCta === 'string' && /^[+]?[(]?[0-9]{1,3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4}$/.test(formattedCta) ? { phone: formattedCta } : { cta: formattedCta }) : 
         {}),
      ...((ctaText && typeof ctaText === 'object') ? {
        ...(getStringProp(ctaText, 'header') === 'none' ? { hideHeaderCta: true } :
           getStringProp(ctaText, 'header') ? { headerCtaText: getStringProp(ctaText, 'header') } :
           {}),
        ...(getStringProp(ctaText, 'footer') === 'none' ? { hideFooterCta: true } :
           getStringProp(ctaText, 'footer') ? { footerCtaText: getStringProp(ctaText, 'footer') } :
           {})
      } : {})
    }),
    showEmail: showEmail
  };

  return (
    <LandingPage 
      brand={pageBrandConfig}
      content={{
        ...{"abbreviation":"depo","title":"Depo-Provera Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Depo-Provera Compensation","metaDescription":"Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Depo-Provera injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a Depo-Provera lawsuit can vary significantly depending on several factors. Cases involving severe bone density loss or other serious complications typically range from $100,000 to $500,000 or more, depending on the extent of injuries and medical expenses."},{"question":"Is there a time limit on filing a case?","answer":"Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."},{"question":"What forms of Depo-Provera are included?","answer":"All forms of Depo-Provera (medroxyprogesterone acetate) injectable contraceptive are included, regardless of when or where you received the injections. This includes both brand name and generic versions."},{"question":"What health problems make me eligible?","answer":"You might have a case if you experienced bone density loss, osteoporosis, fractures, or other serious side effects after receiving Depo-Provera injections. Other health complications may also qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"Will I have to go to court?","answer":"Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."},{"question":"What if I don't have all my medical records?","answer":"Don't worry about gathering all the records yourself. We can help obtain your medical records, injection history, and bone density scan results needed to support your case."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"What percentage will the law firm take from my settlement?","answer":"Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Depo-Provera use and health complications. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Michelle R.","location":"Illinois","amount":"425,000","detail":"Severe bone density loss from birth control","timeline":"2022 Settlement","link":"https://www.reuters.com/legal/litigation/birth-control-settlements"},{"name":"Jennifer L.","location":"Texas","amount":"375,000","detail":"Multiple fractures linked to contraceptive use","timeline":"2022 Settlement","link":"https://www.law360.com/articles/contraceptive-settlements"},{"name":"Amanda K.","location":"Florida","amount":"525,000","detail":"Osteoporosis from long-term injection use","timeline":"2023 Settlement","link":"https://www.bloomberg.com/news/articles/contraceptive-lawsuits"},{"name":"Lisa M.","location":"California","amount":"450,000","detail":"Bone complications from birth control","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/healthcare-contraceptive-settlements"},{"name":"Sandra P.","location":"New York","amount":"475,000","detail":"Severe bone loss from contraceptive injections","timeline":"2023 Settlement","link":"https://www.law360.com/articles/medical-device-settlements"}]}},
        page: {
          showCta,
          showEmail
        }
      }}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={{"abbreviation":"ad","name":"A4D"}}
    />
  );
};

export default Page;