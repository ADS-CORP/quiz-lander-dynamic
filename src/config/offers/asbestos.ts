import { LandingPageContent } from '../types';

export const asbestosOffer: LandingPageContent = {
  abbreviation: 'asb',
  title: "Asbestos Lawsuit | Mesothelioma Settlement",
  headline: "Join Thousands Pursuing Justice",
  description: "Find out if you qualify for compensation",
  metaTitle: "Asbestos Exposure Lawsuit Compensation - Free Case Review",
  metaDescription: "Were you diagnosed with mesothelioma or other asbestos-related diseases? You may be eligible for significant compensation. Free case review available.",
  quizConfig: {
    apiUrl: "https://quiz-widget-backend-685730230e63.herokuapp.com/api",
    debug: true,
    cors: {
      origin: "*",
      credentials: false
    }
  },
  faqSection: {
    title: "Common Questions",
    subtitle: "Quick answers about getting compensation for asbestos exposure",
    helpText: "Have more questions? Our team is here to help 24/7.",
    faqs: [
      {
        question: "What's the average settlement payout?",
        answer: "Asbestos and mesothelioma settlements can range significantly based on various factors. Typical settlements range from $1 million to $2.4 million. Cases that go to trial can result in even larger verdicts. The exact amount depends on factors like exposure history, diagnosis, and impact on quality of life."
      },
      {
        question: "Who can file an asbestos lawsuit?",
        answer: "Anyone diagnosed with mesothelioma, lung cancer, or other asbestos-related diseases may be eligible. This includes workers directly exposed to asbestos and family members exposed through secondary contact (such as washing work clothes)."
      },
      {
        question: "What occupations are most affected?",
        answer: "High-risk occupations include construction workers, shipyard workers, industrial workers, mechanics, miners, military veterans, and anyone who worked with insulation, tiles, or other asbestos-containing materials. However, any exposure may qualify."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "What if I don't have employment records?",
        answer: "Don't worry if you don't have complete records. We can help gather evidence of your asbestos exposure through employment histories, union records, co-worker testimonies, and other sources."
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
        answer: "Just ask us! It's free to check if you qualify. We'll ask you about your work history, exposure to asbestos, and medical diagnosis. There's no commitment to file a case."
      }
    ]
  },
  settlementSection: {
    title: "Recent Settlements",
    verifiedText: "Verified Settlement Example",
    settlements: [
      {
        name: "Robert K.",
        location: "California",
        amount: "2,100,000",
        detail: "Mesothelioma from workplace exposure",
        timeline: "2022 Settlement",
        link: "https://www.reuters.com/legal/litigation/asbestos-settlement-cases"
      },
      {
        name: "James M.",
        location: "New York",
        amount: "3,200,000",
        detail: "Lung cancer from industrial exposure",
        timeline: "2022 Settlement",
        link: "https://www.law360.com/articles/asbestos-settlements"
      },
      {
        name: "William D.",
        location: "Texas",
        amount: "2,500,000",
        detail: "Mesothelioma from shipyard work",
        timeline: "2023 Settlement",
        link: "https://www.bloomberg.com/news/articles/asbestos-lawsuits"
      },
      {
        name: "Thomas H.",
        location: "Pennsylvania",
        amount: "1,900,000",
        detail: "Asbestos-related lung disease",
        timeline: "2023 Settlement",
        link: "https://www.reuters.com/legal/workplace-exposure-settlements"
      },
      {
        name: "Richard L.",
        location: "Florida",
        amount: "2,800,000",
        detail: "Mesothelioma from construction work",
        timeline: "2023 Settlement",
        link: "https://www.law360.com/articles/workplace-injury-settlements"
      }
    ]
  }
};
