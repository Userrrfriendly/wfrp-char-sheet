# Character Creation - Requirements

## Overview
This document outlines the step-by-step process for character creation in the Warhammer Fantasy Roleplay system. The character creation is divided into multiple steps, each focusing on a different aspect of character development.

## Step 1: Select Species

### Available Species
- Human
- Halfling
- Dwarf
- High Elf
- Wood Elf
- Gnome
- Ogre

### Selection Options
1. **Random Selection**
   - Roll a D100 to determine species based on the following table:
     - 01-88: Human
     - 89-89: Gnome
     - 90-93: Halfling
     - 94-97: Dwarf
     - 98-98: Ogre
     - 99-99: High Elf
     - 00-00: Wood Elf
   - If the player accepts the randomly rolled species, they gain **+20 XP**

2. **Manual Selection**
   - Player can choose any species from the available options
   - No XP bonus is awarded for manual selection

## Step 2: Select Career

### Career Selection Process
1. **First Roll**
   - System randomly selects a career from the available careers for the chosen species
   - Player can either:
     - Accept the career and gain **+50 XP**
     - Reject and roll two more times

2. **Second and Third Rolls**
   - If first career is rejected, system rolls two more random careers
   - Player can now choose:
     - Any of the three rolled careers and gain **+25 XP**
     - Reject all and manually select from available careers (no XP bonus)

### Career Filtering
- Only careers where the selected species appears in the `_species` array should be considered
- The career name is determined by the `name` property under `level2` in the career object
- Example: `data[0].object.level2.name`

## Step 3: Attributes (Placeholder)
*Details to be defined in a future update*

## Step 4: Skills and Talents (Placeholder)
*Details to be defined in a future update*

## Step 5: Trappings (Placeholder)
*Details to be defined in a future update*

## Step 6: Final Character Sheet
*Details to be defined in a future update*

## Technical Implementation Notes

### Data Structure
- Species data is defined in `basicTypes.ts`
- Career data is loaded from `_careers.json`
- Each career has a `_species` array indicating which species can take that career

### State Management
- Maintain the current step in the character creation process
- Track XP bonuses from random selections
- Store all character choices in a structured format

### UI/UX Requirements
- Clear indication of current step
- Visual representation of XP bonuses
- Confirmation dialogs for random selections
- Option to go back to previous steps (where applicable)
- Clear error handling for invalid selections

## Edge Cases
- Handle cases where no careers are available for a species (should not happen with current data)
- Validate all user inputs
- Ensure XP bonuses are correctly calculated and displayed
- Handle browser refresh during character creation

## Future Enhancements
- Add visual dice rolling animation
- Include tooltips with species/career information
- Add character portrait selection
- Implement character saving/loading functionality
