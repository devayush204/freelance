/**
 * This code was generated by Builder.io.
 */
import React from "react";
import NewServiceCard from "./NewServiceCard";

const ServiceSection = () => {
  const services = [
    {
      title: "QR Management Solutions",
      description:
        "Brandigo's QR Management Solutions provide businesses with a robust and efficient way to handle transactions through QR codes. Our services ensure seamless integration, quick setup, and reliable performance, allowing you to focus on what matters most—growing your business.",
      features: [
        "Custom QR Code Generation: Create personalized QR codes that align with your brand's identity.",
        "Secure Transactions: Ensure the highest level of security for all transactions.",
        "Easy Integration: Seamlessly integrate our QR solutions with your existing payment systems.",
        "Real-Time Reporting: Access real-time transaction data and analytics for better decision-making.",
        "Scalable Solutions: Suitable for businesses of all sizes, from small retailers to large enterprises.",
      ],
      benefits: [
        "Enhanced Customer Experience: Provide a convenient and fast payment method for your customers.",
        "Increased Efficiency: Streamline your payment processes and reduce transaction times.",
        "Cost-Effective: Minimize transaction fees and reduce the need for additional hardware.",
        "Brand Visibility: Promote your brand through custom-branded QR codes.",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/431623a927817afaeb9b9819fa59a7117f8fda814ed46e472fd6419f3a392147?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    },
    {
      title: "Soundbox Management Solutions",
      description:
        "Brandigo's Soundbox Management Solutions offer an innovative way to enhance customer interactions at the point of sale. Our soundbox solutions provide clear audio confirmations of transactions, improving customer confidence and satisfaction.",
      features: [
        "High-Quality Soundboxes: Durable and reliable soundboxes that deliver clear audio alerts.",
        "Seamless Integration: Easy integration with your existing payment systems.",
        "Real-Time Notifications: Immediate audio confirmation of transactions.",
        "Custom Branding: Soundboxes can be customized with your brand's logo and colors.",
        "Comprehensive Management: From procurement and integration to quality checks and dispatch, we handle it all.",
      ],
      benefits: [
        "Improved Customer Trust: Clear audio confirmations reassure customers that their transactions are successful.",
        "Enhanced Brand Recognition: Custom-branded soundboxes promote your business.",
        "Operational Efficiency: Streamline transaction processes and reduce the risk of errors.",
        "Scalable Solutions: Suitable for various business environments, from retail stores to large commercial setups.",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/660894111f2d8bd7b35edea83099cc8e63f2eaf8791325c4a6a50f5235ace756?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    },
    // Add more services here
  ];

  return (
    <section className="flex flex-col items-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-6xl font-semibold tracking-tighter leading-none text-black max-md:text-4xl">
        Our Services
      </h2>
      <p className="mt-8 text-xl leading-8 text-center text-black max-w-[808px] max-md:max-w-full">
        At Brandigo, we offer a comprehensive suite of services designed to meet
        the diverse needs of businesses across various industries. Our
        innovative solutions are crafted to enhance operational efficiency,
        improve customer engagement, and drive growth. Explore our wide range of
        services below:
      </p>
      {services.map((service, index) => (
        <NewServiceCard key={index} {...service} isReversed={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default ServiceSection;
