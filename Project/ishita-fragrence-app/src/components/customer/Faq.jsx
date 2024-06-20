// FAQ component in React

import React, { useState } from 'react';
import './style.css';
import Footer from './Footer';
import Header from './Header';



const Faq = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    { question: 'I want a long lasting perfume. Please suggest.', answer: 'All our perfumes are long lasting. We suggest you select the fragrance based on the perfume family prefrence.' },
    { question: 'How long do you take to deliver.' , answer: 'It depends on your pincode/ delivery location. Orders to be delivered in India will take 2- 5 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.'},
    { question: 'what are your delivery charges.' , answer: 'We charge INR 60 for domestic orders below INR 1000. For order above INR 1000 we do not charge any shipping charges domestically. For international order, the shipping charges are based on the order and the country.'},
    { question: 'What is perfume ?' , answer: 'The word perfume comes from 2 Latin words. ‘Per’ meaning through and fume meaning smoke. This suggests one early way of creating a sweet smell was by burning fragrant woods. Perfumes have certainly been used for thousands of years. The Vedas are the earliest literary records available to mankind and Vedic literature comprising of the Samhitas, Brahmanas, Arayankas and the Upanishads vividly talking about Perfumery. Perfumes have certainly been used for thousands of years. The Vedas are the earliest literary records available to mankind and Vedic literature comprising of the Samhitas, Brahmanas, Arayankas and the Upanishads vividly talking about Perfumery.'},
    { question: 'What is the difference between Parfum, EDP, EDT, Aftershave and Cologne etc.?' , answer: 'These descriptions are used to identify the strength or concentration of perfume oil in a fragrance. The concentrations can vary from fragrance to fragrance, but here is an average guide. In general, the higher the percentage, the higher the price. So, when you like a fragrance, we suggest you explore its different concentrations. Attar/ Perfume Oil – 100%. Perfume – 20-25 % Eau de Parfum (EDP) – 15-20% Eau de Toilette (EDT) – 8-15%. Eau de Cologne (EDC) – 2-8%'},
    { question: 'What are the current offers running ?' , answer: 'Use code FIRSTISAK to get a 10% off on your first order. You can check the latest offers of www.isakfragrances.com/pages/isak-offers'},
    { question: 'What are top recommendations for Men ?' , answer: 'When selecting a perfume for men, you can go for more opulent ambers along with sophisticated fougéres; addictive gourmands, bigger, bolder perfumes and even musk-forward scents that smell utterly incredible on a man’s skin. Here is a link to help you select the best perfume for men. www.isakfragrances.com/collections/for-him'},
    { question: 'What are top recommendations for Women ?' , answer: 'We recommend Rain Kissed Rose Perfume, Love Song Perfume, 5th & Always Perfume. You can shop from here www.isakfragrances.com/collections/for-her'},
    { question: 'What are top selling products ?' , answer: 'Our Top selling products are First rain Attar, Above & Beyond Perfume, Love Song Perfume & Forest rain Perfume. You can shop from here www.isakfragrances.com/collections/bestsellers'},
    { question: 'What is first rain ?' , answer: 'The smell of earth after the fresh rains has been beautifully captured in this tiny bottle. You would instantly fall in the love with this mind-blowing fragrance. This natural attar will transport you to the first rain of the season where earth emanates that ever so calming & relaxing smell of petrichor. You can shop from here www.isakfragrances.com/products/first-rain-attar'},
    { question: 'Do you have any trial packs ?' , answer: 'Yes, we have trial packs for perfumes and attars. You can shop from here www.isakfragrances.com/collections/discovery-set'},
    { question: 'Where all do you deliver in India ?' , answer: 'We deliver all across India and to some International countries.'},
    { question: 'What are the signature fragrances offered by Isak Fragrances ?' , answer: 'We offer First Rain, Love Song, Above & Beyond, 5th & Always, Edge of Dreams, Dew of Life, Cosmic Dance. You can shop from here www.isakfragrances.com/collections/the-signature-collection'},
    { question: 'What is the shelf life of your fragrances ?' , answer: 'The fragrances are best for upto 2 years from the date of manufacturing'},
    { question: 'How can I track my order ?' , answer: 'Once you place an order, we share the shipping details on email/ whatsapp as soon as the order is shipped.'},
    { question: 'How much time does it take to deliver the order ?' , answer: 'It takes 2-5 working days to deliver in India. Its mostly dependant on the pincode.'},
    { question: 'What are the best-selling fragrances currently ?' , answer: 'Currently, the best selling ones are from our latest First Rain Collection - Forest rain & First Rain & rain Kissed rose. From the signature collection the bestsellers are Above & beyond & Love Song. You can shop from here www.isakfragrances.com/collections/bestsellers'},
    { question: 'How do I choose a fragrance as a gift ?' , answer: 'Selecting a gift pack is made easy with Isak. Now you can easily select a gift box for your loved ones from our gifting range. These are some of the best gift and are available in different budgets. Here is a link to help you select the best gift. www.isakfragrances.com/collections/gifting'},
    { question: 'What are some best gifting fragnances for aniversary ?' , answer: 'The Gift pack of with Signature collection would be one of the best gift for anniversary celebrations. Here is a link to help you select the best gift. www.isakfragrances.com/collections/gifting'},
    { question: 'What are some best gifting fragnances for birthdays ?' , answer: 'The Occasion Series or one of the Isak Gift boxes would be the best gifting idea for a birthday. you can even select the fragrance of your choice. Here is a link to help you select the best gift www.isakfragrances.com/collections/gifting'},
    { question: 'What are some best gifting fragnances for new year ?' , answer: 'You can gift one of the gift boxes as the perfect new year gifting. Here is a link to help you select the best gift https://isakfragrances.com/gifting'},
  
    { question: 'What are some best gifting fragnances for valentines days ?' , answer: 'You can give the beautiful perfume Love Song or the Emotion series - A pack of 5 perfumes based on 5 beautiful emotions in life. Here is a link to help you select the best gift https://isakfragrances.com/collections/gifting'},
    { question: 'What are some best gifting fragrances for my spouse ?' , answer: 'You can give the beautiful perfume Love Song or the Emotion series - A pack of 5 perfumes based on 5 beautiful emotions in life. Here is a link to help you select the best gift https://isakfragrances.com/collections/gifting'},
    { question: 'Are there any special offers or loyalty programs available ?' , answer: 'Yes, we do have a loyalty program. You earn coins on every purchase which you can redeem in your next purchase. We also have exclusive, VIP offer for our subscribers and VIP customers. https://isakfragrances.com/pages/isak-rewards'},
    { question: 'Do you offer international shipping ?' , answer: 'Yes, we do offer international.'},
    { question: 'Which all countries do you ship your products to ?' , answer: 'We ship attars to US, Canada, Dubai, UK, France, Ireland.'},
    { question: 'What is the shelf life of your fragrances ?' , answer: 'The fragrances are best for upto 2 years from the date of manufacturing'},
    { question: 'What are the ingredients for Isak fragrances ?' , answer: 'We use a blend of naturals and molecules and follow the IFRA standards.'},
    { question: 'How long does a fragrance typically last once applied ?' ,  answer:'The fragrance will last more than 10 hours if worn on clothes. Do not wear perfume on silk and white materials.'},
    { question: 'Can I buy isak fragrances from any stores ?',   answer: 'Yes, we are available in Lucknow, Bangalore, Goa, Jaipur, Ahmedabad, Vadodara and Bangalore. The other details can be found here https://isakfragrances.com/pages/store-locater' },
    { question: 'Where all can I buy Isak Fragnances products from ?' , answer: 'You can shop from our online shop www.isakfragrances.com We are also available on amazon, Nykaa, Myntra, Pernia Pop-up Shop. We are available Offline in Lucknow, Bangalore, Goa, Jaipur, Ahmedabad, Vadodara and Bangalore. The other details can be found here https://isakfragrances.com/pages/store-locater'},
    { question: ' What is the difference between Itar and perfume ?' , answer: 'Attars or Ittar is a 100% concentrated perfume oil while a perfume is a combination of perfume oil and a solvent base. Attars have a high density which is why they are applied by roll on or stick. Perfumes on the other hand can be used through a mist spray. Attars tend to last longer than perfumes.'},
    { question: 'What is unique about First Rain from Isak perfumes ?' , answer: 'The smell of earth after the fresh rains has been beautifully captured in this tiny bottle by Isak. You would instantly fall in the love with this mind-blowing fragrance. It has takenover the world as one of the most sought after fragrances. This attar will transport you to the first rain of the season where earth emanates that ever so calming & relaxing smell of petrichor. You can shop from here https://isakfragrances.com/products/first-rain-attar'},
    { question: 'What is the history of Isak perfumes ?' , answer: 'Isak has a strong legacy of over 170 years in perfumery. It has rich knowledge and deep expertise in perfumery and fragrance related products. You can know more about them here www.isakfragrances.com/pages/ourstory'},
    { question: 'Who is the founder of Isak Fragrance ?' , answer: 'The Founder & CEO of ISAK Fragrances - Vidushi Vijayvergiya’s voyage as a perfumer & serial entrepreneur to understand the new world as well as extensive interest and research in aroma customisation started from Switzerland, France and India. It led her to realise the real potential India-made perfumery possesses worldwide. Revolutionising the industry and shifting the power in the hands of the end user, Vidushi has revealed a line of exquisite blends, perfumes and a carefully curated bespoke perfumery kit.Having grown up around fragrances I have always been drawn to them and as I ventured towards exploring it more, I came to realise that Indian perfumery has its own unique charm. There are a lot of people who appreciate it but know little about the art. Thus, through ISAK my intention is to talk more about our roots, heritage and the charm in Indian perfumery and introduce it to the rest of the world to be mesmerised with - Vidushi Vijayvergiya. '},
    { question: ' What does ISAK mean ?' , answer: 'ISAK is a hindi word derived from ‘ISHQ’. It is pronounced as /IS(e)K/ and is largely used in the heartland of Uttar Pradesh, also our home.'},
    { question: 'Did Isak pefumes appear on Shark tank ?' , answer: 'Yes, Isak Perfumes came on Shark Tank India Season 1. They raised investment from Lenskart Founder Mr. Peyush Bansal.'},
    
  ];

  return (
    <div>

      <Header/>

    <div className="faq-title-container">
      <h1 className="faq-title">NEED HELP?</h1>
      <p className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>


    <div className="faq-container"> 
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${isOpen[index] ? 'open' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="toggle-icon">{isOpen[index] ? '-' : '+'}</span>
          </div>
          {isOpen[index] && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}

    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Faq;
