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
        question: "Is there a time limit on filing a case?",
        answer: "Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "Are you affiliated with the Church in any capacity?",
        answer: "No. We act independently from any church organization, with the goal of seeking justice for those who have experienced abuse."
      },
      {
        question: "What if I don't have documentation?",
        answer: "Don't worry if you don't have documentation. We understand that many survivors may not have physical evidence. Your testimony is important, and we can help gather supporting evidence and documentation."
      },
      {
        question: "What if I don't remember the name of my abuser?",
        answer: "Forgetting the name is more common than you might think. If you can point them out in an old photo, that is often enough for your legal team to proceed."
      },
      {
        question: "Will I have to go to court and face my abuser?",
        answer: "Probably not, most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."
      },
      {
        question: "What percentage will the law firm take from my settlement?",
        answer: "Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"
      },
      {
        question: "Is my personal data fully protected",
        answer: "Absolutely. We prioritize the security and privacy of users' personal information. We employ robust security measures, including data encryption, secure servers, and comply with all applicable privacy regulations."
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
        amount: "2,280,000,000",
        detail: "LDS Church abuse victim",
        timeline: "2023 Verdict",
        link: "https://fortune.com/2023/04/28/2-3-billion-sexual-abuse-case-jury-verdict-mormon-church-latter-day-saints/"
      },
      {
        name: "John D.",
        location: "Washington",
        amount: "1,100,000",
        detail: "Childhood LDS abuse victim",
        timeline: "2024 Settlement",
        link: "https://floodlit.org/a/a519/"
      },
      {
        name: "Church Organization",
        location: "California",
        amount: "880,000,000",
        detail: "Major religious institution abuse settlement",
        timeline: "2024 Settlement",
        link: "https://www.usatoday.com/story/news/nation/2024/10/17/los-angeles-archdiocese-child-sexual-abuse-settlement/75711875007/"
      },
      {
        name: "Religious Institution",
        location: "New York",
        amount: "323,000,000",
        detail: "Institutional abuse settlement",
        timeline: "2024 Settlement",
        link: "https://www.reuters.com/world/us/new-york-catholic-diocese-reaches-323-mln-sex-abuse-settlement-2024-09-26/"
      },
      {
        name: "Jeremiah S.",
        location: "California",
        amount: "3,000,000",
        detail: "Mormon church abuse victim",
        timeline: "2001 Settlement",
        link: "https://www.nytimes.com/2001/09/05/us/mormons-paying-3-million-to-settle-sex-abuse-case.html"
      }
    ]
  }
};
