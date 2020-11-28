import React from 'react';
import data from '../../data/data';

const SettingsScales = () => {
  const transformedData = {};
  data.forEach((item) => {
    if (!transformedData[item.de6ce]) {
      transformedData[item.de6ce] = [];
    }
    transformedData[item.de6ce].push(item);
  });

  return (
    <ul>
      <li>Váha č.1</li>
    </ul>
  );
};
export default SettingsScales;
