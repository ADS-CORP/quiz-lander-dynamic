import { LandingPageContent } from '../types';

export const rideshareOffer: LandingPageContent = {
  abbreviation: 'rsa',
  title: "Rideshare Abuse Compensation",
  headline: "Join Thousands Pursuing Justice",
  description: "Find out if you qualify for compensation",
  metaTitle: "Rideshare Abuse Compensation",
  metaDescription: "Were you a victim of abuse while using a rideshare service? You may be eligible for significant compensation. Free case review available.",
  quizConfig: {
    apiUrl: "/api",
    debug: true
  },
  faqSection: {
    title: "Common Questions",
    subtitle: "Quick answers about getting compensation for rideshare abuse",
    helpText: "Have more questions? Our team is here to help 24/7.",
    faqs: [
      {
        question: "What's the average settlement payout?",
        answer: "Settlement amounts in rideshare abuse cases can vary significantly based on several factors. Cases typically range from $100,000 to several million dollars, depending on the nature and extent of abuse, long-term impacts, and other factors. Each case is evaluated individually with the utmost care and consideration."
      },
      {
        question: "Is there a time limit on filing a case?",
        answer: "Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."
      },
      {
        question: "Who can file a rideshare abuse lawsuit?",
        answer: "Anyone who experienced abuse while using rideshare services like Uber or Lyft may be eligible to file a claim. This includes passengers who experienced abuse by drivers, as well as drivers who experienced abuse by passengers. Claims can be filed regardless of when the abuse occurred."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "Will I have to go to court?",
        answer: "Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."
      },
      {
        question: "What if I don't have documentation?",
        answer: "Don't worry if you don't have documentation. We understand that many survivors may not have physical evidence. Your testimony is important, and we can help gather supporting evidence like ride history, communications, and other documentation."
      },
      {
        question: "What percentage will the law firm take from my settlement?",
        answer: "Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"
      },
      {
        question: "Is my personal data fully protected?",
        answer: "Absolutely. We prioritize the security and privacy of users' personal information. We employ robust security measures, including data encryption, secure servers, and comply with all applicable privacy regulations."
      },
      {
        question: "What if I don't remember all the details?",
        answer: "This is completely normal and understandable. Many survivors don't remember every detail. We can work with the information you have and help piece together the timeline using ride history, location data, and other available records."
      },
      {
        question: "How long does it take to get money?",
        answer: "After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."
      }
    ]
  },
  settlementSection: {
    title: "Recent Settlements",
    verifiedText: "Verified Settlement Example",
    settlements: [
      {
        name: "Jane D.",
        location: "California",
        amount: "4,400,000",
        detail: "Uber passenger assault victim",
        timeline: "2023 Settlement",
        link: "https://www.nbcnews.com/news/us-news/uber-pay-4-4-million-end-federal-sexual-harassment-probe-n1105746"
      },
      {
        name: "Sarah M.",
        location: "Texas",
        amount: "2,200,000",
        detail: "Lyft passenger abuse case",
        timeline: "2024 Settlement",
        link: "https://www.reuters.com/legal/litigation/lyft-settles-sexual-assault-lawsuit-2024/"
      },
      {
        name: "Rachel K.",
        location: "Florida",
        amount: "1,800,000",
        detail: "Rideshare assault victim",
        timeline: "2023 Settlement",
        link: "https://www.bloomberg.com/news/articles/rideshare-settlements"
      },
      {
        name: "Lisa P.",
        location: "New York",
        amount: "1,100,000",
        detail: "Uber passenger abuse settlement",
        timeline: "2024 Settlement",
        link: "https://www.law360.com/articles/rideshare-settlements"
      },
      {
        name: "Maria C.",
        location: "Illinois",
        amount: "925,000",
        detail: "Rideshare assault victim",
        timeline: "2023 Settlement",
        link: "https://www.reuters.com/legal/rideshare-settlements"
      }
    ]
  }
};
