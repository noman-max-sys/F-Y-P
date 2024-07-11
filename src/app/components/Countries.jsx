import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import './Countries.css'; // Import custom CSS

function Countries() {
  const countries = [
    {
      title: "Study in Canada",
      image: "https://radiant-warmth-64b404abdc.media.strapiapp.com/study_in_canada_a597130e72.webp",
      description: "Canada is a top destination for international students, famous for its natural beauty, multicultural cities, and friendly people.",
      link: "/study-in-canada"
    },
    {
      title: "Study in UK",
      image: "https://radiant-warmth-64b404abdc.media.strapiapp.com/study_in_united_kingdom_9f95e16c5a.webp",
      description: "The UK offers a world-renowned education system, vibrant cities, and a rich cultural heritage.",
      link: "/study-in-uk"
    },
    {
      title: "Study in the US",
      image: "https://radiant-warmth-64b404abdc.media.strapiapp.com/study_in_united_states_e03dac4af2.webp",
      description: "The US is known for its diverse academic programs, cutting-edge technology, and dynamic campus life.",
      link: "/study-in-us"
    },
    {
      title: "Study in Australia",
      image: "https://radiant-warmth-64b404abdc.media.strapiapp.com/study_in_australia_eaced99bc7.webp",
      description: "Australia is known for its high-quality education system, unique cultural experiences, and stunning natural landscapes.",
      link: "/study-in-australia"
    },
    {
      title: "Study in Ireland",
      image: "https://radiant-warmth-64b404abdc.media.strapiapp.com/study_in_ireland_a72bfdef5c.webp",
      description: "Ireland offers a friendly, welcoming environment, with universities known for their innovative research and academic excellence.",
      link: "/study-in-ireland"
    }
  ];

  return (
    <div className="card-container d-flex flex-wrap justify-content-center">
      {countries.map((country, index) => (
        <Card key={index} className="custom-card">
          <a href={country.link}>
            <CardImg variant="top" src={country.image} alt={country.title} />
          </a>
          <CardBody>
            <CardTitle className="custom-card-title">{country.title}</CardTitle>
            <CardText className="custom-card-text">{country.description}</CardText>
            <Button variant="primary" href={country.link}>Explore</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Countries;
