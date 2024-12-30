'use client';

import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const brand = {"name":"Seeking Settlements","abbreviation":"ss","domains":["qualify.seekingsettlements.com","localhost:3000"],"allowedOffers":["hair","ru","oxb","depo","lds","asb"],"logo":{"header":{"src":"/images/ss-logo-black.png","alt":"Seeking Settlements"}},"phone":"1-800-555-0000","domain":"seekingsettlements.com","headerCta":{"primary":"Call Now","secondary":"Chat With Us Now"},"footer":{"companyName":"Seeking Settlements","logo":{"src":"/images/ss-logo-white.png","alt":"Seeking Settlements Logo"},"emailSection":{"title":"Stay Updated","placeholder":"Enter your email","buttonText":"Subscribe"},"links":[{"text":"Privacy Policy","href":"https://seekingsettlements.com/privacy-policy"},{"text":"Terms of Service","href":"https://seekingsettlements.com/terms-of-service"},{"text":"Cookie Policy","href":"https://seekingsettlements.com/cookie-policy"},{"text":"Do Not Sell or Share My Personal Info","href":"https://seekingsettlements.com/data-control"}],"legalText":"Seeking Settlements is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. Seeking Settlements does not endorse or recommend any particular law firm and has not analyzed your submissions."},"theme":{"primaryColor":"#000000","secondaryColor":"#1a1a1a","headerBackground":"#ffffff","headerText":"#000000","ctaBackground":"#000000","ctaText":"#ffffff","footerBackground":"#000000","footerText":"#ffffff","settlementCarouselBackground":"#1a1a1a","settlementCarouselText":"#ffffff","faqBackground":"#ffffff","faqExpandedBackground":"#f8f9fa","faqText":"#000000","quizBackground":"#ffffff","trafficCounterBackground":"#f5f5f5","trafficCounterText":"#000000","buttonBackground":"#000000","buttonText":"#ffffff","linkColor":"#000000"}};
  const offerContent = {"abbreviation":"depo","title":"Depo-Provera Lawsuit | Birth Control Injection Settlement","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Depo-Provera Lawsuit Compensation - Free Case Review","metaDescription":"Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Depo-Provera injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a Depo-Provera lawsuit can vary significantly depending on several factors. Cases involving severe bone density loss or other serious complications typically range from $100,000 to $500,000 or more, depending on the extent of injuries and medical expenses."},{"question":"What forms of Depo-Provera are included?","answer":"All forms of Depo-Provera (medroxyprogesterone acetate) injectable contraceptive are included, regardless of when or where you received the injections. This includes both brand name and generic versions."},{"question":"What health problems make me eligible?","answer":"You might have a case if you experienced bone density loss, osteoporosis, fractures, or other serious side effects after receiving Depo-Provera injections. Other health complications may also qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have all my medical records?","answer":"Don't worry about gathering all the records yourself. We can help obtain your medical records, injection history, and bone density scan results needed to support your case."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Depo-Provera use and health complications. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Michelle R.","location":"Illinois","amount":"425,000","detail":"Severe bone density loss from birth control","timeline":"2022 Settlement","link":"https://www.reuters.com/legal/litigation/birth-control-settlements"},{"name":"Jennifer L.","location":"Texas","amount":"375,000","detail":"Multiple fractures linked to contraceptive use","timeline":"2022 Settlement","link":"https://www.law360.com/articles/contraceptive-settlements"},{"name":"Amanda K.","location":"Florida","amount":"525,000","detail":"Osteoporosis from long-term injection use","timeline":"2023 Settlement","link":"https://www.bloomberg.com/news/articles/contraceptive-lawsuits"},{"name":"Lisa M.","location":"California","amount":"450,000","detail":"Bone complications from birth control","timeline":"2023 Settlement","link":"https://www.reuters.com/legal/healthcare-contraceptive-settlements"},{"name":"Sandra P.","location":"New York","amount":"475,000","detail":"Severe bone loss from contraceptive injections","timeline":"2023 Settlement","link":"https://www.law360.com/articles/medical-device-settlements"}]}};
  const buyer = {"abbreviation":"ad","name":"A4D"};

  return (
    <LandingPage
      brand={brand}
      content={offerContent}
      source="fb"
      quizId="f7dd5270-117a-4c2e-9eec-bc20b73c8a03"
      buyer={buyer}
    />
  );
}