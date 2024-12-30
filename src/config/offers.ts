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
  },
  'roundup': {
    abbreviation: 'ru',
    title: "Roundup Lawsuit | Weed Killer Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "Roundup Lawsuit Compensation - Free Case Review",
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
          answer: "Settlement amounts vary based on individual circumstances, including exposure duration and medical conditions. Previous Roundup settlements have ranged from $5,000 to over $250,000."
        },
        {
          question: "Who can file a Roundup lawsuit?",
          answer: "If you were exposed to Roundup and later developed cancer, particularly Non-Hodgkin's Lymphoma, you may be eligible to file a claim. This includes agricultural workers, landscapers, and home gardeners."
        },
        {
          question: "How long do I have to file a claim?",
          answer: "Time limits vary by state. It's important to act quickly as there are strict deadlines. Contact us now for a free evaluation to understand your options."
        },
        {
          question: "What evidence do I need?",
          answer: "Helpful evidence includes proof of Roundup use (receipts, photos), medical records showing diagnosis, and documentation of exposure. However, don't worry if you don't have all of these - we can help gather evidence."
        }
      ]
    }
  },
  'oxbryta': {
    abbreviation: 'oxb',
    title: "Oxbryta Lawsuit | Sickle Cell Treatment Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "Oxbryta Lawsuit Compensation - Free Case Review",
    metaDescription: "Did you experience serious side effects after taking Oxbryta for sickle cell disease? You may be eligible for significant compensation. Free case review available.",
    quizConfig: {
      apiUrl: "/api",
      debug: true
    },
    faqSection: {
      title: "Common Questions",
      subtitle: "Quick answers about getting compensation for your Oxbryta injuries",
      helpText: "Have more questions? Our team is here to help 24/7.",
      faqs: [
        {
          question: "What's the average settlement payout?",
          answer: "Settlement amounts vary based on individual circumstances, including the severity of side effects and medical complications. Each case is unique and evaluated individually."
        },
        {
          question: "Who can file an Oxbryta lawsuit?",
          answer: "If you or a loved one took Oxbryta for sickle cell disease and experienced serious side effects, you may be eligible to file a claim. This includes patients who suffered complications while taking the medication."
        },
        {
          question: "How long do I have to file a claim?",
          answer: "Time limits vary by state. It's important to act quickly as there are strict deadlines. Contact us now for a free evaluation to understand your options."
        },
        {
          question: "What evidence do I need?",
          answer: "Helpful evidence includes medical records showing Oxbryta prescription and treatment, documentation of side effects, and related medical expenses. Don't worry if you don't have all of these - we can help gather evidence."
        }
      ]
    }
  },
  'depoprovera': {
    abbreviation: 'depo',
    title: "Depo-Provera Lawsuit | Birth Control Injection Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "Depo-Provera Lawsuit Compensation - Free Case Review",
    metaDescription: "Did you suffer bone density loss or other serious side effects after using Depo-Provera? You may be eligible for significant compensation. Free case review available.",
    quizConfig: {
      apiUrl: "/api",
      debug: true
    },
    faqSection: {
      title: "Common Questions",
      subtitle: "Quick answers about getting compensation for your Depo-Provera injuries",
      helpText: "Have more questions? Our team is here to help 24/7.",
      faqs: [
        {
          question: "What's the average settlement payout?",
          answer: "Settlement amounts vary based on individual circumstances, including the severity of bone density loss and other medical complications. Each case is unique and evaluated individually."
        },
        {
          question: "Who can file a Depo-Provera lawsuit?",
          answer: "If you received Depo-Provera injections and developed bone density loss or other serious side effects, you may be eligible to file a claim. This includes women who used the medication for birth control."
        },
        {
          question: "How long do I have to file a claim?",
          answer: "Time limits vary by state. It's important to act quickly as there are strict deadlines. Contact us now for a free evaluation to understand your options."
        },
        {
          question: "What evidence do I need?",
          answer: "Helpful evidence includes medical records showing Depo-Provera injections, bone density scans, and documentation of related medical complications. Don't worry if you don't have all of these - we can help gather evidence."
        }
      ]
    }
  },
  'ldsabuse': {
    abbreviation: 'lds',
    title: "LDS Abuse Lawsuit | Mormon Church Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "LDS Church Abuse Lawsuit Compensation - Free Case Review",
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
          answer: "Settlement amounts vary based on individual circumstances and the nature of abuse. Each case is unique and evaluated with the utmost care and confidentiality."
        },
        {
          question: "Who can file an LDS abuse lawsuit?",
          answer: "If you or a loved one experienced abuse within the Mormon Church or its affiliated organizations, you may be eligible to file a claim. This includes both recent and historical cases of abuse."
        },
        {
          question: "How long do I have to file a claim?",
          answer: "Time limits vary by state, and many states have extended deadlines for abuse cases. Contact us now for a free, confidential evaluation to understand your options."
        },
        {
          question: "What evidence do I need?",
          answer: "While documentation can be helpful, we understand that many survivors may not have physical evidence. Your testimony is important, and we can help gather supporting evidence. All consultations are completely confidential."
        }
      ]
    }
  },
  'asbestos': {
    abbreviation: 'asb',
    title: "Asbestos Lawsuit | Mesothelioma Settlement",
    headline: "Join Thousands Pursuing Justice",
    description: "Find out if you qualify for compensation",
    metaTitle: "Asbestos Exposure Lawsuit Compensation - Free Case Review",
    metaDescription: "Were you diagnosed with mesothelioma or other asbestos-related diseases? You may be eligible for significant compensation. Free case review available.",
    quizConfig: {
      apiUrl: "/api",
      debug: true
    },
    faqSection: {
      title: "Common Questions",
      subtitle: "Quick answers about getting compensation for asbestos exposure",
      helpText: "Have more questions? Our team is here to help 24/7.",
      faqs: [
        {
          question: "What's the average settlement payout?",
          answer: "Settlement amounts vary based on exposure history, diagnosis, and other factors. Mesothelioma settlements have historically ranged from $100,000 to several million dollars."
        },
        {
          question: "Who can file an asbestos lawsuit?",
          answer: "If you were exposed to asbestos and developed mesothelioma, lung cancer, or other related diseases, you may be eligible. This includes workers in construction, shipyards, factories, and their family members exposed through secondary contact."
        },
        {
          question: "How long do I have to file a claim?",
          answer: "Time limits vary by state. It's important to act quickly after diagnosis as there are strict deadlines. Contact us now for a free evaluation to understand your options."
        },
        {
          question: "What evidence do I need?",
          answer: "Helpful evidence includes work history, medical records showing diagnosis, and documentation of asbestos exposure. Don't worry if you don't have all of these - we can help gather evidence and identify exposure sources."
        }
      ]
    }
  }
};
