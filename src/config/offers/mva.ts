import { LandingPageContent } from '../types';

export const mvaOffer: LandingPageContent = {
  abbreviation: 'mva',
  title: "Motor Vehicle Accident Compensation",
  headline: "Get the Settlement You Deserve",
  description: "Find out if you qualify for compensation",
  metaTitle: "Motor Vehicle Accident Compensation",
  metaDescription: "Were you injured in a motor vehicle accident? You may be eligible for significant compensation. Free case review available.",
  quizConfig: {
    apiUrl: "/api",
    debug: true
  },
  faqSection: {
    title: "Common Questions",
    subtitle: "Quick answers about getting compensation for your motor vehicle accident",
    helpText: "Have more questions? Our team is here to help 24/7.",
    faqs: [
      {
        question: "What's the average settlement payout?",
        answer: "Motor vehicle accident settlements can vary significantly based on factors like injury severity, medical expenses, lost wages, and long-term impacts. While minor accidents might settle for $10,000-$25,000, serious injury cases often result in settlements ranging from $100,000 to over $1 million. Cases involving permanent disability or wrongful death may result in multi-million dollar settlements."
      },
      {
        question: "Is there a time limit on filing a case?",
        answer: "Yes, statutes of limitations differ by jurisdiction and case specifics. Your window to file will not stay open forever. Reach out now so we can connect you with a legal partner, clarify your remaining time, and work toward a settlement before it's too late."
      },
      {
        question: "What types of accidents are covered?",
        answer: "All types of motor vehicle accidents are covered, including car accidents, truck accidents, motorcycle crashes, pedestrian accidents, and bicycle collisions. This includes accidents involving commercial vehicles, rideshare services, and public transportation."
      },
      {
        question: "What injuries qualify for compensation?",
        answer: "Most injuries from motor vehicle accidents qualify for compensation, including whiplash, broken bones, spinal cord injuries, traumatic brain injuries, internal injuries, and soft tissue damage. Even if your injuries seem minor, you may still be eligible for compensation."
      },
      {
        question: "Do I need to pay anything upfront?",
        answer: "No. You pay nothing unless you win. Our lawyers only get paid if you get money from your case. There are no hidden costs or surprise fees."
      },
      {
        question: "Will I have to go to court?",
        answer: "Most cases typically settle out of court before a trial. However, if a courtroom appearance becomes necessary, our legal partners will stand by you, providing expert guidance at each step."
      },
      {
        question: "What if I don't have all the accident records?",
        answer: "Don't worry about gathering all the documentation yourself. We can help obtain police reports, medical records, witness statements, and other evidence needed to support your case."
      },
      {
        question: "How long does it take to get money?",
        answer: "After you submit the form above, our quick and secure AI settlement screening will connect with you via phone or text. If you qualify, you'll receive a retainer agreement from a trusted law firm interested in representing your case. Starting your claim as soon as possible gives you the best chance for a faster payout, as timelines depend on your unique circumstances.\n\nOur specialized legal partners are highly experienced in cases like yours and work tirelessly to move claims forward. Once your case is filed, your attorney can provide a clearer timeline and guide you through the process. Submit your form now to take the first easy step—your screening is free, simple, and puts you closer to the compensation you deserve."
      },
      {
        question: "What percentage will the law firm take from my settlement?",
        answer: "Exact percentages can vary by law firm, but the typical rate is usually around 40%. While that may sound high, it's important to remember that without the contingency fee system, most people could not afford high-powered legal representation. The 40% is not pure profit—it is the lifeline that keeps your lawyer motivated, financed, and ready to take on big, powerful defendants who would rather see you back down. At the same time, attorneys risk losing every penny they invest if the case does not end in a successful recovery"
      },
      {
        question: "Will this affect my privacy?",
        answer: "We keep everything private. Your medical information and personal details are protected by law. Only the lawyers working on your case will see your information."
      },
      {
        question: "What if I'm not sure I have a case?",
        answer: "Just ask us! It's free to check if you qualify. We'll ask you a few simple questions about your accident and injuries. There's no commitment to file a case."
      }
    ]
  },
  settlementSection: {
    title: "Recent Settlements",
    verifiedText: "Verified Settlement Example",
    settlements: [
      {
        name: "Victor M.",
        location: "California",
        amount: "8,900,000",
        detail: "Verdict won after $25,000 settlement offer",
        timeline: "2023 Settlement",
        link: "https://blog.cvn.com/car-crash-victim-awarded-7.9m-beating-25k-settlement-offer-following-rare-directed-verdict-win"
      },
      {
        name: "Melvin H.",
        location: "Georgia",
        amount: "1,700,000,000",
        detail: "Ford roof collapse led to victim's death",
        timeline: "2022 Verdict",
        link: "https://edition.cnn.com/2022/08/22/business/ford-1-7-billion-dollar-verdict/index.html"
      },
      {
        name: "Hector V.",
        location: "New York",
        amount: "1,450,000",
        detail: "Multiple injuries from truck collision",
        timeline: "2023 Settlement",
        link: "https://www.law.com/njlawjournal/2023/11/30/rear-end-truck-collision-nets-1-45-million-settlement-for-injured-driver/"
      },
      {
        name: "Elizabeth S.",
        location: "California",
        amount: "2,100,000",
        detail: "Vehicle collided with tractor trailer",
        timeline: "2022 Settlement",
        link: "https://www.law.com/dailybusinessreview/2022/09/21/florida-jury-awards-2-million-verdict-over-tractor-trailer-crash/"
      },
      {
        name: "Melina P.",
        location: "Connecticut",
        amount: "575,000",
        detail: "Neck pain from vehicle collision",
        timeline: "2023 Settlement",
        link: "https://www.law.com/ctlawtribune/2023/12/08/carter-mario-secures-575000-settlement-in-vehicle-collision-case/"
      }
    ]
  }
};
