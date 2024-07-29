import React, { useState } from 'react';
import './Spell.css';

function Spell() {
  const [correctSpell, setCorrectSpell] = useState('');
  const [spell, setSpell] = useState('');

  const customDictionary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example'
  };

  const handleChange = (e) => {
    const inputSpell = e.target.value;
    setSpell(inputSpell);

    const spelling = inputSpell.split(' ');

    const ans = spelling.map((spells) => {
      const correct_ans = customDictionary[spells.toLowerCase()];
      return correct_ans || spells;
    });

    const first_correction = ans.find((word, index) => word !== spelling[index]);

    setCorrectSpell(first_correction || '');
  };

  return (
    <div className='container'>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder='Enter text...'
        rows={5}
        cols={60}
        onChange={handleChange}
        value={spell}
      ></textarea>
      {correctSpell && (
        <p>
          Did you mean: <strong>{correctSpell}</strong>?
        </p>
      )}
    </div>
  );
}

export default Spell;
