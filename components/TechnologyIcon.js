// TechnologyIcon.js
import React from 'react';
import * as Icon from 'react-feather'; // Use "* as" para importar todos os ícones

const TechnologyIcon = ({ icon, size = 24, color = 'black' }) => {
  const FeatherIcon = Icon[icon];

  if (!FeatherIcon) {
    return null;
  }

  return <FeatherIcon size={size} color={color} />;
};

export default TechnologyIcon;
