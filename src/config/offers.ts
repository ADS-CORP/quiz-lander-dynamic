import { LandingPageContent } from './types';

export const offers: Record<string, LandingPageContent & { abbreviation: string }> = {
  'hairrelaxer': {
    abbreviation: 'hair',
    title: "Hair Relaxer Lawsuit | Chemical Hair Straightener Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "Hair Relaxer Lawsuit Compensation - Free Case Review",
    metaDescription: "Were you diagnosed with cancer after using hair relaxers? You may be eligible for significant compensation. Free case review available.",
    quizConfig: {
      apiUrl: "/api",
      debug: true
    },
    faqSection: {
      title: "Common Questions",
      subtitle: "Quick answers about getting compensation for your hair straightener injuries",
      helpText: "Have more questions? Our team is here to help 24/7.",
      faqs: [
        {
          question: "What's the average settlement payout?",
          answer: "The potential settlement amount in a hair relaxer uterine cancer lawsuit can vary significantly depending on several factors. However, most average settlements for uterine cancer caused by hair relaxer lawsuits are estimated to be between $100,000 and $2 million."
        },
        {
          question: "Which hair straightener brands are part of this?",
          answer: "All major chemical hair relaxer brands are included, like Dark & Lovely, Just For Me, Motions, TCB Naturals, Olive Oil Relaxer, and African Pride. You don't need to remember exact brands - we'll help figure that out."
        },
        {
          question: "What health problems make me eligible?",
          answer: "You might have a case if you got uterine cancer, ovarian cancer, uterine fibroids, or endometriosis after using chemical hair straighteners. Other health issues may qualify too - just ask us to check."
        },
        {
          question: "Do I need to pay anything upfront?",
          answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
        },
        {
          question: "What if I don't have old receipts?",
          answer: "Don't worry about receipts. We can use other proof like photos of you with straightened hair, statements from family or your hairstylist, or even old social media posts."
        },
        {
          question: "How long does it take to get money?",
          answer: "Most people get their money within 8-14 months. Some cases settle faster, others might take longer. We'll keep you updated every step of the way."
        },
        {
          question: "Will this affect my privacy?",
          answer: "We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."
        },
        {
          question: "What if I'm not sure I have a case?",
          answer: "Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your hair straightener use and health. There's no commitment to file a case."
        }
      ]
    },
    settlementSection: {
      title: "Recent Settlements",
      verifiedText: "Verified Settlement Example",
      settlements: [
        {
          name: "Jacqueline F.",
          location: "Alabama",
          amount: "72,000,000",
          detail: "Ovarian cancer from feminine hygiene product",
          timeline: "2016 Settlement",
          link: "https://www.bbc.com/news/world-us-canada-35648252"
        },
        {
          name: "Gloria R.",
          location: "South Dakota",
          amount: "55,000,000",
          detail: "Ovarian cancer from personal care product",
          timeline: "2016 Settlement",
          link: "https://abc7news.com/johnson--court-case-talcum-powder-cancer/1320456/"
        },
        {
          name: "Deborah G.",
          location: "California",
          amount: "70,100,000",
          detail: "Cancer linked to long-term feminine product use",
          timeline: "2016 Settlement",
          link: "https://www.foxnews.com/health/jury-awards-more-than-70m-to-woman-in-johnson-johnson-baby-powder-lawsuit"
        },
        {
          name: "Eva E.",
          location: "California",
          amount: "417,000,000",
          detail: "Landmark personal care product cancer case",
          timeline: "2017 Settlement",
          link: "https://www.nytimes.com/2017/08/22/health/417-million-awarded-in-suit-tying-johnsons-baby-powder-to-cancer.html"
        },
        {
          name: "Lois S.",
          location: "Virginia",
          amount: "110,000,000",
          detail: "Successful cancer litigation from product exposure",
          timeline: "2017 Settlement",
          link: "https://www.usatoday.com/story/money/2017/05/05/johnson-johnson-talc-verdict/101320524/"
        }
      ]
    }
  }
};
