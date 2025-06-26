import { LandingPage } from '@/components/templates/LandingPage';
import { weBuyLawsuitsBrand } from '@/config/brands';
import { Metadata } from "next";

// Import brand config
const brand = weBuyLawsuitsBrand;

export const metadata: Metadata = {
  title: "PFAS & AFFF Water Contamination Compensation | We Buy Lawsuits",
  description: "Were you exposed to PFAS or AFFF foam contamination in your tap water or at work? You may be eligible for significant compensation. Free case review available.",
  openGraph: {
    title: "PFAS & AFFF Water Contamination Compensation | We Buy Lawsuits",
    description: "Were you exposed to PFAS or AFFF foam contamination in your tap water or at work? You may be eligible for significant compensation. Free case review available.",
    siteName: "We Buy Lawsuits",
    url: "https://webuylawsuits.com",
    type: "website"
  }
};

const Page = () => {
  const cta = undefined;
  const ctaText = undefined;
  const showEmail = false;
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
        ...{"abbreviation":"pfas","title":"PFAS Water Contamination Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"PFAS & AFFF Water Contamination Compensation","metaDescription":"Were you exposed to PFAS or AFFF foam contamination in your tap water or at work? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for PFAS water contamination injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a PFAS water contamination lawsuit can vary significantly depending on several factors. PFAS settlements range from municipal water system cases in the tens of millions to individual claims that can potentially reach hundreds of thousands of dollars depending on exposure level and health impacts."},{"question":"Is there a time limit on filing a case?","answer":"Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."},{"question":"What are PFAS and AFFF?","answer":"PFAS (Per- and Polyfluoroalkyl Substances) are a group of manufactured chemicals used in many consumer products and industrial applications since the 1940s. AFFF (Aqueous Film-Forming Foam) is a firefighting foam containing PFAS that has been used extensively by military and civilian firefighters. These chemicals are known as 'forever chemicals' because they don't break down in the environment or the human body."},{"question":"What health problems make me eligible?","answer":"You might have a case if you developed one of several conditions linked to PFAS exposure, including kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, pregnancy-induced hypertension/preeclampsia, or other serious health issues. Our evaluation can help determine if your specific condition qualifies."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"Will I have to go to court?","answer":"Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."},{"question":"How do I know if I was exposed to PFAS?","answer":"You may have been exposed to PFAS if you lived or worked near facilities that manufactured or extensively used PFAS chemicals, military bases where AFFF was used, or if you consumed contaminated water. Environmental testing or water quality reports for your area can help confirm exposure. Our legal team can help gather this evidence."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"What percentage will the law firm take from my settlement?","answer":"Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your PFAS exposure and health. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"DuPont","location":"Ohio/West Virginia","amount":"670,700,000","detail":"Water contamination affecting 3,500 residents","timeline":"2017 Settlement","link":"https://www.reuters.com/article/us-du-pont-lawsuit-west-virginia-idUSKBN15S18U"},{"name":"3M Company","location":"Minnesota","amount":"850,000,000","detail":"Groundwater contamination settlement","timeline":"2018 Settlement","link":"https://www.mprnews.org/story/2018/02/20/minnesota-3m-pfcs-settlement"},{"name":"Various Manufacturers","location":"Michigan","amount":"54,000,000","detail":"Settlement for contamination in Wolverine, MI","timeline":"2020 Settlement","link":"https://www.mlive.com/news/grand-rapids/2020/02/54m-wolverine-worldwide-3m-pfas-settlement-gets-preliminary-approval.html"},{"name":"Multi-District Settlement","location":"US","amount":"4,000,000,000","detail":"Settlement for water systems contaminated with PFAS","timeline":"2023 Settlement","link":"https://www.npr.org/2023/06/22/1183636743/3m-pfas-settlement-water-systems-forever-chemicals"},{"name":"Firefighter Class Action","location":"Multiple States","amount":"11,500,000","detail":"Settlement for firefighters exposed to AFFF","timeline":"2021 Settlement","link":"https://www.classaction.org/news/class-action-settlement-11.5m-deal-reached-to-resolve-certain-afff-firefighting-foam-blood-testing-claims"},{"name":"Tyco Fire Products","location":"Wisconsin","amount":"17,500,000","detail":"Settlement for PFAS contamination from firefighting foam","timeline":"2022 Settlement","link":"https://www.wpr.org/tyco-johnson-controls-settle-pfas-lawsuit-marinette-17-5m"},{"name":"Multiple Defendants","location":"United States","amount":"10,300,000,000","detail":"Settlement for PFAS claims by water providers","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/dupont-chemours-corteva-reach-10-bln-settlement-resolve-forever-chemicals-claims-2023-06-30/"}]}},
        page: {
          showCta,
          showEmail
        }
      }}
      source="fb"
      quizId="92b4c017-ad63-4021-90d9-8d9514ce9b2e"
      buyer={{"abbreviation":"ad","name":"A4D"}}
    />
  );
};

export default Page;