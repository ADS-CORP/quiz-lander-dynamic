import { LandingPage } from '@/components/templates/LandingPage';
import { peoplesJusticeBrand } from '@/config/brands';
import { Metadata } from "next";

// Import brand config
const brand = peoplesJusticeBrand;

export const metadata: Metadata = {
  title: "Hair Relaxer Compensation | People's Justice",
  description: "Were you diagnosed with cancer after using hair relaxers? You may be eligible for significant compensation. Free case review available.",
  openGraph: {
    title: "Hair Relaxer Compensation | People's Justice",
    description: "Were you diagnosed with cancer after using hair relaxers? You may be eligible for significant compensation. Free case review available.",
    siteName: "People's Justice",
    url: "https://peoplesjustice.info",
    type: "website"
  }
};

const Page = () => {
  const cta = "tel:17175868570";
  const ctaText = {"header":"Call Now","footer":"Chat With Us Now"};
  const showEmail = true;
  const showCta = true;
  
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
        ...{"abbreviation":"hair","title":"Hair Relaxer Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Hair Relaxer Compensation","metaDescription":"Were you diagnosed with cancer after using hair relaxers? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your hair straightener injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a hair relaxer uterine cancer lawsuit can vary significantly depending on several factors. However, most average settlements for uterine cancer caused by hair relaxer lawsuits are estimated to be between $100,000 and $2 million."},{"question":"Is there a time limit on filing a case?","answer":"Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."},{"question":"Which hair straightener brands are part of this?","answer":"All major chemical hair relaxer brands are included, like Dark & Lovely, Just For Me, Motions, TCB Naturals, Olive Oil Relaxer, and African Pride. You don't need to remember exact brands - we'll help figure that out."},{"question":"What health problems make me eligible?","answer":"You might have a case if you got uterine cancer, ovarian cancer, uterine fibroids, or endometriosis after using chemical hair straighteners. Other health issues may qualify too - just ask us to check."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"Will I have to go to court?","answer":"Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."},{"question":"What if I don't have old receipts?","answer":"Don't worry about receipts. We can use other proof like photos of you with straightened hair, statements from family or your hairstylist, or even old social media posts."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"What percentage will the law firm take from my settlement?","answer":"Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your hair straightener use and health. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Jacqueline F.","location":"Alabama","amount":"72,000,000","detail":"Ovarian cancer from feminine hygiene product","timeline":"2016 Settlement","link":"https://www.bbc.com/news/world-us-canada-35648252"},{"name":"Gloria R.","location":"South Dakota","amount":"55,000,000","detail":"Ovarian cancer from personal care product","timeline":"2016 Settlement","link":"https://abc7news.com/johnson--court-case-talcum-powder-cancer/1320456/"},{"name":"Deborah G.","location":"California","amount":"70,100,000","detail":"Cancer linked to long-term feminine product use","timeline":"2016 Settlement","link":"https://www.foxnews.com/health/jury-awards-more-than-70m-to-woman-in-johnson-johnson-baby-powder-lawsuit"},{"name":"Eva E.","location":"California","amount":"417,000,000","detail":"Landmark personal care product cancer case","timeline":"2017 Settlement","link":"https://www.nytimes.com/2017/08/22/health/417-million-awarded-in-suit-tying-johnsons-baby-powder-to-cancer.html"},{"name":"Lois S.","location":"Virginia","amount":"110,000,000","detail":"Successful cancer litigation from product exposure","timeline":"2017 Settlement","link":"https://www.usatoday.com/story/money/2017/05/05/johnson-johnson-talc-verdict/101320524/"}]}},
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