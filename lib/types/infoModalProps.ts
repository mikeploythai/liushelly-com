interface ServiceObjectProps {
  title: string;
  description: string;
  img: string;
  url: string;
  cta: string;
  inclusions?: string[];
}

export interface InfoModalProps {
  service: ServiceObjectProps;
  isOpen: boolean;
  onClose: () => void;
}
