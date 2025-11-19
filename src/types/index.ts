export interface Location {
  shortCode: string;
  englishName: string;
  codeState: string;
}

export interface SearchFormData {
  mode: "bus" | "hotel" | "flight";
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  isRoundTrip: boolean;
}

export interface SearchParams {
  mode?: string;
  from?: string;
  to?: string;
  dep?: string;
  ret?: string;
  pax?: string;
}
