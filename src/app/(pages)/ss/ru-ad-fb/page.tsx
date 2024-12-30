'use client';

import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const brand = {"name":"Seeking Settlements","abbreviation":"ss","domains":["qualify.seekingsettlements.com","localhost:3000"],"allowedOffers":["hair","ru","oxb","depo","lds","asb"],"logo":{"header":{"src":"/images/ss-logo-black.png","alt":"Seeking Settlements"}},"phone":"1-800-555-0000","domain":"seekingsettlements.com","headerCta":{"primary":"Call Now","secondary":"Chat With Us Now"},"footer":{"companyName":"Seeking Settlements","logo":{"src":"/images/ss-logo-white.png","alt":"Seeking Settlements Logo"},"emailSection":{"title":"Stay Updated","placeholder":"Enter your email","buttonText":"Subscribe"},"links":[{"text":"Privacy Policy","href":"https://seekingsettlements.com/privacy-policy"},{"text":"Terms of Service","href":"https://seekingsettlements.com/terms-of-service"},{"text":"Cookie Policy","href":"https://seekingsettlements.com/cookie-policy"},{"text":"Do Not Sell or Share My Personal Info","href":"https://seekingsettlements.com/data-control"}],"legalText":"Seeking Settlements is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. Seeking Settlements does not endorse or recommend any particular law firm and has not analyzed your submissions."},"theme":{"primaryColor":"#000000","secondaryColor":"#1a1a1a","headerBackground":"#ffffff","headerText":"#000000","ctaBackground":"#000000","ctaText":"#ffffff","footerBackground":"#000000","footerText":"#ffffff","settlementCarouselBackground":"#1a1a1a","settlementCarouselText":"#ffffff","faqBackground":"#ffffff","faqExpandedBackground":"#f8f9fa","faqText":"#000000","quizBackground":"#ffffff","trafficCounterBackground":"#f5f5f5","trafficCounterText":"#000000","buttonBackground":"#000000","buttonText":"#ffffff","linkColor":"#000000"}};
  const offerContent = {"abbreviation":"ru","title":"Roundup Lawsuit | Weed Killer Settlement","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Roundup Lawsuit Compensation - Free Case Review","metaDescription":"Were you diagnosed with cancer after using Roundup weed killer? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your Roundup injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a Roundup cancer lawsuit can vary significantly depending on several factors. However, most average settlements for Non-Hodgkin's Lymphoma caused by Roundup exposure are estimated to be between $100,000 and $2 million."},{"question":"Which Roundup products are included?","answer":"All Roundup herbicide products containing glyphosate are included in this lawsuit. This includes all consumer and professional versions of Roundup, regardless of when they were manufactured or sold."},{"question":"What health problems make me eligible?","answer":"You might have a case if you developed Non-Hodgkin's Lymphoma (NHL) or other forms of cancer after exposure to Roundup. Other serious health issues may also qualify - we can evaluate your specific situation."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have old receipts?","answer":"Don't worry about receipts. We can use other proof like photos of you using Roundup, work records, property maintenance records, or statements from family members or employers."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Roundup exposure and health. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Dewayne J.","location":"California","amount":"289,000,000","detail":"Non-Hodgkin's Lymphoma from Roundup exposure","timeline":"2018 Settlement","link":"https://www.reuters.com/article/us-monsanto-cancer-lawsuit-idUSKBN1KV2HB"},{"name":"Edwin H.","location":"California","amount":"80,000,000","detail":"NHL linked to Roundup use","timeline":"2019 Settlement","link":"https://www.nytimes.com/2019/03/27/us/monstanto-roundup-california-verdict.html"},{"name":"Alva and Alberta P.","location":"California","amount":"2,055,000,000","detail":"Both developed NHL from Roundup exposure","timeline":"2019 Settlement","link":"https://www.theguardian.com/business/2019/may/13/monsanto-cancer-trial-bayer-roundup-couple"},{"name":"Kenneth R.","location":"California","amount":"75,000,000","detail":"Developed cancer after decades of Roundup use","timeline":"2019 Settlement","link":"https://www.reuters.com/article/us-bayer-glyphosate-lawsuit-idUSKCN1R02B0"},{"name":"Multi-District Settlement","location":"United States","amount":"10,900,000,000","detail":"Settlement for approximately 100,000 Roundup claims","timeline":"2020 Settlement","link":"https://www.nytimes.com/2020/06/24/business/roundup-settlement-lawsuits.html"}]}};
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