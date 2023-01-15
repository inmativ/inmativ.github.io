/* eslint-disable @typescript-eslint/ban-types */
export type Constructor<T = {}> = new (...args: any[]) => T;

export type AbstractCtor<T = {}> = abstract new (...args: any[]) => T;

export type AnyCtor<T = {}> = ((...args: any[]) => T) extends Constructor<T>
  ? Constructor<T>
  : ((...args: any[]) => T) extends AbstractCtor<T>
  ? AbstractCtor<T>
  : never;
