import { SearchMachineInfo } from './types';

export const openSearchValueInWindow = (
  currentSearchMachine: SearchMachineInfo,
  value: string,
) => window.open(`${currentSearchMachine.href}${value}`, '_self');
