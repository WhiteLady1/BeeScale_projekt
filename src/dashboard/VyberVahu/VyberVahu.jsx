import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';
import pensilIcon from '@iconify/icons-raphael/pensil';

const VyberVahu = () => {
  return (
    <>
      <form>
        <label>Vyber váhu pro zobrazení: </label>
        <select name="vahy" id="vaha">
          <option>Váha č.1</option>
          <option>Váha č.2</option>
          <option>Váha č.3</option>
          <option>Váha č.4</option>
        </select>
      </form>
      <a href="index.html">
        <Icon icon={settingsIcon} />
      </a>
      <Icon icon={pensilIcon} />
    </>
  );
};
export default VyberVahu;
