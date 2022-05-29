import type { LocaleEntry } from './definitions';

/**
 * The possible definitions related to science.
 */
export type ScienceDefinitions = LocaleEntry<{
  /**
   * Some science units.
   */
  unit: Unit[];
  /**
   * Some chemical element informtion.
   */
  chemicalElement: ChemicalElement[];
}>;

/**
 * The possible definitions related to elements.
 */
export interface ChemicalElement {
  /**
   * The symbol for the element (e.g. `He`).
   */
  symbol: string;
  /**
   * The name for the element (e.g. `Cerium`).
   */
  name: string;
}

export interface Unit {
  /**
   * The long version of the unit (e.g. `meter`).
   */
  long: string;
  /**
   * The short version/abbreviation of the element (e.g. `Pa`).
   */
  short: string;
}
