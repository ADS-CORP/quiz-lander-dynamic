import { LandingPageContent } from '../types';

export const roundupOffer: LandingPageContent = {
  abbreviation: 'ru',
  title: "Roundup Compensation",
  headline: "Join Thousands Pursuing Justice",
  description: "Find out if you qualify for compensation",
  metaTitle: "Roundup Compensation",
  metaDescription: "Were you diagnosed with cancer after using Roundup weed killer? You may be eligible for significant compensation. Free case review available.",
  quizConfig: {
    apiUrl: "/api",
    debug: true
  },
  faqSection: {
    title: "Common Questions",
    subtitle: "Quick answers about getting compensation for your Roundup injuries",
    helpText: "Have more questions? Our team is here to help 24/7.",
    faqs: [
      {
        question: "What's the average settlement payout?",
        answer: "The potential settlement amount in a Roundup cancer lawsuit can vary significantly depending on several factors. However, most average settlements for Non-Hodgkin's Lymphoma caused by Roundup exposure are estimated to be between $100,000 and $2 million."
      },
      {
        question: "Which Roundup products are included?",
        answer: "All Roundup herbicide products containing glyphosate are included in this lawsuit. This includes all consumer and professional versions of Roundup, regardless of when they were manufactured or sold."
      },
      {
        question: "What health problems make me eligible?",
        answer: "You might have a case if you developed Non-Hodgkin's Lymphoma (NHL) or other forms of cancer after exposure to Roundup. Other serious health issues may also qualify - we can evaluate your specific situation."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "What if I don't have old receipts?",
        answer: "Don't worry about receipts. We can use other proof like photos of you using Roundup, work records, property maintenance records, or statements from family members or employers."
      },
      {
        question: "How long does it take to get money?",
        answer: "After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."
      },
      {
        question: "Will this affect my privacy?",
        answer: "We keep everything private. Your medical info and personal details are protected by law. Only the lawyers working on your case will see your information."
      },
      {
        question: "What if I'm not sure I have a case?",
        answer: "Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your Roundup exposure and health. There's no commitment to file a case."
      }
    ]
  },
  settlementSection: {
    title: "Recent Settlements",
    verifiedText: "Verified Settlement Example",
    settlements: [
      {
        name: "Dewayne J.",
        location: "California",
        amount: "289,000,000",
        detail: "Non-Hodgkin's Lymphoma from Roundup exposure",
        timeline: "2018 Settlement",
        link: "https://www.reuters.com/article/us-monsanto-cancer-lawsuit-idUSKBN1KV2HB"
      },
      {
        name: "Edwin H.",
        location: "California",
        amount: "80,000,000",
        detail: "NHL linked to Roundup use",
        timeline: "2019 Settlement",
        link: "https://www.nytimes.com/2019/03/27/us/monstanto-roundup-california-verdict.html"
      },
      {
        name: "Alva and Alberta P.",
        location: "California",
        amount: "2,055,000,000",
        detail: "Both developed NHL from Roundup exposure",
        timeline: "2019 Settlement",
        link: "https://www.theguardian.com/business/2019/may/13/monsanto-cancer-trial-bayer-roundup-couple"
      },
      {
        name: "Kenneth R.",
        location: "California",
        amount: "75,000,000",
        detail: "Developed cancer after decades of Roundup use",
        timeline: "2019 Settlement",
        link: "https://www.reuters.com/article/us-bayer-glyphosate-lawsuit-idUSKCN1R02B0"
      },
      {
        name: "Multi-District Settlement",
        location: "United States",
        amount: "10,900,000,000",
        detail: "Settlement for approximately 100,000 Roundup claims",
        timeline: "2020 Settlement",
        link: "https://www.nytimes.com/2020/06/24/business/roundup-settlement-lawsuits.html"
      }
    ]
  }
};
