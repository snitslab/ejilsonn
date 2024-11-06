import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const categories = [
  { id: 1, name: 'Clothes' },
  { id: 2, name: 'Kitchen Items' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Books' },
];

const BlinkAnimation = styled('div')({
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  animation: 'blink 0.3s linear 2',
});

function ShoppingCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setTimeout(() => setSelectedCategory(null), 600); // Reset after animation
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Select Your Shopping Category
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card>
              <CardActionArea onClick={() => handleCategorySelect(category.id)}>
                {selectedCategory === category.id ? (
                  <BlinkAnimation>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {category.name}
                      </Typography>
                    </CardContent>
                  </BlinkAnimation>
                ) : (
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {category.name}
                    </Typography>
                  </CardContent>
                )}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ShoppingCategories;
