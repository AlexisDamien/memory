import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { getCardsByTheme} from './../../../../app/service/indexedDb';

import { Card } from './../../../../app/service/indexedDb/model';


interface RevisionComponentProps {
  themeId: number;
  numCards: number;
}

const RevisionComponent: React.FC<RevisionComponentProps> = ({ themeId, numCards }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    fetchCards();
  }, [themeId, reset]);

  const fetchCards = async () => {
    const allCards = await getCardsByTheme(themeId);
    setCards(allCards.slice(0, numCards));
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleKnow = () => {
    if (currentCardIndex + 1 < cards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    } else {
      alert("Félisitations! Tu as tout réviser.");
    }
  };

  const handleDontKnow = () => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setReset(!reset);
  };

  if (cards.length === 0) {
    return <Typography>Chargement...</Typography>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h5">Question {currentCardIndex + 1}</Typography>
      <Typography variant="h6">{currentCard.question}</Typography>
      {showAnswer && (
        <Typography variant="body1">Réponse: {currentCard.answer}</Typography>
      )}
      {!showAnswer ? (
        <Button onClick={handleShowAnswer} variant="contained" color="primary">
          Montrer la réponse
        </Button>
      ) : (
        <Box display="flex" gap={2}>
          <Button onClick={handleKnow} variant="contained" color="success">
            Je connais
          </Button>
          <Button onClick={handleDontKnow} variant="contained" color="error">
            Je connais pas
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RevisionComponent;
