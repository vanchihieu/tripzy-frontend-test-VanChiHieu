export interface Location {
  short_code: string;
  english_name: string;
  code_state: string;
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
