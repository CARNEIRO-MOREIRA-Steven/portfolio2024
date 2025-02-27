import React from 'react';
import './avis.css';

const stars = (rating) => {
  const starFull = '★';
  const starEmpty = '☆';
  return Array.from({ length: 5 }, (_, index) =>
    index < rating ? starFull : starEmpty
  ).join(' ');
};

const ReviewCard = ({ review }) => {
  return (
    <section className="reviewCard">
      <aside className="stars">{stars(review.rating)}</aside>
      <p className="reviewText">{review.text}</p>
      <p className="author">- {review.author}</p>
    </section>
  );
};

const AvisCard = () => {
  const reviews = [
    {
      rating: 5,
      text: "Concepteur de confiance et très professionnel. Il est à l'écoute et très réactif. Patient et performant. Je recommande vivement. Je suis très satisfaite de son travail et je peux commencer mon activité avec un site internet au top. Merci beaucoup.",
      author: "Christelle SILVA - L'espace d'un Instant ",
    },
    {
      rating: 5,
      text: "Un grand merci à CodeMeta Solutions pour cette belle collaboration et l'aboutissement du projet Neuf Mois Demain! Beaucoup de travail, beaucoup de sérieux et une grande écoute des besoins des clients, nous recommandons CodeMeta Solutions à 200%!!!",
      author: "Séverine CARNEIRO MOREIRA - Neuf Mois Demain ",
    },
    {
      rating: 5,
      text: "CodeMeta Solutios a créé mon site internet et je suis très satisfait du résultat. Il est professionnel, à l’écoute et a su répondre à toutes mes attentes. Partagez lui vos idées et ce que vous aimez et il créera un site à votre image. Je le recommande sans hésitation pour toute création de site web.",
      author: "Greenz Ink Tattoo",
    },
    {
      rating: 5,
      text: "Création top, réactif, prix agressif, vraiment satisfaisant. Je recommande",
      author: "Alexandre Laurain - Sonergie",
    },
    {
      rating: 5,
      text: "Super professionnel rien à dire. Je recommande à 100%",
      author: "Precillia Claire",
    },
  ];

  return (
    <section className='container_avis'>
      <h1 className="title">Avis de Nos Clients</h1>
      <section className="container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </section>
    </section>
  );
};

export default AvisCard;