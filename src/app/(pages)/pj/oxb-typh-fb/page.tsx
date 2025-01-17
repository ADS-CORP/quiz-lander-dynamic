import { LandingPage } from '@/components/templates/LandingPage';
import { peoplesJusticeBrand } from '@/config/brands';
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
        ...{"abbreviation":"oxb","title":"Oxbryta Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Oxbryta Compensation","metaDescription":"Did you experience serious side effects after taking Oxbryta for sickle cell disease? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Oxbryta injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in an Oxbryta lawsuit can vary significantly depending on several factors. Settlement amounts are typically based on the severity of side effects, medical expenses, and other damages. Cases involving serious complications may result in settlements ranging from $150,000 to over $1 million."},{"question":"Is there a time limit on filing a case?","answer":"Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."},{"question":"Which Oxbryta products are included?","answer":"All forms of Oxbryta (voxelotor) prescribed for sickle cell disease are included in this lawsuit, including tablets and dispersible tablet forms for both adult and pediatric patients."},{"question":"What side effects make me eligible?","answer":"You might have a case if you experienced serious side effects such as severe allergic reactions, persistent headaches, diarrhea, abdominal pain, fatigue, or other significant complications while taking Oxbryta. Other health issues may qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"Will I have to go to court?","answer":"Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."},{"question":"What if I don't have all my medical records?","answer":"Don't worry about gathering all the records yourself. We can help obtain your medical records, prescription history, and other documentation needed to support your case."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"What percentage will the law firm take from my settlement?","answer":"Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Oxbryta use and health complications. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Terrence A.","location":"Louisiana","amount":"36,800,000","detail":"Severe complications from blood sugar medication","timeline":"2014 Settlement","link":"https://www.reuters.com/article/markets/stocks/us-judge-slashes-9-bln-award-vs-takeda-lilly-over-diabetes-drug-idUSL1N0SM2GG/"},{"name":"Andrew Y.","location":"Pennsylvania","amount":"70,000,000","detail":"Serious side effects from antipsychotic drug","timeline":"2016 Settlement","link":"https://www.bloomberg.com/news/articles/2019-11-26/j-j-fails-to-get-70-million-risperdal-award-tossed-on-appeal"},{"name":"Stevie G.","location":"Illinois","amount":"15,000,000","detail":"Birth defect from psychiatric medication","timeline":"2017 Settlement","link":"https://www.reuters.com/article/business/healthcare-pharmaceuticals/abbvie-must-pay-15-million-in-depakote-birth-defect-trial-jury-idUSKBN1902LI/"},{"name":"Mariola Z.","location":"Illinois","amount":"14,000,000","detail":"Suffered stroke after taking birth control drug","timeline":"2014 Settlement","link":"https://www.foxnews.com/health/14-million-awarded-in-lawsuit-linking-birth-control-pill-yasmin-to-stroke"},{"name":"Lyam K.","location":"Pennsylvania","amount":"2,500,000","detail":"Birth defects from antidepressant medication","timeline":"2009 Settlement","link":"https://www.forbes.com/sites/robwaters/2012/07/12/glaxosmithklines-3-billion-hit-deterrent-or-business-expense/"}]}},
        page: {
          showCta,
          showEmail
        }
      }}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={{"abbreviation":"typh","name":"Typhon Interactive"}}
    />
  );
};

export default Page;