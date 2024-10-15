import React, { useState } from 'react';
import './App.css';
import drugsData from './drugs'; // Import the drug data

function App() {
  const [currentDrugIndex, setCurrentDrugIndex] = useState(0);
  const [showSyllables, setShowSyllables] = useState(false); // State for syllable toggle
  const [completedDrugs, setCompletedDrugs] = useState([]); // List of completed drugs

  // Function to handle moving to the next drug
  const handleNext = () => {
    if (currentDrugIndex < drugsData.length - 1) {
      setCompletedDrugs((prev) => [...prev, drugsData[currentDrugIndex]]);
      setCurrentDrugIndex((prev) => prev + 1);
    }
  };

  // Function to handle moving to the previous drug
  const handleBack = () => {
    if (currentDrugIndex > 0) {
      setCurrentDrugIndex((prev) => prev - 1);
    }
  };

  // Toggle function to show syllables or not
  const toggleSyllables = () => {
    setShowSyllables((prev) => !prev);
  };

  // Handle clicking on a drug in the list to navigate
  const handleSelectDrug = (index) => {
    setCurrentDrugIndex(index);
  };

  // Reset function to restart progress and reset the current drug
  const handleReset = () => {
    setCurrentDrugIndex(0);  // Go back to the first drug
    setCompletedDrugs([]);   // Clear the completed drugs list
    setShowSyllables(false); // Hide syllables if shown
  };

  // Pronounce the current brand and generic names using Web Speech API
  const pronounceDrug = () => {
    const utterBrand = new SpeechSynthesisUtterance(currentDrug.brand);
    const utterGeneric = new SpeechSynthesisUtterance(currentDrug.generic);

    window.speechSynthesis.speak(utterBrand);
    window.speechSynthesis.speak(utterGeneric);
  };

  const currentDrug = drugsData[currentDrugIndex];

  return (
    <div className="App">
      <div className="quiz-container">
        {/* Progress List on the left-hand side */}
        <div className="progress-list">
          <h3>Study Progress</h3>
          <ul>
            {drugsData.map((drug, index) => (
              <li
                key={index}
                onClick={() => handleSelectDrug(index)}
                style={{
                  cursor: 'pointer',
                  textDecoration: completedDrugs.includes(drug) ? 'line-through' : 'none',
                  fontWeight: currentDrugIndex === index ? 'bold' : 'normal',
                  color: completedDrugs.includes(drug) ? 'gray' : 'black',
                }}
              >
                {drug.brand} ({drug.generic})
              </li>
            ))}
          </ul>
        </div>

        {/* Quiz Box */}
        <div className="quiz-box">
          <h2>
            Brand Name: {showSyllables ? currentDrug.brandSyllables : currentDrug.brand}
          </h2>
          <h3>
            Generic Name: {showSyllables ? currentDrug.genericSyllables : currentDrug.generic}
          </h3>
          <h4>Category: {currentDrug.category}</h4>
          <button onClick={toggleSyllables}>
            {showSyllables ? 'Hide Syllables' : 'Show Syllables'}
          </button>
          <button onClick={handleBack} disabled={currentDrugIndex === 0}>
            Previous Drug
          </button>
          <button onClick={handleNext} disabled={currentDrugIndex === drugsData.length - 1}>
            Next Drug
          </button>
          <button onClick={pronounceDrug} style={{ backgroundColor: 'blue', color: 'white' }}>
            Pronounce Again
          </button>
          {/* Reset Button */}
          <button onClick={handleReset} style={{ backgroundColor: 'red', color: 'white' }}>
            Reset
          </button>
        </div>

        {/* Progress Box */}
        <div className="progress-box">
          <h3>Progress: {completedDrugs.length} / {drugsData.length}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
