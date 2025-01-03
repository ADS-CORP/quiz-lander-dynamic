import { LandingPageContent } from '../types';

export const ldsOffer: LandingPageContent = {
  abbreviation: 'ldsabuse',
  title: "LDS Abuse Compensation",
  headline: "Join Thousands Pursuing Justice",
  description: "Find out if you qualify for compensation",
  metaTitle: "LDS Abuse Compensation",
  metaDescription: "Were you a victim of abuse within the Mormon Church? You may be eligible for significant compensation. Free case review available.",
  quizConfig: {
    apiUrl: "/api",
    debug: true
  },
  faqSection: {
    title: "Common Questions",
    subtitle: "Quick answers about getting compensation for LDS Church abuse",
    helpText: "Have more questions? Our team is here to help 24/7.",
    faqs: [
      {
        question: "What's the average settlement payout?",
        answer: "Settlement amounts in LDS Church abuse cases can vary significantly based on several factors. Cases typically range from $100,000 to several million dollars, depending on the nature and extent of abuse, long-term impacts, and other factors. Each case is evaluated individually with the utmost care and consideration."
      },
      {
        question: "Who can file an LDS abuse lawsuit?",
        answer: "Anyone who experienced abuse within the Mormon Church or its affiliated organizations may be eligible to file a claim. This includes abuse by church leaders, members, or anyone associated with church activities, regardless of when the abuse occurred."
      },
      {
        question: "What types of abuse are covered?",
        answer: "All forms of abuse are covered, including physical, sexual, emotional, and psychological abuse. Cases may involve incidents at church buildings, during church activities, or by church-affiliated individuals."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "What if I don't have documentation?",
        answer: "Don't worry if you don't have documentation. We understand that many survivors may not have physical evidence. Your testimony is important, and we can help gather supporting evidence and documentation."
      },
      {
        question: "How long does it take to get money?",
        answer: "After you submit your claim, our team works diligently to process your case. While each case is unique, we strive to resolve claims as quickly as possible while ensuring you receive the maximum compensation you deserve."
      }
    ]
  },
  settlementSection: {
    title: "Recent Settlements",
    verifiedText: "Verified Settlement Example",
    settlements: [
      {
        name: "Boy Scouts Settlement",
        location: "National",
        amount: "2,400,000,000",
        detail: "Major institutional abuse settlement",
        timeline: "2022 Settlement",
        link: "https://www.reuters.com/legal/transactional/boy-scouts-bankruptcy-judge-approves-24-billion-sex-abuse-settlement"
      },
      {
        name: "Catholic Diocese Settlement",
        location: "California",
        amount: "660,000,000",
        detail: "Largest single diocese settlement",
        timeline: "2007 Settlement",
        link: "https://www.nytimes.com/2007/07/15/us/15abuse.html"
      },
      {
        name: "Religious Institution Case",
        location: "Montana",
        amount: "20,000,000",
        detail: "Institutional abuse settlement",
        timeline: "2020 Settlement",
        link: "https://www.reuters.com/article/us-church-abuse-settlement"
      },
      {
        name: "Church Organization",
        location: "New York",
        amount: "210,000,000",
        detail: "Major abuse settlement",
        timeline: "2018 Settlement",
        link: "https://www.nytimes.com/2018/05/31/us/church-sexual-abuse-settlement.html"
      },
      {
        name: "Religious Institution",
        location: "Pennsylvania",
        amount: "84,000,000",
        detail: "Institutional abuse settlement",
        timeline: "2021 Settlement",
        link: "https://www.reuters.com/legal/government/abuse-settlements"
      }
    ]
  }
};
