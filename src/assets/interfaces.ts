import { JSX } from 'react';

export interface BreedData {
  name: string;
  value: number;
}

export interface BreedState {
  items: BreedData[];
}

export interface LoadingState {
  loadingStatus: boolean;
}

export interface CardInterface {
  title: string;
  description: string;
  className: string;
  children: JSX.Element;
}

export interface GridCardInterface {
  name: string;
  value: number;
}

export interface DisabledInterface {
  disabled: boolean;
}
