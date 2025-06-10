import { createContext, useState, useContext, ReactNode } from 'react';

type EyeContextTypeSEM = {
  olhoAbertoSEM: boolean;
  toggleOlhoSEM: () => void;
};

const EyeContextSEM = createContext<EyeContextTypeSEM | undefined>(undefined);

// O children por ser nativo do ReactNode não pode ter as iniciais
export function EyeProviderSEM({ children }: { children: ReactNode }) {
  const [olhoAbertoSEM, setOlhoAbertoSEM] = useState(false);
  const toggleOlhoSEM = () => setOlhoAbertoSEM(prev => !prev);

  return (
    <EyeContextSEM.Provider value={{ olhoAbertoSEM, toggleOlhoSEM }}>
      {children}
    </EyeContextSEM.Provider>
  );
}

export function useEyeSEM(): EyeContextTypeSEM {
  const contextSEM = useContext(EyeContextSEM);
  if (!contextSEM) {
    throw new Error('useEye deve ser usado dentro de um EyeProvider');
  }
  return contextSEM;
}