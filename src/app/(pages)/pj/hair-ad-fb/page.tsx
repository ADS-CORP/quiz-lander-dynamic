'use client';

import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const brand = {"name":"People's Justice","abbreviation":"pj","domains":["qualify.peoplesjustice.info"],"allowedOffers":["hair","ru","oxb","depo","lds","asb"],"logo":{"header":{"src":"/images/pj-logo1.png","alt":"People's Justice","height":48}},"phone":"1-800-555-0000","domain":"peoplesjustice.info","headerCta":{"primary":"Call Now","secondary":"Chat With Us Now"},"footer":{"companyName":"People's Justice","logo":{"src":"/images/pj-logo-white.svg","alt":"People's Justice Logo"},"emailSection":{"title":"Stay Updated","placeholder":"Enter your email","buttonText":"Subscribe"},"links":[{"text":"Privacy Policy","href":"https://peoplesjustice.info/privacy-policy"},{"text":"Terms of Service","href":"https://peoplesjustice.info/terms-of-service"},{"text":"Cookie Policy","href":"https://peoplesjustice.info/cookie-policy"},{"text":"Do Not Sell or Share My Personal Info","href":"https://peoplesjustice.info/data-control"}],"legalText":"People's Justice is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. People's Justice does not endorse or recommend any particular law firm and has not analyzed your submissions."},"theme":{"primaryColor":"#0284c7","secondaryColor":"#d31516","headerBackground":"#ffffff","headerText":"#000000","ctaBackground":"#d31516","ctaText":"#ffffff","footerBackground":"#1f2937","footerText":"#ffffff","settlementCarouselBackground":"#0284c7","settlementCarouselText":"#ffffff","trafficCounterBackground":"#e1f5fe","trafficCounterText":"#014361","quizBackground":"#ffffff","quizText":"#111827","faqExpandedBackground":"#f3f4f6","faqText":"#111827"}};
  const offerContent = {"abbreviation":"hair","title":"Hair Relaxer Lawsuit | Chemical Hair Straightener Settlement","headline":"Join Thousands Pursuing Justice","description":"Find out if you qualify for compensation","metaTitle":"Hair Relaxer Lawsuit Compensation - Free Case Review","metaDescription":"Were you diagnosed with cancer after using hair relaxers? You may be eligible for significant compensation. Free case review available.","quizConfig":{"apiUrl":"/api","debug":true},"faqSection":{"title":"Common Questions","subtitle":"Quick answers about getting compensation for your hair straightener injuries","helpText":"Have more questions? Our team is here to help 24/7.","faqs":[{"question":"What's the average settlement payout?","answer":"The potential settlement amount in a hair relaxer uterine cancer lawsuit can vary significantly depending on several factors. However, most average settlements for uterine cancer caused by hair relaxer lawsuits are estimated to be between $100,000 and $2 million."},{"question":"Which hair straightener brands are part of this?","answer":"All major chemical hair relaxer brands are included, like Dark & Lovely, Just For Me, Motions, TCB Naturals, Olive Oil Relaxer, and African Pride. You don't need to remember exact brands - we'll help figure that out."},{"question":"What health problems make me eligible?","answer":"You might have a case if you got uterine cancer, ovarian cancer, uterine fibroids, or endometriosis after using chemical hair straighteners. Other health issues may qualify too - just ask us to check."},{"question":"Do I need to pay anything upfront?","answer":"No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."},{"question":"What if I don't have old receipts?","answer":"Don't worry about receipts. We can use other proof like photos of you with straightened hair, statements from family or your hairstylist, or even old social media posts."},{"question":"How long does it take to get money?","answer":"After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."},{"question":"Will this affect my privacy?","answer":"We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."},{"question":"What if I'm not sure I have a case?","answer":"Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your hair straightener use and health. There's no commitment to file a case."}]},"settlementSection":{"title":"Recent Settlements","verifiedText":"Verified Settlement Example","settlements":[{"name":"Jacqueline F.","location":"Alabama","amount":"72,000,000","detail":"Ovarian cancer from feminine hygiene product","timeline":"2016 Settlement","link":"https://www.bbc.com/news/world-us-canada-35648252"},{"name":"Gloria R.","location":"South Dakota","amount":"55,000,000","detail":"Ovarian cancer from personal care product","timeline":"2016 Settlement","link":"https://abc7news.com/johnson--court-case-talcum-powder-cancer/1320456/"},{"name":"Deborah G.","location":"California","amount":"70,100,000","detail":"Cancer linked to long-term feminine product use","timeline":"2016 Settlement","link":"https://www.foxnews.com/health/jury-awards-more-than-70m-to-woman-in-johnson-johnson-baby-powder-lawsuit"},{"name":"Eva E.","location":"California","amount":"417,000,000","detail":"Landmark personal care product cancer case","timeline":"2017 Settlement","link":"https://www.nytimes.com/2017/08/22/health/417-million-awarded-in-suit-tying-johnsons-baby-powder-to-cancer.html"},{"name":"Lois S.","location":"Virginia","amount":"110,000,000","detail":"Successful cancer litigation from product exposure","timeline":"2017 Settlement","link":"https://www.usatoday.com/story/money/2017/05/05/johnson-johnson-talc-verdict/101320524/"}]}};
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