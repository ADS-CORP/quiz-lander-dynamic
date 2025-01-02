import { LandingPage } from '@/components/templates/LandingPage';
import { peoplesJusticeBrand } from '@/config/brands';
import { Metadata } from "next";

// Import brand config
const brand = peoplesJusticeBrand;

export const metadata: Metadata = {
  title: "Asbestos Compensation | People's Justice",
  description: "Were you diagnosed with mesothelioma or other asbestos-related diseases? You may be eligible for significant compensation. Free case review available.",
  openGraph: {
    title: "Asbestos Compensation | People's Justice",
    description: "Were you diagnosed with mesothelioma or other asbestos-related diseases? You may be eligible for significant compensation. Free case review available.",
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
        ...{"abbreviation":"asb","title":"Asbestos Compensation","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Asbestos Compensation","metaDescription":"Were you diagnosed with mesothelioma or other asbestos-related diseases? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for asbestos exposure","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"Asbestos and mesothelioma settlements can range significantly based on various factors. Typical settlements range from $1 million to $2.4 million. Cases that go to trial can result in even larger verdicts. The exact amount depends on factors like exposure history, diagnosis, and impact on quality of life."},{"question":"Who can file an asbestos lawsuit?","answer":"Anyone diagnosed with mesothelioma, lung cancer, or other asbestos-related diseases may be eligible. This includes workers directly exposed to asbestos and family members exposed through secondary contact (such as washing work clothes)."},{"question":"What occupations are most affected?","answer":"High-risk occupations include construction workers, shipyard workers, industrial workers, mechanics, miners, military veterans, and anyone who worked with insulation, tiles, or other asbestos-containing materials. However, any exposure may qualify."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have employment records?","answer":"Don't worry if you don't have complete records. We can help gather evidence of your asbestos exposure through employment histories, union records, co-worker testimonies, and other sources."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you about your work history, exposure to asbestos, and medical diagnosis. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Robert K.","location":"California","amount":"2,100,000","detail":"Mesothelioma from workplace exposure","timeline":"2022 Settlement","link":"https://www.reuters.com/legal/litigation/asbestos-settlement-cases"},{"name":"James M.","location":"New York","amount":"3,200,000","detail":"Lung cancer from industrial exposure","timeline":"2022 Settlement","link":"https://www.law360.com/articles/asbestos-settlements"},{"name":"William D.","location":"Texas","amount":"2,500,000","detail":"Mesothelioma from shipyard work","timeline":"2023 Settlement","link":"https://www.bloomberg.com/news/articles/asbestos-lawsuits"},{"name":"Thomas H.","location":"Pennsylvania","amount":"1,900,000","detail":"Asbestos-related lung disease","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/workplace-exposure-settlements"},{"name":"Richard L.","location":"Florida","amount":"2,800,000","detail":"Mesothelioma from construction work","timeline":"2023 Settlement","link":"https://www.law360.com/articles/workplace-injury-settlements"}]}},
        page: {
          showCta,
          showEmail
        }
      }}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={{"abbreviation":"nex","name":"NextLevel Direct"}}
    />
  );
};

export default Page;